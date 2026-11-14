---
title: "Safety and standards with cobots: what the research shows"
description: "An overview of 20 studies on safety in human-robot collaboration: protection comes from a risk assessment of the whole application, and almost everything has been tested only in the lab."
translationKey: synthesis-safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intro
aiAssisted: true
humanReviewed: false
translationReviewed: false
---

In the 20 summaries behind this synthesis, no single device protects the person who shares a workstation with a robot. Protection comes from a risk assessment of the whole application: robot, tool, layout, and person. That decision falls to designers and integrators ([Chemweno et al., 2020](/en/research/iso-ts-15066-safeguards-and-risk-assessment/); [Segura et al., 2022](/en/research/map-of-safety-standards-for-collaborative-systems/)). The summaries do not discuss legal liability for an accident.

## Safety belongs to the application, not to the robot

The 2025 edition of ISO 10218, the base standard for industrial robots, drops the term collaborative robot: collaboration becomes a property of the application ([Hartmann et al., 2026](/en/research/iso-10218-2025-edition-what-changed-from-2011/)). A cobot leaves the factory with safety measures, but that condition changes once it gets a gripper and enters a workstation ([Gualtieri et al., 2020](/en/research/design-guidelines-collaborative-assembly-workstation/)).

One survey reports, with no data, that organizations assess the cobot with the same procedures used for conventional robots ([Segura et al., 2022](/en/research/map-of-safety-standards-for-collaborative-systems/)). A narrative review found that speed, force, and stop limits are rarely tied to the risk assessment ([Chemweno et al., 2020](/en/research/iso-ts-15066-safeguards-and-risk-assessment/)). Another, of 58 papers, found that companies use commercial software that rarely covers everything the standards require ([Giallanza et al., 2024](/en/research/occupational-health-and-safety-in-human-robot-collaboration/)).

## Risk does not end at collision

A review of 32 documents gathered 254 risk factors into five classes. Technology accounts for 44% and human for 27%; in the human class, more than half are psychosocial. The count does not say which factors are more serious ([Berx et al., 2022](/en/research/risk-factors-human-robot-collaboration-five-classes/)). For 13 experts, the worker carries 44.9% of the weight in preventing accidents and robotic systems 21.3%; these are opinions, not accident data ([Lee & Lim, 2025](/en/research/non-physical-risk-assessment-for-work-with-cobots/)).

A penetration test on a single cobot model managed to shut the robot down without authentication; the authors describe how disabling collision detection would create physical danger ([Hollerer et al., 2021](/en/research/cobot-penetration-test-cybersecurity-and-physical-safety/)). The 2025 edition of ISO 10218 makes cybersecurity a requirement ([Hartmann et al., 2026](/en/research/iso-10218-2025-edition-what-changed-from-2011/)).

## Can contact be predicted before the cell is built?

In power and force limiting mode, contact is allowed within biomechanical limits, but the load is measured only once the application is built ([Schlotzhauer et al., 2022](/en/research/estimating-cobot-contact-load-at-planning-stage/)). On a single robot, at 400 mm/s, the transient contact force changed by almost 250 N between two arm postures. The same authors' simulation plug-in was not compared numerically with the measurements ([Dombrowski et al., 2018](/en/research/simulating-cobot-collisions-power-and-force-limiting/)).

An automatic verifier flagged, in a real factory, 60 occurrences of 27 contact hazards, 45% arising from unintended uses or operator errors ([Vicentini et al., 2020](/en/research/formal-verification-for-risk-assessment-of-collaborative-cells/)). In a lab case, three engineers with no safety training used guidelines and lowered the worst-case risk index from 12 to 6. The largest gain came from separating person and robot ([Gualtieri et al., 2022](/en/research/safety-guidelines-collaborative-assembly-validation/)).

## How to protect without stopping the robot at every approach

Conventional monitoring stops the robot whenever the person comes close. A real-time risk index, which makes the robot slow down or move around the person, reacted in 159 ms in simulation, against 147 ms for the conventional method ([Liu et al., 2020](/en/research/dynamic-risk-assessment-and-active-robot-response/)). With a camera that recognizes body parts, the average cycle of a lab task was 22.78 s, against 26.98 s with a laser scanner; it is not a certified system ([Bricher & Müller, 2025](/en/research/deep-learning-vision-adjusts-cobot-speed-iso-ts-15066/)). A planner that keeps farther away when the motion prediction is uncertain had no collision in 70 movements by five participants ([Kanazawa et al., 2019](/en/research/cobot-motion-planning-based-on-prediction-uncertainty/)).

In virtual reality, with students, neither reducing speed nor moving back proved clearly superior ([Vosniakos et al., 2019](/en/research/reduce-speed-or-move-back-virtual-reality-test/)). A review of 55 papers warns that faster and safer robots may lead the operator to work closer to them, at a cost to the psychological side ([Gualtieri et al., 2021](/en/research/safety-and-ergonomics-in-collaborative-robotics-review/)).

## What is still unknown

Almost everything was tested in the lab, in simulation, or in virtual reality, with a single robot and few people; one review found the same in almost all published solutions ([Giallanza et al., 2024](/en/research/occupational-health-and-safety-in-human-robot-collaboration/)). The proposed assessment tools have not yet been validated in companies ([Berx et al., 2022](/en/research/safety-readiness-before-buying-a-cobot/); [Gholamizadeh et al., 2025](/en/research/hazard-identification-hazid-in-industry-5-0/)). No paper in one of the reviews deals with operator participation in risk assessment ([Berx et al., 2022](/en/research/risk-factors-human-robot-collaboration-five-classes/)).

## In practice

- Assess the whole application, not just the robot, and start before the purchase ([Berx et al., 2022](/en/research/safety-readiness-before-buying-a-cobot/)).
- Tie each speed, force, and stop limit to the result of the risk assessment ([Chemweno et al., 2020](/en/research/iso-ts-15066-safeguards-and-risk-assessment/)).
- Apply measures in this order: safety by design, additional protective measures, and finally information ([Gualtieri et al., 2022](/en/research/safety-guidelines-collaborative-assembly-validation/)).
- Include network security and non-physical factors, such as stress, fatigue, and training, in the assessment ([Hollerer et al., 2021](/en/research/cobot-penetration-test-cybersecurity-and-physical-safety/); [Lee & Lim, 2025](/en/research/non-physical-risk-assessment-for-work-with-cobots/)).
- Involve the operator in defining the layout and the activities ([Gualtieri et al., 2020](/en/research/design-guidelines-collaborative-assembly-workstation/)).
