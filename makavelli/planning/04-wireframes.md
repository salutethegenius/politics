# Wireframes

## Layout foundation

- **Top bar:** minimal, containing global search, new-node button, notifications, user avatar.
- **Left rail:** collapsible navigation with primary sections.
- **Main area:** scrollable page content with generous padding and rounded cards.
- **Right rail (optional):** detail panel, relationship mini-graph, or AI assistant.
- **Command palette:** `Cmd+K` global search + actions.

## Dashboard

When the app opens, a single screen shows:

```
+-----------------------------------------------------------+
|  Makavelli                              [Search] [+][User]|
+-----------------------------------------------------------+
|  [Dashboard] [Mission] [Gov] [People] [Products] ...     |
+-----------------------------------------------------------+
|                                                           |
|  MISSION: "Build the Digital Infrastructure Powering      |
|           The Bahamas."                                   |
|                                                           |
|  +-------------------+  +-----------------------------+ |
|  | Weekly Focus      |  | Current Projects            | |
|  | - 3 tasks this week|  | - GB dashboard              | |
|  | - 2 follow-ups    |  | - VerityOS roadmap          | |
|  +-------------------+  +-----------------------------+ |
|  +-------------------+  +-----------------------------+ |
|  | Research Pipeline |  | Relationship Pipeline       | |
|  | - GB open data    |  | - Ministry for GB           | |
|  - Banking 2026     |  | - GBPA                      | |
|  +-------------------+  +-----------------------------+ |
|  +-------------------+  +-----------------------------+ |
|  | Govt Opportunities|  | Meetings                    | |
|  | - GB dashboard    |  | - Demo w/ Moxey             | |
|  | - Local govt digit|  | - Follow-up call            | |
|  +-------------------+  +-----------------------------+ |
|  +-------------------+  +-----------------------------+ |
|  | Recent Notes      |  | Tasks                       | |
|  | - Meeting notes   |  | - [Kanban preview]          | |
|  +-------------------+  +-----------------------------+ |
|                                                           |
|  +-----------------------------------------------------+  |
|  | AI Assistant: "What should I work on today?"        |  |
|  +-----------------------------------------------------+  |
|                                                           |
+-----------------------------------------------------------+
```

Cards are white-ish in dark mode, with subtle glass borders, rounded 2xl corners, and soft shadows.

## Navigation

Primary nav, left rail, icons + labels:

1. Dashboard
2. Mission
3. Government
4. Relationships
5. Products
6. Research
7. Projects
8. Meetings
9. Opportunities
10. Documents
11. Tasks
12. AI Assistant
13. Settings

## Mission page

- Large mission statement at top.
- Timeline/roadmap of strategic goals.
- List of active goals and their linked projects/research.
- Mini graph of how mission connects to products, ministries, and opportunities.

## Government page

- Hierarchy tree: Cabinet → Ministries → Departments → Agencies → Local Government → District Councils → Town Committees.
- Each ministry card shows: mission, current priorities, pain points, contacts, linked projects, documents.
- Clicking a ministry opens a detail pane with relationship graph.

## Relationships page

- Grid/list of people and organizations.
- Filters: role, organization, trust level, last contact date, next follow-up.
- Person detail: photo, name, title, organization, role, contact info, notes, relationship strength, trust level, last meeting, next follow-up, introduced by, linked organizations/projects/documents/tasks/meetings/ideas, AI summary.

## Products page

- Product cards: LawBey, VerityOS, KRM Desk, BACO Portal, Dashboards, Bahamas Open Data Intelligence.
- Each card shows: vision, roadmap, status, current version, future version, use cases, opportunities, documents, tasks, research, meetings.

## Research page

- Research cards with problem, hypothesis, data sources, status, linked ministries/products, opportunities created.
- Kanban/status view.

## Opportunities page

- Pipeline board: discovery → qualified → proposal → negotiation → won/lost/stalled.
- Each card: customer, problem, solution, products, estimated value, status, next action, probability, linked meetings/documents.

## Projects page

- Project cards with vision, timeline, tasks, budget, people, organizations, deliverables.
- Timeline view option.

## Tasks page

- Kanban board (backlog, todo, in_progress, done).
- Calendar view toggle.
- Priority and deadline indicators.
- Tasks can be linked to any node via a relationship.

## Meetings page

- Chronological list of meetings.
- Meeting detail: attendees, notes, AI summary, outcome, linked nodes, follow-up tasks.

## AI Assistant page

- Chat interface.
- Suggested prompts:
  - Who should I contact next?
  - Which ministries need dashboards?
  - Which research supports this meeting?
  - Summarize my relationship with this ministry.
  - Generate proposal.
  - Generate email.
  - Suggest missing relationships.
- Response area shows generated text and cited nodes.

## Graph visualizer

- Full-screen canvas with zoom/pan.
- Filter bar: checkboxes for labels and relationship types.
- Sidebar: selected node details.
- Context menu: add relationship, create node, generate email, view path.
- Clustering by label or by inferred community.

## Node detail page

- Header: name, type badge, status, quick actions (edit, archive, generate email, add task).
- Tabs: Overview, Relationships, Tasks, Meetings, Documents, Research, Opportunities, AI Summary.
- Overview: key properties, summary, recent activity.
- Relationships: mini graph + editable relationship list.

## Settings page

- Profile, integrations (Supabase, Neo4j, OpenAI), theme, data import/export, sync controls, billing placeholder.
