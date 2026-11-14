---
title: "Industry 5.0 and work: what the research shows about putting people at the center"
description: "An overview of 13 summaries: digital twins already measure operator effort and fatigue, but almost everything comes from the lab, with few people, and the robot rarely changes because of them."
translationKey: synthesis-industry-5-0
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intro
aiAssisted: true
humanReviewed: false
translationReviewed: false
---

In the 13 summaries on this topic, declaring the human as the center mostly changes what the factory measures: shoulder effort, fatigue, posture, and operator delay start to enter the model of the cell. What stays in the declaration is the next step. Almost everything was tested in the lab or in simulation, with one to three participants, and in several studies the robot still does not change its behavior because of the person. Operator well-being is asserted more often than it is measured.

## The digital twin models the robot well; the person enters as a skeleton

A narrative review found 275 documents that combine digital twin and robotics, but only 30 that combine digital twin and human-robot collaboration. It concludes that the hard part is modeling the operator, not the robot ([Ramasubramanian et al., 2022](/en/research/digital-twin-for-human-robot-collaboration-review/)). In a real battery assembly case, the person is a mannequin; the twin recorded 14 collisions between robot and person in 30 assemblies and treated them as lost productivity, with no risk analysis ([Malik & Brem, 2021](/en/research/digital-twin-of-a-ur5-cobot-cell-case-study/)). In a proof of concept with no quantitative measures, a virtual fence follows the worker, who enters the model only as a geometric obstacle ([Dröder et al., 2018](/en/research/virtual-fence-around-the-human-digital-twin-industrial-robot/)).

## What is already measured about the operator's body?

Three studies go beyond the skeleton. A biomechanical model produced a map of the best and worst positions for the shoulder and arm, with three participants, but with no quantitative correlation with the comfort they reported ([Miehling et al., 2026](/en/research/digital-twin-biomechanical-ergonomic-map-cobot/)). An index that fuses eyes, posture, and muscle signals gave all three participants a lower fatigue score after adjustments to the height, distance, and support of the workstation ([Wang et al., 2026](/en/research/operator-fatigue-in-cobot-assembly-digital-twin/)). A digital human computes joint torque and hands the robot the parts with the highest physical load, but only after the worker falls behind ([Maruyama et al., 2021](/en/research/digital-twin-with-digital-human-reallocates-tasks-to-robot/)).

There is one disagreement: the review considers it almost unfeasible, with current technology, to model fatigue and tremor ([Ramasubramanian et al., 2022](/en/research/digital-twin-for-human-robot-collaboration-review/)), and two studies build fatigue indices, still without validation in a factory ([Wang et al., 2026](/en/research/operator-fatigue-in-cobot-assembly-digital-twin/); [Goonetilleke & Khalid, 2026](/en/research/ur3-cobot-slows-down-according-to-operator-fatigue/)).

## Does the robot change because of the person?

Sometimes, and with caveats. A UR3 cobot reduces its speed to 70%, 40%, and 15% of nominal according to fatigue. In the trial, however, the eye-tracking glasses failed and the fatigue states were triggered from the keyboard, with a single operator ([Goonetilleke & Khalid, 2026](/en/research/ur3-cobot-slows-down-according-to-operator-fatigue/)). In the fatigue index study, the system only recommends adjustments after the analysis, and the cobot's behavior does not change ([Wang et al., 2026](/en/research/operator-fatigue-in-cobot-assembly-digital-twin/)).

With 20 participants, five per group, basic collaboration with a cobot improved efficiency compared with manual assembly, but tended to increase stress. The system with a language model and augmented reality relieved stress, measured with the authors' own questionnaire ([Nie et al., 2025](/en/research/collaborative-assembly-with-llm-and-augmented-reality/)). In two papers, the benefit for the person serves as a justification and was not measured: mental workload, in a voice and vision system that prefers to refuse a command rather than get it wrong ([Alfaro-Viquez et al., 2026](/en/research/simulated-cobot-voice-vision-rejects-commands-under-noise/)), and stress, in a method that measures whether the robot understands the situation ([Müller et al., 2023](/en/research/robot-situation-awareness-intelligent-digital-twin/)).

## Industry and academia disagree about ethics

Two studies with expert panels in the United States rated 42 competencies for working with robots in construction. Safety, the interface with the robot, and task planning came out on top; programming ranked among the last skills ([Olukanni et al., 2025](/en/research/competencies-for-working-with-robots-in-construction/)). Ethics and regulation ranked 4th in academia and 18th in industry ([Olukanni et al., 2025](/en/research/robot-competencies-construction-industry-versus-academia/)). These are small panels from another sector.

## What is still unknown

We do not know whether these measures hold outside the lab. The samples have one to three participants, sometimes the author himself ([Goonetilleke & Khalid, 2026](/en/research/ur3-cobot-slows-down-according-to-operator-fatigue/)) or three men ([Miehling et al., 2026](/en/research/digital-twin-biomechanical-ergonomic-map-cobot/)). The great majority of the 53 studies in a review on safety were done in the lab or in simulation ([Patalas-Maliszewska et al., 2025](/en/research/camera-based-cobot-safety-fails-with-excess-brightness/)). In the system that reallocates parts, only physical load enters the model; mental workload is left out ([Maruyama et al., 2021](/en/research/digital-twin-with-digital-human-reallocates-tasks-to-robot/)). The worker who operates next to the robot was not heard in the competency panels ([Olukanni et al., 2025](/en/research/competencies-for-working-with-robots-in-construction/); [Olukanni et al., 2025](/en/research/robot-competencies-construction-industry-versus-academia/)). The only real case had no long-term follow-up ([Malik & Brem, 2021](/en/research/digital-twin-of-a-ur5-cobot-cell-case-study/)).

## In practice

- Keep the digital twin alive after start-up: in the real case, operating data led the team to reposition fixtures and create a virtual wall ([Malik & Brem, 2021](/en/research/digital-twin-of-a-ur5-cobot-cell-case-study/)).
- Use an ergonomic map to compare positions within the same workstation, not to decide whether a position is acceptable or risky ([Miehling et al., 2026](/en/research/digital-twin-biomechanical-ergonomic-map-cobot/)).
- Do not rely on a single camera to monitor distance: in one test, excess brightness prevented collision detection, and the authors recommend a second camera ([Patalas-Maliszewska et al., 2025](/en/research/camera-based-cobot-safety-fails-with-excess-brightness/)).
- Track stress when you introduce the cobot; in one study, collaboration without adequate support tended to increase it ([Nie et al., 2025](/en/research/collaborative-assembly-with-llm-and-augmented-reality/)).
- Treat fatigue-based speed reduction as a research behavior, without certification; protection against contact still depends on the robot's own collision detection ([Goonetilleke & Khalid, 2026](/en/research/ur3-cobot-slows-down-according-to-operator-fatigue/)).
