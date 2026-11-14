---
title: "A robot with no force sensor learns assembly from demonstration and tunes itself"
description: "A robot with no force sensor learned to assemble a gear from a few human demonstrations. With automatic optimization it succeeded in 93% of assemblies, against 19% without it."
translationKey: roveda2021
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Human–robot collaboration in sensorless assembly task learning enhanced by uncertainties adaptation via Bayesian Optimization"
  authors:
    - "Loris Roveda"
    - "Mauro Magni"
    - "Martina Cantoni"
    - "Dario Piga"
    - "Giuseppe Bucca"
  year: 2021
  venue: "Robotics and Autonomous Systems"
  doi: "10.1016/j.robot.2020.103711"
  url: "https://doi.org/10.1016/j.robot.2020.103711"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "Force/torque sensors make a cell more expensive, and many industrial robots do not have them. The study shows a way to teach a tight-fit assembly by guiding the robot by hand and letting it correct part position errors on its own. It is relevant to anyone who programs cobots by demonstration and has to deal with parts that never arrive in exactly the same place."
method: "Experiment with a Franka EMIKA Panda robot that mounts a gear on a square-section shaft, with a tight tolerance and parts positioned with an error of up to ±7.5 mm. Fifteen people guided the robot by hand, five times per step (approach, insertion and pushing). A Hidden Markov Model (HMM) picks the most reliable demonstration, and Bayesian Optimization tunes the target point and the control stiffness after the assembly position is shifted by ±7.5 mm and ±5°. The final comparison used 10 repetitions per person, 150 per method."
findings:
  - "The assembly success rate was 93% with learning plus optimization, against 19% with learning from demonstration alone, over 150 repetitions of each."
  - "Without measuring forces, the robot estimates the contact force from the difference between the desired and the actual position. This estimate enters the cost function to avoid an emergency stop and task failure."
  - "Insertion is the most critical step because it concentrates the largest position uncertainty. The optimization was therefore done in two stages: first locate the insertion point, then refine the pose and the stiffness."
  - "In the final push, a small rotational oscillation added to the motion ensures the gears mesh; the amplitude of this oscillation is also optimized."
  - "The authors argue that a robot with a force sensor would need the same re-optimization, because without the exact position of the parts it cannot assemble blindly either. A camera would solve this, but at higher cost and setup time."
limitations: "The study tested a single part and a single tolerance, and compared the optimization with no adaptation at all, not with another adaptive method. The figures show data from one person; the other 14 are only described as similar. Nothing was measured on the human side, and the person takes part only in the teaching phase."
---
