---
title: "NeuroScan AI: Brain Tumor Classification"
summary: "A custom CNN built from scratch that classifies brain MRI scans across 15 tumor subtypes plus normal cases, with explainable heatmaps and a clinical dashboard."
category: "Computer Vision / Deep Learning"
date: "March 2026"
highlights:
  - "5-block Squeeze-and-Excitation Residual CNN, no transfer learning"
  - "Grad-CAM heatmaps showing which brain regions drive each prediction"
  - "FastAPI dashboard: real-time inference, drag-and-drop upload, animated confidence gauge, PDF reports"
tags: ["PyTorch", "FastAPI", "Grad-CAM", "JavaScript"]
order: 1
---
## The problem

Brain MRI interpretation is slow and a model that only outputs a label is hard to trust. The goal was a classifier that covers many tumor subtypes and shows *why* it predicts what it does.

## Approach

- Designed and trained a **5-block Squeeze-and-Excitation Residual CNN from scratch**, with no transfer learning, across **15 tumor subtypes plus normal** scans.
- Implemented **Grad-CAM** to overlay heatmaps on the scan, so each prediction can be inspected visually.
- Wrapped the model in a **FastAPI** backend and a web dashboard with real-time inference, drag-and-drop uploads, an animated confidence gauge and **exportable PDF clinical reports**.

<div class="shot">Screenshot / demo GIF coming soon</div>

## Stack

PyTorch, FastAPI, Grad-CAM, HTML/CSS/JavaScript.
