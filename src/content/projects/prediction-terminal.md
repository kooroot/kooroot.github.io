---
title: Prediction Terminal
description: Arbitrage scanner across Polymarket, Predict.fun and Kalshi, with a collector service that polls each venue on its own rate-limit budget and pushes daily volume digests to Telegram
image: /images/code-matrix.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "TanStack Start", "Bun", "Cloudflare Workers", "Polymarket", "Predict.fun", "Kalshi", "Telegram"]
github: https://github.com/kooroot/prediction-terminal
date: 2026-01-21
---

## Problem
Prediction markets misprice related contracts routinely: binary YES/NO legs whose asks sum below 1.00, or multi-outcome events where the summed asks leave room for a dutching book. Catching these means holding a current orderbook for every venue at once, and the three venues that matter do not let you read them the same way. Polymarket answers open REST calls, Predict.fun requires an API key behind a strict rate limit, and Kalshi wants every request signed. A scanner has to absorb all three access models before it can compare a single price.

## Approach
- **Executable prices only.** Detection runs on orderbook asks, so a flagged opportunity reflects what could actually be filled rather than a mid-price artifact.
- **Two primitives, applied uniformly.** Binary arbitrage where `ask(YES) + ask(NO) < 1.00`, and dutching where the summed asks across mutually exclusive outcomes clear the same bar. Every venue implements both.
- **Collector separated from the interface.** Polling lives in a long-lived Bun service that owns the credentials and holds the cache, and the edge-deployed UI only reads from it. Either side can be redeployed without touching the other.
- **Poll interval set by the venue.** Each platform gets the cadence its rate limit allows, with a running flag per platform so a slow refresh cannot stack on itself.
- **Terminal aesthetic** in JetBrains Mono and a monochrome palette, matching the operator-tool framing.

## Implementation

### Three venues, three access models
Polymarket needs no credentials and refreshes every 15 seconds. Predict.fun runs on an API key under a strict rate limit, so it refreshes every 60. Kalshi authenticates with RSA-SHA256 signatures over `timestamp + method + path`, sent as `KALSHI-ACCESS-KEY`, `-SIGNATURE` and `-TIMESTAMP` headers, and refreshes every 20. Each collector exposes the same pair of entry points, `fetchBinaryMarkets` and `fetchDutchingEvents`, so the venue-specific response shapes get normalized before any comparison happens.

### Telegram digests
A second scheduler reads the same cache and sends a top-20-by-24H-volume digest per venue plus a combined ranking, twice daily at 09:00 and 21:00 KST. Alert hours are configurable through the environment, and a per-hour guard stops the same digest from firing twice in one day. Each row carries volume, liquidity, YES/NO prices, margin, expiry, and a link back to the market.

### Dashboard
Routes cover each venue individually alongside a combined top-volume view. The status pill on the landing route is derived from what is actually sitting in the cache for that platform, so a venue reads as pending when its credentials are absent rather than when its integration is missing.

## Outcome
- **4,420 LOC of TypeScript** across 23 files, split 2,473 in the interface and 1,947 in the collector service.
- All three venues wired for both arbitrage primitives, including RSA-signed Kalshi access and rate-limit-aware Predict.fun polling.
- Telegram alerting with a configurable schedule, duplicate suppression, and per-platform plus combined rankings.
- Interface built against Cloudflare Workers through TanStack React Start, with the collector deployable independently as a Bun service.

## Technologies
TypeScript · TanStack React Start · React · Tailwind CSS 4 · Bun · Cloudflare Workers · Wrangler · Polymarket CLOB API · Predict.fun API · Kalshi API · Telegram Bot API
