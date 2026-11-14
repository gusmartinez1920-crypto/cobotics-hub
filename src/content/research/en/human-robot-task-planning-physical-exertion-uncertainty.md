---
title: "Sharing tasks with a robot while accounting for operator fatigue and variability"
description: "The authors propose a collaborative assembly planner that accounts for the operator's physical exertion and variability. In a test with 4 people, duration varied 32.4% less."
translationKey: you2026
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The planner includes the operator's accumulated physical exertion as an objective, alongside production time, when sharing tasks with the robot."
paper:
  title: "Towards human-centric manufacturing: Task planning under uncertainties in human–robot collaborative assembly"
  authors:
    - "Yingchao You"
    - "Ze Ji"
    - "Changyun Wei"
  year: 2026
  venue: "Robotics and Computer-Integrated Manufacturing"
  doi: "10.1016/j.rcim.2026.103293"
  url: "https://doi.org/10.1016/j.rcim.2026.103293"
  openAccess: true
whyItMatters: "Most collaborative assembly planners only try to cut total time and treat the person as a fixed-time machine. This study shows a way to bring muscle fatigue and the natural variation of human work into the calculation, and suggests a practical criterion: give the robot the most unpredictable tasks, not just the slowest ones."
method: "The authors represent the duration and exertion of each task with numbers that carry uncertainty and compute physical exertion with a model of muscle fatigue build-up and recovery. A reinforcement learning agent decides who does each task (human, robot or both) and in what order, seeking to reduce total time and excessive exertion at once. Validation consists of a numerical study with synthetic data for a gearbox with 24 tasks and a laboratory proof of concept: the assembly of a computer case by 1 person and 1 robot, with 4 participants and 5 trials per group."
findings:
  - "In the numerical study, compared with heuristic rules, the method reduced mean total time by up to 13.97% and accumulated exertion by 17.64%."
  - "Optimizing exertion alone produces a conservative plan that prioritizes rest and stretches total time (125.38 against 92.14 for the full model). Optimizing time alone raises exertion (15.82 against 12.14)."
  - "In the laboratory, the mean standard deviation of duration fell from 17.76 to 12.00 (32.4% lower) and that of exertion from 0.0735 to 0.054 (26.5% lower), compared with a planner without an uncertainty model. The means were comparable."
  - "The gain comes from reducing spread, not from speeding up: installing the power supply, a precise-alignment task with high variation, goes to the robot, whereas the planner without uncertainty gives it to the human for being faster on average."
limitations: "The numerical study uses synthetic data, and the real test has only 4 young participants, with no statistical test. The model considers muscular exertion only: mental workload, stress and trust are left out. Safety is not addressed, and the planner decides the task split without hearing the worker."
---
