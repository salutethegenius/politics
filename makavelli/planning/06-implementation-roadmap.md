# Implementation Roadmap

## Phase 1: Foundation (weeks 1-2)

Goal: a runnable Next.js app with auth, dark mode, and a clean design system.

1. Scaffold Next.js + TypeScript + Tailwind + shadcn/ui.
2. Configure ESLint, Prettier, and TypeScript strict mode.
3. Set up Supabase project (local or cloud) with auth and basic RLS.
4. Set up Neo4j Aura or local instance.
5. Configure Prisma schema and generate client.
6. Implement dark mode, Tailwind theme tokens, and base components.
7. Create auth pages: sign-in, callback, protected layout.
8. Create command palette stub.

Deliverables:
- `makavelli/app/layout.tsx` with theme provider.
- `makavelli/prisma/schema.prisma` with core tables.
- `makavelli/components/ui/` base components.
- `makavelli/lib/supabase.ts` and `makavelli/lib/neo4j.ts`.
- Working dev server and login flow.

## Phase 2: Core Entities + Dashboard (weeks 3-4)

Goal: the dashboard is functional with real node data, navigation, and primary pages.

1. Implement `node_types` seed data.
2. Build CRUD endpoints for nodes, relationships, tasks, meetings, documents.
3. Create primary pages: Dashboard, Mission, Government, Relationships, Products, Research, Projects, Meetings, Opportunities, Documents, Tasks.
4. Build dashboard widgets: Mission, Weekly Focus, Current Projects, Research Pipeline, Relationship Pipeline, Government Opportunities, Meetings, Recent Notes, Tasks, AI Assistant.
5. Implement global search via Postgres full-text search.
6. Add forms for creating/editing nodes and relationships.
7. Add activity logging.

Deliverables:
- All primary pages render real data from Supabase.
- Dashboard is the daily landing page.
- Global search works.

## Phase 3: Graph + AI (weeks 5-6)

Goal: the graph becomes the heart of the app, and AI assistant is useful.

1. Implement Neo4j sync from Postgres.
2. Build graph visualizer using React Flow or Cytoscape.js.
3. Add node detail graph view.
4. Add graph filtering and clustering.
5. Implement AI assistant API with OpenAI.
6. Build prompt templates: who to contact next, stalled opportunities, relationship summary, proposal/email/agenda generation.
7. Show AI citations back to nodes.
8. Add AI suggestions for missing relationships and next actions.

Deliverables:
- Interactive graph canvas.
- AI assistant answers relationship-aware questions.
- Graph sync is stable.

## Phase 4: Polish + Integrations (weeks 7-8)

Goal: production-ready feel, and first integrations.

1. Document upload and storage.
2. Rich text notes.
3. Calendar integration (ICS/CalDAV) for meetings and tasks.
4. Email generation and export.
5. Import/export CSV/JSON.
6. Notifications and follow-up reminders.
7. Performance optimization: SWR, React Query, pagination, edge functions.
8. Add tests: unit, integration, and e2e smoke tests.
9. Deploy to Vercel.

Deliverables:
- Document uploads.
- Calendar sync.
- Import/export.
- Vercel deployment.

## Phase 5: Multi-user + Commercial (post-MVP)

Goal: turn the personal system into a team/commercial product.

1. Multi-tenant workspaces and invitations.
2. Role-based access control.
3. Audit logs and admin dashboard.
4. Billing and subscription plans (Stripe).
5. API keys and webhooks for external integrations.
6. White-label/custom domain support.
7. Compliance and security hardening.

Deliverables:
- Verity-branded multi-tenant SaaS.
- Public API and docs.

## Execution cadence

- Ship each phase as a PR.
- End each phase with a demo-able state.
- Prioritize relationship features over document management.
- Keep the graph model stable from Phase 2 onward so later phases do not require migrations.
