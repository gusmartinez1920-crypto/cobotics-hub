---
title: "A cobot that learns the right moment to act ahead of the person"
description: "The authors jointly train a cobot's perception and decision-making with reinforcement learning. In a simulator of a packaging task, the robot cut an average of 3.4 s of waiting per phase."
translationKey: ghadirzadeh2021
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Human-Centered Collaborative Robots With Deep Reinforcement Learning"
  authors:
    - "Ali Ghadirzadeh"
    - "Xi Chen"
    - "Wenjie Yin"
    - "Zhengrong Yi"
    - "Marten Bjorkman"
    - "Danica Kragic"
  year: 2021
  venue: "IEEE Robotics and Automation Letters"
  doi: "10.1109/lra.2020.3047730"
  url: "https://doi.org/10.1109/lra.2020.3047730"
whyItMatters: "A robot that acts only once it is sure of what the person did leaves its partner waiting; one that acts too early makes mistakes and delays the task. The study shows a way for the robot to learn this balance on its own, without anyone having to label human activities by hand."
method: "The robot receives only the person's body motion, captured by a motion capture suit, and is rewarded with the time it saves by acting early; a wrong action is penalized by the delay needed to undo it. Perception and the decision policy are neural networks trained together with deep reinforcement learning. Training used a simulator of the interactions, built from 200 real sessions of collaboration between two people, on a packaging task with an ABB YuMi robot. The authors compared the result with a supervised classifier that acts only above a certain confidence level."
findings:
  - "The trained models eliminated, on average, 3.4 seconds of waiting in each phase of the collaboration; a typical packaging session has six phases."
  - "The best supervised method in the comparison achieved an average gain of about 2.9 seconds, against 3.4 seconds for the proposed approach, which also needs no annotated data."
  - "Adding labeled activities to the perception training did not improve performance: the representation learned without labels was enough."
  - "Network size mattered little: performance hardly changed with the number of neurons or with the size of the internal representation."
  - "Uncertainty about the human action is not calculated explicitly; the policy learns to decide whether it is worth acting or waiting for more data. The authors state that the policy trained in the simulator can be taken directly to the real task."
limitations: "The results come from a simulator fed by sessions between two people; there was no evaluation with people working with the robot, and the transfer to the real task is stated, not measured. The task is a simple laboratory one, and the only criterion is time saved: the person's safety, effort and acceptance are left out. Adaptation to new human partners was left for future work."
---
