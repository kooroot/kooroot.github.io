---
title: Gensyn RL-Swarm Node Executor
description: Automated Gensyn RL-Swarm Node Setup with GPU Support
image: /images/circuit-board.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Docker", "Python", "CUDA"]
github: https://github.com/kooroot/Node_Executor-Gensyn
date: 2025-02-10
---

## Overview
A script project that automates the installation of Gensyn RL-Swarm Node on Linux (Ubuntu-based) and macOS environments. It supports both local installation and Docker execution methods, and includes automatic NVIDIA GPU detection.

## Key Features

### Multi-Platform Support
- Ubuntu (18.04 LTS+) and macOS (Intel / Apple Silicon) support
- Automatic package manager selection per OS (apt / brew)
- Docker / Docker Compose auto-installation

### Flexible Deployment
- Local install: Clone via Git and run in Python virtual environment
- Docker execution: Container-based execution with automatic GPU support detection
- CLI options for direct installation method selection (`--local`, `--docker`)

### GPU Detection
- Automatic NVIDIA GPU presence detection
- Supported GPU model verification (RTX 3090, RTX 4090, A100, H100)
- Automatic Docker run options based on GPU availability

## Technologies
- **Scripting**: Shell (Bash)
- **Container**: Docker, Docker Compose
- **Runtime**: Python (venv)
- **GPU**: NVIDIA CUDA
- **Network**: Gensyn RL-Swarm
