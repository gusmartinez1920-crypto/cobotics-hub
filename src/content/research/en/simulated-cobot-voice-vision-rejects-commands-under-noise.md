---
title: "A simulated cobot that hears and sees would rather refuse a command than grab the wrong part"
description: "In simulation, a system that weights voice and vision by the quality of each signal picked no wrong object in 210 runs, but rejected most commands under heavy noise."
translationKey: alfaroviquez2026
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "A Digital Twin Framework for Multimodal Operator-Centered Human–Cobot Collaboration in Assembly Tasks"
  authors:
    - "David Alfaro-Viquez"
    - "Mauricio Zamora-Hernandez"
    - "Michael Fernandez-Vega"
    - "David Ortiz-Perez"
    - "Jose Garcia-Rodriguez"
    - "Jorge Azorin-Lopez"
  year: 2026
  venue: "Machines"
  doi: "10.3390/machines14070780"
  url: "https://doi.org/10.3390/machines14070780"
  openAccess: true
  license: "CC BY"
whyItMatters: "Factories have machine noise, poor light and hidden objects, and these get in the way of a cobot controlled by voice and camera. The study shows a way for the system to notice that a signal has degraded and decide not to act rather than act wrongly. It also logs the weights behind each decision, which makes it easier to audit why the robot did or did not do something."
method: "The authors built the system in simulation, with a virtual two-arm ABB YuMi robot, a depth camera and a language model that runs locally. Voice goes through speech recognition and the image through object detection; a fusion engine weights each channel according to its quality, and a threshold rejects low-confidence commands before they reach the language model. The virtual bench held three colored cubes and a screwdriver. A single operator recorded 15 commands, repeated under seven conditions of audio noise and image degradation, with adaptive fusion and with fixed weights of 50% per channel, for a total of 210 runs."
findings:
  - "With clean audio or light to moderate noise, and with any level of image degradation, both configurations got 100% of the commands right."
  - "The weight given to audio fell from 0.796 to 0.753 as the noise increased, still with 100% accuracy. The fusion noticed the signal getting worse before it affected the result."
  - "Under heavy noise, adaptive fusion correctly executed only 13.3% of the commands, because the threshold blocked 13 of the 15. With fixed weights, accuracy was 60.0%, but the robot picked the wrong object three times."
  - "Across all 210 runs, adaptive fusion handled no wrong object; fixed weights made 8 such errors. In the condition with heavy noise and degraded image, 45.5% of the commands that fixed weights actually executed went to the wrong object."
  - "All processing is local: audio, transcripts and images from the workstation do not leave the system. The authors argue that publishing the weights and confidence behind each decision meets the traceability requirements of the European regulation on artificial intelligence."
limitations: "Everything was done in simulation, with no physical robot, and the authors themselves say the system is not a complete digital twin. The test used a single operator, 15 commands, three cubes told apart by color and synthetic degradation, and the sensitivity of the rejection threshold was not studied. The reduction in the operator's mental workload, used as a justification, was not measured."
---
