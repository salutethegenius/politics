# Folder Structure

```
makavelli/
├── README.md
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── prisma/
│   └── schema.prisma
├── public/
│   ├── favicon.svg
│   └── logo.svg
├── app/
│   ├── layout.tsx              # Root layout, theme provider, auth guard
│   ├── page.tsx                # Redirects to /dashboard
│   ├── globals.css             # Tailwind + theme tokens
│   ├── dashboard/
│   │   └── page.tsx
│   ├── mission/
│   │   └── page.tsx
│   ├── government/
│   │   └── page.tsx
│   ├── relationships/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── research/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── meetings/
│   │   └── page.tsx
│   ├── opportunities/
│   │   └── page.tsx
│   ├── documents/
│   │   └── page.tsx
│   ├── tasks/
│   │   └── page.tsx
│   ├── ai/
│   │   └── page.tsx
│   ├── settings/
│   │   └── page.tsx
│   ├── auth/
│   │   ├── callback/
│   │   │   └── route.ts
│   │   └── signin/
│   │       └── page.tsx
│   └── api/
│       ├── nodes/
│       │   └── route.ts
│       ├── relationships/
│       │   └── route.ts
│       ├── ai/
│       │   └── route.ts
│       └── sync/
│           └── route.ts
├── components/
│   ├── ui/                     # shadcn/ui base components
│   ├── layout/                 # AppShell, NavRail, TopBar, CommandPalette
│   ├── dashboard/              # Dashboard widgets
│   ├── graph/                  # Graph canvas, NodeDetails, EdgeControls
│   ├── nodes/                  # Node cards, forms, lists
│   ├── ai/                     # Assistant chat, prompts
│   └── tasks/                  # Kanban, calendar
├── lib/
│   ├── supabase.ts             # Supabase client(s)
│   ├── neo4j.ts                # Neo4j driver
│   ├── prisma.ts               # Prisma singleton
│   ├── openai.ts               # OpenAI client
│   ├── auth.ts                 # Auth helpers
│   ├── search.ts               # Full-text search helpers
│   └── utils.ts                # General utilities
├── types/
│   └── index.ts                # Shared TypeScript types
├── hooks/
│   ├── use-user.ts
│   ├── use-nodes.ts
│   ├── use-relationships.ts
│   └── use-ai.ts
└── planning/                   # Architecture and design docs
    ├── 01-system-architecture.md
    ├── 02-database-schema.md
    ├── 03-graph-model.md
    ├── 04-wireframes.md
    ├── 05-ui-design-system.md
    ├── 06-implementation-roadmap.md
    ├── 07-folder-structure.md
    ├── 08-mvp-scope.md
    └── 09-future-roadmap.md
```

## Conventions

- **Server Components by default.** Only mark interactive components with `"use client"`.
- **Server Actions** for mutations that originate from forms inside Server Components.
- **API routes** for AI, graph sync, and external webhooks.
- **TypeScript strict mode.** No implicit any.
- **Tailwind only.** Avoid inline styles; use design tokens.
- **Colocate by feature.** Dashboard widgets live in `components/dashboard/`, node forms in `components/nodes/`.
- **Keep `lib/` thin.** Each file exports a single client or small set of helpers.
