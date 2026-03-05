---
title: Prediction Terminal
description: Prediction Market Arbitrage Scanner with Terminal-style UI
image: /images/pic02.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["React", "TypeScript", "Cloudflare Workers", "Polymarket"]
github: https://github.com/kooroot/prediction-terminal
date: 2025-12-14
---

## Overview
A real-time orderbook scanner for prediction markets that detects arbitrage opportunities across platforms. Features a terminal-style UI and supports binary arbitrage and dutching strategies across multi-outcome markets.

## Key Features

### Arbitrage Detection
- Binary arbitrage detection when `ask(YES) + ask(NO) < 1.00`
- Dutching strategy across multi-outcome markets
- Real-time orderbook scanning and opportunity alerts

### Platform Support
- Active: Polymarket (Polygon)
- Planned: Predict.fun (Blast), Kalshi

### Terminal UI
- Terminal-style aesthetic with JetBrains Mono font
- Built with TanStack React Start and Tailwind CSS
- Deployed on Cloudflare Workers

## Technologies
- **Frontend**: React, TanStack Start, Tailwind CSS
- **Deployment**: Cloudflare Workers
- **Markets**: Polymarket API, Polygon
