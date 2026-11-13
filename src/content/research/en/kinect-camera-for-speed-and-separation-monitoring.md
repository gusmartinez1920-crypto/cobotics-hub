---
title: "A low-cost camera that makes the robot slow down when a person comes close"
description: "The authors use a Kinect V2 camera to track the worker's skeleton and adjust the robot's speed according to distance: full speed above 1.70 m and a stop below 0.85 m."
translationKey: rosenstrauch2018
topic: safety
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study proposes slowing the robot down and stopping it according to its distance from the worker, to avoid contact in the shared space."
paper:
  title: "Human robot collaboration - using kinect v2 for ISO/TS 15066 speed and separation monitoring"
  authors:
    - "Martin J. Rosenstrauch"
    - "Tessa J. Pannen"
    - "Jörg Krüger"
  year: 2018
  venue: "Procedia CIRP"
  doi: "10.1016/j.procir.2018.01.026"
  url: "https://doi.org/10.1016/j.procir.2018.01.026"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "Speed and separation monitoring is one of the collaborative modes in ISO/TS 15066 and usually depends on expensive sensors. The study tests a low-cost camera for this function, with the idea of bringing small industrial robots that are already installed into collaborative applications. It works as a teaching example of how the mode operates."
method: "This is a short conference paper. The scenario is coexistence, with no direct interaction, and the robot is accessible from one side only. The camera tracks 11 points of the body from the hip up, and the system reads the robot's joint positions from its own controller, calculates the shortest distance between person and robot and adjusts the maximum speed. The tests used a real person in front of the camera and a simulated UR5 robot."
findings:
  - "The robot's speed adapts to the worker's position, from full speed down to a complete stop. Below 0.85 m the robot stops; above 1.70 m it runs without restriction; between the two values the speed varies linearly."
  - "The system only needs to detect the person, because the robot's positions come from the controller. According to the authors, this removes the need to tell the person apart from objects the robot is supposed to touch, which laser sensors cannot do."
  - "Skeleton tracking ran at about 15 Hz. If it is interrupted, for example by an object hiding the person, the system triggers an emergency stop."
  - "The two distance thresholds correspond to one and two arm lengths of the robot used and can be adjusted to other robots or requirements."
  - "The authors leave for future work comparing accuracy with a motion capture system, taking the direction of motion into account, and using several cameras to reduce blind spots."
limitations: "The test used a simulated robot and reports no number of trials, distance error, delay or stopping time. The distance thresholds were chosen from the arm length rather than calculated with the standard's separation distance formula. The system observes a single person and a single approach side."
---
