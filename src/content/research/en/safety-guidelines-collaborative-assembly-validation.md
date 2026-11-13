---
title: "Safety guidelines let non-experts reduce the risk of a cobot cell"
description: "The authors created safety guidelines for collaborative assembly and tested them in a lab case: three engineers with no safety training lowered the worst-case risk index from 12 to 6."
translationKey: gualtieri2022
topic: safety
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study proposes and tests guidelines to reduce the operator's risk of mechanical injury at assembly stations with a collaborative robot."
paper:
  title: "Development and validation of guidelines for safety in human-robot collaborative assembly systems"
  authors:
    - "Luca Gualtieri"
    - "Erwin Rauch"
    - "Renato Vidoni"
  year: 2022
  venue: "Computers & Industrial Engineering"
  doi: "10.1016/j.cie.2021.107801"
  url: "https://doi.org/10.1016/j.cie.2021.107801"
whyItMatters: "Many companies have no robot safety expert on the design team. The study indicates that an organized set of guidelines, aligned with the standards, helps manufacturing engineers reach a safer design. It also shows the price: the biggest gain came from separating person and robot."
method: "The guidelines come from standards (ISO 12100, ISO 10218, ISO/TS 15066 and ISO/TR 20218-1), manufacturers' manuals and the scientific literature, and deal only with mechanical hazards. For validation, in a laboratory in Bolzano, the team built an assembly cell for a metal piece of furniture with a UR10 robot without considering safety, and a certified expert assessed the risk. Three manufacturing engineers with no safety training redesigned the cell using the guidelines; the new version was modeled as a digital twin and reassessed by the same expert."
findings:
  - "The guidelines are organized around four goals: avoiding entrapment of body parts, avoiding collision, avoiding falling parts of the robot system, and measures that apply to all mechanical hazards."
  - "Each guideline gets a priority following the logic of ISO 12100, to be applied in this order: first safety by design, then additional protective measures and, last, safety through information."
  - "In the original cell, the worst case was the arm or gripper hitting the head, neck, shoulders or chest of an operator focused on the manual task. The risk index was 12, classified as high risk."
  - "In the redesigned cell, the index dropped to 6, classified as risk under control. The four scores that make up the index fell by between 33% and 67%. The biggest gain came from a rotating table that separates the workspaces and from a layout that limits the operator's movement."
  - "The engineers reported three barriers: the cost and time of additional safety systems, the need to keep an expert's judgment, and dependence on the company's technical resources, such as an in-house programmer."
limitations: "The validation used a single case, three engineers and a virtual model rather than the real cell; the authors call for industrial cases and more participants. The assessment covers only mechanical hazards and only the assembly operator, not maintenance. The study does not measure the effect of separating person and robot on cycle time or operator workload."
---
