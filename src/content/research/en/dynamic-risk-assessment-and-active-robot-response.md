---
title: "Assessing risk in real time so the robot steers away instead of just stopping"
description: "The authors propose a risk index computed in real time and a robot that slows down or steers away according to it. In simulation, the method reacted in 159 ms, close to conventional monitoring (147 ms)."
translationKey: liu2020
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study proposes assessing in real time the risk to an operator who shares space with an industrial robot and making the robot react before contact."
paper:
  title: "Dynamic risk assessment and active response strategy for industrial human-robot collaboration"
  authors:
    - "Zhihao Liu"
    - "Xinran Wang"
    - "Yijie Cai"
    - "Wenjun Xu"
    - "Quan Liu"
    - "Zude Zhou"
    - "Duc Truong Pham"
  year: 2020
  venue: "Computers & Industrial Engineering"
  doi: "10.1016/j.cie.2020.106302"
  url: "https://doi.org/10.1016/j.cie.2020.106302"
  openAccess: true
whyItMatters: "Conventional speed and separation monitoring stops the robot whenever the person comes close, which protects but interrupts the work. This study shows an alternative in which the robot slows down or changes its path according to the risk at that moment, and in which the operator sees the risk zone through augmented reality."
method: "The authors start from the risk indicators in ISO/TS 15066 and split them into two types: inherent ones, scored beforehand by experts with a risk matrix, and dynamic ones (robot speed, operator motion and position), assessed in real time. Two depth cameras track the person's skeleton. Validation is mainly by simulation of a part handling and processing task, with a spherical obstacle in place of the person, and by comparison with two speed and separation monitoring methods. The authors also describe integration with an ABB robot and augmented reality glasses."
findings:
  - "The model computes a risk index for any point in the workspace, based on the minimum separation between the person's hand and the tool tip, extended to all the robot's links."
  - "The index divides the space into three states: no danger (below 0.4), in which the robot continues the task at normal speed; warning (from 0.4 to 0.62), in which it slows down; and danger (above 0.62), in which it starts to steer away. The thresholds were set by experts and by the experimental scenario."
  - "In the simulation with an obstacle and without the strategy, the index exceeded the danger threshold at 1.1 s. With the active response, the collision was avoided, with a longer task time."
  - "The average reaction time was 147 ms for conventional monitoring, 162 ms for a three-mode method from the literature and 159 ms for the proposed method. The conventional one is fastest because it only brakes; according to the authors, the proposed method affects productivity less."
  - "If the person stands still, the robot treats them as a fixed obstacle and replans the path. A gesture from the person switches the robot to interaction mode."
limitations: "The validation is mostly simulated, and the obstacle is a sphere, not a person; the physical system is described without measurements. The indicator weights and the index thresholds are subjective, which the authors themselves point to as something to improve. The study does not measure the effect of the slowdowns or of augmented reality on the operator."
---
