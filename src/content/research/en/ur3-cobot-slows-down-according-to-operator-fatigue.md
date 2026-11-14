---
title: "A UR3 cobot that slows down, asks for confirmation or stops according to operator fatigue"
description: "An open-source ROS 2 system controls a UR3 cobot through hand gestures and reduces its speed according to an operator fatigue score. It is a feasibility study with a single operator."
translationKey: goonetilleke2026
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
    why: "The system adjusts the cobot's speed to the operator's estimated fatigue, a safety factor that current standards treat as constant."
paper:
  title: "Predictive fatigue-aware human-robot collaboration: a real-time, open-source ROS 2 instantiation of a three-module human-centric digital twin framework on a standard cobot"
  authors:
    - "Ranidu P. Goonetilleke"
    - "Azfar Khalid"
  year: 2026
  venue: "Frontiers in Robotics and AI"
  doi: "10.3389/frobt.2026.1897261"
  url: "https://doi.org/10.3389/frobt.2026.1897261"
  openAccess: true
  license: "CC BY"
whyItMatters: "Robot safety standards treat the operator's capability as constant, even though tiredness changes reaction time and precision. This work shows, with open-source code and an ordinary computer with no graphics card, how to bring the operator's state into the cobot's control loop. It is a starting point for anyone who wants to test human-centric digital twins on a benchtop robot."
method: "The authors implemented the system on a UR3 cobot with a gripper, an overhead webcam and eye-tracking glasses, and tested the software on a simulated twin before each session with the real robot. The system has three modules: perception (hand landmarks and eye data), reasoning (a state machine and a fatigue score that combines blinks, eye-closure time and hand jerk) and motion. The gesture classifier was trained on 2,600 samples from a single operator, the first author. Because the glasses failed on the day of the trials, the fatigue and stress states were triggered manually from the keyboard, in simulated mode."
findings:
  - "The robot responds at four fatigue levels: full speed, reduced speed, movement only after confirmation by gesture, and lockout. Commanded speed drops to 70%, 40% and 15% of nominal at the three levels above rested."
  - "The gesture classifier got 99.62% of the test cases right (518 of 520), with data from a single operator."
  - "Recognition latency had a median of 64 to 65 milliseconds, and the authors estimate a ceiling of about 830 milliseconds between the gesture and the robot's movement, below the 1-second target."
  - "Varying the weights of the fatigue score by 20% changes the classification of only 3% to 6% of the points tested. The boundary between moderate and severe fatigue, the most safety-critical one, was the most stable."
  - "The authors warn that the gesture stop and the workspace limit are research behaviors, not certified ones. Contact protection remains the job of the UR3's own collision detection."
limitations: "The system was tested with a single operator, the first author himself, with no external participants. Fatigue and stress detection was not validated with real eye data, because the glasses failed and those states were triggered by hand; the score's weights and thresholds are fixed, with no per-person calibration. The error of the intention prediction was not measured, and the study with 30 or more participants is left for future work."
---
