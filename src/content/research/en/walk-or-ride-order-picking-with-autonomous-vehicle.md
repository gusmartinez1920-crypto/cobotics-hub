---
title: "Walk or ride? How to plan the route of order pickers working with an autonomous vehicle"
description: "The authors create a method that decides the route and where the picker rides the autonomous vehicle or walks. In a real distribution center, travel time fell 17.4% on average, with fewer knee bends."
translationKey: tutam2024
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
    why: "The model includes among its objectives reducing the knee bends of order pickers, which are linked to poor postures and fatigue, in addition to travel time."
paper:
  title: "To walk or not to walk? Designing intelligent order picking warehouses with collaborative robots"
  authors:
    - "Mahmut Tutam"
    - "René De Koster"
  year: 2024
  venue: "Transportation Research Part E: Logistics and Transportation Review"
  doi: "10.1016/j.tre.2024.103696"
  url: "https://doi.org/10.1016/j.tre.2024.103696"
  openAccess: true
whyItMatters: "In pallet warehouses, the picker steps on and off the vehicle about 1,200 times per shift, according to a manufacturer cited, which is tiring and strains the knees. The study shows that planning the route and the walking stretches together reduces both time and that strain. The vehicle here is an autonomous order picking truck, not a collaborative arm: collaboration means splitting the trip between walking and riding."
method: "This is an operations research study. The authors formulated a model that minimizes total travel time and the number of times the person steps onto the vehicle, with a time penalty for each step-on. Because the exact model only solves small lists, they created a dynamic programming algorithm that solves any size. They compared seven strategies by simulation, with 1,000 random lists per size, in warehouses with 1 or 2 blocks and 10 or 20 aisles, and applied the method to 102 real lists from a beverage distribution center in the Netherlands."
findings:
  - "The route and the step-on and step-off points must be decided together: the time between two locations depends on whether the person arrived on foot or riding."
  - "The commercial optimization software solved lists of up to 30 picks in up to 7,200 seconds. The proposed algorithm took at most 0.025 second for any size, with identical results on the small lists."
  - "In the simulation with one block and 10 aisles, the optimal strategy reduced time by 9.5% to 27.9% (18.2% on average) compared with the company's practice, in which the person always rides. With 20 aisles, the average was 13.4%."
  - "In the real case, the optimal strategy reduced time by 14.5% to 24.1% (17.4% on average). Keeping the current route and only choosing where to walk already gave 13.3% on average. Knee bends fell by 40% to 80%, depending on list size."
  - "There is a trade-off between time and ergonomics, but at a small cost within a certain range: on a 60-pick list, cutting a quarter of the knee bends (from 40 to 30) worsened time by only 1%."
limitations: "Ergonomics enters only as a count of knee bends converted into a few seconds of penalty, a value set by the company, with no biomechanical measurement and no measure of fatigue over the shift. The model ignores picking time and assumes constant speed and instructions that are always followed. The study does not analyze the risk of collision between the person and the autonomous vehicle."
---
