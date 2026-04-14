---
title: Predict.fun Trading Interface
description: Community Trading Interface for Predict.fun Prediction Markets
image: /images/trading-chart.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Next.js", "TypeScript", "wagmi", "RainbowKit"]
github: https://github.com/kooroot/predictdotfun
date: 2025-12-14
---

## Problem
Predict.fun hosts prediction markets on BNB Chain but lacks a community-built trading interface that exposes the full orderbook, limit/market order flow, and position management in a single app. Traders need a responsive front-end covering both Testnet (for experimentation) and Mainnet (for live trading) with a standard wallet-connection stack.

## Approach
- **Next.js 14 App Router** for colocated routing, server components, and streaming-friendly data fetching.
- **wagmi + RainbowKit** for production-grade wallet connection with minimal custom code.
- **Dual-network support (BNB Testnet and Mainnet)** selectable via wagmi chain config.
- **TanStack Query** for orderbook and position state with automatic refetching.
- **shadcn/ui** for composable, accessible trading UI primitives.

## Implementation

### Trading Features
Market browsing with search, orderbook display with real-time updates, limit and market order creation, and position management including open-order cancellation and order history.

### Wallet Integration
RainbowKit handles wallet discovery and connection, wagmi provides typed contract interactions and chain switching, and TanStack Query coordinates on-chain state with the UI. Both BNB Testnet and Mainnet are supported via chain configuration.

### UI/UX
Trading interface built on shadcn/ui primitives under the Next.js 14 App Router, with a responsive layout that covers desktop and mobile trading flows.

## Outcome
- End-to-end trading interface for Predict.fun markets covering browse, orderbook, order placement, cancellation, and history.
- Cross-network support for BNB Testnet and Mainnet from a single deployment.
- Standard wagmi/RainbowKit wallet stack compatible with mainstream BNB-Chain wallets.

## Technologies
- **Frontend**: Next.js 14, TypeScript, shadcn/ui
- **Web3**: wagmi, RainbowKit, ethers.js
- **State**: TanStack Query
- **Network**: BNB Chain
