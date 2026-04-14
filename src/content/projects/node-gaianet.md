---
title: Gaianet Node Executor
description: Automated Gaianet AI Node Setup & Management Script
image: /images/global-network.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Linux", "macOS", "AI"]
github: https://github.com/kooroot/Node_Executor-Gaianet
date: 2025-02-20
---

## Problem
Gaianet's decentralized AI inference network requires operators to run edge nodes that serve LLM inference requests and register Node ID / Device ID against the network's web dashboard. The stock install flow mixes package installation, `gaianet init`, and a long-running foreground process across both Ubuntu/Debian and macOS — error-prone to repeat and difficult to keep alive across SSH disconnects.

## Approach
- **OS-branched scripts** instead of a single conditional blob: dedicated entry points for Linux (apt) and macOS (brew) to keep package-manager logic isolated.
- **screen-based supervision** so `gaianet start` survives terminal disconnects and remains attachable for log inspection.
- **Official installer passthrough**: wrap Gaianet's `install.sh` rather than re-implementing the bootstrap, minimizing drift against upstream releases.
- **Explicit init step** (`gaianet init`) before start, so model/config download failures surface before the screen session detaches.

## Implementation
Bash scripts targeting Ubuntu/Debian and macOS. The Linux path updates apt, installs prerequisites, runs Gaianet's official `install.sh`, executes `gaianet init`, then opens a screen session running `gaianet start` with auto-attach for live log tailing. The macOS path mirrors this via Homebrew. After startup, the operator copies the printed Node ID / Device ID into the Gaianet web dashboard to register the node against their account.

## Outcome
- One-command bring-up across both supported OSes with the long-running process correctly detached under screen.
- Real-time log visibility preserved via screen attach, enabling post-mortem on inference failures without re-running setup.
- Node registered to the Gaianet dashboard and serving AI inference requests on the network.

## Technologies
- **Scripting**: Shell (Bash)
- **Infrastructure**: Linux (Ubuntu/Debian), macOS
- **Service**: Gaianet AI Node
- **Management**: screen session
