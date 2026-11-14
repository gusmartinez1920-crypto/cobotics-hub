---
title: "What robots see of people: ten years of robotic vision under review"
description: "A systematic review of 310 papers from 2010 to 2020 shows how robots use cameras to interact with people. Gestures lead the applications, and only 21% of the studies ran tests with people."
translationKey: robinson2023
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Robotic Vision for Human-Robot Interaction and Collaboration: A Survey and Systematic Review"
  authors:
    - "Nicole Robinson"
    - "Brendan Tidd"
    - "Dylan Campbell"
    - "Dana Kulić"
    - "Peter Corke"
  year: 2023
  venue: "ACM Transactions on Human-Robot Interaction"
  doi: "10.1145/3570731"
  url: "https://doi.org/10.1145/3570731"
  openAccess: true
whyItMatters: "The camera is a robot's main way of perceiving whoever works beside it: it is what lets the robot stop, slow down or change course when someone approaches. The review shows what is already common and what is still missing, such as tests with people, comparable measures and care with the images captured."
method: "The authors carried out a systematic review following the PRISMA standard in three databases (IEEE Xplore, ACM Library and Scopus), with peer-reviewed papers published from 2010 to 2020. Only studies with a physical robot were included, in which vision focuses on the person and produces an action in real time or close to it; simulation and teleoperation were left out. Of 6,771 records, 310 papers were included, and two independent reviewers checked 10% of them, with full agreement."
findings:
  - "The most frequent applications are gesture recognition (35%), robot movement in spaces with people (22%), object handover and collaborative actions (17%) and action recognition (13%). Color-and-depth cameras, such as the Kinect, were the most used."
  - "In the 56 papers on object handover and collaborative actions, the most common case (46%) is the robot that has to operate safely in a shared space: on detecting the person, it stops, reduces speed or changes its path."
  - "The interaction studied is almost always simple: 88% of the tasks are of low criticality and 91% of the studies have one person to one robot. Teams with several people and several robots, and higher-risk tasks, remain little studied."
  - "Only 66 of the 310 papers (21%) report an experiment with people, for a total of 1,228 participants. Where sex was reported, 70% were men. Objective measures (384) far outnumber subjective ones (40)."
  - "Few papers report standardized measures of vision performance, which prevents comparing algorithms, and only three released their data. The authors point to challenges in the ethical use of images (consent, privacy) and the risk that a person assumes the robot sees more than it actually does."
limitations: "The review covers interaction with robots in general (mobile, social, aerial and manipulator arms), and industry is only one of the four domains; the results do not describe industrial cobots alone. The search ends in 2020 and excludes texts that were not peer reviewed. The cases of safety in a shared space are not related to the standards for collaborative robots."
---
