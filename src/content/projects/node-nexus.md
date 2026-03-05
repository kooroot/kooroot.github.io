---
title: Nexus Node Executor
description: Automated Nexus Node Setup & Management Script
image: /images/pic03.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Rust", "Linux", "Screen"]
github: https://github.com/kooroot/Node_Executor-Nexus
date: 2025-01-15
---

## Overview
A Shell script project that automates the installation and execution of Nexus Node. It automatically detects Mac and Linux environments to perform the appropriate setup process, and supports background execution and log monitoring via screen sessions.

## Key Features

### Automated Environment Setup
- Automatic OS detection (Mac / Linux Ubuntu)
- Auto-installs Rust/Cargo via rustup if not present
- screen session-based background execution and persistence

### Nexus CLI Installation
- One-click Nexus CLI installation via `curl`
- Node ID configuration and web account linking guide
- Testnet 3 support script included

### Session Management
- Shell persistence after installation via screen session
- Post-installation command execution and log monitoring
- Separate upgrade scripts provided for Linux and Mac

## Technologies
- **Scripting**: Shell (Bash)
- **Runtime**: Rust, Cargo
- **Infrastructure**: Linux, macOS, screen
- **Network**: Nexus Testnet
