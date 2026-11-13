---
title: "Cobots that learn together without sending raw factory data to the cloud"
description: "The author proposes that cobots train AI models jointly by exchanging only model updates. In a digital twin with six cobots, accuracy was 91.2%, against 93.5% for centralized training."
translationKey: rahmati2025
topic: implementation
pillars: [cobot, twin, iot]
authors: [claude]
date: 2026-11-13
level: advanced
draft: true
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Federated learning for privacy-preserving AI in human–robot collaboration for smart manufacturing"
  authors:
    - "Milad Rahmati"
  year: 2025
  venue: "Journal of Intelligent Manufacturing and Special Equipment"
  doi: "10.1108/jimse-03-2025-0003"
  url: "https://doi.org/10.1108/jimse-03-2025-0003"
whyItMatters: "Training artificial intelligence in the cloud forces a factory to send operating data outside, with the risk of leaks and loss of trade secrets. Federated learning is an alternative: each robot trains locally and shares only what it has learned. The study gives an idea of what is gained and lost in accuracy, computing cost and privacy."
method: "This is a proposed architecture evaluated in simulation only. Each robot learns by reinforcement from its own data and sends an aggregator only the model updates, protected by encryption and by deliberately added noise. The test used a digital twin of a 20 × 20 m factory, with six cobots performing assembly, quality inspection and material transport tasks. The author compared the result with centralized training and with other techniques."
findings:
  - "After 50 rounds, federated learning reached 91.2% accuracy, against 93.5% for centralized training. The author considers the 2.3-point loss offset by the privacy gain."
  - "In the simulated collaborative tasks, robots trained in a federated way achieved 87.6% success, against 81.4% with traditional reinforcement learning."
  - "The author reports a 41.5% reduction in the risk of data leakage compared with traditional models, convergence in 45 rounds versus more than 60, and 23.8% lower computing cost."
  - "Protection comes at a price: aggregation with encryption adds 12.5% to computing cost compared with aggregation without encryption."
  - "Going from 6 to 12 robots increased training time by 18% because of bandwidth limits. Response latency ranged from 45 to 75 ms depending on the device."
limitations: "The entire evaluation was done in simulation, with no physical robots or real workers; real deployment is left for future work. The privacy addressed is that of the company's data and secrets, not the operator's data. The measures concern the robot only: the study does not assess physical safety, workload or acceptance, and scale was not tested beyond 12 robots."
---
