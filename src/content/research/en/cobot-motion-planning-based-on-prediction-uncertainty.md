---
title: "A cobot that steers farther away when it is less sure where the worker will be"
description: "The authors propose a trajectory planner that uses a prediction of the worker's motion and the uncertainty of that prediction. In 70 motions by five participants, no collision occurred."
translationKey: kanazawa2019
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
    why: "The study seeks to keep the robot at a safe distance from the worker during assembly, even when the person moves unexpectedly."
paper:
  title: "Adaptive Motion Planning for a Collaborative Robot Based on Prediction Uncertainty to Enhance Human Safety and Work Efficiency"
  authors:
    - "Akira Kanazawa"
    - "Jun Kinugawa"
    - "Kazuhiro Kosuge"
  year: 2019
  venue: "IEEE Transactions on Robotics"
  doi: "10.1109/tro.2019.2911800"
  url: "https://doi.org/10.1109/tro.2019.2911800"
whyItMatters: "A robot that delivers parts has to get close to the person, so simply keeping its distance does not solve the problem. The study shows one way to balance safety and working time: the robot learns the worker's pattern so as not to keep them waiting, and moves farther away when the motion departs from the pattern."
method: "The authors propose an algorithm and test it in an experiment. A statistical model, updated during the work, predicts the worker's position and trajectory; the planner recalculates the robot's trajectory at every instant, weighing arrival at the target at the predicted time, collision avoidance, and speed limits. The test used a two-link laboratory robot that delivers parts and tools at an automotive assembly station with three tasks. Five participants performed regular learning cycles and then regular and irregular motions, for a total of 70 motions evaluated (50 regular and 20 irregular)."
findings:
  - "The repulsion field around the worker becomes wider in the direction in which the predicted position is more uncertain. The robot therefore steers farther away exactly where it knows less about what the person will do."
  - "In regular motions, the time the worker waited for delivery fell with repetition for all participants on long moves. On a short move, of about 0.4 m, the drop was small, because the model tracks only the center of the body."
  - "In irregular motions, the robot stayed about 0.3 m from the worker. In two cases the minimum distance was slightly below that, and no collision occurred."
  - "Collision avoidance is a soft constraint, since the robot must come close to deliver parts. A weight coefficient sets the priority between arriving on time and keeping distance: a larger weight increases the minimum distance in irregular cases, but also the waiting time in regular ones."
  - "The authors acknowledge that if the worker leaves the station or tracking fails, the method does not guarantee a result. In that case the system would need to detect the abnormality and stop the robot safely."
limitations: "The test involved five participants, a two-link laboratory robot and a single assembly process, with no statistical test. The worker is represented only by the position of the center of the body in two dimensions, without arms or orientation. The 0.3 m distance comes from a preliminary simulation, and the study does not address force or pressure in case of contact."
---
