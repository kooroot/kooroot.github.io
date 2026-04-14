---
title: "Polymarket Analyzer"
description: "Full-stack analytics dashboard for Polymarket trader performance with PnL visualization and risk metrics"
image: /images/data-analytics.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "React", "Bun", "TanStack", "Recharts"]
github: https://github.com/kooroot/polymarket-analyzer
date: 2025-03-10
---

## Problem
Polymarket exposes positions and trade history on-chain but offers no first-class performance analytics comparable to traditional trading platforms. Traders wanting realised/unrealised PnL, drawdown, and behavioural heatmaps must compute them manually from raw API responses. A dedicated dashboard keyed on a wallet address or username closes that gap.

## Approach
- **Address/username lookup** as the single entry point — no account system, no sign-in.
- **Compute metrics server-side** in a Bun HTTP server with TTL-based in-memory caching to absorb repeat queries without hammering the Polymarket API.
- **Recharts for visualisation** over heavyweight charting libraries to keep the bundle small.
- **TanStack Router + Query** on a React 19 frontend for typed routing and request deduplication.
- **Stateless backend**: cache is ephemeral, simplifying deployment and invalidation.

## Implementation

### Trader Analytics
Computes realised and unrealised PnL from position and fill data, plots an equity curve over time, tracks maximum drawdown, and renders a daily PnL heatmap for pattern recognition.

### Position Tracking
Displays active and historical positions with per-market breakdown, win rate, and average return metrics.

### Architecture
React 19 frontend with TanStack Router/Query consumes a Bun HTTP backend. Backend fetches from the Polymarket API, applies TTL-based in-memory caching, and returns normalised analytics payloads. Query deduplication on both the server cache and TanStack Query minimises redundant upstream calls.

## Outcome
- Wallet-address-to-analytics flow with no account setup required.
- Equity curve, drawdown, daily PnL heatmap, and per-market win-rate breakdown.
- Lightweight Bun server with in-memory caching suitable for single-instance deployment.

## Technologies
- **Runtime**: Bun
- **Frontend**: React 19, TanStack Router, TanStack Query, Recharts
- **Backend**: Bun HTTP server
- **Data**: Polymarket API, wallet address resolution
