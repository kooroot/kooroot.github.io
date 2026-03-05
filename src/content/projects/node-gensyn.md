---
title: Gensyn RL-Swarm Node Executor
description: Automated Gensyn RL-Swarm Node Setup with GPU Support
image: /images/pic03.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Docker", "Python", "CUDA"]
github: https://github.com/kooroot/Node_Executor-Gensyn
date: 2025-02-10
---

## Overview
Linux(Ubuntu 계열)와 macOS 환경에서 Gensyn RL-Swarm Node의 설치를 자동화하는 스크립트 프로젝트입니다. 로컬 설치와 Docker 실행 두 가지 방식을 지원하며, NVIDIA GPU 자동 감지 기능을 포함합니다.

## Key Features

### Multi-Platform Support
- Ubuntu (18.04 LTS+) 및 macOS (Intel / Apple Silicon) 지원
- OS별 패키지 매니저 자동 선택 (apt / brew)
- Docker / Docker Compose 자동 설치

### Flexible Deployment
- 로컬 설치: Git 클론 후 Python 가상환경에서 실행
- Docker 실행: 컨테이너 기반 실행 (GPU 지원 여부 자동 감지)
- CLI 옵션으로 설치 방식 직접 지정 가능 (`--local`, `--docker`)

### GPU Detection
- NVIDIA GPU 존재 여부 자동 감지
- 지원 GPU 모델 확인 (RTX 3090, RTX 4090, A100, H100)
- GPU 유무에 따른 Docker 실행 옵션 자동 설정

## Technologies
- **Scripting**: Shell (Bash)
- **Container**: Docker, Docker Compose
- **Runtime**: Python (venv)
- **GPU**: NVIDIA CUDA
- **Network**: Gensyn RL-Swarm
