---
title: Prediction Terminal
description: Prediction Market Arbitrage Scanner with Terminal-style UI
image: /images/code-matrix.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["React", "TypeScript", "Cloudflare Workers", "Polymarket"]
github: https://github.com/kooroot/prediction-terminal
date: 2025-12-14
---

## Problem
Prediction markets across Polymarket, Predict.fun, and Kalshi routinely misprice related contracts — binary YES/NO legs summing below 1.00, or multi-outcome markets whose ask prices leave room for a dutching book. Spotting these requires continuous orderbook scanning across venues, which manual traders cannot sustain. A real-time scanner surfacing these opportunities removes the manual overhead.

## Approach
- **Orderbook-driven detection** rather than mid-price heuristics, so opportunities reflect actually executable prices.
- **Two arbitrage primitives**: binary arbitrage (`ask(YES) + ask(NO) < 1.00`) and dutching across multi-outcome markets.
- **Cloudflare Workers** for globally distributed, low-latency market polling without persistent infrastructure.
- **Terminal aesthetic** (JetBrains Mono, monochrome palette) to match the operator tool framing.
- **TanStack React Start + Tailwind** for typed routing and utility-first styling.

## Implementation

### Arbitrage Detection
Continuously scans venue orderbooks and flags two opportunity types: binary arbitrage when the combined ask of YES and NO on the same contract is below 1.00, and dutching across multi-outcome markets where summed ask prices leave positive expected value. Surfaces opportunities as real-time alerts in the UI.

### Platform Support
Polymarket (Polygon) is live. Predict.fun (Blast) and Kalshi are on the roadmap.

### Terminal UI
Terminal-style aesthetic rendered in JetBrains Mono, built with TanStack React Start and Tailwind CSS, and deployed to Cloudflare Workers for edge-local response times.

## Outcome
- Live arbitrage scanner against Polymarket orderbooks with binary and dutching detection.
- Edge-deployed UI on Cloudflare Workers.
- Architecture prepared to add Predict.fun and Kalshi as secondary venues.

## Technologies
- **Frontend**: React, TanStack Start, Tailwind CSS
- **Deployment**: Cloudflare Workers
- **Markets**: Polymarket API, Polygon
