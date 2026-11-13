---
title: "A cost model for balancing assembly lines with people, cobots and grippers"
description: "The authors propose a mathematical model that assigns tasks, people, cobots and grippers to the stations of an assembly line at the lowest cost, and illustrate it with a 20-task oven assembly."
translationKey: demiralay2025
topic: implementation
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "A Cost-Effective Balancing Model for Human-Robot Collaborative Assembly Lines"
  authors:
    - "Yuksel Degirmencioglu Demiralay"
    - "Yakup Kara"
  year: 2025
  venue: "Procedia Computer Science"
  doi: "10.1016/j.procs.2025.02.001"
  url: "https://doi.org/10.1016/j.procs.2025.02.001"
whyItMatters: "When planning a line with cobots, deciding who does each task is not enough: you also have to define at which station and with which gripper. The study shows how to put these decisions into a single optimization model and which costs go into the calculation. It is a starting point for those studying line balancing with human-robot collaboration."
method: "The authors formulated a mixed-integer linear programming model for a straight, single-product line with fixed task times. The model minimizes the sum of station, worker, cobot and gripper costs, subject to cycle time, task precedence and the maximum gripper weight per cobot. They applied it to an illustrative example, the assembly of an electric rotary bakery oven with 20 tasks and a 60-minute cycle, using reference costs from medium-sized companies in Turkey."
findings:
  - "The authors state that no previous line-balancing study has included gripper cost together with the assignment of people and cobots to stations."
  - "The model uses four costs: worker (salary, meals, transport service), cobot (energy, maintenance, repair), station (space, cleaning, equipment renewal) and gripper. A cobot can carry several grippers as long as their total weight does not exceed its maximum payload."
  - "In the example, the monthly costs adopted were 750 dollars per worker, 250 per cobot, 30 per station and 1 per gripper."
  - "Of the 20 tasks, 14 went to people (cutting, welding, cleaning and electrical work) and 6 to cobots (fitting walls, the rotary unit, insulation and outer covers). This split is an input to the model."
  - "The optimal solution opened four stations, at a cost of 0.3353 dollars per minute. Person and cobot work sometimes in parallel and sometimes in sequence, and the cobot stands idle at times because of task precedence."
limitations: "The example is illustrative, with values set by the authors, with no company data and no comparison with other models. The model treats the worker only as a cost: it does not include ergonomics, workload or safety requirements. The cobot cost is only the monthly operating cost, without purchase or integration."
---
