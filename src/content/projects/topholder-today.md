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

## Overview
A full-stack dashboard application for monitoring top cryptocurrency holders on the Bithumb exchange. Features a FastAPI backend for data processing and a Next.js frontend for real-time visualization.

## Key Features

### Data Pipeline
- FastAPI backend for Bithumb API data processing
- Automated data collection and aggregation
- Real-time top holder tracking

### Dashboard UI
- Next.js frontend with responsive design
- API proxy through Next.js for secure communication
- Real-time data visualization

### Architecture
- User → Next.js (port 3000) → FastAPI (port 8000) → Bithumb API
- Separation of concerns between frontend and data processing

## Technologies
- **Backend**: FastAPI, Python
- **Frontend**: Next.js, TypeScript
- **API**: Bithumb Exchange API
