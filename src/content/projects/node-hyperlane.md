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
Hyperlane 노드의 자동 설치 및 구성을 위한 Bash 스크립트 프로젝트입니다. Base 체인 기준으로 작성되었으며, Linux와 macOS 환경 모두에서 동작합니다. screen 세션 내에서 안정적으로 실행되어 터미널 연결이 끊겨도 작업이 유지됩니다.

## Key Features

### Automated Environment Setup
- NVM & Node.js 20 자동 설치
- Foundry 설치 및 환경 변수 자동 설정
- Hyperlane CLI 설치 및 Docker 이미지 Pull

### Wallet Management
- Foundry `cast wallet new` 명령을 통한 지갑 자동 생성
- Private Key 자동 추출 및 파일 저장
- 커스텀 지갑 연동 스크립트 별도 제공

### Validator Node Deployment
- Validator 이름 및 Base 체인 RPC URL 설정
- Docker 컨테이너 기반 Hyperlane Agent 실행
- 데이터베이스 디렉토리 마운트 및 관리

## Technologies
- **Scripting**: Shell (Bash)
- **Runtime**: Node.js 20, NVM
- **Tools**: Foundry (cast), Hyperlane CLI
- **Container**: Docker
- **Network**: Hyperlane (Base Chain)
