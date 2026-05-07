---
title: Alloy Playground
description: End-to-end Rust alloy 2.0 + Bun/Vite stack covering ETH transfer, ERC-20 deploy/transfer, WebSocket event streams, and BIP-39 wallet generation
image: /images/ethereum-layer2.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Rust", "alloy 2.0", "axum", "Bun", "Vite", "TanStack", "viem"]
github: https://github.com/kooroot/alloy-playground
date: 2026-04-25
---

## Problem
Most Ethereum tutorials cover one piece at a time — wagmi for the browser, ethers for scripting, a smart contract sample on its own — but never wire the full stack of dApp primitives behind a single Rust service. To verify alloy 2.0 against real wallet, RPC, and event-subscription semantics, you need an end-to-end harness where every read and broadcast funnels through the same backend, and the browser is only ever a wallet adapter.

## Approach
- **Pure-alloy backend** — every chain read and broadcast goes through axum + alloy. No `createPublicClient`, no wagmi reads.
- **viem strictly as an EIP-1193 adapter** on the browser, so MetaMask flows live next to a server-signed flow with the same UX.
- **Two signing paths per action**: `send-local` (server-signed via `PrivateKeySigner` from `.env`) and `build` (returns a fully-populated EIP-1559 tx the browser hands to MetaMask).
- **Hot-swap network and signer** at runtime via `POST /api/network` and `POST /api/wallet/use` — no backend restart.
- **OpenAPI codegen** with `utoipa`, consumed by `openapi-fetch` on the frontend so the TypeScript client is always in lockstep with the Rust handlers.

## Implementation

### Backend (axum + alloy 2.0)
`AppState` wraps a `DynProvider` behind a tokio `RwLock` so the network can flip between Anvil and Sepolia without restarting. Routes cover health, network, account (balance + nonce + chain tip), ETH transfer in three modes (`send-local`, `build`, raw `send`), full ERC-20 lifecycle (deploy, transfer in both modes, `balanceOf`), and a WebSocket Transfer-event stream.

### Wallet Generation
Server-side endpoints mint random `PrivateKeySigner` keys, generate 12-word BIP-39 mnemonics via `MnemonicBuilder::<English>`, and restore deterministic keys from a mnemonic at any BIP-44 index — verified against the standard anvil-junk mnemonic to confirm the derivation path is correct.

### Live Event Stream
WebSocket subscription on `provider.subscribe_logs(&filter)` decodes `DemoToken::Transfer` log data via the `alloy::sol!` generated bindings (matching Solidity field names `from` / `to` / `value`) and streams decoded events to the `/events` page.

### Frontend (Bun + Vite + TanStack)
React frontend with TanStack Router + Query, zustand-backed and persisted toggles for wallet mode (local vs MetaMask) and network (Anvil vs Sepolia). Vite proxies `/api` and `/ws` to `127.0.0.1:8080` so the frontend is origin-less and Vite's port fallback (3000 → 3001 → …) works transparently.

### Dev Stack Orchestration
`bun run dev` at the repo root uses `concurrently -k -n anvil,backend,web` to run Anvil + `cargo run` + the Vite dev server in one pane. `-k` cascades SIGINT to all children, giving a single clean interrupt point when restarting the stack.

## Outcome
- Single coherent stack covering wallet connect, balance/network read, ETH transfer (both EIP-1559 modes), ERC-20 deploy/transfer/balanceOf, live Transfer-event subscription, and server-side key generation.
- BIP-39 mnemonic generation and BIP-44 key derivation verified against anvil's deterministic junk mnemonic.
- OpenAPI-driven type-safe client with no manual schema duplication between Rust handlers and TypeScript fetchers.
- Hot-swap of network and signer without a backend restart, exercising alloy's `DynProvider` pattern under real load.

## Technologies
- **Backend**: Rust, axum, alloy 2.0 (`PrivateKeySigner`, `DynProvider`, `MnemonicBuilder`, `sol!`), tokio
- **Frontend**: Bun, Vite, React, TanStack Router/Query, zustand, viem (EIP-1193 only)
- **Schema**: utoipa OpenAPI + `openapi-fetch` codegen
- **Dev orchestration**: Anvil, `concurrently`, optional `just`/mprocs Justfile
- **Networks**: Anvil (local), Sepolia (testnet)
