---
title: Nexus Node Executor
description: Automated Nexus Node Setup & Management Script
image: /images/server-node.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Rust", "Linux", "Screen"]
github: https://github.com/kooroot/Node_Executor-Nexus
date: 2025-01-15
---

## Problem
Nexus's **zkVM testnet** (Testnet 3) relies on operator-run prover nodes to generate zero-knowledge proofs for submitted computations. The native CLI is Rust-based and requires a Cargo toolchain, a linked Node ID tied to a web account, and a long-running foreground process that drops offline if the shell exits. The stock install path has no supervision, no OS abstraction, and no documented upgrade procedure.

## Approach
- **OS auto-detection** for macOS and Ubuntu to dispatch the correct package prerequisites and Rust install path.
- **rustup bootstrap** when no Cargo toolchain is present, rather than assuming system Rust.
- **screen session as supervisor** so the prover process persists across disconnects and remains log-attachable.
- **Separate upgrade scripts per OS** to keep version bumps mechanical — no need to re-run the full install.

## Implementation
Bash driver that detects OS, installs Rust via `rustup` if missing, then pulls the Nexus CLI via `curl`. The installer prompts for Node ID (obtained from the Nexus web account) and launches the prover inside a screen session for background execution and log tailing. Dedicated Linux and macOS upgrade scripts handle CLI version bumps without touching the rest of the environment. Targets Nexus Testnet 3.

## Outcome
- Prover process stays alive across SSH drops with logs available on-demand via screen attach.
- Upgrade path decoupled from install path, enabling in-place version bumps across the testnet's rolling releases.
- Node registered against web account and actively generating proofs for Testnet 3 submissions.

## Technologies
- **Scripting**: Shell (Bash)
- **Runtime**: Rust, Cargo
- **Infrastructure**: Linux, macOS, screen
- **Network**: Nexus Testnet
