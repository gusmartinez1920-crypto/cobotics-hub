---
title: "Cómo estimar la fuerza de contacto de un cobot antes de montar la aplicación"
description: "Los autores proponen estimar, ya en la planificación, la carga que un cobot impone al cuerpo en un contacto, con un banco de ensayos de colisión automatizado y una base de datos. Es un prototipo, sin mediciones."
translationKey: schlotzhauer2022
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El estudio trata de cómo verificar, antes del montaje, si el contacto entre cobot y operador respeta los límites que marcan el inicio del dolor o de la lesión."
paper:
  title: "Virtual Validation of Power and Force Limiting Setups in Human-Robot-Collaboration"
  authors:
    - "Andreas Schlotzhauer"
    - "Til Stotz"
    - "Ramez Awad"
    - "Werner Kraus"
  year: 2022
  venue: "Procedia CIRP"
  doi: "10.1016/j.procir.2022.05.073"
  url: "https://doi.org/10.1016/j.procir.2022.05.073"
whyItMatters: "En las aplicaciones con limitación de potencia y fuerza, el contacto entre robot y persona está permitido siempre que respete límites biomecánicos. Hoy esa carga solo puede medirse cuando la aplicación ya está montada, y el proyecto puede tener que rehacerse. Una estimación en la planificación ayudaría a saber pronto si la velocidad y el tiempo de ciclo deseados son viables."
method: "Es una propuesta conceptual con prototipo, presentada en una conferencia, sin datos experimentales. En un banco de ensayos, un robot industrial posiciona un dispositivo de medición que imita el cuerpo humano y un cobot lleva un impactador modular contra él. Se varían la posición y la dirección del contacto, la velocidad, la carga útil, el material y la forma de la superficie y la parte del cuerpo alcanzada. Los valores se guardan en una base de datos por tipo de robot, y un sistema experto sugiere el conjunto de parámetros seguro más cercano."
findings:
  - "Según los autores, los mayores obstáculos para la difusión de la limitación de potencia y fuerza son la falta de una descripción suficiente de cómo validar la aplicación frente a los límites biomecánicos y la falta de una estimación inicial del tiempo de ciclo. El artículo trata el segundo."
  - "Los autores relatan que la planificación actual se hace por ensayo y error: medir los contactos de un solo robot lleva cerca de un día de trabajo a usuarios experimentados, más cuando hay que ajustar los parámetros, e involucra a varias personas."
  - "Consideran que las estimaciones basadas en modelos sirven mal para los contactos en los que el cuerpo queda atrapado, porque es difícil modelar la detección de la colisión y la parada del robot. Por eso eligen un enfoque basado en datos medidos."
  - "En el sistema propuesto, el usuario fija un requisito (por ejemplo, la velocidad que exige el tiempo de ciclo) y pide el parámetro libre (por ejemplo, la mayor carga útil admisible). La respuesta llega como medida concreta: cambiar el ángulo de aproximación, usar un material más blando o restringir el contacto a partes menos sensibles del cuerpo."
  - "Los autores afirman que los cobots se instalan con menos frecuencia que los robots clásicos y suponen que la mayoría opera detrás de vallas, aprovechada por su ligereza y su programación sencilla, no por su sensibilidad."
limitations: "El artículo no presenta ningún resultado medido: la validación virtual del título es una propuesta. El prototipo tiene estructuras de soporte rudimentarias, todavía no mide la presión, y el análisis de los datos y de la incertidumbre de medición queda para trabajos futuros. El operador aparece solo como parte del cuerpo representada por el dispositivo de medición."
---
