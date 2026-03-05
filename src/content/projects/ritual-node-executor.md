---
title: Ritual Node Executor
description: Automated Ritual Infernet Node Setup & Contract Deployment
image: /images/pic08.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Docker", "Foundry", "Python", "Solidity"]
github: https://github.com/kooroot/Node_Executor-Ritual
date: 2024-03-20
---

## Overview
Ritual Network의 Infernet 노드 설치, 설정, 컨트랙트 배포까지 전 과정을 자동화하는 Shell 스크립트 프로젝트입니다. Linux(Ubuntu 계열)와 macOS 환경을 지원하며, 스마트 컨트랙트가 AI/ML 모델 추론을 온체인에서 요청하고 소비할 수 있는 인프라를 구축합니다.

## Key Features

### Full Stack Automation
- Docker / Docker Compose 자동 설치 및 설정
- Python3, pip3, infernet-cli, infernet-client 자동 설치
- Foundry 설치 및 anvil 프로세스 관리

### Node Configuration
- infernet-container-starter 리포지토리 자동 클론
- config.json, Deploy.s.sol, docker-compose.yaml 자동 수정
- Registry 주소 및 노드 이미지 자동 설정
- Private Key 입력 기반 노드 구성

### Contract Deployment
- screen 세션에서 `make deploy-container` 자동 실행
- Forge 라이브러리 설치 및 프로젝트 컨트랙트 배포
- 새 컨트랙트 주소 자동 추출 및 CallContract.s.sol 반영
- `make call-contract`로 최종 테스트 수행

## Technologies
- **Scripting**: Shell (Bash)
- **Smart Contracts**: Solidity, Foundry (Forge)
- **Runtime**: Python3, infernet-cli
- **Container**: Docker, Docker Compose
- **Network**: Ritual Infernet (Base Chain)

## Results
Base 체인에서 Infernet 노드를 안정적으로 운영하며, 온체인 AI 추론 요청을 처리하고 스마트 컨트랙트에 결과를 전달하는 인프라를 구축했습니다.
