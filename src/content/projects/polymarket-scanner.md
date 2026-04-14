---
title: Polymarket Scanner
description: Large-trade & Volatility Monitor with Telegram Alerts
image: /images/prediction-market.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "Bun", "Telegram Bot", "Polymarket"]
github: https://github.com/kooroot/polymarket-scanner
date: 2025-11-19
---

## Problem
Polymarket's native UI surfaces real-time prices but does not push alerts on whale trades or sudden repricing events. Traders watching for information leakage or directional conviction in a market need to be notified the moment a large fill lands or a price moves sharply — not when they next refresh.

## Approach
- **Polling-based detection** rather than a maintained WebSocket connection, with configurable interval (default 60s) for a predictable API footprint.
- **Two complementary triggers**: notional size (default $200K+) and percentage price change (default 20%+), catching both whale activity and volatility events.
- **Configuration-first design** so thresholds can be tuned per market without code changes.
- **Telegram as the delivery channel** for instant cross-device push with zero additional infrastructure.
- **Bun runtime** for fast TypeScript startup and lean deployment.

## Implementation

### Trade Monitoring
Large-trade detection against a configurable USD threshold (default $200K+). Price volatility monitoring against a configurable percentage change (default 20%+). Configurable polling interval (default 60 seconds).

### Alert System
Telegram bot notifications fired on trigger. Detailed trade information embedded in alert payloads. Real-time market condition reporting.

## Outcome
- Real-time surveillance layer for Polymarket whale activity and volatility events.
- Tunable thresholds for per-market sensitivity.
- Push delivery via Telegram for unattended monitoring.

## Technologies
- **Runtime**: TypeScript, Bun
- **Monitoring**: Polymarket API
- **Alerts**: Telegram Bot API
