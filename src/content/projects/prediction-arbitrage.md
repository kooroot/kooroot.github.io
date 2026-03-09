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

## Overview
Built a prediction market arbitrage bot supporting Polymarket (Polygon), Kalshi (centralized/CFTC-regulated), and Predict.fun (BSC). The system identifies and executes arbitrage opportunities across platforms with real-time monitoring.

## Key Features

### Arbitrage Strategies
- **Internal Arbitrage**: Detects YES + NO price sum < 1.00 within a single platform
- **Cross-Platform Arbitrage**: Identifies price discrepancies for equivalent markets across Polymarket, Kalshi, and Predict.fun
- **Dutching**: Multi-outcome equal profit betting across correlated markets
- **Rebate Farming**: Captures maker order rebates through strategic limit order placement

### Monitoring & Alerts
- Real-time spike detection bot for sudden price movements
- Telegram alert integration for opportunity notifications
- CSV export and dashboard for performance tracking

### Execution
- Built with Bun runtime for high-performance TypeScript execution
- Used viem v2 for on-chain transaction handling
- Implemented order management across centralized and decentralized platforms

## Technologies
- **Runtime**: Bun, TypeScript
- **On-chain**: Viem v2, Polygon, BSC
- **Platforms**: Polymarket CLOB, Kalshi API, Predict.fun
- **Monitoring**: Telegram Bot API, CSV dashboards

## Impact
Automated cross-platform arbitrage detection and execution across the three major prediction market platforms, enabling systematic profit capture from market inefficiencies.
