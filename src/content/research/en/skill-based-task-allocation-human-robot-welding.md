---
title: "Welding with a robot and a welder: each one does the seam it handles best"
description: "The authors describe the concept of a welding cell in which welder and robot split tasks according to their skills, with simple programming and instructions projected onto the workpiece."
translationKey: muller2017
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intro
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 9
    why: "The concept targets small and medium-sized companies with small batches, for which fully automating welding does not pay off."
paper:
  title: "Skill-based Dynamic Task Allocation in Human-Robot-Cooperation with the Example of Welding Application"
  authors:
    - "Rainer Müller"
    - "Matthias Vette"
    - "Aaron Geenen"
  year: 2017
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2017.07.113"
  url: "https://doi.org/10.1016/j.promfg.2017.07.113"
whyItMatters: "With small batches and highly varied parts, automating everything does not pay off, and the welder's know-how is still needed. The paper offers a concrete example of how to choose the interaction mode at each step and how to divide work between person and robot. It is useful as a design reference for anyone considering cobots in welding."
method: "This is a descriptive system design paper, presented at a conference, with no experiment or measurement. The case is the welding of stainless steel structures for blood filtration units, where defective parts are scrapped and the order of the seams is critical. The authors review human-robot interaction modes, compare the skills of welder and robot qualitatively, and describe the programming and a projection system to guide the operator."
findings:
  - "The cell combines two modes. During setup, person and robot work at the same time in the same space on separate tasks; during welding, the robot only welds with the operator outside the area, because of heat and light, which is checked by pressure-sensitive safety mats."
  - "In the authors' comparison, the welder does better at short, complex seams, quick visual inspection and part preparation. The robot offers constant attention and performance, precision, and long straight seams without interruption."
  - "The proposed programming combines ready-made routines with on-the-spot adjustments: the seams are drawn in the CAD model and the operator corrects positions by dragging indicators. According to the authors, an operator with little or no programming experience can set up the process."
  - "A projector shows on the workpiece which tasks belong to the robot and which to the operator, as well as the seam sequence, and asks for the operator's confirmation after every change."
  - "The authors caution that collaborative robots do not solve every automation need: only an analysis of each case's requirements shows whether there is an advantage."
limitations: "The paper describes a concept and measures nothing: there are no data on time, weld defects, ergonomics or operator acceptance, so the gain in efficiency and quality is claimed, not demonstrated. The division of tasks is qualitative, and the text presents no risk assessment of the application."
---
