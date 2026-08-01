# Handoff: Grand Bahama Data Dashboard → bahamasopendata.com

**Purpose of this doc:** this is meant to be handed directly to whoever (or whichever agent) is working in the `bahamasopendata.com` repo, so that work can start there without needing this repo's full history. It's self-contained — you shouldn't need to read anything else first.

## The ask

Build a Grand Bahama regional data dashboard as part of `bahamasopendata.com`, using the same approach/engine that produced the **Banking Sector 2026** report/issue on that platform (public records → clean, structured, citable dataset/report). This is not a new platform or a new capability — it's the existing report-building approach pointed at a new region/sector.

**Decision already made:** build this on `bahamasopendata.com`, not as a standalone project. Reasoning (for context, not up for re-litigation unless something technical blocks it):
- Reuses existing report engine, design system, and hosting instead of standing up new infrastructure — speed matters here, the goal is a demo-able artifact in weeks, not months.
- Compounds credibility: handing a Ministry official a link that's "the same platform that did Banking Sector 2026" does work that a brand-new, unbranded site can't.
- One property to maintain going forward instead of a growing pile of one-off sites.
- Should stay **loosely coupled** enough to be spun out later if needed (e.g., own subdomain path like `grandbahama.bahamasopendata.com`, data kept exportable, no hard dependency on other sectors' schema) in case a government buyer eventually wants to "own" it separately — see "Architecture guidance" below.

## Who this is for (the actual audience)

**Primary target: Ministry for Grand Bahama**, currently led by the Hon. Ginger Maria Moxey, M.P. Her portfolio explicitly includes "Community Engagement and Empowerment — Grand Bahama" and "Promotion of Employment and Entrepreneurial Opportunities in Grand Bahama" — both of which a data dashboard directly serves. Office: Freeport, Grand Bahama.

**The gap being filled:** the Grand Bahama Port Authority (GBPA) already runs a public investment/development map called **Invest Grand Bahama**, covering its own ~230 sq mi "Port Area" under the Hawksbill Creek Agreement. The Ministry for Grand Bahama has no equivalent — nothing public tracking GB investment, employment, or program activity in one place, especially outside the Port Area.

**Why this is timely, not redundant:** a February 27, 2026 arbitral ruling on the Hawksbill Creek Agreement confirmed GBPA must keep paying the Government annually and — more importantly — rejected GBPA's claim to *exclusive* administrative authority over Freeport, reaffirming the Government's own continuing legislative/regulatory authority there. That's fresh, citable grounding for "the Government should have its own data layer for Grand Bahama," separate from GBPA's.

A secondary, related gap exists at the **Department of Local Government** (under Minister Clay Sweeting, Ministry of Works and Family Island Affairs): there is no digital roster, election-results archive, or dashboard for any of the Bahamas' 33 local-government districts, including Grand Bahama's own ~7 districts (Sweeting's Cay, East Grand Bahama, Central Grand Bahama, Pineridge, Marco City, West Grand Bahama, City of Freeport). Everything is scanned PDFs and one-off press releases. This is a plausible follow-on/adjacent dashboard once the GB Ministry one exists, using the same build pattern — worth keeping in mind for schema/architecture decisions now, even though it's not the immediate deliverable.

## Scope for the MVP dashboard

Not yet finalized — needs a decision before build starts. Candidate data slices (pick one or a small combination, not all of them for v1):
- Investment activity / projects in Grand Bahama (outside Port Area, to complement rather than duplicate Invest Grand Bahama)
- Employment figures / entrepreneurial program tracking tied to the Ministry's stated mandate
- Local-government district reference data (councils, town committees, past election results) — lower priority for v1, flagged above as a natural v2 given it shares the same "no public record system" problem

Whoever picks this up should confirm scope against what public data sources actually exist and are scrapable/citable before committing to a slice — don't assume all three are equally feasible.

## Architecture guidance

- Build as a new section/dataset within the existing `bahamasopendata.com` codebase and report engine — do not start a new repo or new hosting for this.
- Prefer a distinct path or subdomain (e.g., `/grand-bahama` or `grandbahama.bahamasopendata.com`) over deeply intermixing with other sectors' (e.g., banking) data models, so this can be extracted later without a rewrite if a government buyer wants to eventually host or own it directly.
- Keep the underlying dataset exportable (CSV/JSON, not locked behind a schema only this platform understands) for the same reason.
- Reuse whatever charting/report-rendering components already shipped Banking Sector 2026 rather than building new UI patterns — the whole point is "we're not building anything new."

## What "done" looks like for the pitch

A working, link-shareable dashboard/report that can be handed to someone at the Ministry for Grand Bahama in a meeting — not a finished product, but something concrete enough to leave behind. Pair it with a one-pager (draft structure already exists — see "Reference material" below) that frames the gap, why now, what's being offered, proof of capability, and a small, concrete ask (a follow-up meeting/demo, not funding or a role).

## Reference material (from the `politics` repo, for background — not required reading to start building)

Two documents were produced alongside this handoff, in case deeper background is useful later:
- A research reference on Grand Bahama's government structure — full Ministry for Grand Bahama portfolio, the island's 5 MPs post-May-2026-election, adjacent ministers (Works & Family Island Affairs; Innovation and National Development), GBPA/Hawksbill Creek context including the Feb 2026 ruling, and the local-government district structure.
- A draft one-pager pitch for the dashboard itself, structured problem → why now → offer → proof → ask, with placeholders where it needs real Banking Sector 2026 content inserted.

If whoever picks this up in `bahamasopendata.com` wants those full documents rather than the summary above, they're in the `politics` repo at `docs/research/grand-bahama-government-2026.md` and `docs/pitches/gb-data-dashboard-one-pager.md` — ask for them to be pasted in or shared directly, since cross-repo links won't resolve automatically.

## Open decisions before/while building

1. Final MVP data scope (see "Scope" above).
2. Exact URL/path structure (`/grand-bahama` vs. subdomain) — pick based on what the existing platform's routing already supports most cheaply.
3. Whether to reference GBPA's Invest Grand Bahama explicitly in the dashboard's framing (as "complementary," not competing) or stay silent on it — affects tone, not architecture.
