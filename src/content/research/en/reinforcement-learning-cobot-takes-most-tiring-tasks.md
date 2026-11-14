---
title: "A reinforcement learning planner makes the cobot take on the most tiring tasks"
description: "A task planner estimates the operator's muscle exertion from body-worn sensors and hands the most fatiguing steps to the cobot. In a test with 8 people, perceived exertion fell from 4.56 to 2.31."
translationKey: you2025
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
    why: "The method distributes assembly tasks to reduce the operator's physical exertion, which is linked to work-related musculoskeletal disorders."
paper:
  title: "Towards human-centric manufacturing: A reinforcement learning method for physical exertion alleviation in HRCA"
  authors:
    - "Yingchao You"
    - "Ze Ji"
  year: 2025
  venue: "Robotics and Computer-Integrated Manufacturing"
  doi: "10.1016/j.rcim.2025.103025"
  url: "https://doi.org/10.1016/j.rcim.2025.103025"
  openAccess: true
  license: "CC BY"
whyItMatters: "The split of tasks between person and cobot is usually set by cycle time, not by how tired the worker gets. This study shows a way for the robot to decide, during assembly, what to take on based on an estimate of physical exertion, without imposing a fixed sequence on the operator. It is relevant to anyone researching dynamic task allocation and ergonomics in collaborative cells."
method: "The authors modeled assembly as a turn-based game between person and robot and trained a reinforcement learning policy whose reward penalizes increases in muscle exertion. Exertion comes from a musculoskeletal model of the upper limb, fed by inertial sensors on the body and sped up by a neural network. A mask blocks actions that break the assembly order or exceed the gripper's capacity. Validation had two parts: a simulation with two products (a 9-part desktop computer and a 36-part pump), compared against seven other algorithms, and a real assembly of the computer with a KUKA LBR iiwa cobot and 8 participants, who did five assemblies with the trained policy and five with a random policy."
findings:
  - "In simulation, the proposed method achieved the best reward for both products and for every number of cycles tested, and converged faster than the seven comparison algorithms."
  - "Without the action mask, the policy produced on average more than four invalid actions when assembling a single unit (4.18 for the computer and 4.88 for the pump). With the mask, none. The authors consider invalid actions unacceptable on a line with cobots because they cause defects or risk."
  - "A decision takes about 0.0007 seconds, with models of just over 50 thousand parameters, which allows near real-time use."
  - "In the real experiment, perceived exertion on the modified Borg scale fell from 4.56 with the random policy to 2.31 with the trained policy (p = 0.0123). The exertion index computed by the model fell from 0.37 to 0.32 (p = 0.0456)."
  - "With the trained policy, the robot assembled the graphics card, the cooler and the power supply; the person handled the motherboard, processor, memory, disk and cover, partly because the gripper cannot pick up the motherboard or the cover."
limitations: "The real test took place in a laboratory, with 8 young participants and five assemblies per condition, with no factory setting or long shifts. The planner optimizes physical exertion only, without considering cycle time or safety, and the exertion model covers only the right side of the upper torso and ignores the contact forces of assembly. In the simulation, muscle exertion was represented by random values, not by real human movement."
---
