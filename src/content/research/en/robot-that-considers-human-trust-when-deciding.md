---
title: "A robot that takes the person's trust into account makes better team decisions"
description: "The authors built a decision model in which the robot estimates the person's trust and plans its actions with it in mind. In tests, the team performed better and the person intervened less."
translationKey: chen2020
topic: human-factors
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Trust-Aware Decision Making for Human-Robot Collaboration: Model Learning and Planning"
  authors:
    - "Min Chen"
    - "Stefanos Nikolaidis"
    - "Harold Soh"
    - "David Hsu"
    - "Siddhartha Srinivasa"
  year: 2020
  venue: "ACM Transactions on Human-Robot Interaction"
  doi: "10.1145/3359616"
  url: "https://doi.org/10.1145/3359616"
  openAccess: true
whyItMatters: "People who trust the robot too little intervene needlessly; people who trust it too much fail to intervene when they should. The study shows that trust can be modeled and used in robot planning, and that seeking maximum trust is not the same as seeking the best result. The task is a household one, not industrial: application to the factory has yet to be demonstrated."
method: "The model treats trust as a hidden variable, on a scale of 1 to 7, inside a partially observable decision process (POMDP). The task is to clear three water bottles, a can and a wine glass from a table; at each step the person lets the robot act or intervenes. The authors learned the model from data on 222 online participants, who answered a trust questionnaire at each step. They then compared the robot that considers trust with one that ignores it, online with videos (201 valid participants) and with a real robot arm (20 participants). Robot failures were studied only in simulation."
findings:
  - "Trust rises when the robot succeeds and falls when it fails; the higher the trust, the bigger the drop after a failure. People intervene more on higher-risk objects, such as the glass, and less when they trust more."
  - "The team performed better with the robot that considers trust, both online and with the real robot, with a statistically significant difference in both cases."
  - "The advantage came from fewer interventions. With the real robot, there were no interventions on the can and 71% fewer on the glass. This robot starts with the low-risk bottles and leaves the glass for last; the other one takes the glass first, since it is worth more."
  - "The same outcome weighs more on trust when it happens early in the task. A model that accounts for this makes the robot invest earlier in gaining trust."
  - "In simulation with likely failures on the glass, the robot may fail on purpose with the bottles to lower the trust of an overtrusting person and lead them to intervene. The policy that maximizes performance outperformed the one that maximizes trust."
limitations: "The task is a simple household one, with an assistive arm, and in the tests with people the robot always succeeded; failures were only simulated. The authors acknowledge that trust was reduced to a single number, that the robot's capabilities were assumed to be fixed and that measuring trust by questionnaire at every action does not work for larger tasks. The study does not measure the person's workload or stress."
---
