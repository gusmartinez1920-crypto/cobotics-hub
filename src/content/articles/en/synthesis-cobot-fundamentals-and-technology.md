---
title: "Cobot fundamentals: what the research shows about collaborating and sensing"
description: "An overview of 19 summaries on what makes a robot collaborative and what it must perceive about a person: interaction levels, sensors, prediction, task allocation, and interfaces."
translationKey: synthesis-fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intro
aiAssisted: true
humanReviewed: false
translationReviewed: false
---

In the summaries on this topic, “collaborative” describes a way of working, with degrees that range from coexistence to collaboration on the same object ([Aaltonen et al., 2018](/en/research/levels-of-collaboration-between-worker-and-cobot/)). To share the space, the robot needs to perceive where the person is, what force the person applies and, increasingly, what the person will do next ([Robinson et al., 2023](/en/research/robotic-vision-in-human-robot-interaction-and-collaboration/); [Wang et al., 2023](/en/research/multimodal-human-robot-interaction-vision-voice-touch-signals/); [Du et al., 2026](/en/research/human-behavior-prediction-in-human-robot-collaboration/)). This synthesis draws on 19 summaries, almost all from the lab or from simulation.

## “Collaborative” describes the work, not just the machine

A four-level framework runs from physical separation to collaboration on the same object. Applied to two industrial cases, it showed that the main task in neither of them reached collaboration. It also showed that two situations can be equal for safety and different for the person ([Aaltonen et al., 2018](/en/research/levels-of-collaboration-between-worker-and-cobot/)). A review of 65 articles found that avoiding collisions is not enough for worker comfort ([Simões et al., 2022](/en/research/how-to-design-human-robot-collaborative-workspaces/)), and an editorial argues, as an opinion, that collaborating requires understanding situations and communicating ([Faccio & Cohen, 2023](/en/research/intelligent-cobots-collaboration-beyond-collision-avoidance/)).

## What can the robot perceive about the person?

In a review of 310 articles on robot vision, the most common case among collaborative actions is the robot that detects the person and then stops, slows down, or changes its path ([Robinson et al., 2023](/en/research/robotic-vision-in-human-robot-interaction-and-collaboration/)). Each sensor fails in its own way: vision suffers from occlusion and cannot tell accidental contact from intentional contact, and audio suffers from noise. A review of 199 articles treats force and torque as critical feedback ([Wang et al., 2023](/en/research/multimodal-human-robot-interaction-vision-voice-touch-signals/)).

Contact is also handled in the controller. A robot with no force sensor estimated contact from the difference between the desired and the actual position and succeeded in 93% of the assemblies of a gear, versus 19% without automatic optimization ([Roveda et al., 2021](/en/research/sensorless-robot-learns-assembly-from-demonstration/)). In simulation, a controller yielded to human force without leaving moving workspace limits ([Sun et al., 2025](/en/research/fixed-time-control-physical-human-robot-collaboration/)). Yielding has a cost: in a teleoperation test with six people, low stiffness made contact gentler but brought tracking errors and delays ([Si et al., 2025](/en/research/teleoperated-ultrasound-cobot-haptic-device-vs-3d-mouse/)).

## Predicting the person saves time, but the safety of prediction remains open

A review of 180 articles compares three families of prediction methods. Mechanism-based methods are interpretable and generalize poorly; the safety of data-driven methods is hard to guarantee; the fusion of the two is growing, with guarantees that are still empirical ([Du et al., 2026](/en/research/human-behavior-prediction-in-human-robot-collaboration/)). The measured gains are in time and come from simulation: a cobot removed an average of 3.4 s of waiting per phase in a packaging task ([Ghadirzadeh et al., 2021](/en/research/proactive-cobot-with-deep-reinforcement-learning/)), and predicting where the operator leaves the part cut picking time by about 16% ([Sobaszek, 2026](/en/research/predictive-algorithm-cuts-cobot-picking-time/)).

## Dividing the tasks matters as much as the sensors

