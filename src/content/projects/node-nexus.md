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
Nexus Node의 설치 및 실행을 자동화하는 Shell 스크립트 프로젝트입니다. Mac과 Linux 환경을 자동으로 감지하여 적절한 설치 과정을 수행하며, screen 세션을 통해 백그라운드 실행 및 로그 모니터링을 지원합니다.

## Key Features

### Automated Environment Setup
- OS 자동 식별 (Mac / Linux Ubuntu 계열)
- Rust/Cargo 미설치 시 rustup을 통한 자동 설치
- screen 세션 기반 백그라운드 실행 및 유지

### Nexus CLI Installation
- `curl` 기반 Nexus CLI 원클릭 설치
- Node ID 설정 및 웹 계정 연동 안내
- Testnet 3 지원 스크립트 제공

### Session Management
- screen 세션을 통한 설치 후 셸 유지
- 설치 완료 후 추가 명령 실행 및 로그 확인 가능
- 업그레이드 스크립트 별도 제공 (Linux / Mac)

## Technologies
- **Scripting**: Shell (Bash)
- **Runtime**: Rust, Cargo
- **Infrastructure**: Linux, macOS, screen
- **Network**: Nexus Testnet
