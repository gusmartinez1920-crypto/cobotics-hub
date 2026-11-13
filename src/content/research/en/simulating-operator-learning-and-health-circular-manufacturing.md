---
title: "How to put operator learning and health inside a factory simulation"
description: "The authors propose guidelines for a discrete-event simulation of how operators gain skill and wear down their health in circular manufacturing systems, and illustrate them with 30 participants."
translationKey: denu2024
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The proposal includes the operator's physical and psychosocial health and learning as variables in the simulation of a production system."
  - goal: 12
    why: "The study deals with circular manufacturing systems, such as remanufacturing, repair and disassembly, which rely heavily on skilled manual work."
paper:
  title: "Towards Human-Centric Digital Simulation: Guidelines to Simulate Operators Skills Acquisition and Health in Circular Manufacturing Systems"
  authors:
    - "Maxence Denu"
    - "Pierre David"
    - "Fabien Mangione"
    - "Aurélie Landry"
  year: 2024
  venue: "IFAC-PapersOnLine"
  doi: "10.1016/j.ifacol.2024.09.252"
  url: "https://doi.org/10.1016/j.ifacol.2024.09.252"
whyItMatters: "Factory simulations usually treat the operator as a fixed-time resource. This work shows how to include learning, fatigue and health in the model, which matters to anyone building digital twins of workstations. The study is not about robots: the cobot appears only as a technology to include in future work, and the bridge to cobotics is the reader's."
method: "This is a conference paper in three parts. First, a narrative review of simulation in circular manufacturing (remanufacturing, repair, disassembly), skills and operator health. Then the proposal: three components (product, operator and process), one model for processing time, another to update health and skill, a three-step simulation pattern and a data collection protocol with ergonomic observation, questionnaires and video. Finally, an application on a technology platform, where 30 participants aged 19 to 45 disassembled small tidal turbines for one hour, completing about five processes each."
findings:
  - "The review found that circular manufacturing simulations generally ignore the social aspect and rarely draw on knowledge from the human sciences. According to the authors, models of learning, forgetting and fatigue exist only separately."
  - "In circular manufacturing, the unpredictable number of operations makes it hard to standardize and automate. This calls for a lot of manual work and extensive skills, and experience translates into better quality."
  - "The proposed simulation pattern has three steps: select an operator with enough experience and health, process the part, and update that operator's skill and health. The allocation rules can vary to test ways of organizing work."
  - "Processing time follows a learning curve fitted to each operator and also depends on the quality of the part and the health of the person processing it."
  - "Health is modeled as a capital from 0% to 100%, with a physical part and a psychosocial part, reduced with each operation according to its ergonomic impact. The authors make clear that the value represents a risk factor, not a prediction of pain."
limitations: "The application only illustrates the methodology: the case is simplified, with student volunteers in a short session, and long-term effects on health could not be studied. The authors acknowledge that the model needs more data and that adding human variables makes validation harder."
---
