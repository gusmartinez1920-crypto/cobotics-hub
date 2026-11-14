---
title: "Cobot para traer piezas grandes en el montaje: la cuenta de ergonomía y retorno"
description: "Un modelo de apoyo a la decisión combina tiempo de recogida, reparto de tareas, ergonomía y retorno de la inversión. En un caso simulado de 26 tareas, el cobot redujo el tiempo total de 553 s a 507 s."
translationKey: faccio2026
topic: implementation
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El modelo incluye la exposición ergonómica de los operadores como objetivo y la convierte en valor en el análisis de la inversión en cobot."
paper:
  title: "Can collaborative robotics help in large parts picking for assembly? An ergonomics/economics model"
  authors:
    - "Maurizio Faccio"
    - "Irene Granata"
    - "Riccardo Minto"
  year: 2026
  venue: "The International Journal of Advanced Manufacturing Technology"
  doi: "10.1007/s00170-026-18980-z"
  url: "https://doi.org/10.1007/s00170-026-18980-z"
  openAccess: true
  license: "CC BY"
whyItMatters: "Justificar un cobot solo por la ganancia de productividad no siempre cierra la cuenta. El estudio muestra una forma de incluir la ergonomía en el cálculo de la inversión e indica dónde el cobot tiende a rendir más: en las tareas sin valor agregado y desgastantes, como traer piezas grandes almacenadas detrás del operador. Es útil en la fase inicial del diseño de una estación de montaje."
method: "Los autores estiman el tiempo manual de recogida y colocación de cada pieza según el lugar donde se almacena y sus características. Esos tiempos alimentan un modelo de optimización que reparte las tareas entre dos operadores y un cobot, con dos objetivos: el tiempo total del ciclo y un índice de postura (REBA) ponderado por el tiempo. Una capa económica calcula el plazo de retorno simple de la inversión. El modelo se aplicó a un caso representativo de 26 tareas, con la distribución y los tiempos del robot comprobados en simulación."
findings:
  - "Solo con operadores, el ciclo duró 553 s. Optimizando únicamente el tiempo con el cobot, bajó a 493 s, cerca de un 11% menos, pero la mejora ergonómica quedó casi toda en uno de los dos operadores."
  - "La solución que equilibra tiempo y ergonomía quedó en 507 s y redujo el índice de postura ponderado de 2,45 a 1,91 en un operador y de 2,05 a 0,73 en el otro."
  - "Incluso con el cobot un 50% más lento, el ciclo quedó en 516 s, por debajo del escenario solo humano. En ese caso, el modelo devuelve a los operadores parte de las recogidas detrás de ellos."
  - "El margen por unidad es el principal factor de viabilidad cuando los márgenes son bajos. Asignar valor monetario a la ergonomía amplía la región en que el retorno es aceptable, sobre todo con inversión alta."
  - "Los autores recomiendan usar el cobot en las tareas sin valor agregado y ergonómicamente críticas, no en el montaje en sí, y compartirlo entre estaciones para aumentar su uso."
limitations: "Los propios autores tratan el caso como demostración del método, no como validación industrial: los tiempos y los índices de postura son supuestos o comprobados solo en entorno virtual. El modelo no incluye restricciones de seguridad, aceptación del trabajador ni fatiga, y el cálculo de retorno es simple, sin descuento, impuestos ni incertidumbre de demanda. El valor monetario de la ergonomía es un parámetro que los autores varían, y el uso compartido del cobot entre estaciones no se modeló."
---
