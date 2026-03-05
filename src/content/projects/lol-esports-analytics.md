---
title: LoL Esports Analytics & Prediction
description: Real-time LoL Esports Data Pipeline, ML Prediction & Automated Betting System
image: /images/esports-gaming.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "Python", "React", "ML", "Polymarket"]
github: https://github.com/kooroot/lol-polymarket
date: 2026-01-20
---

## Overview
An integrated ecosystem of tools for League of Legends esports analytics, ML-based win probability prediction, and automated prediction market betting. Spans data collection, real-time dashboards, AI prediction models, and automated Polymarket trading.

## Key Features

### Data Collection & ML Pipeline
- PandaScore API-based match data collection across LCK, LEC, LPL, LCS
- Data preprocessing with tier-based organization (S/A/B leagues)
- ML model training for win probability prediction using in-game features

### Real-time Analytics Dashboard
- Live match tracking with auto-refresh and ML win probability display
- Player of the Game (POG) forecasting based on performance metrics
- Objective tracking (Dragon soul, Baron, Void Grub)
- React 19 + TanStack Router/Query + Tailwind CSS + shadcn/ui

### Automated Betting System
- Real-time gold difference monitoring via Riot API
- Automated Polymarket bet placement when gold lead exceeds threshold
- Loss-cutting and reversal betting on game state changes
- Support for LCK, LEC, and LPL leagues

### Esports Dashboard
- Real-time match scores and upcoming schedules
- Tournament information with league > series > tournament hierarchy
- Team search and details via PandaScore API

## Technologies
- **Data Pipeline**: TypeScript (Bun), Python, PandaScore API, Riot API
- **ML/AI**: ONNX Runtime, win probability models
- **Frontend**: React 19, Vite, TanStack, shadcn/ui, Tailwind CSS
- **Trading**: Polymarket API, automated order execution
