---
title: "A controller that yields to human touch without leaving moving workspace limits"
description: "The authors propose a controller that combines compliance to human contact with workspace limits that change over time. In simulation, the tracking error fell about tenfold."
translationKey: sun2025
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Fixed‐Time Adaptive Neural Control for Physical Human–Robot Collaboration With Time‐Varying Workspace Constraints"
  authors:
    - "Yuzhu Sun"
    - "Mien Van"
    - "Stephen McIlvanna"
    - "Nguyen Minh Nhat"
    - "Seán McLoone"
    - "Dariusz Ceglarek"
    - "Shuzhi Sam Ge"
  year: 2025
  venue: "International Journal of Robust and Nonlinear Control"
  doi: "10.1002/rnc.7922"
  url: "https://doi.org/10.1002/rnc.7922"
  openAccess: true
  license: "CC BY"
whyItMatters: "In physical collaboration, the robot has to yield when a person pushes it on purpose and, at the same time, stay out of forbidden zones, which may be a moving obstacle or the operator. The study shows how control engineering handles this problem: safety becomes a mathematical position constraint, which is different from the force limits in the standards."
method: "This is a theoretical and simulation study, with no physical robot or participants. The controller brings together admittance control, which treats human force as an input rather than a disturbance, a barrier function that keeps the robot from crossing time-varying limits, guaranteed fixed-time convergence, and a neural network that compensates for unknown dynamics. The authors prove stability and test the method on a planar two-link manipulator, with simulated human force, and on a simulated UR10 with a moving obstacle."
findings:
  - "In the two-link simulation, the three approaches compared kept the trajectory within the time-varying limits; when it tends to cross the limit, it is pushed back into the safe area."
  - "The mean tracking error at joint 1 fell from 3.73 × 10⁻² with the ordinary barrier controller to 2.20 × 10⁻³ with the proposed controller with a neural network, about one order of magnitude lower."
  - "The neural network does not improve everything: the maximum error at joint 1 was larger with it (0.0102 against 0.0054 for the proposed controller), although it improved at joint 2."
  - "There is a tuning trade-off: higher gains reduce the error and the settling time but increase control effort and the fast oscillations of the command, which appear when the human force is applied and removed and can damage the actuator."
  - "On the simulated UR10, the neural network learns in the first 2 s and the torques stay within the robot's limits."
limitations: "Everything was validated in simulation, with human force represented by a predefined profile, without a real operator or any measure of comfort or effort. The authors themselves note that if the robot crosses the limit at high speed, the controller pauses; safe behavior in that case remains open. Safety is treated as a position limit, not as a limit on contact force or pressure."
---
