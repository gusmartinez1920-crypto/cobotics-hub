---
title: "Un modelo de costo para balancear líneas de montaje con personas, cobots y pinzas"
description: "Los autores proponen un modelo matemático que reparte tareas, personas, cobots y pinzas entre las estaciones de una línea de montaje al menor costo, y lo ilustran con el montaje de un horno de 20 tareas."
translationKey: demiralay2025
topic: implementation
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "A Cost-Effective Balancing Model for Human-Robot Collaborative Assembly Lines"
  authors:
    - "Yuksel Degirmencioglu Demiralay"
    - "Yakup Kara"
  year: 2025
  venue: "Procedia Computer Science"
  doi: "10.1016/j.procs.2025.02.001"
  url: "https://doi.org/10.1016/j.procs.2025.02.001"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "Al planificar una línea con cobots, no basta con decidir quién hace cada tarea: hay que definir en qué estación y con qué pinza. El estudio muestra cómo reunir esas decisiones en un único modelo de optimización y qué costos entran en la cuenta. Sirve de punto de partida para quien estudia el balanceo de líneas con colaboración humano-robot."
method: "Los autores formularon un modelo de programación lineal entera mixta para una línea recta, de producto único y con tiempos fijos. El modelo minimiza la suma de los costos de estación, de trabajador, de cobot y de pinza, respetando el tiempo de ciclo, el orden de las tareas y el peso máximo de pinzas por cobot. Lo aplicaron a un ejemplo ilustrativo, el montaje de un horno rotativo eléctrico de panadería con 20 tareas y ciclo de 60 minutos, con costos de referencia de empresas medianas de Turquía."
findings:
  - "Los autores afirman que ningún estudio anterior de balanceo de líneas incluyó el costo de la pinza junto con la asignación de personas y cobots a las estaciones."
  - "El modelo usa cuatro costos: trabajador (salario, alimentación, transporte), cobot (energía, mantenimiento, reparación), estación (espacio, limpieza, renovación de equipos) y pinza. Un cobot puede llevar varias pinzas, siempre que el peso total no supere su carga máxima."
  - "En el ejemplo, los costos mensuales adoptados fueron 750 dólares por trabajador, 250 por cobot, 30 por estación y 1 por pinza."
  - "De las 20 tareas, 14 quedaron a cargo de personas (corte, soldadura, limpieza y parte eléctrica) y 6 de cobots (encaje de paredes, grupo rotativo, aislamiento y tapas exteriores). Esta división es un dato de entrada del modelo."
  - "La solución óptima abrió cuatro estaciones, con un costo de 0,3353 dólares por minuto. Persona y cobot trabajan a veces en paralelo y a veces en secuencia, y el cobot queda detenido en algunos momentos por el orden de las tareas."
limitations: "El ejemplo es ilustrativo, con valores definidos por los autores, sin datos de empresa ni comparación con otros modelos. El modelo trata al trabajador solo como costo: no incluye ergonomía, carga de trabajo ni requisitos de seguridad. El costo del cobot es solo el operativo mensual, sin compra ni integración."
---
