---
title: "Formal verification finds hazards that manual risk assessment can miss"
description: "The authors propose a method that models a collaborative cell in temporal logic and uses an automatic verifier to find contact hazards. In a real case it flagged 60 occurrences of 27 hazards."
translationKey: vicentini2020
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The method looks for contact hazards between robot and operator at the design stage, including those that arise from worker errors and unintended uses."
paper:
  title: "Safety Assessment of Collaborative Robotics Through Automated Formal Verification"
  authors:
    - "Federico Vicentini"
    - "Mehrnoosh Askarpour"
    - "Matteo G. Rossi"
    - "Dino Mandrioli"
  year: 2020
  venue: "IEEE Transactions on Robotics"
  doi: "10.1109/tro.2019.2937471"
  url: "https://doi.org/10.1109/tro.2019.2937471"
whyItMatters: "Risk assessment done by hand is static and depends on the assessor imagining what can go wrong. Here the computer goes through every possible sequence of robot and operator actions, including errors and delays, at the design stage. The study shows what this approach delivers and how much time it costs."
method: "This is a method proposal with a case study. The authors describe in temporal logic the layout, the robot and the operator (with 11 body regions), along with tasks broken down into elementary actions. The operator may delay, skip or insert actions. The model identifies mechanical contact hazards, estimates risk and tests reduction measures; an automatic verifier searches for counterexamples. The case is the assembly of machine tool pallets in a real factory, with a manipulator on a mobile base and two operators."
findings:
  - "In the real case, the method found 60 occurrences of 27 distinct hazards, 73% of them transient (an impact in which the body can recoil). The rest are quasi-static, in which the person is trapped against an object."
  - "45% of the hazards came from unintended uses or operator errors."
  - "The method does not replace the human assessor: that person tunes the model and confirms the mitigation measure (limit force, reduce speed, change the path) before running the verification again."
  - "The operator is modeled through the visible effects of errors (delay, wrong place, wrong sequence), without representing the causes, such as tiredness or distraction."
  - "Each verification run took 19 min 37 s on average on an ordinary desktop computer, plus a few days of modeling that can be reused in similar applications. The authors judge the effort to be smaller than that of a usual full assessment, based on their own experience."
limitations: "The method was not compared with a manual assessment of the same cell. More detailed models push verification time up to hours, which rules out use while the system is running. Only mechanical hazards are covered; fatigue, attention and mental workload are left out, and the probabilities are estimated from experience."
---
