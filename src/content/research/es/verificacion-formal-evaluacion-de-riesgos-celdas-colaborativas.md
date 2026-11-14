---
title: "La verificación formal encuentra peligros que la evaluación de riesgos manual puede pasar por alto"
description: "Los autores proponen un método que modela la celda colaborativa en lógica temporal y usa un verificador automático para hallar peligros de contacto. En un caso real señaló 60 ocurrencias de 27 peligros."
translationKey: vicentini2020
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
    why: "El método busca peligros de contacto entre robot y operador ya en el diseño, incluidos los que nacen de errores y usos no previstos del trabajador."
paper:
  title: "Safety Assessment of Collaborative Robotics Through Automated Formal Verification"
  authors:
    - "Federico Vicentini"
    - "Mehrnoosh Askarpour"
    - "Matteo G. Rossi"
    - "Dino Mandrioli"
  year: 2020
  venue: "IEEE Transactions on Robotics"
  doi: "10.1109/tro.2019.2937471"
  url: "https://doi.org/10.1109/tro.2019.2937471"
  openAccess: true
  license: "CC BY"
whyItMatters: "La evaluación de riesgos hecha a mano es estática y depende de que el evaluador imagine lo que puede salir mal. Aquí, el computador recorre todas las secuencias posibles de acciones del robot y del operador, incluidos errores y retrasos, ya en la fase de diseño. El estudio muestra lo que ofrece este enfoque y cuánto cuesta en tiempo."
method: "Es una propuesta de método con estudio de caso. Los autores describen en lógica temporal la distribución de la celda, el robot y el operador (con 11 regiones del cuerpo), además de las tareas divididas en acciones elementales. El operador puede retrasar, omitir o insertar acciones. El modelo identifica peligros mecánicos de contacto, estima el riesgo y prueba medidas de reducción; un verificador automático busca contraejemplos. El caso es el montaje de palés de máquinas-herramienta en una fábrica real, con un manipulador sobre base móvil y dos operadores."
findings:
  - "En el caso real, el método encontró 60 ocurrencias de 27 peligros distintos, el 73% de tipo transitorio (impacto en el que el cuerpo puede retroceder). Los demás son cuasiestáticos, en los que la persona queda atrapada contra un objeto."
  - "El 45% de los peligros provino de usos no previstos o de errores del operador."
  - "El método no sustituye al evaluador humano: es él quien ajusta el modelo y confirma la medida de mitigación (limitar la fuerza, reducir la velocidad, cambiar la trayectoria) antes de ejecutar otra vez la verificación."
  - "El operador se modela por los efectos visibles de los errores (retraso, lugar equivocado, secuencia equivocada), sin representar las causas, como el cansancio o la distracción."
  - "Cada ronda de verificación tardó en promedio 19 min 37 s en un computador de escritorio común, además de algunos días de modelado que pueden reutilizarse en aplicaciones parecidas. Los autores consideran que el esfuerzo es menor que el de una evaluación completa habitual, según su propia experiencia."
limitations: "El método no se comparó con una evaluación manual de la misma celda. Los modelos más detallados hacen que el tiempo de verificación crezca hasta horas, lo que impide usarlo con el sistema en operación. Solo entran los peligros mecánicos; la fatiga, la atención y la carga mental quedan fuera, y las probabilidades se estiman por experiencia."
---
