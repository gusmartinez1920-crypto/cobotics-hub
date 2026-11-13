---
title: "Un robot móvil planifica tareas a partir de una petición en lenguaje natural"
description: "El estudio combina modelos de lenguaje, visión y aprendizaje por refuerzo, con gafas de realidad mixta, para que un robot móvil cumpla tareas sin guion. La planificación acertó el 85% de las pruebas."
translationKey: zheng2024
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "A vision-language-guided and deep reinforcement learning-enabled approach for unstructured human-robot collaborative manufacturing task fulfilment"
  authors:
    - "Pai Zheng"
    - "Chengxi Li"
    - "Junming Fan"
    - "Lihui Wang"
  year: 2024
  venue: "CIRP Annals"
  doi: "10.1016/j.cirp.2024.04.003"
  url: "https://doi.org/10.1016/j.cirp.2024.04.003"
whyItMatters: "Programar un cobot para cada variación de producto es caro, y la personalización en masa pide tareas sin guion fijo. El estudio muestra una arquitectura en la que la persona pide la tarea en lenguaje natural y las gafas de realidad mixta sirven de sensor de la escena. Para quien sigue la inteligencia artificial generativa en la robótica, aporta cifras de acierto y las contrapartidas declaradas."
method: "Los autores proponen un sistema y lo prueban en laboratorio, con un manipulador móvil (brazo UR5e sobre base MiR100), una cámara de profundidad y gafas HoloLens 2. Un modelo de visión y lenguaje localiza el objeto citado en la orden; modelos de lenguaje dividen la instrucción en pasos y generan el código del robot. Una política entrenada por aprendizaje por refuerzo mueve la base y el brazo a la vez, usando imágenes y datos de las gafas. La localización del objeto se evaluó en 463 pares de imagen y texto, la planificación en 3 tareas con 20 repeticiones cada una, y la política de movimiento con 1000 objetivos en una escena simulada."
findings:
  - "La planificación con modelo de lenguaje tuvo éxito en 17, 19 y 15 de 20 intentos en las tres tareas, una media del 85%. Cuando falla, una persona puede explicar el error del plan anterior y pedir un plan ajustado."
  - "La localización del objeto a partir de imagen y texto alcanzó 77,89 en el índice de solapamiento usado, frente a 65,36 y 72,76 de dos métodos de comparación."
  - "La política de movimiento tuvo una tasa media de éxito del 54,4% solo con los datos de las gafas, del 86,6% con imágenes más esos datos y del 90,2% con información temporal. Solo con imágenes, no completó ninguna tarea."
  - "La seguridad entra en la política como un término de recompensa ligado a la distancia entre persona y robot; los sensores internos del robot quedan solo para la parada de emergencia."
  - "Los autores reconocen contrapartidas: retraso de red y de cálculo por depender de modelos de lenguaje en la nube, más conocimiento experto y recursos de cómputo, y mayor costo al llevar las gafas a varios escenarios."
limitations: "La política de movimiento se entrenó y evaluó en una escena simulada, y el estudio no informa cuántos ensayos se hicieron en el robot real. La planificación fue juzgada por especialistas, sin criterio descrito. No se midió nada del lado del operador, como la carga mental o la comodidad con las gafas, y la seguridad no se discute frente a las normas."
---
