---
title: Smart Wallet & Account Abstraction
description: ERC-4337 Account Abstraction research and smart wallet implementation
image: /images/circuit-board.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Solidity", "ERC-4337", "TypeScript", "Next.js", "Wagmi"]
github: https://github.com/graylab-team/smart-wallet
date: 2025-02-10
---

## Problem
EOA-only wallets force every user into the same signing model: one key, one signature, gas paid in the native asset. ERC-4337 decouples the account from the signer, enabling gas sponsorship, batched operations, and social recovery — but the UserOperation flow, bundler/EntryPoint/Paymaster separation, and competing account implementations (Safe, Kernel, Biconomy) are easier to misunderstand than to use. A working proof-of-concept was needed to ground product decisions at Graylab in firsthand behavior rather than spec reading.

## Approach
- **Build against real bundler infrastructure** rather than mocked EntryPoints, since the bundler-mempool interaction and Paymaster validation rules are where most implementation surprises live.
- **Compare multiple smart account implementations** (Safe, Kernel, Biconomy) to identify patterns worth adopting versus protocol-specific quirks.
- **Evaluate signature aggregation** with multi-sig and session keys in mind, since both are primary drivers of real product demand for AA.
- **Contrast with Klaytn's native account-update model** to understand tradeoffs between protocol-level account flexibility and contract-level abstraction.
- **Wagmi + Next.js** for the client so the demo matches the stack used by downstream product teams.

## Implementation

### ERC-4337 Standard
- Studied the UserOperation flow: bundler → EntryPoint → wallet contract
- Analyzed Paymaster patterns for gas sponsorship and ERC-20 gas payments
- Evaluated different smart account implementations (Safe, Kernel, Biconomy)
- Researched signature aggregation for multi-sig and session key use cases

### Smart Wallet Proof-of-Concept
- Built smart wallet interface using Next.js and Wagmi
- Integrated with ERC-4337 bundler infrastructure
- Implemented custom EntryPoint and account contract interactions
- Tested batched transaction execution and gas estimation

### Klaytn Account System
- Researched Klaytn's native account update mechanism
- Implemented account key rotation and multi-sig configuration
- Compared Klaytn's account model with ERC-4337 approach

## Outcome
- Working proof-of-concept demonstrating gas sponsorship, batched transactions, and social recovery under ERC-4337.
- Comparative analysis of Safe, Kernel, and Biconomy smart account implementations.
- Side-by-side evaluation of ERC-4337 versus Klaytn's native account-update model.
- Hands-on findings that informed wallet product development decisions at Graylab.

## Technologies
- **Smart Contracts**: Solidity, ERC-4337 EntryPoint
- **Frontend**: Next.js, TypeScript, Wagmi
- **Networks**: Ethereum, Klaytn
- **Infrastructure**: Bundler, Paymaster
