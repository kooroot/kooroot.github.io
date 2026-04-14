---
title: Soundness Layer Node Executor
description: Automated Soundness Layer Testnet CLI Setup Script
image: /images/circuit-board.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Linux", "macOS"]
github: https://github.com/kooroot/soundness_generator
date: 2025-05-06
---

## Problem
The **Soundness Layer** testnet requires operators to generate a local key pair and register the public key against the testnet to participate. The stock onboarding assumes a specific shell (bash vs zsh) and OS combination, and silently writes env vars to the wrong rc file when run on macOS's zsh default — causing the CLI to be unreachable on the next shell session.

## Approach
- **OS + shell co-detection**: not just Ubuntu/macOS, but bash vs zsh inside each, so PATH and env exports land in the correct rc file.
- **Single-command bootstrap**: one script installs dependencies, fetches the Soundness CLI, and generates the registration key pair.
- **Local key storage with clear registration prompts**: the script prints the exact public key string and the registration URL rather than silently writing artifacts.

## Implementation
Bash script that detects Ubuntu vs macOS and bash vs zsh, installs required dependencies, pulls the Soundness CLI, and generates a fresh key pair for testnet participation. Environment exports are written to `~/.bashrc` or `~/.zshrc` based on the detected shell. The script prints registration instructions with the generated public key so the operator can complete testnet enrollment via the web interface.

## Outcome
- Bootstrap works out-of-the-box on macOS zsh (the historical failure case) and Ubuntu bash.
- Key pair generated locally, never leaving the host; public key delivered to the operator for testnet registration.
- Node registered against the Soundness Layer testnet.

## Technologies
- **Scripting**: Shell (Bash)
- **Infrastructure**: Linux (Ubuntu), macOS
- **Network**: Soundness Layer Testnet
