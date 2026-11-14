---
title: "Camera monitoring of operator-cobot distance fails under excess brightness"
description: "A review of 53 studies on safety in human-robot collaboration and a laboratory test show that detecting collision risk with a simple camera fails under excess brightness."
translationKey: patalasmaliszewska2025
topic: industry-5-0
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study addresses the physical safety of people working next to cobots and tests when a camera system fails to warn of collision risk."
paper:
  title: "Improving safety in human–robot collaboration towards sustainable production in Industry 5.0"
  authors:
    - "Justyna Patalas-Maliszewska"
    - "Hanna Łosyk"
    - "Adam Dudek"
  year: 2025
  venue: "Journal of Intelligent Manufacturing"
  doi: "10.1007/s10845-025-02676-4"
  url: "https://doi.org/10.1007/s10845-025-02676-4"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "Using a camera to monitor the distance between the person and the cobot is a low-cost option, and the authors show it can be done with simple equipment. The study, however, measures how much this monitoring depends on image quality. For people designing a collaborative cell, the message is a warning about lighting and a suggestion not to rely on a single camera."
method: "The work has two parts. First, a systematic review of articles from 2021 to 2023 in three databases, which started from 4107 records and analyzed 53 in full. Then, a laboratory experiment with two UR10e cobots and an operator who moved between them and caused collisions, filmed by one camera. An object detector identified parts of the operator and the cobot, and the authors' algorithm classified risk into four levels by the shortest distance between them; the reference video was then degraded with altered brightness, noise, chromatic aberration and transmission distortion."
findings:
  - "The review found safety addressed on three fronts: mechanical safety, supervision and control of the workspace, and ethical issues. The most frequent sectors are automotive and aerospace, in assembly and disassembly."
  - "The dominant techniques in the reviewed studies are augmented reality (alerts and overlaid information) and artificial intelligence (collision detection and motion planning). The great majority of the 53 studies were done in the laboratory or in simulation."
  - "In the experiment, risk has four levels: no risk above 50 cm, two intermediate levels (25 to 50 cm and 10 to 25 cm) and collision below 10 cm. The authors say these values are not critical and that what matters is applying a uniform criterion."
  - "Excess brightness was the most serious interference: with brightness at 175% and 200%, in one stage of the video the system failed to detect the collision or high risk in 100% of the frames. The strongest chromatic aberration also led to 100% failures in two stages; with digital transmission distortion, failures did not exceed 20% of the frames."
  - "The authors recommend lighting compatible with the camera's sensitivity, distance thresholds adjusted to the operator's speed and direction, a second camera to confirm the risk, and color marking of the cobot's parts."
limitations: "The experiment uses a single operator, who causes the collision on purpose, a reference video of about 4 seconds and a single camera, with distance measured in two dimensions. The distance thresholds are not tied to cobot safety standards. Ethical issues are left for future work, and the study does not measure worker comfort or perception, even though the authors themselves mention people's discomfort with cameras and sensors."
---
