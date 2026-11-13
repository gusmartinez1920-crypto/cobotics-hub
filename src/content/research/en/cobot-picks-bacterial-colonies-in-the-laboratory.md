---
title: "A cobot taught by demonstration picks bacterial colonies in the laboratory"
description: "A cobot taught by demonstration picked and deposited 56 bacterial colonies for identification in a microbiology laboratory; about 11% of the samples were not identified."
translationKey: baumkircher2022
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Collaborative Robot Precision Task in Medical Microbiology Laboratory"
  authors:
    - "Aljaz Baumkircher"
    - "Katja Seme"
    - "Marko Munih"
    - "Matjaž Mihelj"
  year: 2022
  venue: "Sensors"
  doi: "10.3390/s22082862"
  url: "https://doi.org/10.3390/s22082862"
  openAccess: true
  license: "CC BY"
whyItMatters: "Automatic colony-picking systems are large and expensive, or serve a single task. The study tests the cobot as an alternative that laboratory staff themselves could teach by guiding the arm by hand, without programming. It also shows the limit of this kind of teaching when the task requires sub-millimeter precision."
method: "In a university laboratory, the authors fitted a Franka Emika Panda cobot with a custom tool: a camera, a laser profiler, a force sensor and a steel needle heat-sterilized after each use. An operator demonstrated the picking by guiding the arm, and a generalization method adapted the movement to new positions from a single demonstration. The robot picked and deposited 56 colonies of two bacterial species, which then went on to identification by mass spectrometry. There was no direct comparison with a human operator: the manual reference comes from another study."
findings:
  - "Picking taught by demonstration worked: in the six colonies measured, only the largest did not come off whole in a single pass, and removal of culture medium along with the colony was insignificant, except in the smallest one."
  - "Deposition taught by demonstration proved unreliable and was replaced by a programmed trajectory; the generalization method served only to adapt it to the positions."
  - "During deposition, contact force rarely exceeded 1 N, and the average after compensation was 0.29 N, with a position correction of about 0.5 mm."
  - "Of the 56 samples, 6 were invalid in identification, about 11% of the total: 5 from one species (13.9%) and 1 from the other (5%). The authors consider this rate comparable to that of manual deposition reported in another study."
  - "The uniform appearance of the deposited material did not predict successful identification. Choosing the colony and applying the final reagent remained the operator's job."
limitations: "This is a single case, with two bacterial species and no experimental comparison with manual work. Only the picking was actually taught by demonstration. The study does not measure teaching time, ease of use or acceptance by operators, although the argument is to serve inexperienced people, and it presents no risk assessment of the application."
---
