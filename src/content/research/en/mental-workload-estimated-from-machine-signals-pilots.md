---
title: "Machine data reveal the operator's mental workload better than body signals"
description: "With helicopter pilots in a simulator, a machine learning model estimated mental workload. Data from the controls and the aircraft predicted it better than physiological signals."
translationKey: roques2025
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Continuous Assessment of Mental Workload During Complex Human–Machine Interaction: Inferring Cognitive State from Signals External to the Operator"
  authors:
    - "Axel Roques"
    - "Dimitri Keriven Serpollet"
    - "Alice Nicolaï"
    - "Stéphane Buffat"
    - "Yannick James"
    - "Nicolas Vayatis"
    - "Ioannis Bargiotas"
    - "Pierre-Paul Vidal"
  year: 2025
  venue: "Sensors"
  doi: "10.3390/s25123624"
  url: "https://doi.org/10.3390/s25123624"
whyItMatters: "The study is about flying helicopters, not about robots: the link to cobots is the reader's, not the study's. The idea of interest is that the mental state of someone operating a complex machine can be estimated from the way the person acts on the controls, with no sensors attached to the body. For anyone thinking of monitoring operators' mental workload with connected data, it is an argument for looking first at what the machine itself already records."
method: "Nine professional helicopter pilots flew two missions in a full flight simulator: a reconnaissance mission and a rescue mission with bad weather and failures, designed to raise mental workload. Data from two pilots were excluded because of sensor noise. The authors computed 76 indicators in three groups (pilot physiology, machine state and actions on the controls) and trained a simple machine learning model to separate high from low workload. The main reference was the 0-to-100 rating that the pilots themselves gave aloud at key moments."
findings:
  - "With the 76 indicators, the model reached an area under the ROC curve of 0.836, a measure of accuracy in which 0.5 equals chance and 1 a perfect score. Performance varied considerably from one pilot to another."
  - "The indicators the model used most measure interaction with the controls and the movement of the aircraft, such as the variation in displacement and force on the pedals and the stick. Mean heart rate was the only physiological indicator among the most used."
  - "On their own, physiological signals reached 0.699, machine state data 0.777 and data on control actions 0.763. No single group matched the complete set."
  - "When the reference was the NASA-TLX questionnaire answered after the flight, performance fell to 0.733. The estimate made by instructor pilots, who did not fly the scenarios, anticipated the workload experienced by the pilots poorly (0.622)."
  - "The authors raise the hypothesis that the chain of command between pilot and machine filters the noise in body signals, which would make physiological recording less necessary; they consider such recording problematic from the practical and ethical points of view."
limitations: "The sample is small for machine learning (seven pilots with valid data, all men) and the setting is a helicopter simulator, not a factory. The authors acknowledge noisy measurements, frequent self-ratings that disturb the task and little comparison with other algorithms; transfer to shop-floor operators has not been demonstrated."
---
