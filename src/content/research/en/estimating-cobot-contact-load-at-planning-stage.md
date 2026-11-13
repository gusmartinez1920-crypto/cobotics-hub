---
title: "How to estimate a cobot's contact force before the application is built"
description: "The authors propose estimating, at the planning stage, the load a cobot puts on the body in a contact, using an automated collision testbed and a database. It is a prototype, with no measurements."
translationKey: schlotzhauer2022
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study deals with how to check, before the cell is built, whether contact between cobot and operator stays within the limits that mark the onset of pain or injury."
paper:
  title: "Virtual Validation of Power and Force Limiting Setups in Human-Robot-Collaboration"
  authors:
    - "Andreas Schlotzhauer"
    - "Til Stotz"
    - "Ramez Awad"
    - "Werner Kraus"
  year: 2022
  venue: "Procedia CIRP"
  doi: "10.1016/j.procir.2022.05.073"
  url: "https://doi.org/10.1016/j.procir.2022.05.073"
whyItMatters: "In power and force limiting applications, contact between robot and person is allowed as long as it stays within biomechanical limits. Today that load can only be measured once the application is built, and the design may have to be redone. An estimate at the planning stage would help show early whether the desired speed and cycle time are feasible."
method: "This is a conceptual proposal with a prototype, presented at a conference, with no experimental data. On a testbed, an industrial robot positions a measuring device that mimics the human body and a cobot drives a modular impactor against it. The setup varies contact position and direction, speed, payload, surface material and shape, and the body part hit. The values are stored in a database per robot type, and an expert system suggests the closest safe set of parameters."
findings:
  - "According to the authors, the biggest obstacles to wider use of power and force limiting are the lack of a sufficient description of how to validate an application against the biomechanical limits and the lack of an initial cycle time estimate. The paper addresses the second."
  - "The authors report that planning today is trial and error: measuring the contacts of a single robot takes about one working day for experienced users, longer when parameters need adjusting, and involves several people."
  - "They judge that model-based estimates are poorly suited to contacts in which the body is clamped, because collision detection and the robot's stop are hard to model. That is why they choose an approach based on measured data."
  - "In the proposed system, the user fixes a requirement (for example, the speed dictated by the cycle time) and asks for the free parameter (for example, the highest admissible payload). The answer comes as a concrete measure: change the approach angle, use a softer material, or restrict contact to less sensitive body parts."
  - "The authors state that cobots are installed less often than classic robots and presume that most run behind fences, used for their light weight and easy programming rather than their sensitivity."
limitations: "The paper presents no measured results: the virtual validation in the title is a proposal. The prototype has rudimentary support structures and does not yet measure pressure, and the analysis of the data and of measurement uncertainty is left for future work. The operator appears only as a body part represented by the measuring device."
---
