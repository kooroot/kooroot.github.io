---
title: Kalshi Trading Personality
description: Trading Personality Analyzer with Market Recommendations
image: /images/prediction-market.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Hono", "React", "TypeScript", "SQLite"]
github: https://github.com/kooroot/kalshi-demo
date: 2026-02-03
---

## Problem
Kalshi traders accumulate extensive position history but have no native tool that translates that history into a behavioural profile or surfaces markets aligned with their revealed preferences. Generic analytics dashboards report PnL without characterising *how* a trader trades. A lightweight application that classifies trading style and recommends markets on that basis fills this gap.

## Approach
- **Kalshi API as single data source**: Pull trading history directly rather than scraping or relying on third-party aggregators.
- **Personality classification over raw metrics**: Map positions and trade cadence to discrete trader archetypes for shareability and recall.
- **Hono + Bun backend with SQLite** for a minimal, low-latency server footprint; no external database dependency.
- **TanStack Router/Query on React** for type-safe client routing and server-state caching.
- **shadcn/ui** for consistent, accessible components without a heavyweight design system.

## Implementation

### Trading Analysis
Authenticates against the Kalshi API and ingests a user's historical positions and fills. Derives a trading personality type from activity patterns and produces personalised market recommendations scoped to the inferred preferences.

### Shareable Profiles
Auto-generates trader profile cards summarising the classified personality and recommended markets. Each profile is exposed at a shareable link for social distribution.

### Architecture
Hono backend persists analysis results in SQLite. React frontend consumes backend routes via TanStack Query, with routing handled by TanStack Router and UI built on shadcn/ui primitives.

## Outcome
- End-to-end flow from Kalshi API credentials to a shareable personality profile.
- Personalised market recommendations grounded in historical trade data.
- Self-contained stack (Bun runtime, SQLite file) deployable without managed services.

## Technologies
- **Backend**: Hono, Bun, SQLite
- **Frontend**: React, TanStack Router/Query, shadcn/ui
- **API**: Kalshi Demo API
