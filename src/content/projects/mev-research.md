---
title: MEV Research & Implementation
description: Maximal Extractable Value research with Flashbots bundle submission
image: /images/code-screen.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Ethereum", "Flashbots", "MEV", "JavaScript", "Solidity"]
github: https://github.com/graylab-team/MEV_HELLO_WORLD
date: 2024-11-20
---

## Problem
MEV extraction drives a large share of Ethereum's economic activity, but most explanations stop at taxonomy and never exercise the submission pipeline end-to-end. Understanding bundle semantics, simulation, inclusion verification, and mempool monitoring required a working implementation rather than another written overview.

## Approach
- **Taxonomy before tooling**: map arbitrage, liquidations, sandwich, and backrunning before touching infrastructure.
- **Flashbots RPC** as the submission path for atomic bundles targeting specific block numbers.
- **Custom test contracts** (MEV + Counter) to make bundle execution observable without relying on live opportunities.
- **Mempool WebSocket feeds** to study pending-tx patterns and gas dynamics.
- **Goerli + mainnet** for correctness testing and real-conditions validation.

## Implementation
For **MEV fundamentals**, studied the MEV taxonomy (arbitrage, liquidations, sandwich attacks, backrunning), analyzed the Flashbots ecosystem (MEV-Boost, block builders, searcher workflows), and evaluated MEV impact on users and protocol-level mitigations. For **Flashbots implementation**, built a bundle submission pipeline over Flashbots RPC, implemented atomic transaction bundles targeting specific block numbers, deployed custom MEV and Counter contracts for testing bundle execution, and handled bundle simulation, submission, and inclusion verification. For **mempool monitoring**, set up transaction-monitoring infrastructure, analyzed pending-transaction patterns for opportunity detection, and studied transaction ordering and gas-price dynamics.

## Findings
- **Atomicity at the bundle level** — not the transaction level — is what makes MEV strategies viable; simulation before submission is mandatory.
- **Inclusion verification** is nontrivial: a submitted bundle can be dropped silently and must be reconciled against actual block contents.
- **Mempool is a noisy signal** — most pending transactions are not MEV opportunities, and filter design determines tractability.
- **Protocol-level mitigations** (private RPCs, commit-reveal, batch auctions) meaningfully reduce user-side MEV exposure.

## Technologies
- **MEV Infrastructure**: Flashbots RPC, MEV-Boost
- **Smart Contracts**: Solidity, custom MEV contracts
- **Monitoring**: JavaScript, WebSocket mempool feeds
- **Networks**: Ethereum mainnet, Goerli testnet
