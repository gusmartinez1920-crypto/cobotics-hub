---
title: "A cobot that always helps the same way can do harm: varying the handover changes the picture"
description: "In an experiment with 16 people, a robot that handed over packages at varied points increased movement variability and cut time in high-risk posture from 13.86% to 8.87%."
translationKey: zolotas2024
topic: human-factors
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study deals with preventing musculoskeletal disorders in repetitive tasks with cobots by testing a robot that varies the worker's movement."
paper:
  title: "Imposing Motion Variability for Ergonomic Human-Robot Collaboration"
  authors:
    - "Mark Zolotas"
    - "Rui Luo"
    - "Salah Bazzi"
    - "Dipanjan Saha"
    - "Katiso Mabulu"
    - "Kristian Kloeckl"
    - "Taşkın Padır"
  year: 2024
  venue: "IISE Transactions on Occupational Ergonomics and Human Factors"
  doi: "10.1080/24725838.2024.2329114"
  url: "https://doi.org/10.1080/24725838.2024.2329114"
whyItMatters: "Programming the cobot to always hand over the part at the ergonomically ideal point looks like the obvious choice. The authors argue that this repeats the same movement hundreds of times and removes the body's natural variation, which protects against repetitive strain injuries. The study offers early data for anyone designing robot-to-human handovers and assessing ergonomics beyond a single cycle."
method: "The paper combines a narrative review of motor variability at work with a reanalysis of an earlier experiment by the authors. In it, 16 participants aged 20 to 34 received a 6.8 kg package from a robotic arm and carried it about 4 meters, over 39 handovers per mode. In the assistive mode, the robot chose the handover point that kept the person's center of mass in the middle of the base of support; in the stimulating mode, it chose a point in a random corner of that base. Posture was estimated by camera, and the authors compared the REBA posture score, trunk rotation, center-of-mass movement, balance and perceived workload (NASA-TLX)."
findings:
  - "The authors call a cobot overassistive when it repeats helping actions to optimize a short-term goal. When the handover point is optimized, the result is often a single repeated point, which forces repetitive movements."
  - "The stimulating mode increased movement variability: maximum trunk rotation was 68.73° versus 63.54° (p = 0.043), and center-of-mass velocity was 0.90 m/s versus 0.34 m/s."
  - "The mean REBA score was slightly lower in the stimulating mode (5.25 versus 5.51), and time at high risk fell from 13.86% to 8.87% of handovers."
  - "There was no significant difference in the stability margin (8.91 cm versus 8.44 cm), and movement was less smooth in the stimulating mode, contrary to what the authors expected."
  - "Nine of the 16 participants said they felt more alert in the stimulating mode, versus three in the assistive mode. Perceived workload and preference were split, and some complained that the robot was harder to predict."
limitations: "The sample is young, made up of students and robotics professionals, with a single load and about 8 minutes per mode: the long-term effects that motivate the study were not measured. No task performance indicator was collected, so the effect on productivity remains open. The robot's deliberate unpredictability is also in tension with the predictability workers expect, an issue the authors leave for future work."
---
