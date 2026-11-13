---
title: "AI turns construction drawings into instructions for people and robots"
description: "The authors propose splitting what to build from how to build it into two models and use multimodal AI to generate both from drawings, in two preliminary cases that stopped short of execution."
translationKey: das2026
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Translating intention: AI-assisted model generation for collaborative human–robot construction"
  authors:
    - "Avishek Das"
    - "Begüm Saral"
    - "Lidia Atanasova"
    - "Tizian Rein"
    - "Kathrin Dörfler"
  year: 2026
  venue: "Construction Robotics"
  doi: "10.1007/s41693-026-00205-0"
  url: "https://doi.org/10.1007/s41693-026-00205-0"
whyItMatters: "People read a drawing with experience and judgment; robots need explicit steps with no room for interpretation. Today that translation is done by manual programming, which is slow and depends on specialists. The study suggests a way for person and robot to start from the same description of the work, even when only a paper drawing exists."
method: "This is a conceptual paper with a preliminary experimental demonstration. The authors describe two graph-based models: a spatial one, where each node is a building element, and a procedural one, where each node is an executable action. A multimodal AI model (Gemini 2.5 Pro), guided only by instructions and strict output formats, with no additional training, generated both models from drawings, with human review at each step. The two cases were a brick column and an irregular timber stud wall, taken from a 1936 construction manual."
findings:
  - "The authors describe the core difference: an instruction for a person says what to do and relies on their experience; an instruction for a robot says how to do it, step by step."
  - "In the proposed model, human and robot actions are described in the same format. According to the authors, tasks can therefore be synchronized, interleaved or handed from one to the other without rebuilding the model."
  - "For the brick column, the AI generated a coherent spatial model from two plans and a text, and identified most of the relationships between parts correctly. The diagonal cuts required clarification from the user, and the action sequence also needed correction."
  - "For the timber wall, adjustments through text and image corrected the geometry and the connections, and user feedback reordered the steps to keep the structure stable at every stage."
  - "The authors report that the approach generates the models without a robotics specialist and works without a prior digital model, which would open up use in repair and heritage conservation."
limitations: "The demonstration generates and displays the models, but no robot carried out the tasks and there was no interaction between person and robot. The study gives no performance measure: the share of correct relationships comes without a number, and reliability depended on human supervision. Safety, standards and effects on site workers are not addressed."
---
