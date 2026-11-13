---
title: "Penetration test on a cobot: simple software flaws can become a physical risk"
description: "A penetration test on a Franka Emika Panda cobot found flaws in its web control application, such as shutting the robot down without authentication and sessions that never expire. The maker released new firmware."
translationKey: hollerer2021
topic: safety
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "The study shows how an information security flaw in a networked cobot can become a risk of injury for the worker."
paper:
  title: "Cobot attack: a security assessment exemplified by a specific collaborative robot"
  authors:
    - "Siegfried Hollerer"
    - "Clara Fischer"
    - "Bernhard Brenner"
    - "Maximilian Papa"
    - "Sebastian Schlund"
    - "Wolfgang Kastner"
    - "Joachim Fabini"
    - "Tanja Zseby"
  year: 2021
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2021.07.029"
  url: "https://doi.org/10.1016/j.promfg.2021.07.029"
  openAccess: true
  license: "CC BY"
whyItMatters: "A cobot connected to the factory network is no longer an isolated piece of equipment. Someone who remotely changes the arm's motion or disables collision detection creates a hazard for the person next to the robot. The study shows that information security needs to be part of the cell's safety assessment."
method: "This is a case study with a single robot, a Panda with a specific firmware version, connected through its controller to a shop-floor network. The authors mapped the physical and digital attack surfaces and tested only the digital ones: the robot's web application, its services and the network. The test followed open security testing methodologies, with automated scanning followed by manual attacks."
findings:
  - "A digital attack can have physical consequences. Changing the position or joint configuration can lead the robot to hit the worker's head, an unexpected gripper movement can trap a finger, and disabling collision detection can cause a bruise or a fracture."
  - "The web application allows the cobot to be shut down without authentication. A compromised computer on the factory network can therefore stop production."
  - "Login sessions are not invalidated on logout or when the robot restarts, which makes it possible to download and change programs and tamper with accounts. In addition, only users with administrator privileges can be created, so any compromised account gives full control."
  - "Most of the problems were found manually, without the automated tools flagging them. The authors conclude that these tools should not be trusted blindly."
  - "There is a conflict between the two kinds of safety: the emergency stop standard requires the stop to be always available, and requiring authentication to shut the robot down goes against that requirement. The authors suggest restricting access to the cobot through a private network (VPN)."
limitations: "The test covers a single cobot model and a single firmware version, and only the digital surfaces; there was no physical attack. The study describes scenarios of harm to the worker but does not measure the force or pressure of an induced collision. The VPN solution is suggested, not tested."
---
