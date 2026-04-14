---
title: Pipe Network Node Executor
description: Automated Pipe Network Node Setup & Configuration Script
image: /images/server-node.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Linux", "Docker", "Solana"]
github: https://github.com/kooroot/Node_Executor-Pipenetwork
date: 2025-01-20
---

## Problem
Pipe Network operates a **Solana-settled CDN / edge-delivery network** where operator nodes contribute bandwidth and cache storage in exchange for rewards paid to a linked Solana pubkey. The node has hard system requirements (4GB+ RAM, 100GB+ disk) that must be validated upfront, plus a referral-code + reward-wallet configuration step that, if skipped or mis-ordered, permanently detaches rewards from the operator's wallet.

## Approach
- **Preflight hardware validation**: RAM and disk are checked against minimums before touching the binary, failing fast on under-provisioned hosts.
- **Solana pubkey as reward address**: integrated as a first-class config step rather than an afterthought, to prevent orphaned rewards.
- **screen-based supervision** for the long-running node process.
- **Self-referral code generation** surfaced in the script so operators running multiple nodes can chain referrals without leaving the terminal.

## Implementation
Bash script that runs on Ubuntu 18.04+. Verifies OS, RAM, and disk against Pipe Network's minimums, installs `curl` and `screen`, downloads the Pipe Network binary, and walks the operator through configuring Solana reward pubkey, referral code, RAM/disk allocations, and cache directory. Launches the node inside a screen session for background execution and generates a self-referral code for downstream node deployments.

## Outcome
- Under-provisioned hosts rejected at preflight, avoiding the common "node runs but is never rewarded" silent failure mode.
- Reward wallet correctly bound on first boot; Solana pubkey pre-validated before the node starts serving traffic.
- Node contributing bandwidth to the Pipe Network edge layer and accruing rewards to the configured Solana address.

## Technologies
- **Scripting**: Shell (Bash)
- **Infrastructure**: Linux (Ubuntu 18.04+), screen
- **Blockchain**: Solana (wallet integration)
- **Network**: Pipe Network
