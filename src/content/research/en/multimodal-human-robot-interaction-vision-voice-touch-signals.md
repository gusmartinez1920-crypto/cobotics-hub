---
title: "Vision, voice, touch and body signals: the state of multimodal interaction with robots"
description: "A review of 199 papers maps how robots combine vision, audio and language, touch and physiological signals to interact with people in manufacturing, and where research is still thin."
translationKey: wang2023
topic: fundamentals
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Multimodal Human–Robot Interaction for Human‐Centric Smart Manufacturing: A Survey"
  authors:
    - "Tian Wang"
    - "Pai Zheng"
    - "Shufei Li"
    - "Lihui Wang"
  year: 2023
  venue: "Advanced Intelligent Systems"
  doi: "10.1002/aisy.202300359"
  url: "https://doi.org/10.1002/aisy.202300359"
whyItMatters: "Every sensor fails in its own way: the camera loses the part under occlusion, the microphone gets lost in factory noise. Combining modalities is the way out, and this review organizes the options, the ways to fuse the data and the limits of each sensor. It is a good starting point for anyone designing the perception of a collaborative cell."
method: "The authors carried out a literature review in the Web of Science and Scopus databases, restricted to top journals and to robotics and artificial intelligence conferences, with the search run in December 2022. After screening and inclusion through references, the final set has 199 papers. The material is organized into four modalities (vision, audio and language, touch and physiological signals) and three dimensions: perception, cognition and action."
findings:
  - "Most multimodal papers concentrate on perception; cognition and action receive less attention. Only 5% of human-robot interaction papers from the previous five years deal with more than one modality."
  - "Each modality has its own limits: vision suffers with lighting and occlusion and cannot tell accidental from intentional contact; audio suffers with noise; touch sensors often give a binary response; physiological sensors have signal drift and may cause discomfort."
  - "Audio and language are little used in industry because of ambient noise and the need to understand context. The authors see large language models as a promise."
  - "Force/torque sensors are treated as critical: robot control in practically every collaboration task depends at least on this feedback."
  - "There are three ways to fuse the data: early, late and intermediate, the last being the most popular in recent years. In one example cited, fusing muscle signals, motion and force in a sawing task saved about 86.2% of the human physical effort."
limitations: "The review does not follow a formal systematic review protocol or assess the quality of the studies. Many of the applications reviewed come from virtual reality, social robots and vehicles rather than industrial cobots. The text does not discuss safety standards or the privacy of people whose body signals are monitored."
---
