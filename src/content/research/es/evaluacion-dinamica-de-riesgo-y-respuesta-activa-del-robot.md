---
title: "Evaluar el riesgo en tiempo real para que el robot se desvíe en lugar de solo detenerse"
description: "Los autores proponen un índice de riesgo calculado en tiempo real y un robot que desacelera o se desvía según ese índice. En simulación, el método reaccionó en 159 ms, cerca del monitoreo convencional (147 ms)."
translationKey: liu2020
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El estudio propone evaluar en tiempo real el riesgo para el operador que comparte el espacio con un robot industrial y hacer que el robot reaccione antes del contacto."
paper:
  title: "Dynamic risk assessment and active response strategy for industrial human-robot collaboration"
  authors:
    - "Zhihao Liu"
    - "Xinran Wang"
    - "Yijie Cai"
    - "Wenjun Xu"
    - "Quan Liu"
    - "Zude Zhou"
    - "Duc Truong Pham"
  year: 2020
  venue: "Computers & Industrial Engineering"
  doi: "10.1016/j.cie.2020.106302"
  url: "https://doi.org/10.1016/j.cie.2020.106302"
  openAccess: true
whyItMatters: "El monitoreo convencional de velocidad y separación detiene el robot siempre que la persona se acerca, lo que protege pero interrumpe el trabajo. Este estudio muestra una alternativa en la que el robot reduce la velocidad o cambia de trayectoria según el riesgo del momento, y en la que el operador ve la zona de riesgo mediante realidad aumentada."
method: "Los autores parten de los indicadores de riesgo de la ISO/TS 15066 y los dividen en dos tipos: los inherentes, puntuados de antemano por especialistas con una matriz de riesgo, y los dinámicos (velocidad del robot, movimiento y posición del operador), evaluados en tiempo real. Dos cámaras de profundidad siguen el esqueleto de la persona. La validación se hace principalmente por simulación de una tarea de transporte y procesamiento de piezas, con un obstáculo esférico en lugar de la persona, y por comparación con dos métodos de monitoreo de velocidad y separación. Los autores describen además la integración con un robot ABB y gafas de realidad aumentada."
findings:
  - "El modelo calcula un índice de riesgo para cualquier punto del espacio de trabajo, a partir de la separación mínima entre la mano de la persona y la punta de la herramienta, extendida a todos los eslabones del robot."
  - "El índice divide el espacio en tres estados: sin peligro (por debajo de 0,4), en el que el robot sigue la tarea a velocidad normal; alerta (de 0,4 a 0,62), en el que desacelera; y peligro (por encima de 0,62), en el que pasa a desviarse. Los límites fueron definidos por especialistas y por el escenario del experimento."
  - "En la simulación con obstáculo y sin la estrategia, el índice superó el límite de peligro a los 1,1 s. Con la respuesta activa, la colisión se evitó, con un tiempo de tarea mayor."
  - "El tiempo medio de reacción fue de 147 ms en el monitoreo convencional, 162 ms en un método de tres modos de la literatura y 159 ms en el método propuesto. El convencional es el más rápido porque solo frena; según los autores, el método propuesto afecta menos la productividad."
  - "Si la persona se queda quieta, el robot la trata como un obstáculo fijo y replanifica la trayectoria. Un gesto de la persona lleva al robot al modo de interacción."
limitations: "La validación es sobre todo simulada, y el obstáculo es una esfera, no una persona; el sistema físico se describe sin mediciones. Los pesos de los indicadores y los límites del índice son subjetivos, lo que los propios autores señalan como punto a mejorar. El estudio no mide el efecto de las desaceleraciones ni de la realidad aumentada sobre el operador."
---
