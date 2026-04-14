---
title: UniswapV2 Clone
description: Full-stack Uniswap V2 DEX Clone with Smart Contracts & Frontend
image: /images/defi-crypto.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Solidity", "Foundry", "React", "wagmi", "ethers.js"]
github: https://github.com/kooroot/UniswapV2-Clone-Contract
date: 2025-04-09
---

## Problem
Reading the Uniswap V2 core and periphery contracts explains what the protocol does, but not the end-to-end experience of deploying it, connecting a wallet, and executing swaps against a locally-forked chain. A full-stack clone — contracts plus a working frontend against Anvil — closes that gap and surfaces the integration details (approvals, slippage, deadline handling) that pure contract study hides.

## Approach
- **Full V2 pair/factory/router rebuild** rather than a trimmed-down AMM, so that constant-product math, LP minting, and router-level slippage protection were all exercised faithfully.
- **Foundry for contracts, Vite/React for the UI**: Kept contract work in Foundry for native Solidity testing and used a modern frontend stack for fast iteration on the swap UX.
- **Anvil-local instead of testnet**: Ran everything against Anvil (chain 31337) so deployment and state could be reset instantly, making UX bugs cheap to reproduce.
- **wagmi + ethers.js**: Used wagmi for connection/account state and ethers for contract calls, matching production DeFi frontend patterns.

## Implementation

### Smart Contracts
Full Uniswap V2 contract implementation in Solidity with Factory and Router pattern architecture and the constant product formula (`x * y = k`) for token swaps. Built and tested with Foundry (Forge, Anvil).

### Frontend Interface
Token swap UI with real-time price information, built on React + Vite + wagmi + ethers.js. MetaMask integration targets the local Anvil network (Chain ID 31337), with TailwindCSS for styling.

## Outcome
- Working end-to-end Uniswap V2 clone: factory, pair, router contracts plus a functioning swap frontend.
- MetaMask-connected UI executing swaps against a local Anvil chain, exercising the full approval/slippage/deadline path.
- Forge test suite covering pair and router behavior alongside the frontend integration.

## Technologies
- **Smart Contracts**: Solidity, Foundry, OpenZeppelin
- **Frontend**: React, Vite, wagmi, ethers.js, TailwindCSS
- **Testing**: Forge test suite, Anvil local chain
