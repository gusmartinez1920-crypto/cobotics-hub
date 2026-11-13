---
title: "A digital twin follows a cobot cell from design to operation in a real assembly case"
description: "In a battery assembly case in Denmark, a digital twin was used to design, program and adjust a UR5 cobot cell. Over 30 assemblies, it recorded 14 collisions between robot and person."
translationKey: malik2021
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 9
    why: "The case shows how an assembly company uses a digital twin to design, commission and adjust a cobot cell throughout its life cycle."
paper:
  title: "Digital twins for collaborative robots: A case study in human-robot interaction"
  authors:
    - "Ali Ahmad Malik"
    - "Alexander Brem"
  year: 2021
  venue: "Robotics and Computer-Integrated Manufacturing"
  doi: "10.1016/j.rcim.2020.102092"
  url: "https://doi.org/10.1016/j.rcim.2020.102092"
whyItMatters: "Simulation models are often abandoned once the cell starts producing. This case shows, step by step, how to keep the model alive: from layout to robot program to the operating data that come back to correct the design. It is a concrete guide for anyone who wants to build the digital twin of a collaborative cell."
method: "This is a single case study with a physical demonstrator. The authors first propose a conceptual model: a digital twin and a physical twin that evolve together, a seven-step evaluation cycle and five forms of the twin by phase (design, development, commissioning, operation and maintenance). They then apply the model to the assembly of a battery pack with eight tasks, previously done by two operators; four tasks went to the robot. The twin was built in simulation software with a UR5 cobot, a digital human model and virtual sensors; the robot program was generated in the model and transferred to the real robot, which sent data to a cloud during 30 assemblies."
findings:
  - "The authors argue that the digital twin should be created as early as the idea stage and evolve in parallel with the physical system. It should serve the whole life cycle, not just the design."
  - "In the design phase, the model made it possible to test reach, collisions and posture. The volume swept by the robot guided a layout with minimal human activity in that zone."
  - "Connecting the real robot, placed in an empty space, to the virtual model with the equipment and the virtual person made it possible to find collisions and adjust the layout safely before the cell was built."
  - "Over 30 assemblies, with a cycle of about 87 seconds, robot and person collided 14 times, and the robot waited for the operator for more than 20 seconds on 8 occasions. With these data, the twin estimated 326 assemblies per 8-hour shift."
  - "The data led to repositioning the fixtures and creating a virtual wall that limits the robot's advance. The authors warn that it is not worth modeling everything: each extra piece of data has a cost and only pays off if it creates value."
limitations: "This is a single case, with no long-term study and no consideration of cultural differences, as the authors themselves acknowledge. The person enters the model as a digital human model and a camera-captured trajectory; fatigue, stress and biomechanical load were not measured. Collisions are treated as lost productivity, with no risk analysis and no reference to contact limits."
---
