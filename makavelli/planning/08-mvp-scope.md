# MVP Scope

## Goal

A single-user Strategic Operating System that is usable as a daily command center. The MVP proves the core concept: everything is a node, everything connects, and the AI assistant can read the graph.

## In scope

### Core app shell
- Dark mode first, Apple-inspired design.
- Left navigation rail with all primary sections.
- Global command palette (Cmd+K) with search and action shortcuts.
- Mobile-responsive layout (bottom nav on small screens).
- Supabase auth with email/password or magic link.

### Entities
- Node types: Person, Organization, Ministry, Agency, Department, Project, Meeting, Opportunity, Research, Product, Document, Task, Goal, Location, Pilot, Idea.
- CRUD for nodes and relationships.
- Flexible properties per node type via JSON schema.
- Status, trust/relationship levels, meeting dates, follow-up dates.

### Dashboard
- Mission statement widget.
- Weekly Focus (tasks and follow-ups due this week).
- Current Projects list.
- Research Pipeline.
- Relationship Pipeline (nodes with upcoming follow-ups).
- Government Opportunities.
- Meetings (upcoming + recent).
- Recent Notes.
- Tasks preview / mini kanban.
- AI Assistant prompt box.

### Pages
- Dashboard
- Mission
- Government (ministry hierarchy, pain points, contacts)
- Relationships (people + organizations with filters)
- Products (product portfolio)
- Research (research tracks)
- Projects (project cards)
- Meetings (meeting list + notes)
- Opportunities (pipeline board)
- Documents (notes + file uploads)
- Tasks (kanban + calendar)
- AI Assistant (chat interface)
- Settings (profile, integrations, theme, data export)

### Graph
- Read-only graph canvas showing nodes and relationships.
- Filter by node label and relationship type.
- Zoom, pan, click-to-view details.
- Node detail mini-graph on entity pages.

### AI Assistant (Phase 1)
- Chat interface with OpenAI integration.
- Prompt suggestions.
- Answers relationship-aware questions using graph context.
- Generates emails, agendas, follow-ups, and proposals as drafts.
- Cites nodes in responses.
- Suggests next actions and missing relationships (rule-based first, AI-enhanced later).

### Data sync
- Postgres as source of truth.
- Manual or triggered Neo4j sync.
- Activity log for syncs, AI suggestions, and edits.

## Out of scope (post-MVP)

- Multi-tenancy / team workspaces.
- Billing and subscriptions.
- Real-time collaborative editing.
- Advanced graph analytics (centrality, clustering).
- Native mobile apps.
- Advanced calendar/email integrations (beyond basic ICS export).
- Public API and webhooks.
- Custom domain / white-label.
- SSO / SAML.
- Workflow automation engine.
- Speech-to-text meeting capture.

## Success criteria

- The user can log in and see a useful dashboard within 5 seconds.
- Adding a new person, ministry, or opportunity takes under 30 seconds.
- The AI assistant can answer "Who should I contact next?" with a real name and reason.
- The graph visualizer renders the user's network without crashing on 100+ nodes.
- The app can be deployed to Vercel and accessed via a public URL.
