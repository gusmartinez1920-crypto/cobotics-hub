---
title: "Balancing an assembly line with cobots for cycle time and ergonomics together"
description: "An optimization model assigns tasks to people, robots and human-robot pairs on assembly lines. In 164 tests, taking ergonomics into account cut the risk indicators by about a quarter."
translationKey: kulac2026
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The model puts each station's ergonomic risk, physical, environmental and psychosocial, on the same level as cycle time when assigning tasks to people and cobots."
paper:
  title: "Collaborative robot integration in mixed-model assembly line balancing with ergonomic risk considerations"
  authors:
    - "Seçil Kulaç"
    - "Alper Kiraz"
  year: 2026
  venue: "Flexible Services and Manufacturing Journal"
  doi: "10.1007/s10696-026-09662-9"
  url: "https://doi.org/10.1007/s10696-026-09662-9"
whyItMatters: "Anyone designing a line with cobots must decide which tasks go to the person, to the robot or to both together. The study shows that ergonomics can be included in that decision without necessarily losing productivity, and that adding robots has diminishing returns. This matters to anyone deciding how many cobots to buy."
method: "The authors formulated a mixed-integer linear programming model for lines that assemble several product models. Each task can be done by a person, a robot or in collaboration, and the model minimizes cycle time and two ergonomic risk indicators per station at the same time. The risk of each task combines physical, environmental and psychosocial assessments into a single value. They tested the model on 164 configurations derived from 13 benchmark lines, with randomly generated times and risks, and on two case studies, one of them a power tool line with 62 tasks and 5 stations."
findings:
  - "Across the 164 configurations, including ergonomic risk in the model reduced the risk category indicator by 27% and the maximum risk per station by 25% on average. On one line, the drop reached 40% and 44% with no increase in cycle time."
  - "More robots do not always help. On one benchmark line, two robots cut cycle time by 14% and the risk indicators by more than 40%; the third brought a smaller gain and the fourth none."
  - "The cost of ergonomics depends on how many robots there are. With up to two robots, giving ergonomics more weight reduced risk with no clear increase in cycle time; with three robots and a high weight, cycle time rose 12%."
  - "In the statistical analysis, the number of robots significantly affected only the maximum risk per station, not cycle time. The weights given to ergonomics affected all three indicators."
  - "The authors recommend a moderate weight for ergonomics and, for small and medium-sized companies, starting with repetitive or high-risk tasks, using the model as decision support before deployment."
limitations: "The study stays at the line design level: there is no physical deployment and no measurement with workers. In most of the tests, times and risks were randomly generated, and the risk of a collaborative task was assumed to be lower than that of the manual one, so the ergonomic gain from collaboration enters as an assumption, not a measurement. The model does not address contact safety between person and robot."
---
