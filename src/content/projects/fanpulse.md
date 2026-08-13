---
title: FanPulse
description: Mobile-first match companion that turns live football odds and stat snapshots into momentum readings, watch-party games, and a shareable recap
image: /images/esports-gaming.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "Next.js", "Solana", "Anchor", "Zod", "Vitest", "SSE", "Bun"]
github: https://github.com/kooroot/Fanpulse
date: 2026-07-09
---

## Problem
A verified sports data feed carries far more than a scoreline, but almost none of it reaches the person actually watching the match. Odds movement, pressure, discipline shifts and corner counts arrive as numeric payloads aimed at traders, so the fan watching with friends gets a scoreboard and nothing else. Turning that feed into something a casual viewer understands in seconds is a translation problem, not a data problem.

## Approach
- **Translate, don't display.** Odds and stat snapshots become momentum, pressure, chaos and market mood — language a viewer can act on without knowing what an implied probability is.
- **Live first, fallback second.** With credentials configured the app opens real fixtures; the local replay exists only for review when no credentials are present, and it says so rather than passing itself off as live.
- **Loops, not a dashboard.** Pulse Cards, stat Hi-Lo, quests and a group sweepstake give a watch party something to do between goals.
- **No wagering, no wallet, no trading surface.** The consumer path stays a companion app.

## Implementation

### Pulse Meter and Pulse Cards
Normalized score and stat state drive a continuous momentum reading, and discrete cards fire on kickoff, goals, mood swings, comeback windows, discipline shifts, corner pressure, chaos, and the final whistle. Each card is derived from the feed rather than authored per match.

### Auto Pundit
Odds movement is converted into short commentary that is both copyable and speakable, so the market's own read on the match becomes part of the broadcast rather than a separate chart.

### Server-side feed access
Fixture, odds, score, and historical snapshot calls plus the two SSE streams all run through server routes with credentials held server-side. Normalizers use Zod passthrough objects and accept both camelCase and PascalCase keys, with the football phase and full-game stat encodings mirrored locally so an upstream shape change does not take the UI down.

### Match in 7 Pulses
The recap picks seven moments out of the match timeline and renders a share card carrying final score, biggest pulse, momentum winner, and chaos level.

## Outcome
- Deployed at `fanpulse-seven.vercel.app`, opening real World Cup fixtures from the live competition feed, with responsive layouts for the lobby, live match room, and stories.
- **6,360 LOC of authored TypeScript/TSX** across 86 files, with **35 test cases**.
- Fan progression is local XP and streak only — no accounts, no wallet connection, no stakes.
- Built for the TxODDS World Cup Hackathon, Consumer & Fan Experiences track.

## Technologies
TypeScript · Next.js · React · Solana web3.js · Anchor · Zod · Vitest · Server-Sent Events · Bun · Tailwind CSS · Vercel
