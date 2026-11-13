---
title: "Wearable sensors recognize what a farm worker is doing when handing a crate to a robot"
description: "With five motion sensors on the body and a neural network, the authors recognized six steps of the task of carrying a crate to an agricultural robot, with an average accuracy of 85.6%."
translationKey: anagnostis2021
topic: applications
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Human Activity Recognition through Recurrent Neural Networks for Human–Robot Interaction in Agriculture"
  authors:
    - "Athanasios Anagnostis"
    - "Lefteris Benos"
    - "Dimitrios Tsaopoulos"
    - "Aristotelis Tagarakis"
    - "Naoum Tsolakis"
    - "Dionysis Bochtis"
  year: 2021
  venue: "Applied Sciences"
  doi: "10.3390/app11052188"
  url: "https://doi.org/10.3390/app11052188"
whyItMatters: "To work near a person, the robot needs to know what that person is doing. This study tests such recognition in the field, where light varies and fixed cameras cannot be installed, using wearable sensors. The robot here is an agricultural transport vehicle, not a collaborative arm, but the method matters for any application in which the robot must follow human activity."
method: "The experiment took place on a farm in Greece with 20 healthy participants. Each one walked, lifted a crate (empty or loaded with about 20% of their own body mass) and placed it on one of two stationary robots, with deposit heights of 40 and 80 cm. Five inertial sensors, on the trunk and both wrists, recorded the movements, which were labeled with the help of video. A recurrent neural network of the LSTM type was trained to classify six sub-activities, with data from four participants held out for testing."
findings:
  - "The six sub-activities are: standing still, walking without the crate, bending, lifting the crate, walking with the crate and placing it on the robot. The model's average accuracy was 85.6%."
  - "Walking without the crate was the best-recognized activity. Bending had the lowest precision (0.741), which the authors attribute to the various ways of lifting the crate, deliberately left free."
  - "The most common confusions were between placing the crate and walking with the crate, and between lifting the crate and bending. Classifying activities in which the person barely moves from place was the hardest."
  - "Using the three sensor types together gave the best result (85.7%). On their own, the gyroscope and the accelerometer stayed near 83% and the magnetometer at 73.4%."
  - "The authors published the dataset and position activity recognition as the basis for a robot that adjusts its speed and distance relative to the farmer."
limitations: "The study deals only with activity recognition: the robot stayed still, and interaction safety, ergonomics and navigation are left for later work. The sample is small and homogeneous, made up of healthy adults with an average age of 31, and the authors plan to repeat the tests with real workers. Physical load, fatigue and acceptance were not measured."
---
