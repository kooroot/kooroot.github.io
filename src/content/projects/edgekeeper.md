---
title: EdgeKeeper
description: Operator cockpit for automated trading agents — every tick emits a receipt carrying the signal it read, the risk verdict that gated it, and the hashes to replay both
image: /images/trading-chart.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "Next.js", "Solana", "Anchor", "Zod", "Vitest", "SSE", "Bun"]
github: https://github.com/kooroot/Edgekeeper
date: 2026-07-09
---

## Problem
An automated trading agent that only logs its fills tells you nothing about the decisions it did not take. When a position looks wrong after the fact, the questions that matter are what the agent was reading at the time, which guardrail let the action through, and whether the same inputs would produce the same call again. A P&L line answers none of them, and a raw feed dump answers them only if you are willing to re-derive the agent's own view by hand.

## Approach
- **The decision is the artifact.** The loop runs odds and scores → signal → risk verdict → simulated position → receipt. Every tick emits one, including the ones that resolve to `NOOP` or `BLOCK`.
- **Guardrails are deterministic and separate.** Risk checks pass or block a proposed action in their own module, so the reason an order was stopped is inspectable without reading the strategy.
- **Signals are derived, not dumped.** The agent reads normalized odds and score state rather than the raw provider payload, which keeps the input to a decision small enough to reason about.
- **Execution stays simulated.** No wallet flow, no venue adapter, no order construction, no settlement path. Positions are marked against provider decimal odds and implied probabilities.

## Implementation

### Agent modules
`signal`, `risk`, `execution`, `live-agent`, `receipt`, `hashing`, and `normalizer` are separated under `lib/`, each with its own Vitest coverage. A tick can therefore be tested at the seam where it actually goes wrong instead of end to end.

### Server-held credentials
Oracle access runs entirely through server routes. The browser never receives the JWT, the API token, or key material — public routes return derived summaries rather than passing the upstream feed through. When credentials are missing the live routes return an explicit error instead of quietly substituting synthetic fixture data, so a demo can never be mistaken for live operation.

### Normalizers that tolerate the feed
Zod passthrough objects accept both camelCase and PascalCase response keys, and the football phase and stat encodings are mirrored locally. The upstream shape can drift without taking the cockpit down.

### Fixture scoping
The selector separates a live window, the analysis universe, completed matches, and scheduled-only fixtures, so reviewing historical market state cannot be confused with monitoring something in play.

### Autonomy with a manual override
The cockpit ticks server-side on a 60-second interval for the selected fixture, with a manual trigger alongside it for demonstration timing.

## Outcome
- Deployed at `edgekeeper-kohl.vercel.app`, running against live mainnet oracle data with devnet as the secondary fallback.
- **4,666 LOC of authored TypeScript/TSX** across 84 files, with **16 test cases** over the signal, risk, receipt, and normalizer modules.
- Receipts carry signal, risk verdict, action, and hashes with proof references, without redistributing the provider's raw data.
- Built for the TxODDS World Cup Hackathon, Trading Tools & Agents track.

## Technologies
TypeScript · Next.js · React · Solana web3.js · Anchor · Zod · Vitest · Server-Sent Events · Bun · Tailwind CSS · Vercel
