# Database Schema

## Overview

Postgres (Supabase) is the canonical store. Neo4j is a projection optimized for relationship queries. This schema is designed for the single-user MVP but预留s multi-tenant fields.

## Core tables

### `users`
Auth-managed by Supabase. Additional profile fields stored here.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, matches Supabase auth user id |
| email | text | unique |
| full_name | text | nullable |
| avatar_url | text | nullable |
| role | text | owner, admin, member (default owner) |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | default now() |

### `node_types`
Taxonomy of node labels. Keeps the graph extensible.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| slug | text | unique: Person, Organization, Ministry, Project, etc. |
| name | text | display name |
| icon | text | Lucide icon name |
| color | text | hex color for graph |
| schema | jsonb | JSON schema of expected properties |
| created_at | timestamptz | default now() |

### `nodes`
Every entity in the system is a node.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| type_id | uuid | FK -> node_types |
| owner_id | uuid | FK -> users |
| organization_id | uuid | nullable, for future multi-tenancy |
| name | text | primary display name |
| summary | text | nullable, one-line AI summary |
| properties | jsonb | flexible typed properties per node_type |
| status | text | active, archived, draft |
| trust_level | int | 0-10, nullable (for people/organizations) |
| relationship_strength | int | 0-10, nullable |
| last_meeting_at | timestamptz | nullable |
| next_follow_up_at | timestamptz | nullable |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | default now() |
| search_vector | tsvector | generated for full-text search |

Indexes: `type_id`, `owner_id`, `status`, `search_vector` (GIN), `next_follow_up_at`.

### `relationships`
Typed, directional edges between nodes.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| source_id | uuid | FK -> nodes |
| target_id | uuid | FK -> nodes |
| type | text | e.g. WORKS_FOR, PART_OF, ADVISES, SUPPORTS, MET_WITH, RELATED_TO |
| properties | jsonb | notes, strength, date, etc. |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | default now() |

Indexes: `source_id`, `target_id`, `type`, composite `(source_id, type)`.

### `tasks`
Kanban-style tasks linked to any node.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| owner_id | uuid | FK -> users |
| title | text | |
| description | text | nullable |
| status | text | backlog, todo, in_progress, done, cancelled |
| priority | int | 1-4, low/medium/high/urgent |
| due_date | timestamptz | nullable |
| node_id | uuid | FK -> nodes, nullable (primary link) |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | default now() |

### `meetings`
Conversations and follow-ups linked to nodes.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| owner_id | uuid | FK -> users |
| title | text | |
| scheduled_at | timestamptz | |
| duration_minutes | int | nullable |
| notes | text | nullable |
| outcome | text | nullable |
| ai_summary | text | nullable |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | default now() |

### `meeting_attendees`
Many-to-many between meetings and people/organization nodes.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| meeting_id | uuid | FK -> meetings |
| node_id | uuid | FK -> nodes |
| role | text | host, attendee, optional |

### `documents`
Files, notes, proposals, and reports attached to nodes.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| owner_id | uuid | FK -> users |
| node_id | uuid | FK -> nodes, nullable |
| title | text | |
| content | text | nullable (for notes) |
| file_url | text | nullable (for uploads) |
| doc_type | text | note, proposal, report, attachment |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | default now() |

### `opportunities`
Business opportunities tied to customers and products.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, also stored as a node |
| node_id | uuid | FK -> nodes (redundant but convenient) |
| owner_id | uuid | FK -> users |
| customer_node_id | uuid | FK -> nodes |
| problem | text | |
| solution | text | nullable |
| estimated_value | decimal | nullable |
| status | text | discovery, qualified, proposal, negotiation, won, lost, stalled |
| probability | int | 0-100 |
| next_action | text | nullable |
| next_action_date | timestamptz | nullable |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | default now() |

### `projects`
Projects with timelines and deliverables.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, also stored as a node |
| node_id | uuid | FK -> nodes |
| owner_id | uuid | FK -> users |
| vision | text | nullable |
| start_date | date | nullable |
| end_date | date | nullable |
| budget | decimal | nullable |
| status | text | planning, active, paused, completed, cancelled |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | default now() |

### `researches`
Research tracks with problem/hypothesis/data.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, also stored as a node |
| node_id | uuid | FK -> nodes |
| owner_id | uuid | FK -> users |
| problem | text | |
| hypothesis | text | nullable |
| data_sources | text[] | nullable |
| status | text | active, complete, paused |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | default now() |

### `activity_log`
Audit trail for AI suggestions, syncs, edits, and notable events.

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| actor_id | uuid | FK -> users |
| node_id | uuid | FK -> nodes, nullable |
| action | text | create, update, delete, ai_suggest, sync |
| metadata | jsonb | nullable |
| created_at | timestamptz | default now() |

## Graph projection

Neo4j mirrors the same nodes and relationships with:

- Node labels: `Person`, `Organization`, `Ministry`, `Agency`, `Department`, `Project`, `Meeting`, `Opportunity`, `Research`, `Product`, `Proposal`, `Document`, `Idea`, `Task`, `Goal`, `Technology`, `Location`, `Pilot`, `CaseStudy`, `Dashboard`.
- Relationship types: `RELATED_TO`, `WORKS_FOR`, `PART_OF`, `ADVISES`, `SUPPORTS`, `OWNS`, `MANAGES`, `MET_WITH`, `CREATED`, `FOLLOWS`, `DEPENDS_ON`, `LEADS_TO`, `PILOTS`, `PRODUCED`, `HAS_TASK`, `HAS_DOCUMENT`, `HAS_MEETING`.

See `03-graph-model.md` for the full graph model.

## Full-text search

Postgres `search_vector` on `nodes` combines `name`, `summary`, and selected properties. GIN index enables fast global search.

## Future schema additions

- `organizations` table for multi-tenant workspace metadata.
- `invitations` and `memberships` for team access.
- `ai_conversations` to persist assistant threads.
- `subscriptions` and `billing` for commercialization.
