---
title: "A cobot to fetch large parts in assembly: weighing ergonomics and payback"
description: "A decision-support model combines picking time, task allocation, ergonomics and return on investment. In a simulated 26-task case, the cobot cut total time from 553 s to 507 s."
translationKey: faccio2026
topic: implementation
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The model includes operators' ergonomic exposure as an objective and converts it into value in the cobot investment analysis."
paper:
  title: "Can collaborative robotics help in large parts picking for assembly? An ergonomics/economics model"
  authors:
    - "Maurizio Faccio"
    - "Irene Granata"
    - "Riccardo Minto"
  year: 2026
  venue: "The International Journal of Advanced Manufacturing Technology"
  doi: "10.1007/s00170-026-18980-z"
  url: "https://doi.org/10.1007/s00170-026-18980-z"
  openAccess: true
  license: "CC BY"
whyItMatters: "Justifying a cobot by productivity gains alone does not always add up. The study shows a way to include ergonomics in the investment calculation and indicates where a cobot tends to pay off most: in non-value-added, strenuous tasks such as fetching large parts stored behind the operator. It is useful in the early design phase of an assembly station."
method: "The authors estimate the manual pick-and-place time for each part according to where it is stored and its characteristics. These times feed an optimization model that divides the tasks between two operators and one cobot, with two objectives: total cycle time and a time-weighted posture index (REBA). An economic layer calculates the simple payback time of the investment. The model was applied to a representative case with 26 tasks, with the layout and robot times checked in simulation."
findings:
  - "With operators only, the cycle took 553 s. Optimizing for time alone with the cobot, it fell to 493 s, about 11% less, but almost all of the ergonomic improvement went to one of the two operators."
  - "The solution that balances time and ergonomics came in at 507 s and reduced the weighted posture index from 2.45 to 1.91 for one operator and from 2.05 to 0.73 for the other."
  - "Even with the cobot 50% slower, the cycle was 516 s, below the human-only scenario. In that case, the model returns some of the picks behind the operators to them."
  - "Unit margin is the main driver of feasibility when margins are low. Assigning a monetary value to ergonomics widens the region where payback is acceptable, especially with a high investment."
  - "The authors recommend using the cobot for non-value-added, ergonomically critical tasks, not for the assembly itself, and sharing it between stations to increase its utilization."
limitations: "The authors themselves treat the case as a demonstration of the method, not industrial validation: times and posture indexes are assumed or checked only in a virtual environment. The model does not include safety constraints, worker acceptance or fatigue, and the payback calculation is simple, with no discounting, taxes or demand uncertainty. The monetary value of ergonomics is a parameter the authors vary, and sharing the cobot between stations was not modeled."
---
