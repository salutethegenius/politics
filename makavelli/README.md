# Makavelli

Internal codename for the personal Strategic Operating System.

A relationship-driven command center for coordinating mission, government engagement, research, products, projects, opportunities, and people.

Public productization will eventually live under the **Verity** brand (e.g. Verity Nexus, Verity Graph, Verity Command). Internally, this repo is **Makavelli**.

## Core principle

Everything is a node. Every node can relate to every other node. The UI should make relationships visible, searchable, and actionable.

## Planned stack

- Next.js 15 App Router
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Supabase (auth, Postgres)
- Neo4j (graph queries)
- Prisma ORM
- OpenAI API
- Vercel

## Start here

1. Read `planning/` for architecture, schema, and roadmap.
2. Copy `.env.example` to `.env.local` and fill credentials.
3. Run `npm install` and `npm run dev`.

## Status

Foundation and planning phase. MVP targets a single-user dashboard with core entity types, a read-only graph view, and an AI assistant stub.
