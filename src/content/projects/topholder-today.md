---
title: TopHolder Dashboard
description: Cryptocurrency Top Holder Monitoring Dashboard
image: /images/data-analytics.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Next.js", "FastAPI", "Python", "TypeScript"]
github: https://github.com/kooroot/Topholder-today
date: 2025-11-18
---

## Problem
Bithumb exposes trading and holder data through its API, but traders and researchers lack a purpose-built dashboard that aggregates top holder activity over time and renders it in a single view. Consuming the API directly from the browser also leaks request patterns and complicates rate-limit handling. A split architecture with a Python data layer and a Next.js UI addresses both gaps.

## Approach
- **FastAPI for the data layer**: Python's ecosystem suits aggregation and the async runtime handles concurrent API calls cleanly.
- **Next.js frontend with API proxy** so upstream calls originate server-side, keeping request details off the client.
- **Port-level separation** (Next.js on 3000, FastAPI on 8000) for simple local development and deployment.
- **Real-time visualisation** as the primary UX target rather than historical reporting.
- **TypeScript on the frontend** for typed API contracts against the FastAPI responses.

## Implementation

### Data Pipeline
FastAPI backend consumes the Bithumb API, aggregates top holder data, and exposes normalised endpoints. Collection is automated and kept current for real-time tracking.

### Dashboard UI
Next.js frontend with responsive layout consumes the FastAPI backend through a Next.js API proxy. Data is rendered in real-time visualisations of top holder activity.

### Architecture
Request flow: User → Next.js (port 3000) → FastAPI (port 8000) → Bithumb API. Separation of concerns keeps data processing in Python and presentation in TypeScript.

## Outcome
- End-to-end top holder monitoring from Bithumb API through to a visual dashboard.
- Server-side API proxy that keeps upstream credentials and request patterns off the client.
- Clean split between FastAPI data processing and Next.js presentation.

## Technologies
- **Backend**: FastAPI, Python
- **Frontend**: Next.js, TypeScript
- **API**: Bithumb Exchange API
