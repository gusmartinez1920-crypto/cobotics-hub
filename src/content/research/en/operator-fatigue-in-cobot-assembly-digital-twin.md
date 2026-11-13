---
title: "A digital twin measures operator fatigue and shows how to adjust the cobot workstation"
description: "The authors combine eyes, posture and muscle signals into a physical fatigue index and use a digital twin to compare configurations of a cobot assembly workstation."
translationKey: wang2026
topic: industry-5-0
pillars: [cobot, twin, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study measures the operator's physical fatigue in cobot-assisted assembly and uses the result to adjust the workstation and reduce effort."
paper:
  title: "Fatigue detection and optimisation method for human–robot collaborative assembly based on digital twin"
  authors:
    - "Haoqi Wang"
    - "Yongle Wang"
    - "Hao Li"
    - "Shuo Ji"
    - "Gen Liu"
    - "Cunbo Zhuang"
    - "Xiaoyu Wen"
    - "Chunya Sun"
    - "WenChao Yang"
    - "Wenxiang Ren"
  year: 2026
  venue: "Digital Twin"
  doi: "10.1080/27525783.2025.2610579"
  url: "https://doi.org/10.1080/27525783.2025.2610579"
whyItMatters: "Physical fatigue is usually assessed with a single measure and without considering that people differ. This study shows how to bring cameras and muscle sensors together in a digital twin of the operator to point out the heaviest station on the line and test adjustments to height, distance and support. It is a concrete example of wearable sensors and simulation serving ergonomics in a collaborative cell."
method: "The authors modeled the assembly process of a nine-part differential to locate the stations with the highest load. At the chosen station, they measured fatigue from three sources: eye closure and joint angles, captured by camera, and electrical signals from two muscles (surface electromyography), classified by a neural network trained with 10 volunteers. The three indices were weighted and fused into a score from 0 to 1. In the laboratory, with a lightweight benchtop cobot, they compared three workstation configurations with three male participants."
findings:
  - "The neural network that classifies the muscle signals had an accuracy of 0.947, above logistic regression (0.913), a support vector machine (0.919) and a simple threshold (0.731)."
  - "In a 20-minute session at the high-load station, 65.7% of the segments from the shoulder muscle and 56.2% of the segments from the back muscle were classified as fatigue."
  - "In fusing the indices, muscle signals received the highest weight (0.56), followed by posture (0.32) and eyes (0.12)."
  - "The best-performing configuration, which changes the height of the working point, the chair distance, the arm support and the knee clearance, gave the lowest fatigue score for all three participants: 0.49, 0.51 and 0.47, versus 0.73, 0.56 and 0.59 in the original configuration."
  - "The system only produces recommendations after the analysis: fatigue does not yet enter the robot's task planning, and the cobot's behavior does not change."
limitations: "Validation uses a single scenario, seated with arms raised, with a small and homogeneous sample: young volunteers for training and three men in the comparison. Everything was done in the laboratory, without testing sweat, electrode displacement or factory electrical interference. The measured gain comes from physical adjustments to the workstation, not from a change in collaboration with the robot, which is a lightweight research and teaching arm."
---
