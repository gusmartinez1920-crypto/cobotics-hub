---
title: "A low-cost camera estimates the mental load of people assembling parts with a cobot"
description: "The authors propose measuring the operator's mental effort and stress in real time with a stereo camera. In a test with 14 people, a robot that reports what it is doing reduced the load."
translationKey: lagomarsino2023
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study proposes a way to measure, during work, the mental effort and stress of people assembling parts alongside a cobot."
paper:
  title: "Pick the Right Co-Worker: Online Assessment of Cognitive Ergonomics in Human–Robot Collaborative Assembly"
  authors:
    - "Marta Lagomarsino"
    - "Marta Lorenzini"
    - "Pietro Balatti"
    - "Elena De Momi"
    - "Arash Ajoudani"
  year: 2023
  venue: "IEEE Transactions on Cognitive and Developmental Systems"
  doi: "10.1109/tcds.2022.3182811"
  url: "https://doi.org/10.1109/tcds.2022.3182811"
whyItMatters: "Cobots relieve physical effort but can increase mental demand, and measuring this usually calls for specialists, questionnaires filled in after the task or expensive sensors. The study shows a route that uses an ordinary depth camera and no sensor on the body. It also shows that making the robot's state clear weighs on mental load and trust, especially for people unfamiliar with robotics."
method: "A laboratory experiment in Genoa with 14 volunteers (7 men and 7 women), split into 8 with no experience and 6 with experience in robotics. Each one assembled aluminum profiles, for up to 10 minutes, in three scenarios: with a human assistant; with a cobot triggered by buttons on a tablet, giving no information about its state; and with a cobot that advances along with the instructions and shows the current action on a monitor. A stereo camera tracked head direction and trunk movements to compute mental effort and stress scores. The scores were compared with heartbeat data, skin conductance and questionnaires on workload and trust."
findings:
  - "The mental effort score computed from the camera varied with the scenario and followed the cardiac indicator of effort in 13 of the 14 participants, with statistical significance in seven of them."
  - "Workload reported on the NASA-TLX questionnaire had a median of 56.7 with the human assistant, 52.5 with the cobot that gave no state information and 40.3 with the cobot that reports what it is doing."
  - "Among participants with no experience, trust fell when the robot was introduced (median from 34.5 to 24.5). For the experienced ones, trust in the robot was comparable to or higher than trust in the human assistant."
  - "The stress score and skin conductance were higher with robot assistance than with human assistance, for both inexperienced and experienced participants."
  - "The authors conclude that the difference in mental load between human help and robot help depends mainly on familiarity with the technology: there was no difference for the experienced participants, while the inexperienced tended to find automation more demanding and stressful."
limitations: "Validation took place only in the laboratory, with 14 students and institute staff and 10-minute sessions, with no manufacturing workers. The weights and thresholds in the calculation come from an earlier study by the same authors, and they acknowledge that the camera raises visibility problems and concerns about worker privacy."
---
