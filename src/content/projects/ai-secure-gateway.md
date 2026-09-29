---
title: Privacy-Preserving AI Secure Gateway
summary: Middleware that securely routes requests between clients and AI services, detecting PII, malicious prompts, and unsafe outputs.
tags: [AI security, privacy, middleware, Python]
year: 2026
order: 1
featured: true
---

My MS capstone project at Indiana University South Bend.

## The problem

Applications increasingly send user data straight to third-party AI services. That creates two risks: sensitive data (PII) leaking to the model provider, and the model being manipulated by malicious prompts or returning unsafe output.

## What I built

A middleware service that sits between clients and AI services and inspects traffic in both directions:

- **Inbound:** detects PII and malicious or injection-style prompts before they reach the model.
- **Outbound:** screens model responses for unsafe output before they reach the client.
- **Routing:** securely routes and processes requests between clients and one or more AI services.

## Results and lessons

<!-- TODO: add architecture diagram, detection approach, evaluation numbers, and repo link. -->
Write-up in progress.
