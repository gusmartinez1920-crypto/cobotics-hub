---
title: "Directrices de seguridad permiten a no especialistas reducir el riesgo de una celda con cobot"
description: "Los autores crearon directrices de seguridad para el montaje colaborativo y las probaron en un caso de laboratorio: tres ingenieros sin formación en seguridad bajaron el índice de riesgo del peor caso de 12 a 6."
translationKey: gualtieri2022
topic: safety
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El estudio propone y prueba directrices para reducir el riesgo de lesión mecánica del operador en puestos de montaje con un robot colaborativo."
paper:
  title: "Development and validation of guidelines for safety in human-robot collaborative assembly systems"
  authors:
    - "Luca Gualtieri"
    - "Erwin Rauch"
    - "Renato Vidoni"
  year: 2022
  venue: "Computers & Industrial Engineering"
  doi: "10.1016/j.cie.2021.107801"
  url: "https://doi.org/10.1016/j.cie.2021.107801"
whyItMatters: "Muchas empresas no tienen un especialista en seguridad de robots en el equipo de diseño. El estudio indica que un conjunto organizado de directrices, alineado con las normas, ayuda a los ingenieros de manufactura a llegar a un diseño más seguro. También muestra el precio: la mayor mejora vino de separar a la persona y al robot."
method: "Las directrices provienen de normas (ISO 12100, ISO 10218, ISO/TS 15066 e ISO/TR 20218-1), de manuales de fabricantes y de la literatura científica, y tratan solo de peligros mecánicos. En la validación, en un laboratorio de Bolzano, el equipo montó una celda de montaje de un mueble metálico con un robot UR10 sin pensar en la seguridad, y un especialista certificado evaluó el riesgo. Tres ingenieros de manufactura sin formación en seguridad rediseñaron la celda con las directrices; la nueva versión se modeló en un gemelo digital y fue reevaluada por el mismo especialista."
findings:
  - "Las directrices se organizan en cuatro objetivos: evitar el atrapamiento de partes del cuerpo, evitar la colisión, evitar la caída de piezas del sistema robótico y medidas que valen para todos los peligros mecánicos."
  - "Cada directriz recibe una prioridad según la lógica de la ISO 12100, que se aplica en este orden: primero seguridad por diseño, después medidas de protección adicionales y, por último, seguridad por la información."
  - "En la celda original, el peor caso era que el brazo o la pinza golpeara la cabeza, el cuello, los hombros o el tórax del operador concentrado en la tarea manual. El índice de riesgo fue 12, clasificado como alto riesgo."
  - "En la celda rediseñada, el índice bajó a 6, clasificado como riesgo bajo control. Las cuatro notas que componen el índice bajaron entre un 33% y un 67%. La mayor mejora vino de una mesa giratoria que separa los espacios de trabajo y de una distribución que limita el movimiento del operador."
  - "Los ingenieros informaron tres barreras: el costo y el tiempo de los sistemas de seguridad adicionales, la necesidad de mantener el juicio de un especialista y la dependencia de los recursos técnicos de la empresa, como un programador interno."
limitations: "La validación usó un único caso, tres ingenieros y un modelo virtual, no la celda real; los autores piden casos industriales y más participantes. La evaluación cubre solo peligros mecánicos y solo al operador del montaje, sin mantenimiento. El estudio no mide el efecto de separar a la persona y al robot sobre el tiempo de ciclo o la carga del operador."
---
