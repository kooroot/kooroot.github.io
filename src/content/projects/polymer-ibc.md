---
title: Polymer IBC Cross-Rollup
description: IBC-enabled Cross-Rollup Communication via Polymer Hub
image: /images/global-network.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Solidity", "Foundry", "Hardhat", "IBC"]
github: https://github.com/kooroot/Polymer
date: 2024-03-12
---

## Problem
Cross-rollup messaging between Ethereum L2s typically relies on third-party bridges with their own trust assumptions, fragmenting liquidity and composability. Applying IBC — the Cosmos-native messaging protocol — to Ethereum rollups through Polymer Hub offered a way to exercise a more formally specified messaging model in the EVM environment, but required hands-on integration to evaluate.

## Approach
- **Polymer vIBC core contracts** as the on-chain IBC endpoint on each rollup.
- **Optimism Sepolia and Base Sepolia** as the two rollup endpoints, chosen to exercise cross-OP-Stack messaging.
- **Dual toolchain** (Hardhat + Foundry) to validate build and test paths against both ecosystems.
- **Alchemy RPC + Blockscout** for deployment and post-deployment verification.

## Implementation
Implemented IBC-enabled Solidity contracts using Polymer's **vIBC** stack for cross-rollup communication between Optimism Sepolia and Base Sepolia. The contract architecture integrates with Polymer Hub for cross-chain messaging, with the project configured so both Hardhat and Foundry build and test the same source. Alchemy RPC endpoints and Blockscout explorer support were wired in for deployment and verification.

## Findings
- **IBC on EVM rollups via Polymer** is viable end-to-end today for message passing between OP Stack chains.
- **vIBC contracts** are the critical integration surface — correct channel and port configuration dominates the integration cost.
- **Dual-toolchain parity** (Hardhat + Foundry) is achievable and useful for reaching contributors from either ecosystem.
- Cross-rollup messaging via a formally specified protocol is a practical alternative to ad-hoc bridge contracts for interop between OP Stack rollups.

## Technologies
- **Smart Contracts**: Solidity, Foundry, Hardhat
- **Protocol**: IBC (Inter-Blockchain Communication)
- **Infrastructure**: Polymer Hub, vIBC core contracts
- **Networks**: Optimism Sepolia, Base Sepolia
