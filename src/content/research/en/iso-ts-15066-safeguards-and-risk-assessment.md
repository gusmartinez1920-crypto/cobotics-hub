---
title: "ISO/TS 15066 calls for risk assessment, but studies rarely link it to safeguards"
description: "A review compares the safety strategies in the literature with the clauses of ISO/TS 15066 and proposes a three-phase framework to guide safeguards by the outcome of risk assessment."
translationKey: chemweno2020
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
    why: "The review discusses how to tie the protections for people working with cobots to a structured risk assessment rather than to values chosen case by case."
paper:
  title: "Orienting safety assurance with outcomes of hazard analysis and risk assessment: A review of the ISO 15066 standard for collaborative robot systems"
  authors:
    - "Peter Chemweno"
    - "Liliane Pintelon"
    - "Wilm Decre"
  year: 2020
  venue: "Safety Science"
  doi: "10.1016/j.ssci.2020.104832"
  url: "https://doi.org/10.1016/j.ssci.2020.104832"
  openAccess: true
  license: "CC BY"
whyItMatters: "The standard makes several design safeguards conditional on the outcome of hazard analysis and risk assessment, but does not say how to make that link. In practice, the decision is left to designers and integrators. The study helps cobot integrators see where speed, force and stop limits are often chosen without a basis in risk assessment, and suggests methods to structure it."
method: "This is a narrative review in two stages. The authors first singled out the ISO/TS 15066 clauses that make safeguards conditional on risk assessment and then searched for papers aligned with each one, prioritizing robotics and safety journals. The analysis goes through the clauses on the collaborative workplace, collaborative operation and the operating modes, and organizes the proposal into the three phases of ISO 31000: risk identification, analysis and evaluation."
findings:
  - "The review found that the literature leans toward hardware or control safeguards aimed at avoiding collisions, detached from structured processes of hazard analysis and risk assessment."
  - "The thresholds for stopping functions and speed vary from study to study and are not tied to risk assessment. One study cited uses 100 mm/s, below the thresholds in the standard."
  - "For power and force limiting, the standard sets pain limits for 29 body regions. The literature favors force sensors and tactile skins, with little evidence of a link to formal risk assessment, and the threshold depends on the process: a pointed tool changes the risk."
  - "The authors propose a three-phase framework based on ISO 31000 and suggest methods such as HAZOP, hierarchical task analysis and UML, because the checklists in the standards are not exhaustive."
  - "The standard adopts 1.6 m/s as the operator's speed toward the robot. Since this speed depends on behavior, the authors propose including stress, fatigue, lack of concentration and fear in the analysis."
limitations: "The review does not follow a systematic protocol or report how many papers it analyzed, and the proposed framework was not applied to a case. The authors acknowledge that HAZOP produces a number of scenarios that is hard to handle in complex tasks. The study predates the 2025 edition of ISO 10218 and uses ISO 31000 as its basis."
---
