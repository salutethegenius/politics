# UI Design System

## Philosophy

- Apple-inspired minimalism.
- Dark mode first.
- Lots of whitespace.
- Rounded corners, glass effects, smooth animations.
- Zero clutter. Everything searchable. Keyboard-first.

## Color palette

Dark mode as default.

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#0a0a0b` | App background |
| `--surface` | `#131316` | Cards, panels |
| `--surface-elevated` | `#1a1a1e` | Elevated cards, hover states |
| `--border` | `rgba(255,255,255,0.08)` | Subtle borders |
| `--border-strong` | `rgba(255,255,255,0.16)` | Focused borders |
| `--text-primary` | `#fafafa` | Headings, primary text |
| `--text-secondary` | `#a1a1aa` | Secondary text |
| `--text-muted` | `#71717a` | Placeholders, metadata |
| `--accent` | `#60a5fa` | Primary blue accent |
| `--accent-soft` | `rgba(96,165,250,0.12)` | Subtle accent backgrounds |
| `--success` | `#34d399` | Positive status |
| `--warning` | `#fbbf24` | Attention |
| `--danger` | `#f87171` | Errors, destructive |

Graph node colors:
- Person: `#f472b6` (pink)
- Organization: `#60a5fa` (blue)
- Ministry: `#fbbf24` (amber)
- Agency: `#a78bfa` (violet)
- Project: `#34d399` (green)
- Product: `#22d3ee` (cyan)
- Research: `#fb923c` (orange)
- Opportunity: `#facc15` (yellow)
- Meeting: `#a3e635` (lime)
- Task: `#94a3b8` (slate)
- Document: `#e879f9` (fuchsia)
- Location: `#4ade80` (emerald)

## Typography

- Font family: Inter (default), with system-ui fallbacks.
- Headings: tight tracking, medium weight.
- Body: readable line height, `text-sm`/`text-base`.
- Monospace: JetBrains Mono for metadata, code, JSON snippets.

Scale:
- Page title: `text-3xl font-semibold tracking-tight`
- Section title: `text-xl font-medium`
- Card title: `text-base font-medium`
- Body: `text-sm leading-relaxed`
- Caption: `text-xs text-muted`

## Spacing

- Page padding: `p-6` to `p-8`.
- Card padding: `p-5`.
- Card gap: `gap-4` or `gap-6`.
- Section gap: `gap-8`.
- Max content width: `max-w-7xl` centered.

## Components

### Cards

- Background: `bg-surface`.
- Border: `1px solid border` with rounded `rounded-2xl`.
- Shadow: subtle, `shadow-sm`.
- Hover: slight lift with `border-strong`.
- Glass variant: `backdrop-blur-xl bg-surface/70` for overlays and floating panels.

### Buttons

- Primary: solid accent, rounded-full, `px-4 py-2`.
- Secondary: ghost with subtle border, rounded-full.
- Icon button: `rounded-full`, `p-2`.
- Destructive: solid danger.

### Inputs

- Dark surface, rounded-xl, subtle border.
- Focus ring: accent color, 2px.
- Placeholder: muted text.

### Badges

- Small pill with label and color dot.
- Status badges: active, archived, in_progress, done, stalled.

### Tables

- Minimal rows with hover state.
- No outer borders; separators only.
- Sortable headers.

### Graph canvas

- Dark background matches app background.
- Nodes use graph color palette with soft glow on hover.
- Edges are thin, muted lines that brighten on hover.
- Labels appear on hover or for important nodes only.

## Animation

- Page transitions: fade + slight translate (0.2s ease-out).
- Card hover: scale 1.01, border transition (0.15s).
- Graph interactions: spring-based node movement.
- Loading: subtle shimmer on skeleton cards.
- Command palette: scale + fade (0.15s).

## Responsive behavior

- Desktop: left rail + main + optional right rail.
- Tablet: collapsible rail.
- Mobile: bottom sheet nav, single-column cards.

## Accessibility

- Minimum contrast ratio 4.5:1 for text.
- Focus visible states on all interactive elements.
- Keyboard shortcuts documented in command palette and settings.
- Reduced-motion media query respected.

## shadcn/ui base mapping

Use shadcn/ui components as the foundation, then override with custom tokens:
- `button` → rounded-full, accent colors.
- `card` → rounded-2xl, dark surface.
- `input` → rounded-xl, dark surface.
- `dialog` → glass backdrop, rounded-2xl.
- `dropdown-menu` → dark surface, rounded-xl.
- `command` → command palette base.
- `tabs` → minimal underline/pill variant.
- `toast` → top-right, dark surface.
