---
title: "Un guante con RFID, electrodos y cámaras automatizan la evaluación ergonómica de un montaje"
description: "Los autores proponen una arquitectura con guante RFID, electromiografía y cámaras de profundidad que completa tres secciones del método EAWS y señala, tarea por tarea, dónde el riesgo físico es alto."
translationKey: tomelleri2024
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El estudio busca proteger la salud física de quienes montan piezas, midiendo postura, fuerza y carga en cada tarea para señalar dónde el riesgo es alto."
paper:
  title: "Digital ergonomic assessment to enhance the physical resilience of human-centric manufacturing systems in Industry 5.0"
  authors:
    - "Federica Tomelleri"
    - "Andrea Sbaragli"
    - "Francesco Picariello"
    - "Francesco Pilati"
  year: 2024
  venue: "Journal of Manufacturing Systems"
  doi: "10.1016/j.jmsy.2024.09.003"
  url: "https://doi.org/10.1016/j.jmsy.2024.09.003"
whyItMatters: "La evaluación ergonómica de los puestos de montaje suele hacerse a mano, con la observación y el criterio del evaluador. Una medición automática por tarea muestra dónde está el esfuerzo y sirve de línea de base para decidir dónde un apoyo, un elevador o un cobot marcaría la diferencia. El estudio trata de montaje manual, no de robots: el cobot solo aparece como posible medida de alivio, y el vínculo con proyectos colaborativos es del lector."
method: "Los autores desarrollaron la arquitectura y la probaron en un entorno piloto de laboratorio. Un guante con lector RFID lee etiquetas en piezas, cajas y herramientas y, con ello, divide el trabajo en tareas; electrodos de electromiografía de superficie en cuatro músculos de los brazos miden el esfuerzo respecto de la contracción máxima de la persona; dos cámaras de profundidad sin marcadores clasifican la postura de la espalda. Los datos alimentan las secciones de posturas, fuerzas de acción y manipulación manual de cargas del EAWS (European Assembly Worksheet). El caso de prueba fue un operador que montó una cómoda en 22 tareas, en una secuencia de 51,7 minutos."
findings:
  - "La puntuación global de cuerpo entero fue de 51,03 puntos, nivel de riesgo alto. En cada tarea cuenta la mayor de las puntuaciones de postura, fuerza y manipulación de cargas; la global es el promedio de las tareas."
  - "La peor tarea en postura fue encajar los cajones: 69,3 puntos en 171,7 segundos. El operador estuvo erguido solo el 23,1% de ese tiempo y con el tronco girado el 73,1%; los autores proponen un apoyo de altura regulable y herramientas al alcance."
  - "En fuerzas de acción, cerca del 68,1% de las tareas quedó en riesgo bajo, pero la inserción manual de espigas destacó: un músculo flexor del antebrazo derecho llegó al 66,7% de la contracción máxima durante 57,3 segundos."
  - "Una señal de electromiografía de gran amplitud no significa esfuerzo alto. Tramos visualmente intensos correspondieron al 5,5% y al 1,5% de la contracción máxima, porque la medida depende de la fuerza máxima de cada persona."
  - "En la manipulación de cargas, la puntuación global fue baja (1,3), pero solo 4 de las 22 tareas incluían piezas de más de 3 kg, lo que hace poco informativo el promedio. Para preservar la privacidad, el sistema no registra el género y puntúa todas las cargas con los valores femeninos, más altos."
limitations: "La validación se hizo con un único operador, en laboratorio, sin comparación con la evaluación de un ergónomo ni medida de la precisión del sistema. Los propios autores reconocen que el EAWS no cubre la carga mental, que la sección de movimientos repetitivos de los miembros superiores quedó fuera y que la arquitectura funciona solo después de la recolección de datos, no en tiempo real. El estudio no discute el uso de los datos de monitoreo por parte de la gerencia ni el consentimiento del trabajador."
---
