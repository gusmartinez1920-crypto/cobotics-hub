---
title: "An RFID glove, electrodes and cameras automate the ergonomic assessment of an assembly job"
description: "The authors propose an architecture with an RFID glove, electromyography and depth cameras that fills in three sections of the EAWS method and shows, task by task, where physical risk is high."
translationKey: tomelleri2024
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study aims to protect the physical health of assembly workers by measuring posture, force and load in each task to show where the risk is high."
paper:
  title: "Digital ergonomic assessment to enhance the physical resilience of human-centric manufacturing systems in Industry 5.0"
  authors:
    - "Federica Tomelleri"
    - "Andrea Sbaragli"
    - "Francesco Picariello"
    - "Francesco Pilati"
  year: 2024
  venue: "Journal of Manufacturing Systems"
  doi: "10.1016/j.jmsy.2024.09.003"
  url: "https://doi.org/10.1016/j.jmsy.2024.09.003"
whyItMatters: "Ergonomic assessment of assembly stations is usually done by hand, based on observation and the assessor's judgment. An automatic, task-level measurement shows where the effort is and gives a baseline for deciding where a support, a lifter or a cobot would make a difference. The study is about manual assembly, not robots: the cobot appears only as a possible relief measure, and the link to collaborative projects is the reader's."
method: "The authors developed the architecture and tested it in a laboratory pilot environment. A glove with an RFID reader reads tags on parts, boxes and tools and uses them to split the work into tasks; surface electromyography electrodes on four arm muscles measure effort relative to the person's maximum contraction; two markerless depth cameras classify back posture. The data feed the basic postures, action forces and manual materials handling sections of the EAWS (European Assembly Worksheet). The test case was one operator assembling a chest of drawers in 22 tasks, in a 51.7-minute sequence."
findings:
  - "The overall whole-body score was 51.03 points, a high risk level. For each task, the highest of the posture, force and load-handling scores counts; the overall score is the average across tasks."
  - "The worst task for posture was fitting the drawers: 69.3 points in 171.7 seconds. The operator stood upright for only 23.1% of that time and had the trunk rotated for 73.1% of it; the authors propose a height-adjustable support and tools within reach."
  - "For action forces, about 68.1% of the tasks were at low risk, but manual dowel insertion stood out: a flexor muscle in the right forearm reached 66.7% of maximum contraction for 57.3 seconds."
  - "A large-amplitude electromyography signal does not mean high effort. Visually intense stretches corresponded to 5.5% and 1.5% of maximum contraction, because the measure depends on each person's maximum strength."
  - "For load handling, the overall score was low (1.3), but only 4 of the 22 tasks involved parts heavier than 3 kg, which makes the average uninformative. To preserve privacy, the system does not record gender and scores all loads using the female values, which are higher."
limitations: "The validation used a single operator, in a laboratory, with no comparison against an ergonomist's assessment and no measure of the system's accuracy. The authors themselves acknowledge that EAWS does not cover mental workload, that the section on repetitive upper-limb movements was left out, and that the architecture works only after data collection, not in real time. The study does not discuss management's use of the monitoring data or worker consent."
---
