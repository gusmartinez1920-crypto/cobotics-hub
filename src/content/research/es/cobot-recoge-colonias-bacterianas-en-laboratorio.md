---
title: "Un cobot enseñado por demostración recoge colonias de bacterias en el laboratorio"
description: "Un cobot enseñado por demostración recogió y depositó 56 colonias de bacterias para su identificación en un laboratorio de microbiología; cerca del 11% de las muestras no se identificó."
translationKey: baumkircher2022
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Collaborative Robot Precision Task in Medical Microbiology Laboratory"
  authors:
    - "Aljaz Baumkircher"
    - "Katja Seme"
    - "Marko Munih"
    - "Matjaž Mihelj"
  year: 2022
  venue: "Sensors"
  doi: "10.3390/s22082862"
  url: "https://doi.org/10.3390/s22082862"
whyItMatters: "Los sistemas automáticos de recogida de colonias son grandes y caros, o sirven para una sola tarea. El estudio prueba el cobot como alternativa que el propio personal del laboratorio podría enseñar guiando el brazo con las manos, sin programar. También muestra el límite de este tipo de enseñanza cuando la tarea exige una precisión inferior a un milímetro."
method: "Los autores montaron, en un laboratorio universitario, un cobot Franka Emika Panda con una herramienta propia: cámara, medidor de perfil láser, sensor de fuerza y una aguja de acero esterilizada por calor en cada uso. Un operador demostró la recogida guiando el brazo, y un método de generalización adaptó el movimiento a nuevas posiciones a partir de una sola demostración. El robot recogió y depositó 56 colonias de dos especies de bacteria, que pasaron a la identificación por espectrometría de masas. No hubo comparación directa con un operador humano: la referencia manual proviene de otro estudio."
findings:
  - "La recogida enseñada por demostración funcionó: en las seis colonias medidas, solo la mayor no salió entera en una sola pasada, y la extracción de medio de cultivo junto con la colonia fue insignificante, salvo en la más pequeña."
  - "El depósito enseñado por demostración resultó poco fiable y se sustituyó por una trayectoria programada; el método de generalización sirvió solo para adaptarla a las posiciones."
  - "En el depósito, la fuerza de contacto rara vez superó 1 N, y la media después de la compensación fue de 0,29 N, con una corrección de posición de unos 0,5 mm."
  - "De las 56 muestras, 6 fueron inválidas en la identificación, cerca del 11% del total: 5 de una especie (13,9%) y 1 de la otra (5%). Los autores consideran esta tasa comparable a la del depósito manual descrito en otro estudio."
  - "El aspecto uniforme del material depositado no predijo el éxito de la identificación. La elección de la colonia y la aplicación del reactivo final siguieron a cargo del operador."
limitations: "Es un caso único, con dos especies de bacteria y sin comparación experimental con el trabajo manual. Solo la recogida se enseñó realmente por demostración. El estudio no mide el tiempo de enseñanza, la facilidad de uso ni la aceptación por parte de los operadores, aunque el argumento sea servir a personas sin experiencia, y no presenta una evaluación de riesgos de la aplicación."
---
