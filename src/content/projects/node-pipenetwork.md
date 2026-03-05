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
Linux(Ubuntu 계열) 환경에서 Pipe Network Node의 설치와 설정을 완전 자동화하는 Shell 스크립트 프로젝트입니다. 시스템 요구사항 확인부터 바이너리 다운로드, screen 세션 관리까지 한 번에 처리합니다.

## Key Features

### System Validation
- OS 자동 감지 및 Linux 환경 확인
- RAM(최소 4GB) 및 디스크 공간(최소 100GB) 요구사항 검증
- 의존성 패키지 자동 설치 (curl, screen)

### Automated Deployment
- Pipe Network 바이너리 다운로드 및 설정
- Solana 퍼블릭 키 기반 보상 지갑 연동
- 레퍼럴 코드 적용 및 상태 확인

### Node Management
- Screen 세션 기반 백그라운드 실행
- RAM 용량, 디스크 사용량, 캐시 디렉토리 설정
- 셀프 레퍼럴 코드 생성 기능

## Technologies
- **Scripting**: Shell (Bash)
- **Infrastructure**: Linux (Ubuntu 18.04+), screen
- **Blockchain**: Solana (wallet integration)
- **Network**: Pipe Network
