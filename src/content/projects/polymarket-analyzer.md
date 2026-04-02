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

## Overview
A full-stack analytics dashboard that provides comprehensive trading performance analysis for Polymarket participants. Input a wallet address or username to visualize positions, profit/loss metrics, and trading patterns.

## Key Features

### Trader Analytics
- Realized and unrealized PnL calculation
- Equity curve visualization over time
- Maximum drawdown tracking
- Daily PnL heatmap for pattern recognition

### Position Tracking
- Active and historical position display
- Per-market breakdown of trading activity
- Win rate and average return metrics

### Architecture
- **Frontend**: React 19 + TanStack Router/Query + Recharts
- **Backend**: Bun HTTP server with TTL-based in-memory caching
- Efficient data fetching with query deduplication

## Technologies
- **Runtime**: Bun
- **Frontend**: React 19, TanStack Router, TanStack Query, Recharts
- **Backend**: Bun HTTP server
- **Data**: Polymarket API, wallet address resolution
