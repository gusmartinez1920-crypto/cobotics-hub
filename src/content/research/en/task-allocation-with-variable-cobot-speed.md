---
title: "Allocating tasks by distance keeps the cobot fast for longer"
description: "A mathematical model allocates tasks between operator and cobot and slows the robot only when the two work close together. In a simulated 12-task case, total time fell by about 15%."
translationKey: faccio2023b
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Task allocation model for human-robot collaboration with variable cobot speed"
  authors:
    - "Maurizio Faccio"
    - "Irene Granata"
    - "Riccardo Minto"
  year: 2023
  venue: "Journal of Intelligent Manufacturing"
  doi: "10.1007/s10845-023-02073-9"
  url: "https://doi.org/10.1007/s10845-023-02073-9"
  openAccess: true
  license: "CC BY"
whyItMatters: "In many cells the cobot always runs slowly, well below what it can do, for safety reasons. The study shows that the order and position of tasks can recover part of that productivity without additional devices, and gives a numerical example of calculating the separation distance based on ISO/TS 15066."
method: "The authors formulated a nonlinear task allocation model for a station with one operator and one cobot sharing the space, with the goal of minimizing total completion time. The cobot's task time increases whenever it takes place at the same time as an operator task closer than the safety distance. They tested the model on a numerical case of 12 tasks, with a safety distance of 80 cm, and compared it with the model without the constraint, also varying the number of tasks (from 9 to 20) and the safety distance (from 10 to 150 cm)."
findings:
  - "In the authors' review of 20 studies, task allocation and safety do not appear together: allocation models treat the cobot as inherently safe, and safety solutions rely on devices that reduce the flexibility of the cell."
  - "In the 12-task case, total completion time fell by about 15% compared with the model without the safety constraint."
  - "The time during which operator and cobot are closer than the safety distance fell from 19 minutes (50% of total time) to 6 minutes (18%). The model does not reduce the number of times tasks are close to each other, but rather the total time spent in that condition."
  - "The advantage grows with the number of tasks: from 3% with 9 tasks to almost 18% with 20. Above 20 tasks, the optimization program found no solution in limited time, and the authors suggest using a heuristic."
  - "The authors found an optimal safety distance, close to 60 cm, that maximizes the gain. Because this distance depends on the cobot's speed, the result makes it possible to choose the most advantageous speed."
limitations: "The validation is numerical only, on a synthetic case, with no real cobot and no people. The model assumes fixed times and tasks with no required order, and treats safety only as distance and speed: ergonomics, mental workload and the operator's perceived safety are left out."
---
