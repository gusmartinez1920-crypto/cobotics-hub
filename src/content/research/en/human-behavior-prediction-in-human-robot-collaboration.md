---
title: "How the robot predicts what a person will do: three families of methods compared"
description: "A review of 180 papers compares three ways of predicting human behavior in work with robots: mechanism-based models, data-based models and the fusion of the two."
translationKey: du2026
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The review treats human behavior prediction as a way to avoid collisions and injuries for people working close to the robot, and includes fatigue and workload."
paper:
  title: "Towards seamless and safe human-robot collaboration in Industry 5.0: advances in human behaviour prediction"
  authors:
    - "Yuyang Du"
    - "Bi Zhang"
    - "Chen Zheng"
    - "Yunlong Tang"
  year: 2026
  venue: "International Journal of Production Research"
  doi: "10.1080/00207543.2026.2639732"
  url: "https://doi.org/10.1080/00207543.2026.2639732"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "To work close to a person without hitting them, the robot has to anticipate their movements and intentions. The review shows what each type of method delivers in data dependence, transparency and safety, which helps in choosing an approach and in being wary of promises of safety obtained through learning alone."
method: "The authors searched Google Scholar and Web of Science for papers in English from 2010 to 2025, with one search string for each family of methods. The January 2025 search returned 524 and 1,687 records; screening left 282, and full reading plus a search of the reference lists led to 180 papers. The studies were tabulated by scenario, application, data type and model, and the authors also reviewed 10 datasets and proposed a unified framework."
findings:
  - "The review separates two scenarios: close collaboration (handing over parts, assembly, physical guidance), in which the robot predicts the worker's goal or action, and social navigation, in which a mobile robot looks for a safe path near people."
  - "Mechanism-based methods (body and motion kinematics, the social force model) depend little on data, are easy to interpret and are safe by design, but require expert knowledge and generalize poorly. Data-based methods (probabilistic inference and deep learning) depend heavily on data, are hard to interpret and have safety that is difficult to guarantee."
  - "Fusion uses the biological or cognitive mechanism (kinematics, muscle activation, trust, workload) as a constraint on the data model. In the filtered papers, it grew over the last seven years and surpassed data-based methods from 2022 to 2024, but its safety guarantees remain empirical."
  - "According to the authors, the main limitation is not a lack of techniques but a lack of unified, human-centered frameworks: prediction is treated as an isolated short-term module, with no link to task planning, trust or long-term learning."
  - "The challenges include variation between people and over time and the lack of standardized datasets: of the 10 reviewed, few contain cognitive data and all but one use sensors attached to the body. The authors propose a four-layer framework: data from multiple sources, a physical world model, fusion-based prediction and adaptive control."
limitations: "The review does not assess the quality of the studies included, and the four-layer framework is a proposal that has not yet been tested. The set mixes industrial cobots with mobile robots, teleoperation and medical applications, so the results do not apply to manufacturing alone. The text does not discuss how a learned prediction would fit into the risk assessment required by safety standards."
---
