---
title: Privasea Node Executor
description: Automated Privasea FHE AI Node Setup & Dashboard Integration
image: /images/ai-robot.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Docker", "FHE", "Arbitrum"]
github: https://github.com/kooroot/Node_Executor-Privasea
date: 2024-03-20
---

## Problem
Privasea is a **Fully Homomorphic Encryption (FHE)** AI network where operator-run Acceleration Nodes perform machine learning inference on encrypted inputs without decrypting them. Rewards are settled on Arbitrum Sepolia and bound to a node address derived from an encrypted keystore. The native onboarding mixes Docker image pulls, keystore password generation, and dashboard-side wallet linking — with the node address only discoverable via `docker logs` grep after first start.

## Approach
- **Docker-first deployment**: the Acceleration Node runs as a container to isolate the FHE runtime and its dependencies from the host.
- **OS-branched installers** for Linux and macOS to handle Docker install path differences.
- **Keystore password auto-generation** on first run, so the operator never types one and the password is captured to a known file for later dashboard linking.
- **screen session auto-attach** so the operator lands on the live Docker log stream and can extract the printed node address for wallet binding.

## Implementation
Bash scripts targeting Linux and macOS. Each installs Docker if missing, pulls the Privasea Acceleration Node image, generates the keystore password on initial setup, and launches the container inside a screen session. After boot, the operator attaches to the session, extracts the node address from Docker logs, and links it against their Arbitrum Sepolia wallet on the Privasea web dashboard to activate reward accrual.

## Outcome
- Stable node operation on Privasea testnet, contributing to encrypted AI inference tasks across the network.
- Node address and keystore password captured reliably on first boot, eliminating the manual log-grep step from the default onboarding.
- Dashboard wallet linkage completed; node eligible for FHE inference task rewards on Arbitrum Sepolia.

## Technologies
- **Scripting**: Shell (Bash)
- **Container**: Docker
- **Encryption**: FHE (Fully Homomorphic Encryption)
- **Network**: Privasea AI Network, Arbitrum Sepolia
