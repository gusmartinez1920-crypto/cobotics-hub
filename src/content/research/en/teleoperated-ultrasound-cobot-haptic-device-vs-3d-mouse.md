---
title: "Teleoperated ultrasound with a cobot: the haptic interface performs better but tires more"
description: "The study compared two interfaces for teleoperating a cobot in an ultrasound exam. The haptic device gave less error and shorter times than the 3D mouse but demanded more effort."
translationKey: si2025
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Design and Quantitative Assessment of Teleoperation-Based Human–Robot Collaboration Method for Robot-Assisted Sonography"
  authors:
    - "Weiyong Si"
    - "Ning Wang"
    - "Chenguang Yang"
  year: 2025
  venue: "IEEE Transactions on Automation Science and Engineering"
  doi: "10.1109/tase.2024.3350524"
  url: "https://doi.org/10.1109/tase.2024.3350524"
  openAccess: true
whyItMatters: "Choosing a teleoperation interface is often a cost decision made without usage data. This study proposes a set of objective and subjective measures for comparing interfaces and shows a common tension in collaborative robotics: the best-performing option may be the one that loads the operator most."
method: "The authors built a teleoperation system in which the operator drives a Franka Emika Panda cobot holding an ultrasound probe, using either a haptic device (Touch X) or a low-cost 3D mouse. The robot uses impedance control, which makes it compliant in contact. Six people scanned a training phantom while trying to keep a contact force of 10 N. The measures were perceived workload (NASA-TLX questionnaire), learning and execution times, force error, image quality and muscle fatigue by electromyography."
findings:
  - "With the haptic device the force error was 3.8 N, against 7.4 N with the 3D mouse, and the mean task time was 53 s against 84 s."
  - "The haptic device also had a smaller probe orientation error and less image noise. On the other hand, it takes longer to learn."
  - "The muscle fatigue index was higher with the haptic device (89.34 against 76.23). In the questionnaire, mean mental demand was almost twice that of the 3D mouse (13.4 against 6.8)."
  - "The low stiffness of the controller makes contact with a person gentler but causes errors and delays in tracking position and orientation. The authors treat this as an inherent limit of this type of control."
  - "The authors conclude that the haptic device outperforms the 3D mouse in everything except muscle fatigue, and propose shared control and machine learning to relieve the operator."
limitations: "The sample has six participants, the tests were run on a training phantom rather than on patients, and the differences were not tested statistically. The study does not analyze force limits for patient safety."
---
