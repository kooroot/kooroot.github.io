---
title: Hyperlane Node Executor
description: Automated Hyperlane Validator Node Setup on Base Chain
image: /images/pic03.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Docker", "Node.js", "Foundry"]
github: https://github.com/kooroot/Node_Executor-Hyperlane
date: 2025-02-15
---

## Overview
A Bash script project for automated installation and configuration of Hyperlane nodes. Built for Base chain, it works on both Linux and macOS environments. The script runs within a screen session for stability, ensuring work continues even if the terminal connection is lost.

## Key Features

### Automated Environment Setup
- NVM & Node.js 20 auto-installation
- Foundry installation with automatic environment variable configuration
- Hyperlane CLI installation and Docker image pull

### Wallet Management
- Automatic wallet generation via Foundry `cast wallet new`
- Auto-extraction of Private Key with file storage
- Separate script provided for custom wallet integration

### Validator Node Deployment
- Validator name and Base chain RPC URL configuration
- Docker container-based Hyperlane Agent execution
- Database directory mount and management

## Technologies
- **Scripting**: Shell (Bash)
- **Runtime**: Node.js 20, NVM
- **Tools**: Foundry (cast), Hyperlane CLI
- **Container**: Docker
- **Network**: Hyperlane (Base Chain)
