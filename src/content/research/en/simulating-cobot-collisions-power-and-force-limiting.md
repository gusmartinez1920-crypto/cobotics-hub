---
title: "Simulating a cobot collision before the cell is built"
description: "The authors measured collisions of a collaborative robot while varying six parameters and describe a plug-in that calculates contact force and pressure during planning, before the cell exists."
translationKey: dombrowski2018
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
    why: "The study deals with how to check, as early as the planning stage, whether the force and pressure of a collision between robot and operator stay within safety limits."
paper:
  title: "Simulation of human-robot collaboration by means of power and force limiting"
  authors:
    - "Uwe Dombrowski"
    - "Tobias Stefanak"
    - "Anne Reimer"
  year: 2018
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2018.10.028"
  url: "https://doi.org/10.1016/j.promfg.2018.10.028"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "Today the force and pressure of a collision can only be measured after the cell is installed, when much of the investment has already been made. If the measurement fails, the only options are to slow the robot down or redesign the tool. Doing this calculation in simulation, with planning data that already exist, brings the problem forward."
method: "The use case is a semi-automatic screwdriving task on a vehicle assembly line, in which the robot tightens four screws in power and force limiting (PFL) mode. In an experimental study, a KUKA LBR iiwa robot collided with a force and pressure measuring device from the German institute IFA, varying speed, force limit, tool mass and radius, axis configuration and body region, with five measurements per series. The authors then describe a plug-in for the Siemens Process Simulate software that calculates force and pressure using the reflected mass method."
findings:
  - "Of the four collaborative modes in ISO 10218, power and force limiting is the only one in which unexpected collisions between person and robot are possible, and real measurement can only be done at the end of planning, with the system already running."
  - "The robot's axis configuration matters a great deal: at 400 mm/s, the transient contact force differs by almost 250 N between the two postures tested (tool at 90° and at 45° to the flange), with the same tool mass and geometry."
  - "Contact area dominates pressure. The series with a 10 mm radius at 45° showed pressure about 100 N/cm² higher than the series with a 25 mm radius at 90°, even though the force in the latter was about 250 N higher."
  - "The authors reduce the simulation to three critical parameters at the collision point: reflected mass of robot and tool, speed, and tool geometry. All of them come from existing planning data."
  - "The authors report that the first virtual measurements in the use case were successful and saved reprogramming loops."
limitations: "The paper states that the plug-in worked but does not present a numerical comparison between simulated and measured values. The tests used a single robot and a single application, and the authors themselves call for trials with other manufacturers and more precise models. The simulation calculates force and pressure but does not replace the risk assessment that defines which collisions can occur."
---
