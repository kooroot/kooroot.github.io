---
title: LoL Esports Analytics & Prediction
description: Real-time LoL Esports Data Pipeline, ML Prediction & Automated Betting System
image: /images/esports-gaming.jpg
category: AI Engineering
show_tile: true
tech_stack: ["TypeScript", "Python", "React", "ML", "Polymarket"]
github: https://github.com/kooroot/lol-polymarket
date: 2026-01-20
---

## Problem
Polymarket lists live markets on LoL esports matches, but pricing often lags the in-game state because most traders cannot watch every league simultaneously. A pipeline that ingests real-time match telemetry, produces calibrated win probabilities, and acts on the gap between model probability and market price captures that inefficiency systematically.

## Approach
- **PandaScore + Riot API** as the two complementary data sources: PandaScore for cross-league coverage (LCK, LEC, LPL, LCS), Riot for high-fidelity in-game state like gold difference.
- **ML win-probability model** trained on historical in-game features, exported to **ONNX** for low-latency inference from the TypeScript runtime.
- **Tier-based league organization** (S/A/B) so the model and betting thresholds can be tuned per-league data quality.
- **Gold-lead threshold strategy** on Polymarket: enter when the live Riot feed shows a gold delta the market hasn't priced in; loss-cut and reversal logic on state swings.
- **Separation of concerns**: data/ML pipeline, analytics dashboard, and betting engine as distinct services sharing the same feature store.

## Implementation

### Data Collection & ML Pipeline
PandaScore-based match data collection across LCK, LEC, LPL, LCS. Preprocessing with tier-based (S/A/B) league organization. ML training on in-game features to produce live win-probability estimates.

### Real-time Analytics Dashboard
Live match tracking with auto-refresh and displayed ML win probability. Player of the Game (POG) forecasting from performance metrics. Objective tracking for Dragon soul, Baron, and Void Grub. Built on React 19, TanStack Router/Query, Tailwind CSS, and shadcn/ui.

### Automated Betting System
Real-time gold-difference monitoring via Riot API. Automated Polymarket order placement when the gold lead exceeds a configured threshold. Loss-cutting and reversal betting on game state changes. Coverage for LCK, LEC, and LPL.

### Esports Dashboard
Real-time match scores and upcoming schedules. Tournament information organized by league > series > tournament. Team search and details via PandaScore.

## Outcome
- End-to-end pipeline spanning data ingestion, ML inference, dashboards, and on-market execution.
- Automated Polymarket trading tied to live in-game state rather than pre-match odds.
- Unified analytics surface across the major professional LoL leagues.

## Technologies
- **Data Pipeline**: TypeScript (Bun), Python, PandaScore API, Riot API
- **ML/AI**: ONNX Runtime, win probability models
- **Frontend**: React 19, Vite, TanStack, shadcn/ui, Tailwind CSS
- **Trading**: Polymarket API, automated order execution
