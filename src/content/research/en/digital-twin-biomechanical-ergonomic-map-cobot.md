---
title: "A digital twin of the operator produces an ergonomic map of a cobot workstation"
description: "A feasibility study couples a biomechanical model of the operator with a cobot's digital twin and produces a map showing the best and worst working positions for the shoulder and arm."
translationKey: miehling2026
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
    why: "The study aims to prevent musculoskeletal disorders in people who work with cobots by assessing shoulder and arm effort at each working position."
paper:
  title: "A Digital Twin-Based Framework for Biomechanical Ergonomics Assessment in Human–Robot Collaboration"
  authors:
    - "Jörg Miehling"
    - "Matthias Guertler"
    - "Marc Carmichael"
    - "Richardo Khonasty"
    - "Louis Fernandez"
    - "Sandro Wartzack"
    - "Christopher Löffelmann"
  year: 2026
  venue: "Digital"
  doi: "10.3390/digital6020051"
  url: "https://doi.org/10.3390/digital6020051"
  openAccess: true
  license: "CC BY"
whyItMatters: "Ergonomic assessment of cobot workstations is still usually done by observation, once, at installation. This study tests another route: using biomechanical simulation to estimate joint and muscle effort at each point where the cobot can present the part. For people who design collaborative cells, it is a sample of what a digital twin of the operator can and cannot yet tell."
method: "The authors ran a laboratory feasibility study with three male participants. A UR5e cobot presented a cube at 28 positions on a 4-by-7 grid, and the participant drove a screw with the right hand, with feet fixed. A markerless depth camera recorded the movements and the cobot's sensor measured the forces; afterward, a simulation on a musculoskeletal model of the upper limb computed joint torques, muscle activations and joint reaction forces. These values were normalized, weighted and added into a score from 1 (best) to 10 (worst) for each position."
findings:
  - "The maps of the three participants show the same pattern: the worst ergonomics in the upper left corner and the best in the lower right, consistent with a task done with the right hand. The upper right region and the center, however, came out worse than expected for some participants."
  - "Shoulder elevation had the highest torques and the greatest variation. With low external forces (below 3.8 N), the weight of the arm itself dominates the effort, and the estimated arm masses (3.39, 4.33 and 5.82 kg) explain the differences between participants."
  - "Shoulder reaction forces stayed below 500 N in one participant and reached 1000 N in another, mostly in compression, which the authors consider desirable for joint stability."
  - "There was no quantitative correlation with the comfort reported by participants; the qualitative comparison showed partial agreement, mainly at elevated positions. The model emphasizes the vertical direction, while participants reported marked discomfort in sideways displacements."
  - "Using a single markerless camera caused flaws in the maps, for example when the cobot's arm hid the body. The authors recommend adding side cameras."
limitations: "There are only three participants, all men, with no statistical analysis, no comparison with observational methods and no validation of the tracking. The map is relative to the workstation itself and uses weights chosen by the authors, with no absolute biomechanical thresholds, so it does not say whether a position is acceptable or risky. The simulation was run after data collection, for a single near-static task and without the wrist; real-time use is left for future work."
---
