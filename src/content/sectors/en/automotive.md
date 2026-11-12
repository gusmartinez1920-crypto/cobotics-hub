---
title: "Automotive"
description: "Assembly, screwdriving and inspection next to people, on lines with many vehicle variants."
translationKey: automotive
order: 1
pillars: [cobot, iot, twin]
authors: [claude]
date: 2026-11-12
aiAssisted: true
humanReviewed: false
translationReviewed: false
applications:
  - "Screwdriving with torque and angle control"
  - "Applying adhesives and sealants"
  - "Visual inspection of finish and fit"
  - "Machine tending (loading and unloading parts)"
  - "Assembling interior components"
sdgs:
  - goal: 8
    why: "Cobots can take over repetitive tasks and hard postures, such as working with arms above the head, reducing the risk of injury."
  - goal: 9
    why: "Shows how sensors and simulation help assembly lines handle many variants without stopping production."
---

The automotive industry was one of the first to use industrial robots at scale — usually fenced off, in welding and painting. Cobots fill a different space: **final assembly**, where people still do most of the work and each car may have a different combination of options.

## Why cobots here

- **Repetitive, tiring tasks:** driving dozens of identical screws, laying adhesive beads, holding parts in awkward positions.
- **Working side by side:** the cobot does the repetitive part and the person does what needs dexterity, judgment or visual checks.
- **Fast changeover:** with many variants per line, a robot that is easy to reprogram and relocate is valuable.

## Where IoT and the digital twin come in

- **Traceability:** the screwdriver and the cobot record the torque and angle of every screw, linked to the vehicle number.
- **Cell simulation:** before changing the line, the digital twin lets you test reach, cycle time and the split of tasks between person and robot.
- **Maintenance:** vibration and current sensors on tools help spot wear before a failure.

## Watch out for

- **Payload:** the weight of the part **plus** the gripper must fit the cobot's capacity, with margin.
- **A dangerous tool makes a dangerous application:** a cobot holding a cutting tool, hot glue or a sharp tip is not "safe because it is a cobot". Every cell needs a **risk assessment** under the robot safety standards (the ISO 10218 series, and ISO/TS 15066 for collaborative applications).
- **Speed:** to work near people, cobots usually run slower. That has to be part of the cycle-time calculation.

