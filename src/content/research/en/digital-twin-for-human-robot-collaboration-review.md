---
title: "Digital twins for human-robot collaboration: how they are built and where they stall"
description: "A review describes two ways of building digital twins of cobot cells and concludes that the hard part is modeling the human operator, not the robot."
translationKey: ramasubramanian2022
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 9
    why: "The review discusses the cost and expertise a digital twin requires and reports the concern that only large companies will be able to adopt it."
paper:
  title: "Digital Twin for Human–Robot Collaboration in Manufacturing: Review and Outlook"
  authors:
    - "Aswin K. Ramasubramanian"
    - "Robins Mathew"
    - "Matthew Kelly"
    - "Vincent Hargaden"
    - "Nikolaos Papakostas"
  year: 2022
  venue: "Applied Sciences"
  doi: "10.3390/app12104811"
  url: "https://doi.org/10.3390/app12104811"
  openAccess: true
  license: "CC BY"
whyItMatters: "A digital twin makes it possible to test the safety and performance of a collaborative cell before installing it. This review helps separate what is already practical from what is still a promise, and explains the difference between a digital model, a digital shadow and a digital twin. It is a starting point for anyone planning to simulate a cobot application."
method: "This is a narrative literature review with no stated systematic protocol. The authors surveyed the Scopus database in September 2021 and classified the works into two modeling approaches. They added their own conceptual framework for the digital twin of a collaborative arm and their own example of a digital twin of the operator, driven by several depth cameras."
findings:
  - "The search found 275 documents combining digital twin and robotics, but only 30 combining digital twin and human-robot collaboration."
  - "What separates the three terms is the data exchange between physical and virtual: manual in both directions is a digital model; automatic only from physical to virtual is a digital shadow; automatic in both directions is a digital twin."
  - "There are two approaches to building one. The simulation-based approach gathers models and data from each life-cycle phase and suits new products better; the layer-based approach (physical, virtual and connection layers) suits existing factories monitored in real time."
  - "The benefits described include testing safety before deployment through virtual commissioning, predictive maintenance, task planning and allocation, and training with virtual reality. The twin also helps find the trade-off between robot speed and operator safety."
  - "The challenges include the lack of a generic architecture, cost, real-time synchronization, the gap between simulation and reality, and the lack of a method to determine the twin's fidelity. The authors consider it almost unfeasible, with current technology, to model the operator's physical health and emotional aspects, such as fatigue and trembling."
limitations: "The review states no inclusion criteria, and the search runs only to September 2021. The operator appears in the twins described as a moving skeleton, without fatigue or emotional state. The text is framed in Industry 4.0 and does not discuss the operator's participation in the design."
---
