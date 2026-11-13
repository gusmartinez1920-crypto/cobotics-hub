---
title: "What changed in ISO 10218 in 2025: collaboration belongs to the application, not the robot"
description: "The authors compared the 2011 and 2025 editions of ISO 10218 and show how ISO/TS 15066 was incorporated. The new edition creates robot classes and makes cybersecurity a requirement."
translationKey: hartmann2026
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study explains how the requirements changed in the standard that defines the safety of people working with industrial robots and in collaborative applications."
paper:
  title: "Evolution of safety requirements in industrial robotics: Comparative analysis of ISO 10218-1/2 (2011 vs. 2025) and integration of ISO/TS 15066"
  authors:
    - "Daniel Hartmann"
    - "Kristýna Hamříková"
    - "Aleš Vysocký"
    - "Vendula Laciok"
    - "Aleš Bernatík"
  year: 2026
  venue: "Results in Engineering"
  doi: "10.1016/j.rineng.2026.110486"
  url: "https://doi.org/10.1016/j.rineng.2026.110486"
whyItMatters: "ISO 10218 is the baseline standard for industrial robot safety, and the 2025 edition changes terms, requirements and annexes that integrators and designers use every day. This study summarizes the changes and discusses their effect on the design, integration and certification of cells."
method: "The authors carried out a comparative content analysis of parts 1 and 2 of ISO 10218, in the 2011 and 2025 editions, and of ISO/TS 15066 from 2016. They compared the texts chapter by chapter and classified each change as technical, structural or terminological. It is a review article, with no new data."
findings:
  - "The 2025 edition stops using the terms \"collaborative robot\" and \"collaborative operation.\" Collaboration becomes a property of the application, not of the machine, and part 2 replaces \"robot system\" with \"robot application,\" which includes workpieces, the task program and supporting machinery."
  - "Part 1 creates two robot classes. Class I covers manipulators with a mass of up to 10 kg, a maximum force of up to 50 N and a speed of up to 250 mm/s; above that, the robot is class II. The standard requires safety level PL d / SIL 2 for class II and PL b or SIL 1 for class I."
  - "ISO/TS 15066 is absorbed into part 2. The biomechanical limits for 29 body regions become an informative annex, the formulas for the separation distance become a normative annex, and force and pressure measurement becomes another informative annex."
  - "Cybersecurity becomes a normative requirement, treated as part of functional safety. Risk assessment is referred entirely to ISO 12100, and the instruction handbook to ISO 20607."
  - "The authors expect that mandatory measurements and more detailed validation will make engineering more expensive even in simple applications, and they point to simulation and digital twins as a research path for predicting contact forces and reducing physical measurements."
limitations: "The study compares the texts of the standards and has no field data: the effect on cost and adoption is the authors' assessment, not a measurement. The selection of the most representative changes was made by discussion among the authors themselves."
---
