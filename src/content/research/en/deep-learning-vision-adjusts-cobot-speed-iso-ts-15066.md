---
title: "A camera that recognizes body parts makes the cobot faster within ISO/TS 15066"
description: "A system with a camera and deep learning adjusts robot speed according to the nearest body part. In the laboratory, the cycle was more than 15% shorter than with a laser scanner."
translationKey: bricher2025
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Analysis of Deep-Learning Methods in an ISO/TS 15066–Compliant Human–Robot Safety Framework"
  authors:
    - "David Bricher"
    - "Andreas Müller"
  year: 2025
  venue: "Sensors"
  doi: "10.3390/s25237136"
  url: "https://doi.org/10.3390/s25237136"
whyItMatters: "In many collaborative cells the robot always runs at the lowest permitted speed, even when a collision is unlikely, and this lengthens the cycle. The study shows, with the separation distance calculation laid out term by term, how much can be gained when the system knows where the person's head, hands and torso are. It also shows why this is not yet a certified safety system."
method: "Laboratory experiment with a KUKA LBR iiwa robot and a color and depth camera. The authors compared four deep learning methods: body recognition, body segmentation, pose estimation and body part segmentation. They measured the latency of each method, the position error against a motion capture system on a single person, and the maximum speeds per body part from contact forces and pressures. Validation was a screwing task on an engine block, with ten repetitions per method, compared with a laser scanner and with operation without an additional safety system."
findings:
  - "The mean cycle was 22.78 s with body part segmentation, 26.98 s with the laser scanner and 35.08 s without an additional system: a reduction of up to 35% against operation without a system and of more than 15% against the scanner."
  - "Latency weighs on the separation distance: it ranges from 305 ms for pose estimation to 812 ms for body part segmentation, which corresponds to terms of 488 mm to 1299 mm."
  - "Methods that locate body parts have smaller position errors than whole-body methods. Despite its higher latency, body part segmentation had the shortest mean cycle; body recognition and pose estimation fluctuated more because they react poorly to occlusion."
  - "The maximum speeds measured for the task vary by body part: 50 mm/s for skull and forehead, 100 mm/s for hands, forearms, arms and chest, and 200 mm/s for thighs."
  - "The camera's depth resolution is the limiting factor: it resolves body parts well up to 4 m, and at 6 m the depth error exceeds 0.5 m for some parts."
limitations: "The authors themselves say this is not a certified or deployable system: studies of robustness, fail-safe behavior and functional safety certification are missing. The experiment used a single person, a single task and few repetitions, with no formal statistical test, and covered quasi-static contact only. The gain is measured only in cycle time, with no measure concerning the worker."
---
