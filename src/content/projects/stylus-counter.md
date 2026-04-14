---
title: Arbitrum Stylus Counter dApp
description: Counter DApp Built with Rust on Arbitrum Stylus
image: /images/circuit-board.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Rust", "Arbitrum Stylus", "React", "TypeScript"]
github: https://github.com/kooroot/stylus_counter
date: 2025-07-11
---

## Problem
Arbitrum Stylus introduces a second contract language (Rust compiled to WASM) on a chain that has only ever run Solidity. Understanding Stylus's toolchain, deployment model, and frontend integration required building a small end-to-end dApp rather than reading marketing material — specifically to confirm that a Rust contract is indistinguishable from a Solidity one from the client's perspective.

## Approach
- **Counter as the minimum viable contract** — enough surface to exercise storage, entrypoints, and events without hiding toolchain issues.
- **cargo-stylus** as the canonical build-and-deploy path for Rust contracts.
- **Arbitrum testnet deployment** with public verification to validate the full pipeline.
- **React + TypeScript frontend** with standard Web3 wallet integration, to confirm client-side parity with Solidity contracts.
- **Docker + Foundry** where useful for reproducible builds and interaction scripting.

## Implementation
Wrote a counter contract in **Rust** using the **Stylus** framework, built and deployed it with the **cargo-stylus** toolchain, and shipped a testnet deployment with public verification. On the client side, built a React application for counter interaction with Web3 wallet connection for transaction signing and real-time contract-state display driven by standard read calls.

## Outcome
- Working Rust-on-Arbitrum dApp with a deployed, verified contract and functioning frontend.
- **cargo-stylus pipeline** validated end-to-end: build, deploy, verify, interact.
- Confirmed that, from the **frontend's perspective**, a Stylus Rust contract is indistinguishable from a Solidity contract — same ABI shape, same wallet flow.
- Reference implementation for subsequent Stylus work.

## Technologies
- **Smart Contract**: Rust, Arbitrum Stylus, cargo-stylus
- **Frontend**: React, TypeScript
- **Tools**: Foundry, Docker
- **Network**: Arbitrum Testnet
