---
title: Gaianet Node Executor
description: Automated Gaianet AI Node Setup & Management Script
image: /images/pic03.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Linux", "macOS", "AI"]
github: https://github.com/kooroot/Node_Executor-Gaianet
date: 2025-02-20
---

## Overview
Gaianet AI 노드를 자동으로 설치하고 screen 세션에서 실행 및 관리하는 스크립트 프로젝트입니다. Ubuntu/Debian 기반 Linux와 macOS를 지원하며, 별도 수작업 없이 노드가 백그라운드에서 구동됩니다.

## Key Features

### One-Click Installation
- 시스템 패키지 업데이트 및 필수 유틸 자동 설치
- Gaianet 공식 install.sh를 통한 원클릭 설치
- `gaianet init`으로 환경 자동 초기화

### Multi-Platform Support
- Linux (Ubuntu/Debian) 전용 스크립트
- macOS 전용 스크립트 별도 제공
- OS별 패키지 매니저 자동 활용

### Background Execution
- screen 세션에서 `gaianet start` 실행 후 자동 접속
- 실시간 로그 확인 가능
- 웹사이트 연동을 통한 Node ID / Device ID 등록

## Technologies
- **Scripting**: Shell (Bash)
- **Infrastructure**: Linux (Ubuntu/Debian), macOS
- **Service**: Gaianet AI Node
- **Management**: screen session
