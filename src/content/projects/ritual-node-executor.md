---
title: Ritual Node Executor
description: Automated Ritual Infernet Node Setup & Contract Deployment
image: /images/blockchain-network.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Docker", "Foundry", "Python", "Solidity"]
github: https://github.com/kooroot/Node_Executor-Ritual
date: 2024-03-20
---

## Problem
Ritual's **Infernet** is an on-chain AI/ML inference network deployed on Base, letting smart contracts request model inference and receive verified results. Operating a node end-to-end requires a Docker runtime, the `infernet-cli` / `infernet-client` Python tooling, Foundry for contract work, a cloned `infernet-container-starter` scaffold with three config files to edit in lockstep (`config.json`, `Deploy.s.sol`, `docker-compose.yaml`), and a two-stage deploy-then-call verification. Any step skipped leaves a node that registers but never fulfills inference requests.

## Approach
- **Full-stack automation across the Docker / Python / Foundry / Solidity boundary**: one script owns everything from `apt install` through `make call-contract`.
- **In-place config rewriting** of `config.json`, `Deploy.s.sol`, and `docker-compose.yaml` to keep Registry address, node image, and private key synchronized — the most common manual-onboarding failure mode.
- **screen-wrapped `make deploy-container`** so the long-running container build survives SSH drops.
- **Auto-extraction of the deployed contract address** and substitution into `CallContract.s.sol`, followed by a `make call-contract` smoke test to confirm the node is reachable from on-chain callers before declaring success.

## Implementation
Bash driver targeting Ubuntu and macOS. Installs Docker + Docker Compose, Python3 + pip3, `infernet-cli`, `infernet-client`, Foundry, and manages the anvil process. Clones `infernet-container-starter` and patches `config.json`, `Deploy.s.sol`, and `docker-compose.yaml` with the provided private key, Registry address, and node image. Runs `make deploy-container` inside a screen session, installs Forge libraries, deploys the project contract, extracts the new contract address, patches it into `CallContract.s.sol`, and executes `make call-contract` as a live end-to-end test.

## Outcome
- Infernet node operational on Base chain, processing on-chain AI inference requests and returning results to smart contracts.
- Deploy-then-call smoke test caught misconfigured Registry addresses and stale private keys at setup time rather than during live inference requests.
- Config-file drift across `config.json` / `Deploy.s.sol` / `docker-compose.yaml` eliminated as a failure class.

## Technologies
- **Scripting**: Shell (Bash)
- **Smart Contracts**: Solidity, Foundry (Forge)
- **Runtime**: Python3, infernet-cli
- **Container**: Docker, Docker Compose
- **Network**: Ritual Infernet (Base Chain)
