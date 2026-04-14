---
title: Hyperlane Node Executor
description: Automated Hyperlane Validator Node Setup on Base Chain
image: /images/server-node.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Docker", "Node.js", "Foundry"]
github: https://github.com/kooroot/Node_Executor-Hyperlane
date: 2025-02-15
---

## Problem
Hyperlane validators attest to inter-chain messages by signing checkpoints for an origin chain — in this case **Base**. Running one end-to-end requires Node.js 20, the Hyperlane CLI, Foundry (for `cast wallet new`), a Docker runtime for the Agent image, and careful private-key handling. The stock setup docs spread this across five tools and two environments (Linux + macOS), and any misconfigured RPC or missing env var silently degrades checkpoint signing.

## Approach
- **screen-wrapped execution** so the install process survives disconnects over long-running Docker pulls.
- **NVM-managed Node.js 20** rather than system Node, avoiding conflicts with host toolchains.
- **Foundry-generated validator wallet** via `cast wallet new`, with the private key persisted to a controlled file path; a parallel script accepts an externally provided wallet for operators who prefer BYO-key.
- **Docker container for the Agent** with mounted database volume to preserve checkpoint state across restarts.

## Implementation
Bash driver that installs NVM + Node.js 20, Foundry, and the Hyperlane CLI, then pulls the Agent Docker image. It generates a new validator wallet via `cast wallet new`, extracts and stores the private key, prompts for validator name and Base RPC URL, and launches the Hyperlane Agent container with the database directory mounted for persistence. Runs on Linux and macOS; the whole flow is wrapped in a screen session to tolerate SSH drops.

## Outcome
- One-shot validator bring-up on Base chain with persistent checkpoint storage.
- Both generated-wallet and BYO-wallet flows supported, covering fresh deployments and key-migration scenarios.
- Validator successfully signed Hyperlane checkpoints for the Base origin chain.

## Technologies
- **Scripting**: Shell (Bash)
- **Runtime**: Node.js 20, NVM
- **Tools**: Foundry (cast), Hyperlane CLI
- **Container**: Docker
- **Network**: Hyperlane (Base Chain)
