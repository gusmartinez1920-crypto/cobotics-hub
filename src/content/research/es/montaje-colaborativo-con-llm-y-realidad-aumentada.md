---
title: "Modelo de lenguaje y realidad aumentada para guiar el montaje con cobots"
description: "Los autores proponen un sistema que une un modelo de lenguaje y gafas de realidad aumentada para guiar el montaje con cobots de una cabina electrónica aeroespacial, probado con 20 participantes."
translationKey: nie2025
topic: industry-5-0
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Probing Augmented Intelligent Human–Robot Collaborative Assembly Methods Toward Industry 5.0"
  authors:
    - "Qingwei Nie"
    - "Yiping Shen"
    - "Ye Ma"
    - "Shuqi Zhang"
    - "Lujie Zong"
    - "Ze Zheng"
    - "Yunbo Zhangwa"
    - "Yu Chen"
  year: 2025
  venue: "Electronics"
  doi: "10.3390/electronics14153125"
  url: "https://doi.org/10.3390/electronics14153125"
whyItMatters: "El montaje en espacios reducidos depende mucho de la memoria y de la decisión del operador, y el cobot por sí solo no lo resuelve. El estudio muestra una forma de llevar el conocimiento del proceso hasta la persona, en su campo de visión, y de usar un modelo de lenguaje para sugerir quién hace qué. También registra un punto de atención: el cobot sin el apoyo adecuado tendió a aumentar el estrés del operador."
method: "Es una propuesta técnica validada en un único estudio de caso: el montaje de una cabina electrónica aeroespacial, en un banco con dos cobots con visión, uno para tomar piezas y otro para atornillar. Las tareas se describieron en fichas estructuradas, consultadas por un modelo de lenguaje ajustado al dominio, y la orientación aparece en gafas de realidad aumentada controladas por voz, gesto o mirada. Los autores evaluaron las respuestas del modelo, el seguimiento de posición en tres escenarios y compararon cuatro formas de montaje con 20 participantes."
findings:
  - "El módulo de razonamiento no solo da instrucciones: analiza si la tarea exige colaboración y decide de forma autónoma la división del trabajo entre operadores y cobots. Con la información de la inspección de calidad, sugiere cambios como el recorrido de los cables o la secuencia de fijación."
  - "Tras el ajuste al dominio, en 100 pares de pregunta y respuesta, la precisión en la explicación de términos subió del 69,5% al 97,4% y la corrección de las respuestas, del 62,4% al 90,2%."
  - "En la comparación con dos modelos de lenguaje de uso general, el sistema tuvo una precisión media del 86% en las tres categorías de preguntas, con mayor ventaja en orientación de montaje y optimización de calidad."
  - "En el seguimiento de la posición de las piezas, los autores no observaron pérdida de seguimiento ni reconocimiento erróneo relevante ante cambios de postura, de punto de vista y oclusiones."
  - "En el experimento con 20 participantes en cuatro grupos, la colaboración básica con cobot mejoró la eficiencia y la tasa de aprobación respecto al montaje manual, pero tendió a aumentar el estrés del operador. El sistema propuesto redujo el tiempo, mejoró la calidad y alivió el estrés."
limitations: "La validación usa un único caso aeroespacial, con cinco personas por grupo y el estrés medido con un cuestionario propio. El seguimiento se evaluó de forma cualitativa, sin error numérico. Los propios autores señalan que el sistema depende de fichas de proceso completas y correctas y que el seguimiento empeora con oclusiones en movimiento y cambios de luz; el estudio no discute la seguridad de dejar que un modelo de lenguaje reparta las tareas."
---
