---
title: "Polymarket Analyzer"
description: "Trader analytics for Polymarket that reports its own data quality — every inferred style label carries its sample size, and labels the data cannot support are returned disabled with the reason"
image: /images/data-analytics.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "React 19", "Bun", "TanStack", "Recharts", "Zod", "Vitest"]
github: https://github.com/kooroot/polymarket-analyzer
date: 2026-05-18
---

## Problem
Polymarket publishes positions, trades and activity through its Data API, and stops there. Realised and unrealised PnL, drawdown, hold duration, category exposure all have to be derived by whoever wants them. The harder problem sits one level past that: an analytics tool that labels a trader a scalper or a market maker is making a claim, and the API often does not return the field that claim rests on. Maker/taker flags are missing from some rows, and a hold-duration estimate over twelve matched trades is not the same evidence as one over four hundred.

## Approach
- **One input, four resolution paths.** A wallet address, a username, an environment alias, or a `polymarket.com/@handle` URL all resolve to a wallet, and the response says which path it took.
- **Server-side computation** in a Bun HTTP server with TTL caching, so repeat lookups do not hammer the upstream API.
- **Every label carries its evidence.** A style label ships with confidence, sample size, the supporting statistics, and its caveats.
- **A label the data cannot support is returned as disabled with the reason**, rather than omitted silently or emitted at low confidence.
- **Thresholds are versioned.** The heuristic constants live in one exported object stamped with a version date, so a profile computed under one rule set is distinguishable from another.

## Implementation

### Deep profile analyzer
Eight modules under `shared/deep-profile` compute the report: size and PnL statistics, hold durations from matched trades, category assignment, style inference, data-quality assembly, the threshold set, and a Markdown renderer for export. Eleven style labels are inferred, among them market maker, rebate collector, intraday scalper, long-horizon holder, arbitrageur/hedger, negative-risk operator, longshot hunter, favourite grinder, and concentrated event bettor. Category assignment runs eight regex rules over event slugs and titles covering esports, politics, crypto, sports, AI, culture, and macro, with anything unmatched falling to Other.

### Data quality as a first-class output
Every report carries a `complete` or `partial` status, the warnings that produced it, the per-endpoint fetch summaries, and the list of disabled labels. Market maker is disabled when the maker/taker field was absent from the fetched rows. Scalper and long-horizon are disabled when the matched hold sample falls under the minimum. Truncation at `maxRows` is surfaced as a warning rather than absorbed.

### Fetch hardening
Paginated collection with an explicit row ceiling, exponential backoff at 250ms doubling per attempt, rate-limit response headers captured into the fetch summary, and configurable inter-request sleep. Raw payload fields including `conditionId`, `eventSlug`, `outcomeIndex`, `negativeRisk` and `transactionHash` are preserved through normalisation so downstream inference is not blocked by an over-eager type.

### Dashboard
React 19 with TanStack Router and Query over the Bun backend. Recharts renders the equity curve and the daily PnL heatmap; positions break down per market with win rate and average return. Zod validates the request and response boundary on both sides.

## Outcome
- **3,604 LOC of application TypeScript** across 25 files, with **697 LOC of tests** covering 19 cases in three suites.
- The deep profile analyzer alone is **1,506 LOC across 8 modules**, producing 11 evidence-carrying style labels plus an explicit disabled list.
- Wallet, username, alias and profile-URL resolution, with the method reported back in the response.
- Markdown export of the full report, for use outside the dashboard.

## Technologies
TypeScript · Bun · React 19 · TanStack Router · TanStack Query · Recharts · Zod · Vitest · Vite · Polymarket Data API
