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

## Problem
Gensyn's **RL-Swarm** protocol coordinates distributed reinforcement learning training across operator-provided GPUs. Onboarding a node involves Python environment setup, optional Docker containerization, and correct NVIDIA runtime wiring for GPU passthrough — a stack that fragments badly across Ubuntu, Intel macOS, and Apple Silicon. Operators without a uniform bootstrap path routinely hit CUDA/driver mismatches that silently drop them from training rounds.

## Approach
- **Dual deployment modes** selectable via `--local` / `--docker` flags: native venv for dev iteration, container for production isolation.
- **Automatic GPU detection** against a known-good list (RTX 3090/4090, A100, H100) to short-circuit setup on unsupported hardware before wasting a training round.
- **Per-OS package manager dispatch** (apt on Ubuntu 18.04+, brew on macOS) with Docker + Docker Compose auto-provisioning.
- **Docker runtime flags conditioned on GPU presence** so the same script works for CPU-only experimentation and GPU production.

## Implementation
Bash driver that detects OS and CUDA-capable GPU, then either clones the RL-Swarm repository into a Python virtual environment for local execution, or pulls and runs the container image with `--gpus all` when an NVIDIA device is detected. Docker Compose handles multi-service orchestration; `nvidia-smi` is used as the GPU probe. CLI flags let operators force a specific mode for CI or headless installs.

## Outcome
- Single script covering Ubuntu + macOS (Intel and Apple Silicon) with uniform bring-up behavior.
- GPU fast-fail path eliminated the most common class of silent training dropouts — unsupported cards fail at setup, not mid-round.
- Node successfully participated in RL-Swarm training rounds with GPU acceleration on supported hardware.

## Technologies
- **Scripting**: Shell (Bash)
- **Container**: Docker, Docker Compose
- **Runtime**: Python (venv)
- **GPU**: NVIDIA CUDA
- **Network**: Gensyn RL-Swarm
