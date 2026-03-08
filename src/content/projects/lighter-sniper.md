---
title: Lighter DEX Sniper
description: High-speed Token Sniping Bot for Lighter DEX
image: /images/trading-chart.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "Python", "Bun", "WebSocket"]
github: https://github.com/kooroot/Lighter-sniper
date: 2025-12-17
---

## Overview
A high-performance token sniping bot designed for the Lighter DEX, optimized to detect token launches and execute buy orders with minimal latency (~25ms controllable portion). Uses multi-detection strategies and dual execution paths for maximum speed.

## Key Features

### Multi-Detection System
- WebSocket, REST API, and URL check running simultaneously via `Promise.race`
- First-to-detect triggers immediate execution
- Heartbeat monitoring with auto-recovery

### Dual Execution
- API order + browser macro fired simultaneously via `Promise.all`
- Auto balance transfer from Perps to Spot
- Total execution latency ~175-325ms including server processing

### Notification System
- Telegram alerts on successful snipes
- Sound notifications for immediate feedback
- Detailed execution logging

## Technologies
- **Runtime**: TypeScript (Bun), Python subprocess
- **Communication**: WebSocket, REST API
- **Automation**: Browser macro, Telegram Bot
- **Auth**: Python-based authentication and order signing
