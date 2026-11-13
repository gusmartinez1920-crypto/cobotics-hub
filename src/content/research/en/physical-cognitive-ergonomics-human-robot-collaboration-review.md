---
title: "Cobots that adapt to the operator's body have advanced; to the mind, still very little"
description: "A narrative review gathers methods, sensors and systems in which the cobot adjusts its behavior to improve the worker's physical and cognitive ergonomics, and points out what is missing."
translationKey: lorenzini2023
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The review looks at how a cobot can reduce the worker's physical and mental overload, which is linked to musculoskeletal pain and stress."
paper:
  title: "Ergonomic human-robot collaboration in industry: A review"
  authors:
    - "Marta Lorenzini"
    - "Marta Lagomarsino"
    - "Luca Fortini"
    - "Soheil Gholami"
    - "Arash Ajoudani"
  year: 2023
  venue: "Frontiers in Robotics and AI"
  doi: "10.3389/frobt.2022.813907"
  url: "https://doi.org/10.3389/frobt.2022.813907"
whyItMatters: "For anyone designing a collaborative cell, the text works as a guide to what exists for assessing posture, effort and mental load, and to which sensors suit the shop floor. It shows where research is mature, which is posture, and where the foundations are still missing, which is cognitive load. It is also a reminder that monitoring workers raises questions of cost and privacy."
method: "A narrative review with keyword searches in Google Scholar and Scopus. The works on ergonomic human-robot collaboration cover 2011 to August 2022; the ergonomic assessment tools were surveyed from the earliest reports in the field. Teleoperation and exoskeletons were left out, and the focus is the workstation, not work organization. The paper does not say how many studies were included."
findings:
  - "The review points out that pen-and-paper observation methods such as RULA and REBA have low precision, vary with the assessor and take little account of task dynamics. Direct measurements, such as musculoskeletal models and electromyography, have stayed almost entirely in the laboratory."
  - "For industrial use, sensors need to measure during the task, not get in the worker's way and deliver quality. Marker-based optical capture is precise but expensive and impractical; without markers it loses precision; inertial sensors accumulate error over time."
  - "In physical ergonomics, REBA is the most used method in the systems reviewed, followed by RULA: the robot repositions the part or redistributes subtasks to bring the person to the lowest-risk posture. Other works make the robot adapt when it detects the onset of fatigue."
  - "In cognitive ergonomics, the review found only seven works that try to assess mental demand during the task and relieve pressure, for example by adjusting the cobot's pace based on heart signals."
  - "The authors conclude that there is no accepted method or set of metrics for cognitive load, and that postural methods, although well established, deal only with movement. They point to cameras and contactless sensors, with privacy protection, as a research direction."
limitations: "This is a narrative review, with no article count or selection flow, and the results it gathers come almost entirely from laboratory experiments, not from factories with real workers. Work organization, such as shifts and resource allocation, is left out of the analysis."
---
