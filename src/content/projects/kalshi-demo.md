---
title: Kalshi Trading Personality
description: Classifies a Kalshi trader from their own history into one of twelve archetypes, then adds a risk layer that walks the orderbook to price the hedge that would defend the position
image: /images/prediction-market.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Hono", "Bun", "TypeScript", "React", "SQLite", "TanStack", "shadcn/ui"]
github: https://github.com/kooroot/kalshi-demo
date: 2026-02-25
---

## Problem
A Kalshi account holds everything needed to describe how someone trades: entry prices, category spread, streaks, hold behaviour, YES/NO lean. What comes back from the API is a list of positions and fills, and a PnL number summarises the result while saying nothing about the method. The second gap shows up once a profile exists. A trader who now knows they run concentrated and directionally biased has no way to price what it would cost to defend that, because the answer depends on how deep the orderbook actually is at the moment they ask.

## Approach
- **Score first, label second.** Positions and fills produce a set of scores across risk appetite, category performance, streaks and PnL structure, and the archetype is determined from those scores rather than from a single dominant metric.
- **Two ways in.** Signed API credentials give access to a full private history. A public Kalshi nickname resolves through the social endpoints with no credentials at all, so a profile can be generated for anyone who trades publicly.
- **Hedging priced against the real book**, walking levels to get an effective average price and the slippage that implies, instead of quoting the top of book.
- **Bun's built-in SQLite** for profile persistence, which keeps the deployment to a runtime and a file.
- **Demo environment throughout.** Every call goes to `demo-api.kalshi.co`, so orders placed through the app are demo orders.

## Implementation

### Personality analysis
Risk type is derived from the distribution of entry prices across low, mid and high bands, then combined with category performance, current streak, and a PnL breakdown to select one of twelve archetypes: Precision Sniper, Methodical Grinder, Momentum Rider, Contrarian, Speed Demon, Degen Gambler, Safe Player, Profit Machine, Balanced Trader, Curious Explorer, Political Junkie and Crypto Degen. Recommendations are then scoped to the categories the profile actually performs in.

### Shield risk layer
Portfolio analysis reports total exposure, unrealised PnL, a category breakdown by percentage and exposure, and the YES/NO directional split. Four alert types fire against it at warning or critical severity: concentration, directional bias, low upside, and high exposure. Orderbook analysis returns best bids and asks on both sides with the spread and the depth ladder. From those, the hedge calculator produces the side to hedge, contracts needed, effective average price after walking the book, slippage, total cost, potential payout, the amount defended, and the cost as a percentage of that defence.

### Request signing
Authenticated calls are signed with RSA-PSS over SHA-256 across `timestamp + method + path`, at maximum salt length, and sent as `KALSHI-ACCESS-KEY`, `-TIMESTAMP` and `-SIGNATURE` headers. The unauthenticated social path needs none of this, so profile generation by nickname works before a user has connected anything.

### Shareable profile cards
A dedicated route renders an OG image per username alongside its meta tags, so a profile link expands into a card on social platforms rather than a bare URL. Profiles persist in SQLite keyed on the API key ID, with refresh available per profile.

## Outcome
- **6,189 LOC of TypeScript/TSX** across 31 files, split 2,605 in the Hono backend and 3,584 in the React client.
- Twelve archetypes over a scored classification, reachable through signed credentials or a public nickname.
- Risk layer covering portfolio exposure, four alert types, orderbook depth, and a hedge priced with slippage from the actual book.
- Order placement wired for both recommendations and hedges, against the Kalshi demo exchange.

## Technologies
Bun · Hono · TypeScript · SQLite (Bun built-in) · React · TanStack Router · TanStack Query · shadcn/ui · Radix UI · Tailwind CSS · Kalshi Demo API · RSA-PSS request signing
