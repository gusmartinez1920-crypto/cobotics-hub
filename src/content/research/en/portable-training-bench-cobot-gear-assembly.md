---
title: "A portable bench for practicing gear assembly together with a cobot"
description: "The authors designed a portable training bench on which a cobot and a person assemble gear sets, with difficulty that can be adjusted to the trainee's knowledge."
translationKey: kovaluk2022
topic: education
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 4
    why: "The study designs a training bench with a cobot to develop the manual, logical and programming skills of workers and students."
paper:
  title: "DESIGN OF THE EDUCATIONAL WORKPLACE FOR WORKING WITH A COLLABORATIVE ROBOT"
  authors:
    - "Dávid Kovaľuk"
    - "Ján Semjon"
    - "Martin Syč-Krivaň"
    - "Matúš Sabol"
  year: 2022
  venue: "Technical Sciences and Technologies"
  doi: "10.25140/2411-5363-2022-3(29)-37-44"
  url: "https://doi.org/10.25140/2411-5363-2022-3(29)-37-44"
whyItMatters: "The design offers a concrete idea for a hands-on exercise with a cobot: an assembly task that mixes calculation, programming and manual work, and that can be made easier or harder. Anyone setting up a teaching lab or in-house training can reuse the task design, even without data on how much people learn from it."
method: "An engineering design report from a technical university in Slovakia, with no experiment involving people. The authors created three variants of the workstation and chose the best in terms of price and ease of manufacture. The bench uses a Fanuc CRX-10iA cobot, programmed by hand guiding and by tablet, with a collaborative electric gripper with 3D-printed fingers. The text describes the mechanical design and the task sequence as a flowchart."
findings:
  - "The robot takes the gears from the magazine and fits them onto the pins. The person places the washer and the retaining ring, visually checks the robot's movement and switches on the motor that tests the mechanism."
  - "The task is variable: up to four spur gears, in an order that can change, with a final gear ratio greater than, less than or equal to one."
  - "The exercise has its own built-in assessment: the student receives several gears, but only some combinations make the mechanism move. The student has to calculate the transmission, program the robot, assemble jointly and test."
  - "The authors state that the bench develops three skills: manual (using tools within a set time), logical (calculating the gear ratio) and programming (moving the cobot safely in a confined space)."
  - "If the robot senses resistance during an operation, it repeats the movement once. If it fails again, it stops and the task has to be reconfigured."
limitations: "There is no test with students or workers: no data on learning, time, errors or user opinions. Safety relies on the robot stopping on contact and on the operator's visual check, with no risk assessment of the application. The collaboration is sequential: the robot places the part and only then does the person act."
---
