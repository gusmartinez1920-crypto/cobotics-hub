---
title: "A 3D-printed robot arm for teaching: what worked and what failed"
description: "The authors built and tested a low-cost robot arm, printed in plastic, for engineering classes. With three axes assembled it carried 314 g; collision detection did not work."
translationKey: ananias2022
topic: education
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 4
    why: "The study develops a cheap, replicable robot arm intended for laboratory classes in engineering programs."
paper:
  title: "A Low-Cost Collaborative Robot for Science and Education Purposes to Foster the Industry 4.0 Implementation"
  authors:
    - "Estevão Ananias"
    - "Pedro Dinis Gaspar"
  year: 2022
  venue: "Applied System Innovation"
  doi: "10.3390/asi5040072"
  url: "https://doi.org/10.3390/asi5040072"
whyItMatters: "Anyone who wants to build a robot for teaching or research on a small budget will find a detailed design here and a frank account of the problems. The case shows that calling an arm collaborative is not enough: without reliable collision detection, classroom use requires precautions that the study does not discuss."
method: "Prototype development and testing, with no students and no assessment of learning. The structure started from an open model and was printed in PLA plastic; the joints use stepper motors, with one ESP32 microcontroller per axis and a graphical interface in MATLAB. Inverse kinematics is computed by particle swarm optimization, and a neural network was meant to detect collisions from motor current. The authors ran five tests, including accuracy and repeatability under the ISO 9283 standard, with 30 repetitions."
findings:
  - "The complete six-axis arm could not be assembled because of its weight. All tests were run with the first three axes, at reduced speed."
  - "Maximum payload was 314 g with the arm extended horizontally. With three axes, reach was 434 mm horizontally and 597 mm in height."
  - "In the ISO 9283 test, position accuracy reached 0.170 mm and repeatability 0.3835 mm in the worst cases. The worst results occurred at the highest speed tested."
  - "Collision detection failed: the neural network, trained on 290 data points, estimated currents far above the measured peaks, so the robot would not notice a collision. As a stopgap, the authors set a current limit per axis equal to the maximum observed plus 2%."
  - "The authors name the plastic gears as the main limitation, since they can be easily damaged in collisions. Motor heating also expanded a gear and detached it from the shaft."
limitations: "Use in teaching is only proposed: there is no course, no students and no learning outcomes. The robot was tested with half of its axes and with no trial of work alongside people. There was no risk assessment and no verification of force or speed limits."
---
