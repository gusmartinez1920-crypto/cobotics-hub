---
title: "Order picking with mobile robots and people when times are uncertain"
description: "The authors model order picking in warehouses with mobile robots and human pickers under uncertain times, and propose an algorithm that reached the lowest total time in the largest simulated cases."
translationKey: cai2026
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Human–Robot Collaborative Order Picking in Smart Warehouses with Fuzzy Transportation and Processing Time"
  authors:
    - "Zhiheng Cai"
    - "Ziyan Zhao"
    - "Yunuo Su"
    - "Zijie Yu"
  year: 2026
  venue: "Mathematics"
  doi: "10.3390/math14183295"
  url: "https://doi.org/10.3390/math14183295"
whyItMatters: "In warehouses where mobile robots bring the shelves to the person, planning usually assumes fixed transport and picking times, which rarely holds in practice. The study shows how to plan with uncertain times. Note that the robots here are vehicles that carry shelves: tasks are split sequentially, with no shared workspace and no contact, so this is a logistics case rather than a cobot case."
method: "The authors wrote a mathematical model that jointly decides which shelves to fetch, the robots' work sequence, the destination station and manual picking, with transport and picking times described by fuzzy numbers (minimum, most likely and maximum). To solve it, they combined an adaptive global search with a local search over five neighborhoods. They tested the algorithm on seven synthetic cases (6 to 50 shelves, 2 to 4 robots, 2 stations, 10 to 44 orders), with ten runs each, against five known algorithms, and applied statistical tests."
findings:
  - "In the authors' survey, no earlier study addressed shelf selection, robot scheduling, station assignment, manual picking and uncertain times all at once."
  - "In the largest case, the proposed algorithm reached a total completion time of 109.50, between 5.6% and 25.1% below the five algorithms compared. In a mid-sized case (41.91), the advantage ranged from 2.8% to 21.9%."
  - "The overall test indicated a difference among the algorithms (p < 0.001) and the proposed one had the best average rank. Pairwise comparisons, after statistical correction, gave no conclusive evidence of superiority."
  - "In the two smallest cases, removing parts of the algorithm barely changed the result. In the larger ones, the global search was the part most missed: without it, the time for the largest case rose from 109.50 to 123.41."
  - "The authors point out that robots reduce the pickers' walking, while people handle varied products that are hard to automate, and that assigning work according to each station's capacity can balance the load between stations."
limitations: "The model is static: it does not consider orders arriving in real time, urgent orders or robot failures, as the authors acknowledge. The uncertain times are synthetic, derived from another study, and the cases are small (up to 50 shelves, 4 robots and 2 stations), with no validation in a real warehouse. The person enters only as picking time: fatigue, ergonomics and workload are left out of the model."
---