In a survey with 34 respondents, 73% rated as a large or very large challenge deciding where to collaborate and who does what. The authors propose sending to the robot every task that would cause progressive harm to the person ([Ranz et al., 2017](/en/research/capability-based-task-allocation-between-operator-and-robot/)). A review of 37 studies found safety among the criteria of only 8 of the 30 approaches analyzed ([Petzoldt et al., 2023](/en/research/who-does-what-task-allocation-in-cobot-assembly/)). In a numerical case with 12 tasks, allocating by distance cut total time by about 15% ([Faccio et al., 2023](/en/research/task-allocation-with-variable-cobot-speed/)); in a test with 4 people, giving the robot the most unpredictable tasks reduced the variation in duration by 32.4% ([You et al., 2026](/en/research/human-robot-task-planning-physical-exertion-uncertainty/)). One warning: situational awareness worsens when the robot alone decides the sequence ([Simões et al., 2022](/en/research/how-to-design-human-robot-collaborative-workspaces/)).

## The interface needs to inform about the task

In industry, the touchscreen remains the commercial option, and gestures and voice are at an early stage, according to a narrative review ([Berg & Lu, 2020](/en/research/gesture-voice-and-screen-interfaces-for-industrial-robots/)). In an experiment with 40 students, a face on the cobot's screen did not increase trust and drew the eyes away from the handover area ([Onnasch & Hildebrandt, 2021](/en/research/face-on-cobot-does-not-raise-trust-and-distracts/)). In prototypes, natural-language requests reached 85% planning success in three lab tasks ([Zheng et al., 2024](/en/research/mobile-robot-plans-tasks-from-language-and-mixed-reality/)), and people who could not perform the gestures of an augmented reality system did not complete the task ([Zhang & Ruttico, 2025](/en/research/bricklaying-with-cobot-and-augmented-reality/)).

## What is still unknown

Almost everything comes from the lab, simulation, or numerical cases, with samples of 4 to 40 people, often students ([Onnasch & Hildebrandt, 2021](/en/research/face-on-cobot-does-not-raise-trust-and-distracts/); [You et al., 2026](/en/research/human-robot-task-planning-physical-exertion-uncertainty/)). In the vision review, only 21% of the articles report an experiment with people ([Robinson et al., 2023](/en/research/robotic-vision-in-human-robot-interaction-and-collaboration/)). Real deployments and long-term studies are missing ([Petzoldt et al., 2023](/en/research/who-does-what-task-allocation-in-cobot-assembly/)). And the prediction and control studies do not connect their results to the risk assessment or to the force limits of the standards ([Du et al., 2026](/en/research/human-behavior-prediction-in-human-robot-collaboration/); [Sun et al., 2025](/en/research/fixed-time-control-physical-human-robot-collaboration/)).

## In practice

- Describe the cell by space, robot activity, joint effort, and contact, including secondary tasks such as clearing faults ([Aaltonen et al., 2018](/en/research/levels-of-collaboration-between-worker-and-cobot/)).
- Do not rely on a single sensor: know where the camera, the microphone, and touch sensing fail ([Wang et al., 2023](/en/research/multimodal-human-robot-interaction-vision-voice-touch-signals/)).
- Decide the task division early, with ergonomics among the criteria, and listen to the people who will work at the station ([Ranz et al., 2017](/en/research/capability-based-task-allocation-between-operator-and-robot/); [Simões et al., 2022](/en/research/how-to-design-human-robot-collaborative-workspaces/)).
- First define the information to be exchanged and then the interaction mode; avoid screen elements that do not help with the task ([Berg & Lu, 2020](/en/research/gesture-voice-and-screen-interfaces-for-industrial-robots/); [Onnasch & Hildebrandt, 2021](/en/research/face-on-cobot-does-not-raise-trust-and-distracts/)).
- Treat time gains from prediction as simulation results, with no safety measurement ([Ghadirzadeh et al., 2021](/en/research/proactive-cobot-with-deep-reinforcement-learning/); [Sobaszek, 2026](/en/research/predictive-algorithm-cuts-cobot-picking-time/)).
