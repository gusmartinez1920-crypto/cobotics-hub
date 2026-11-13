---
title: "A digital twin with a digital human hands the robot the parts that weigh most on the worker"
description: "A proof of concept measures the worker's whole body, predicts delays in parts picking and, when the delay passes a threshold, transfers the parts with the highest physical load to the robot."
translationKey: maruyama2021
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The system computes the physical load of each of the worker's movements and uses that value to choose which tasks to hand to the robot."
paper:
  title: "Digital Twin-Driven Human Robot Collaboration Using a Digital Human"
  authors:
    - "Tsubasa Maruyama"
    - "Toshio Ueshiba"
    - "Mitsunori Tada"
    - "Haruki Toda"
    - "Yui Endo"
    - "Yukiyasu Domae"
    - "Yoshihiro Nakabo"
    - "Tatsuro Mori"
    - "Kazutsugu Suita"
  year: 2021
  venue: "Sensors"
  doi: "10.3390/s21248266"
  url: "https://doi.org/10.3390/s21248266"
whyItMatters: "Digital twins of robot cells usually model the machine well and the person poorly. This work includes a detailed model of the worker's body and computes the effort at each joint instead of using quick posture indices. It shows one way to connect ergonomics and production scheduling in real time, and also what is still missing to take this to a factory."
method: "The authors developed and demonstrated a system with three modules linked by wireless communication. The first is a digital human with 48 degrees of freedom, fitted to the worker's body and fed by optical motion capture with 16 cameras and 37 markers on the clothing; it computes joint torque. The second is the virtual model of a mobile robot. The third predicts cycle time and reallocates parts from the worker to the robot. The scenario was picking parts from 40 boxes, with a live demonstration with one operator, over 8 cycles of 40 parts, and a validation with data that mimic three delay profiles."
findings:
  - "The authors define the digital twin by four properties: individualized, high-fidelity, real-time and controllable."
  - "The reallocation rule is triggered by delay: when the worker's predicted delay reaches a threshold, the parts that demand the most torque from the trunk or left shoulder go to the robot, one by one, until the delay drops."
  - "In the demonstration, the cycle time prediction was off by 9 ± 11 seconds on average, versus 33 ± 7 seconds for the initial plan. With a 20-second threshold, the system transferred to the robot the part with the highest physical load among those that could be reallocated."
  - "In the validation with simulated data, the prediction was more accurate than the initial plan in every condition (p < 0.01). The average physical load transferred to the robot was significantly higher with the ergonomic constraint than without it."
  - "Posture estimation takes 15 milliseconds and the ergonomic assessment 138 milliseconds on a laptop. The system runs at about 6 to 50 frames per second."
limitations: "The system was tested with people who do not work in a factory, and the paper does not say how many took part. Only physical load enters the model; the authors acknowledge that mental workload and individual conditions, such as back pain, were left out. Ergonomics only comes into play after the worker falls behind, physical safety was not addressed, and marker-based optical capture is expensive and hard to use in a real factory."
---
