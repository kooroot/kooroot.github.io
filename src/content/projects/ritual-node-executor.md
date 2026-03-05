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

## Overview
A Shell script project that automates the entire process of Ritual Network's Infernet node installation, configuration, and contract deployment. Supports Linux (Ubuntu-based) and macOS environments, building the infrastructure that allows smart contracts to request and consume AI/ML model inference on-chain.

## Key Features

### Full Stack Automation
- Docker / Docker Compose auto-installation and configuration
- Python3, pip3, infernet-cli, infernet-client auto-installation
- Foundry installation with anvil process management

### Node Configuration
- Automatic cloning of infernet-container-starter repository
- Auto-modification of config.json, Deploy.s.sol, docker-compose.yaml
- Automatic Registry address and node image configuration
- Private Key input-based node setup

### Contract Deployment
- Automatic `make deploy-container` execution in screen session
- Forge library installation and project contract deployment
- Auto-extraction of new contract address and CallContract.s.sol update
- Final test execution via `make call-contract`

## Technologies
- **Scripting**: Shell (Bash)
- **Smart Contracts**: Solidity, Foundry (Forge)
- **Runtime**: Python3, infernet-cli
- **Container**: Docker, Docker Compose
- **Network**: Ritual Infernet (Base Chain)

## Results
Successfully operated Infernet nodes on Base chain, processing on-chain AI inference requests and delivering results to smart contracts.
