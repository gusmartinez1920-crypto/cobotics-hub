---
title: "Gemelo digital para la colaboración humano-robot: cómo se construye y dónde se atasca"
description: "Una revisión describe dos formas de construir gemelos digitales de celdas con cobots y concluye que lo difícil es modelar al operador humano, no al robot."
translationKey: ramasubramanian2022
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 9
    why: "La revisión discute el costo y la pericia que exige el gemelo digital y recoge el temor de que solo las grandes empresas puedan adoptarlo."
paper:
  title: "Digital Twin for Human–Robot Collaboration in Manufacturing: Review and Outlook"
  authors:
    - "Aswin K. Ramasubramanian"
    - "Robins Mathew"
    - "Matthew Kelly"
    - "Vincent Hargaden"
    - "Nikolaos Papakostas"
  year: 2022
  venue: "Applied Sciences"
  doi: "10.3390/app12104811"
  url: "https://doi.org/10.3390/app12104811"
whyItMatters: "El gemelo digital permite probar la seguridad y el desempeño de una celda colaborativa antes de instalarla. Esta revisión ayuda a separar lo que ya es practicable de lo que todavía es promesa y explica la diferencia entre modelo digital, sombra digital y gemelo digital. Sirve de punto de partida para quien planea simular una aplicación con cobot."
method: "Es una revisión narrativa de la literatura, sin protocolo sistemático declarado. Los autores hicieron un relevamiento en la base Scopus en septiembre de 2021 y clasificaron los trabajos en dos enfoques de modelado. Añadieron un marco conceptual propio para el gemelo digital de un brazo colaborativo y un ejemplo propio de gemelo digital del operador, movido por varias cámaras de profundidad."
findings:
  - "La búsqueda encontró 275 documentos que combinan gemelo digital y robótica, pero solo 30 que combinan gemelo digital y colaboración humano-robot."
  - "Lo que distingue los tres términos es el intercambio de datos entre lo físico y lo virtual: manual en los dos sentidos es modelo digital; automático solo de lo físico a lo virtual es sombra digital; automático en los dos sentidos es gemelo digital."
  - "Hay dos enfoques de construcción. El basado en simulación reúne modelos y datos de cada fase del ciclo de vida y sirve mejor para productos nuevos; el basado en capas (física, virtual y de conexión) sirve mejor para fábricas ya existentes, supervisadas en tiempo real."
  - "Entre los beneficios descritos están probar la seguridad antes de la implantación, mediante la puesta en marcha virtual, el mantenimiento predictivo, la planificación y asignación de tareas y la capacitación con realidad virtual. El gemelo también ayuda a buscar el equilibrio entre la velocidad del robot y la seguridad del operador."
  - "Los desafíos incluyen la falta de una arquitectura genérica, el costo, la sincronización en tiempo real, la diferencia entre simulación y realidad y la falta de un método para determinar la fidelidad del gemelo. Los autores consideran casi inviable, con la tecnología actual, modelar la salud física y los aspectos emocionales del operador, como la fatiga y el temblor."
limitations: "La revisión no declara criterios de inclusión, y la búsqueda llega solo hasta septiembre de 2021. El operador aparece en los gemelos descritos como un esqueleto en movimiento, sin fatiga ni estado emocional. El texto se sitúa en la Industria 4.0 y no discute la participación del operador en el diseño."
---
