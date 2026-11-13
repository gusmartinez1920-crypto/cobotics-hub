---
title: "Un robot sin sensor de fuerza aprende un montaje por demostración y se ajusta solo"
description: "Un robot sin sensor de fuerza aprendió a montar un engranaje con pocas demostraciones humanas. Con optimización automática acertó el 93% de los montajes, frente al 19% sin ella."
translationKey: roveda2021
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Human–robot collaboration in sensorless assembly task learning enhanced by uncertainties adaptation via Bayesian Optimization"
  authors:
    - "Loris Roveda"
    - "Mauro Magni"
    - "Martina Cantoni"
    - "Dario Piga"
    - "Giuseppe Bucca"
  year: 2021
  venue: "Robotics and Autonomous Systems"
  doi: "10.1016/j.robot.2020.103711"
  url: "https://doi.org/10.1016/j.robot.2020.103711"
whyItMatters: "Los sensores de fuerza y par encarecen la celda, y muchos robots industriales no los tienen. El estudio muestra un camino para enseñar un montaje de ajuste estrecho guiando el robot con la mano y dejar que él mismo corrija los desvíos de posición de las piezas. Interesa a quien programa cobots por demostración y debe lidiar con piezas que nunca llegan exactamente al mismo lugar."
method: "Experimento con un robot Franka EMIKA Panda que monta un engranaje en un eje de sección cuadrada, con tolerancia estrecha y piezas colocadas con un error de hasta ±7,5 mm. Quince personas guiaron el robot con la mano, cinco veces por etapa (aproximación, inserción y empuje). Un Modelo Oculto de Markov (HMM) elige la demostración más confiable, y una Optimización Bayesiana ajusta el punto de destino y la rigidez del control después de que la posición de montaje se altera en ±7,5 mm y ±5°. La comparación final tuvo 10 repeticiones por persona, 150 por método."
findings:
  - "La tasa de éxito del montaje fue del 93% con aprendizaje más optimización, frente al 19% solo con el aprendizaje por demostración, en 150 repeticiones de cada uno."
  - "Sin medir fuerzas, el robot estima la fuerza de contacto a partir de la diferencia entre la posición deseada y la real. Esa estimación entra en la función de costo para evitar la parada de emergencia y el fallo de la tarea."
  - "La inserción es la etapa más crítica, porque concentra la mayor incertidumbre de posición. Por eso la optimización se hizo en dos pasos: primero localizar el punto de inserción, después refinar la pose y la rigidez."
  - "En el empuje final, una pequeña oscilación de rotación superpuesta al movimiento asegura el engrane; la amplitud de esa oscilación también se optimiza."
  - "Los autores sostienen que un robot con sensor de fuerza necesitaría la misma reoptimización, porque sin la posición exacta de las piezas tampoco monta a ciegas. Una cámara lo resolvería, pero con más costo y tiempo de preparación."
limitations: "El estudio probó una sola pieza y una sola tolerancia, y comparó la optimización con la ausencia de cualquier adaptación, no con otro método adaptativo. Las figuras muestran los datos de una persona; los de las otras 14 se describen solo como similares. No se midió nada del lado humano, que solo participa en la fase de enseñanza."
---
