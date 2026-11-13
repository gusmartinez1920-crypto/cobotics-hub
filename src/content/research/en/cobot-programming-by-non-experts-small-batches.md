---
title: "Cobots programmed on the shop floor by non-experts, with a batch-by-batch business case"
description: "The authors propose a method in which operators with no robotics experience complete and correct the cobot program, plus a way to tell when a batch pays off. In a pilot, the application was ready in under 10 min."
translationKey: giberti2022
topic: implementation
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 9
    why: "The study tackles two barriers to cobot adoption in small-batch production: difficult programming and justifying the investment."
paper:
  title: "A Methodology for Flexible Implementation of Collaborative Robots in Smart Manufacturing Systems"
  authors:
    - "Hermes Giberti"
    - "Tommaso Abbattista"
    - "Marco Carnevale"
    - "Luca Giagu"
    - "Fabio Cristini"
  year: 2022
  venue: "Robotics"
  doi: "10.3390/robotics11010009"
  url: "https://doi.org/10.3390/robotics11010009"
whyItMatters: "Complex programming is cited as one of the main barriers to the spread of cobots, especially for small, varied batches. The study shows a way to divide the work among specialists, process engineering and operators so that the cobot can change stations often. It also offers a simple formula for deciding from what batch size the robot is worth using."
method: "This is a proposed method tested in an industrial pilot case. Robotics specialists prepare libraries of ready-made skills, process engineering assembles the task sequence, and the operator enters parameters and corrects errors with the help of a graphical interface. The test took place at an ABB plant in the Milan area, in a pick-and-place task with electronic boards using a dual-arm cobot, with two non-expert users. The economic analysis covered six processes in the same department, with demand simulated from historical data."
findings:
  - "The two users taught and corrected each of the four steps of the task in roughly 1 min 40 s to 2 min 30 s, averaged over the second to fourth attempts. The first attempt took about 25% longer."
  - "The authors report that the complete application was created in under 10 minutes, with a cycle time of 37 s per part. The two users' results did not differ systematically, even though only one had some notion of robot programming."
  - "The program was less optimized in trajectory and cycle time than one written by a specialist. The authors consider flexibility more important when the robot is continually moved between stations."
  - "The method includes calculating a threshold batch size above which the robot's setup time pays off compared with manual work. One of the six simulated processes fell below it: an average batch of 50 parts against a threshold of 56."
  - "For an investment of about 50,000 euros, the simulation estimated savings of 656 hours per year, or 19,688 euros per year, and payback in about 2.5 years."
limitations: "The test involved only two users, four attempts and a simple pick-and-place task, with no statistical analysis. The study does not address risk assessment of the application or measure operator workload or acceptance, and station calibration at each relocation was left out of the work. The economic calculation considers only labor hours saved, and the company data has restricted access."
---
