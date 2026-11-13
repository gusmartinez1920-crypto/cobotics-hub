---
title: "Predicting where the operator leaves the part shortens the cobot's picking cycle"
description: "A statistical algorithm predicts where the operator places the part on the conveyor so the cobot can take its picture from closer. In simulation, picking time fell 16% on average with historical data."
translationKey: sobaszek2026
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Design and implementation of a predictive algorithm for collaborative robot programming"
  authors:
    - "Łukasz Sobaszek"
  year: 2026
  venue: "Scientific Reports"
  doi: "10.1038/s41598-025-34643-7"
  url: "https://doi.org/10.1038/s41598-025-34643-7"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "The proposal tackles the cycle time of a pick-and-place cell without buying new equipment: it uses only software and the data the robot already records. It is a simple example of how statistics on the behavior of the person at the previous station can tune the cobot program."
method: "The author models the position where the part is left as a random variable, fits a statistical distribution for each operator and, when none fits, uses a non-parametric estimate. With the prediction, the camera on the robot's wrist moves lower and covers a smaller area. The data came from a laboratory bench, with 5 operators placing 30 bearings each. The robot, a UR10e, was tested in simulation in RoboDK, with and without prediction, using the collected data and then synthetic data for 5, 10 and 15 parts."
findings:
  - "With the historical data for 30 parts, completion time fell from about 150.5 s to between 121.5 and 131.2 s: an average reduction of 24.06 s (15.98%). The path was 9.59% shorter on average."
  - "With synthetic data, which include parts outside the reduced area, the average time reduction was around 10% (10.76% with 5 parts, 10.70% with 10 and 10.23% with 15)."
  - "The prediction allowed the camera capture height to be lowered by 177 to 238 mm, depending on the operator."
  - "The gain was larger when a parametric distribution fitted the operator's data. The more parts fall outside the reduced area, the smaller the gain, but in no case did the time increase."
  - "The author argues that the solution should stay in the robot software, with no additional hardware, and suggests that the shorter path may reduce wear and maintenance."
limitations: "The robot was only simulated, and the data come from a laboratory bench with five operators, not from a production line. The study does not address safety or measure any effect on the worker: the operator appears only as the position where the part is left. Irregular parts and parts with multiple orientations are left for future work."
---
