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

## Overview
A real-time monitoring tool for Polymarket that detects large trades and significant price volatility, sending instant alerts via Telegram bot. Configurable thresholds enable fine-tuned market surveillance.

## Key Features

### Trade Monitoring
- Large trade detection with configurable threshold (default $200K+)
- Price volatility monitoring (default 20%+ change)
- Configurable polling interval (default 60 seconds)

### Alert System
- Instant Telegram bot notifications on trigger
- Detailed trade information in alert messages
- Real-time market condition reporting

## Technologies
- **Runtime**: TypeScript, Bun
- **Monitoring**: Polymarket API
- **Alerts**: Telegram Bot API
