---
title: "A language model and augmented reality to guide assembly with cobots"
description: "The authors propose a system that combines a language model and augmented reality glasses to guide cobot-assisted assembly of an aerospace electronics cabin, tested with 20 participants."
translationKey: nie2025
topic: industry-5-0
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Probing Augmented Intelligent Human–Robot Collaborative Assembly Methods Toward Industry 5.0"
  authors:
    - "Qingwei Nie"
    - "Yiping Shen"
    - "Ye Ma"
    - "Shuqi Zhang"
    - "Lujie Zong"
    - "Ze Zheng"
    - "Yunbo Zhangwa"
    - "Yu Chen"
  year: 2025
  venue: "Electronics"
  doi: "10.3390/electronics14153125"
  url: "https://doi.org/10.3390/electronics14153125"
  openAccess: true
  license: "CC BY"
whyItMatters: "Assembly in tight spaces relies heavily on the operator's memory and decisions, and the cobot alone does not solve that. The study shows a way to bring process knowledge to the person, in the field of view, and to use a language model to suggest who does what. It also records a point of attention: the cobot without adequate support tended to increase operator stress."
method: "This is a technical proposal validated in a single case study: the assembly of an aerospace electronics cabin on a bench with two vision-equipped cobots, one for picking parts and one for screwdriving. The tasks were described in structured templates, queried by a language model tuned to the domain, and the guidance appears in augmented reality glasses controlled by voice, gesture or gaze. The authors evaluated the model's answers, pose tracking in three scenarios, and compared four ways of assembling with 20 participants."
findings:
  - "The reasoning module does more than give instructions: it analyzes whether the task requires collaboration and autonomously decides the division of labor between operators and cobots. With feedback from quality inspection, it suggests changes such as cable routing or the fastening sequence."
  - "After domain tuning, on 100 question-answer pairs, accuracy in explaining terminology rose from 69.5% to 97.4% and answer correctness from 62.4% to 90.2%."
  - "Compared with two general-purpose language models, the system had an average accuracy of 86% across the three question categories, with a larger advantage in assembly guidance and quality optimization."
  - "In tracking the position of parts, the authors observed no tracking loss and no significant misrecognition under changes in posture, viewpoint and occlusions."
  - "In the experiment with 20 participants in four groups, basic collaboration with a cobot improved efficiency and pass rate compared with manual assembly, but tended to increase operator stress. The proposed system reduced time, improved quality and relieved stress."
limitations: "Validation uses a single aerospace case, with five people per group and stress measured by the authors' own questionnaire. Tracking was assessed qualitatively, with no numerical error. The authors themselves note that the system depends on complete and correct process templates and that tracking degrades with moving occlusions and lighting changes; the study does not discuss the safety of letting a language model divide the tasks."
---
