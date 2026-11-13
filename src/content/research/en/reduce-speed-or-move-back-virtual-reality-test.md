---
title: "Slow down or move back: two safety strategies tested in virtual reality"
description: "In a virtual reality simulator, students worked next to a robot that either reduced its speed or moved back when the person came close. Neither strategy proved clearly better."
translationKey: vosniakos2019
topic: safety
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study compares, in simulation, two strategies to keep the robot from hitting a person with enough force to cause pain."
paper:
  title: "Exploration of two safety strategies in human-robot collaborative manufacturing using Virtual Reality"
  authors:
    - "George-Christopher Vosniakos"
    - "Lucas Ouillon"
    - "Elias Matsas"
  year: 2019
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2020.01.066"
  url: "https://doi.org/10.1016/j.promfg.2020.01.066"
whyItMatters: "Tuning safety parameters in a real cell takes time and exposes people. The study shows how virtual reality makes it possible to test these settings before physical implementation and to measure the effect on collisions and work pace. It also makes the conflict between safety and productivity visible."
method: "The authors used a virtual environment with an immersive headset and body tracking that reproduces a manual carbon fiber layup cell for aerospace parts with a suspended robot arm. Both strategies trigger when the person is less than 1.5 m from the robot and the time to collision is under 1.5 s. Speed limits per body region were calculated with the collision model of ISO/TS 15066. There were four sets of tests, two with 22 and two with 11 final-year Mechanical Engineering students, logging average speed, collaboration time, triggers and collisions, plus a questionnaire."
findings:
  - "The speed limits calculated for the robot vary widely by body region: from 1897 mm/s for hand and fingers to 313 mm/s for the lower leg and 322 mm/s for the chest."
  - "With speed reduced to 25% and a 1 s wait, the two strategies are equivalent in average speed and number of triggers. But 25% (440 mm/s) still exceeds most of the calculated limits, and moving back had fewer collisions, especially painful ones."
  - "With a 2 s wait and speed reduced to 20%, moving back had fewer triggers and collisions and a longer collaboration time. There were no dangerous collisions with either strategy."
  - "Coloring the robot's motion volume in grades, to show how far the person was intruding, did not reduce triggers or collisions. A reduction factor that varied with distance gave more speed but more collisions, and the authors judged it unacceptable as it stands."
  - "About 15% of participants did not finish the initial tests because of strong dizziness; the authors turned off part of the torso tracking to solve the problem."
limitations: "There are no statistical tests, and the sample is small and made up only of engineering students; the authors themselves say the slight advantage they attribute to reducing speed still needs proof with a larger sample. The simulated robot is a conventional industrial arm, not a cobot, and everything takes place in virtual reality, with no physical contact."
---
