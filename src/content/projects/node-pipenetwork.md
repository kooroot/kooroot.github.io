---
title: Pipe Network Node Executor
description: Automated Pipe Network Node Setup & Configuration Script
image: /images/pic03.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Linux", "Docker", "Solana"]
github: https://github.com/kooroot/Node_Executor-Pipenetwork
date: 2025-01-20
---

## Overview
A Shell script project that fully automates the installation and configuration of Pipe Network Node on Linux (Ubuntu-based) environments. It handles everything from system requirements validation to binary download and screen session management in a single run.

## Key Features

### System Validation
- Automatic OS detection and Linux environment verification
- RAM (minimum 4GB) and disk space (minimum 100GB) requirements check
- Automatic dependency package installation (curl, screen)

### Automated Deployment
- Pipe Network binary download and configuration
- Solana public key-based reward wallet integration
- Referral code application and status verification

### Node Management
- Screen session-based background execution
- Configurable RAM, disk usage, and cache directory settings
- Self-referral code generation support

## Technologies
- **Scripting**: Shell (Bash)
- **Infrastructure**: Linux (Ubuntu 18.04+), screen
- **Blockchain**: Solana (wallet integration)
- **Network**: Pipe Network
