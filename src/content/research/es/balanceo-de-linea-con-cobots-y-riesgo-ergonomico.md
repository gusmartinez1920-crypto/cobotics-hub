---
title: "Balancear la línea de montaje con cobots mirando tiempo de ciclo y ergonomía a la vez"
description: "Un modelo de optimización reparte tareas entre personas, robots y parejas persona-robot en líneas de montaje. En 164 pruebas, considerar la ergonomía redujo cerca de una cuarta parte los indicadores de riesgo."
translationKey: kulac2026
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El modelo pone el riesgo ergonómico de cada puesto, físico, ambiental y psicosocial, al mismo nivel que el tiempo de ciclo al repartir tareas entre personas y cobots."
paper:
  title: "Collaborative robot integration in mixed-model assembly line balancing with ergonomic risk considerations"
  authors:
    - "Seçil Kulaç"
    - "Alper Kiraz"
  year: 2026
  venue: "Flexible Services and Manufacturing Journal"
  doi: "10.1007/s10696-026-09662-9"
  url: "https://doi.org/10.1007/s10696-026-09662-9"
whyItMatters: "Quien diseña una línea con cobots debe decidir qué tareas van a la persona, al robot o a los dos juntos. El estudio muestra que es posible incluir la ergonomía en esa decisión sin perder necesariamente productividad, y que añadir robots tiene rendimientos decrecientes. Esto interesa a quien evalúa cuántos cobots comprar."
method: "Los autores formularon un modelo de programación lineal entera mixta para líneas que montan varios modelos de producto. Cada tarea puede hacerla una persona, un robot o ambos en colaboración, y el modelo minimiza a la vez el tiempo de ciclo y dos indicadores de riesgo ergonómico por puesto. El riesgo de cada tarea combina evaluaciones físicas, ambientales y psicosociales en un solo valor. Probaron el modelo en 164 configuraciones derivadas de 13 líneas de referencia, con tiempos y riesgos generados al azar, y en dos estudios de caso, uno de ellos una línea de herramientas eléctricas con 62 tareas y 5 puestos."
findings:
  - "En las 164 configuraciones, incluir el riesgo ergonómico en el modelo redujo en promedio un 27% el indicador de categoría de riesgo y un 25% el riesgo máximo por puesto. En una de las líneas, la caída llegó al 40% y al 44% sin aumento del tiempo de ciclo."
  - "Más robots no siempre ayudan. En una de las líneas de referencia, dos robots redujeron el tiempo de ciclo un 14% y los indicadores de riesgo más de un 40%; el tercero aportó una mejora menor y el cuarto, ninguna."
  - "El costo de la ergonomía depende de cuántos robots haya. Con hasta dos robots, dar más peso a la ergonomía redujo el riesgo sin aumento claro del tiempo de ciclo; con tres robots y un peso alto, el tiempo de ciclo subió un 12%."
  - "En el análisis estadístico, el número de robots afectó de forma significativa solo al riesgo máximo por puesto, y no al tiempo de ciclo. Los pesos dados a la ergonomía afectaron a los tres indicadores."
  - "Los autores recomiendan un peso moderado para la ergonomía y, para las pequeñas y medianas empresas, empezar por las tareas repetitivas o de alto riesgo, usando el modelo como apoyo a la decisión antes de la implantación."
limitations: "El estudio se queda en el plano del diseño de la línea: no hay implantación física ni medición con trabajadores. En gran parte de las pruebas, los tiempos y los riesgos se generaron al azar, y el riesgo de la tarea colaborativa se supuso menor que el de la manual, de modo que la mejora ergonómica de la colaboración entra como hipótesis, no como medida. El modelo no trata la seguridad de contacto entre persona y robot."
---
