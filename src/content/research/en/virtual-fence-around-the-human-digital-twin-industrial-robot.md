---
title: "A virtual fence around the person, not the robot, for sharing space without guards"
description: "The authors present a simulation platform that makes an industrial robot steer around a virtual envelope surrounding the worker, and test neural networks for recognizing objects in 3D."
translationKey: droder2018
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "A Machine Learning-Enhanced Digital Twin Approach for Human-Robot-Collaboration"
  authors:
    - "Klaus Dröder"
    - "Paul Bobka"
    - "Tomas Germann"
    - "Felix Gabriel"
    - "Franz Dietrich"
  year: 2018
  venue: "Procedia CIRP"
  doi: "10.1016/j.procir.2018.02.010"
  url: "https://doi.org/10.1016/j.procir.2018.02.010"
whyItMatters: "The separation distance required by ISO/TS 15066 is usually applied with fixed zones that stop or slow the robot and cost productivity. This work reverses the logic: the safety envelope follows the person and the robot replans its path around it. The problems the authors report also show researchers in the field where machine learning perception fails."
method: "This is an engineering proof of concept presented at a conference, with no user study. The authors built a simulation platform in MATLAB that they call a digital twin. In it, they compared two ways of representing the worker as an obstacle: a convex hull and a grid shaped like a cylinder with a hemisphere, which follows the person's position. Avoidance was tested on a bench with a KUKA KR6 industrial robot. In parallel, they trained a neural network on 3D models of the robot's parts to recognize objects in point clouds."
findings:
  - "The authors propose a nine-stage scale for safety in human-robot collaboration, running from the fixed fence to a robot that assesses the situation and acts proactively, by way of light barriers, reduced-speed zones and reactive avoidance."
  - "The central proposal is to surround the person with a virtual grid that follows them and forces every link of the robot to keep the minimum separation distance of ISO/TS 15066."
  - "The grid is more conservative, because it stops the robot from passing under parts of the body. The convex hull represents the person more accurately but makes the safety assessment less reliable."
  - "Avoidance worked on the bench, but the equipment used does not operate in real time. Fluid movements in time-critical situations require a much faster communication interface."
  - "The neural network recognized simulated models well but real scenes poorly: in one example, it detected only one of the robot's seven components. The authors report that failures in recognizing the person's skeleton sometimes led to wrong paths."
limitations: "The paper gives no quantitative measures of performance, response time or distance kept, and does not discuss how to validate the safety of a method based on neural networks. The robot is a conventional industrial one, not a force-limited cobot, and the person enters the model only as a geometric obstacle. The authors themselves acknowledge weaknesses in reliability and speed."
---
