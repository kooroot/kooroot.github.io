---
title: Prediction Market Arbitrage Bot
description: Cross-platform arbitrage bot for Polymarket, Kalshi, and Predict.fun
image: /images/prediction-market.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "Bun", "Viem", "Polymarket", "Kalshi"]
github: https://github.com/kooroot-company/Prediction-arbitrage
date: 2025-10-01
---

## Problem
Prediction markets fragment across Polymarket (Polygon), Kalshi (centralized, CFTC-regulated), and Predict.fun (BSC). Equivalent markets on the same real-world event routinely price differently, and within a single platform the YES+NO sum on binary markets can drift below 1.00. Capturing those inefficiencies manually is infeasible — the spreads close in seconds and require simultaneous order placement on independent venues.

## Approach
- **Four complementary strategies** rather than a single arbitrage path: **internal** (YES+NO<1.00 on one venue), **cross-platform** (equivalent markets on different venues), **dutching** (equal-profit betting across correlated outcomes), and **rebate farming** (maker-order rebate capture).
- **Bun runtime** for low-latency TypeScript execution across the parallel pricing feeds.
- **viem v2** for on-chain order signing on Polygon (Polymarket CLOB) and BSC (Predict.fun); direct API integration for Kalshi's centralized order book.
- **Real-time spike detector** as a separate signal source for sudden repricing events that briefly open arbitrage windows.
- **Telegram alerts + CSV/dashboard export** so the operator can audit executions and tune thresholds.

## Implementation

### Arbitrage Strategies
- **Internal Arbitrage**: detects YES+NO price sum < 1.00 within a single platform.
- **Cross-Platform Arbitrage**: identifies price discrepancies for equivalent markets across Polymarket, Kalshi, and Predict.fun.
- **Dutching**: multi-outcome equal-profit betting across correlated markets.
- **Rebate Farming**: captures maker-order rebates through strategic limit order placement.

### Monitoring & Alerts
Real-time spike detection bot for sudden price movements. Telegram alert integration for opportunity notifications. CSV export and dashboard for performance tracking.

### Execution
Bun runtime for high-performance TypeScript execution. viem v2 for on-chain transaction handling on Polygon and BSC. Order management across centralized (Kalshi) and decentralized (Polymarket, Predict.fun) venues through a unified interface.

## Outcome
- Automated arbitrage detection and execution across the three major prediction-market platforms.
- Four distinct strategy modes covering intra-venue, cross-venue, dutching, and rebate capture.
- Telegram-push opportunity alerts with CSV/dashboard performance tracking.

## Technologies
- **Runtime**: Bun, TypeScript
- **On-chain**: Viem v2, Polygon, BSC
- **Platforms**: Polymarket CLOB, Kalshi API, Predict.fun
- **Monitoring**: Telegram Bot API, CSV dashboards
