---
title: Predict.fun Trading Interface
description: Community trading client for Predict.fun on BNB Chain, live at predictdotfun.vercel.app — orders are built with the official SDK and signed as EIP-712 typed data through wagmi
image: /images/trading-chart.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Next.js 15", "React 19", "TypeScript", "wagmi", "viem", "RainbowKit", "Predict.fun SDK"]
github: https://github.com/kooroot/predictdotfun
date: 2025-12-14
---

## Problem
Predict.fun runs its markets on BNB Chain, and a trader who wants the full orderbook, both order types, position management and redemption in one place has to assemble that themselves. The order path is the part that resists a naive implementation: an order is an EIP-712 structure that has to be built to the protocol's exact shape, hashed, signed by the user's wallet, and only then posted to the CLOB API. Getting the amounts or the typed-data hash wrong produces a signature the exchange rejects with no useful diagnostic.

## Approach
- **The official `@predictdotfun/sdk` builds the order.** Amount calculation, order construction, typed-data assembly and the order hash all come from the SDK rather than a hand-rolled reimplementation of the protocol's encoding.
- **wagmi does the signing.** The SDK signs through ethers while the rest of the app runs on wagmi, so the flow stops at `buildTypedData()` and hands the structure to `signTypedDataAsync`. One wallet stack, no duplicate provider.
- **Both networks from one build.** BNB mainnet (chain 56) and testnet (97) are selectable at runtime, with the contract set and RPC swapped per chain.
- **RainbowKit for wallet discovery**, which keeps connection handling out of the application code entirely.
- **shadcn/ui primitives** for the trading surface, composable enough to build an orderbook and an order form without a design-system dependency.

## Implementation

### Order lifecycle
`OrderBuilder.make(chainId)` produces the limit or market order amounts, builds the order structure, assembles the EIP-712 typed data and computes the hash. wagmi signs the typed data, and the signed order is posted to the CLOB API. Cancellation and order history run through the same client, with a Created column on the orders view for age.

### Approvals across five contracts
Trading requires ERC-20 approval on Binance-Peg USDT as collateral plus ERC-1155 `setApprovalForAll` on the exchange contracts. The mainnet set covers the CTF Exchange, the negative-risk CTF Exchange, both yield-bearing variants, and the Conditional Tokens contract; testnet carries its own addresses for the subset that exists there. The approval hook reads current allowance state per contract before prompting, so an already-approved trader is not asked twice.

### Positions and redemption
Positions read on-chain state from BSC with transaction links out to BscScan. Redemption of resolved positions runs through the SDK, and redemption history is queried separately so a settled position remains traceable after it leaves the active list.

### Network-aware configuration
A network provider holds the active chain, and the contract addresses, RPC endpoint and SDK `ChainId` all derive from it. Mainnet additionally requires an API key held in local storage, which gates the trading surface until configured.

## Outcome
- **Live at `predictdotfun.vercel.app`**, covering markets, market detail, orders, positions and settings.
- **6,333 LOC of TypeScript/TSX** across 57 files on Next.js 15 App Router with React 19.
- Full order lifecycle against the official SDK: limit and market orders, EIP-712 signing through wagmi, cancellation, history, and redemption.
- Dual-network support with per-chain contract sets, verified against the deployed BNB mainnet exchange and Conditional Tokens contracts.

## Technologies
Next.js 15 · React 19 · TypeScript · `@predictdotfun/sdk` · wagmi · viem · ethers · RainbowKit · TanStack Query · shadcn/ui · Radix UI · Tailwind CSS · BNB Chain · Vercel
