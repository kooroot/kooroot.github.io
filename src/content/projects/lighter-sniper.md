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

## Problem
On a new-listing DEX like Lighter, the profitable window for sniping a token launch is measured in hundreds of milliseconds. A single-channel detector (WebSocket only, or REST polling only) loses races to competitors, and a single-path executor stalls if the API leg is rate-limited or the browser leg hits a UI delay. Latency dominates everything else.

## Approach
- **Multi-channel detection via `Promise.race`**: WebSocket, REST API, and URL check run in parallel and the first signal triggers execution.
- **Dual-path execution via `Promise.all`**: API order and browser macro fire simultaneously so either path can win the fill.
- **Bun runtime** for TypeScript cold-start and I/O speed, with a **Python subprocess** handling authentication and order signing where the Python crypto stack was more mature.
- **Heartbeat + auto-recovery** on the WebSocket to avoid silent disconnects during low-traffic periods before a launch.
- **Automatic Perps -> Spot balance transfer** pre-snipe so funds are in the correct account when the order fires.

## Implementation

### Multi-Detection System
WebSocket, REST API, and URL check running simultaneously via `Promise.race`. First-to-detect triggers immediate execution. Heartbeat monitoring with auto-recovery on connection loss.

### Dual Execution
API order and browser macro fired simultaneously via `Promise.all`. Automatic balance transfer from Perps to Spot before snipe. Controllable-portion latency approximately 25ms; total execution latency approximately 175-325ms including server processing.

### Notification System
Telegram alerts on successful snipes. Sound notifications for immediate local feedback. Detailed execution logging for post-mortem analysis.

## Outcome
- Operational sniping bot for Lighter DEX with sub-25ms controllable latency on the execution-ready path.
- Resilient to single-channel failure via parallel detection and execution.
- Telegram and sound alerting for unattended operation.

## Technologies
- **Runtime**: TypeScript (Bun), Python subprocess
- **Communication**: WebSocket, REST API
- **Automation**: Browser macro, Telegram Bot
- **Auth**: Python-based authentication and order signing
