---
title: "Desktop AI Office Assistant"
summary: "A fully local productivity monitor that tracks focus, distraction and away time in real time, with on-device AI tools for summarization and translation."
category: "Computer Vision / ML"
highlights:
  - "Webcam YOLOv8 detection (person + phone) plus Windows active-window classification"
  - "On-device BART-large-CNN summarization and MarianMT translation on CUDA"
  - "Role-based access with manager approval, admin panel, SOLID design, 300+ automated tests"
  - "Validated end-to-end on Windows 11 with an RTX 4050 GPU"
tags: ["Python", "PyQt5", "YOLOv8", "HuggingFace", "SQLite"]
order: 2
task: "Real-time focus tracking with on-device NLP tools"
result: "Runs fully offline on an RTX 4050, 300+ automated acceptance tests"
---
## The problem

Employee productivity tools usually send data to the cloud. This project keeps everything **on the user's machine** while still giving real-time insight into focus, distraction and away time.

## Approach

- **Detection:** webcam-based **YOLOv8** (person and phone) combined with Windows active-window classification to measure focus, distraction and away time live.
- **On-device AI:** HuggingFace **BART-large-CNN** for document summarization and **MarianMT** for multilingual translation, running on CUDA with lazy loading and per-language-pair model caching.
- **Product features:** role-based access with manager approval workflows, a collapsible sidebar UI, persistent session tracking, and a standalone admin panel with full database CRUD and factory reset.
- **Engineering:** SOLID principles, a threaded Qt architecture, and **300+ automated acceptance tests**.

<div class="shot">Screenshot / demo GIF coming soon</div>

## Stack

Python, PyQt5, YOLOv8, HuggingFace, SQLite.
