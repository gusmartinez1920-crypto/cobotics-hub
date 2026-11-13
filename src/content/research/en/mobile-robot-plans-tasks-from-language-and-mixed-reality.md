---
title: "A mobile robot plans tasks from a request in natural language"
description: "The study combines language models, vision and reinforcement learning, with a mixed reality headset, so a mobile robot can carry out unscripted tasks. Planning succeeded in 85% of the tests."
translationKey: zheng2024
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "A vision-language-guided and deep reinforcement learning-enabled approach for unstructured human-robot collaborative manufacturing task fulfilment"
  authors:
    - "Pai Zheng"
    - "Chengxi Li"
    - "Junming Fan"
    - "Lihui Wang"
  year: 2024
  venue: "CIRP Annals"
  doi: "10.1016/j.cirp.2024.04.003"
  url: "https://doi.org/10.1016/j.cirp.2024.04.003"
whyItMatters: "Programming a cobot for every product variation is expensive, and mass personalization calls for tasks with no fixed script. The study shows an architecture in which the person requests the task in natural language and the mixed reality headset acts as a sensor of the scene. For anyone following generative artificial intelligence in robotics, it brings success figures and the stated trade-offs."
method: "The authors propose a system and test it in the laboratory, with a mobile manipulator (UR5e arm on a MiR100 base), a depth camera and a HoloLens 2 headset. A vision-language model locates the object named in the command; language models split the instruction into steps and generate the robot code. A policy trained by reinforcement learning moves base and arm at the same time, using images and headset data. Object localization was evaluated on 463 image-text pairs, planning on 3 tasks with 20 repetitions each, and the motion policy with 1000 targets in a simulated scene."
findings:
  - "Planning with a language model succeeded in 17, 19 and 15 of 20 attempts in the three tasks, an average of 85%. When it fails, a person can explain the error in the previous plan and ask for an adjusted one."
  - "Object localization from image and text reached 77.89 on the overlap index used, against 65.36 and 72.76 for two comparison methods."
  - "The motion policy had a mean success rate of 54.4% with headset data alone, 86.6% with images plus those data and 90.2% with temporal information. With images alone, it completed no task."
  - "Safety enters the policy as a reward term tied to the distance between person and robot; the robot's internal sensors are used only for the emergency stop."
  - "The authors acknowledge trade-offs: network and computing latency from relying on cloud language models, more expert knowledge and computing resources, and higher cost when taking the headset to multiple scenarios."
limitations: "The motion policy was trained and evaluated in a simulated scene, and the study does not say how many trials were run on the real robot. Planning was judged by experts, with no criterion described. Nothing was measured on the operator's side, such as mental workload or comfort with the headset, and safety is not discussed against the standards."
---
