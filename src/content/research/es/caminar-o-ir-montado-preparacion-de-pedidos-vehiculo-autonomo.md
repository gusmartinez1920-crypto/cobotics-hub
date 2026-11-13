---
title: "¿Caminar o ir montado? Cómo planificar la ruta de quien prepara pedidos con un vehículo autónomo"
description: "Los autores crean un método que decide la ruta y dónde el operario sube al vehículo autónomo o camina. En un centro de distribución real, el tiempo de recorrido bajó un 17,4% de media, con menos flexiones de rodilla."
translationKey: tutam2024
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
    why: "El modelo incluye entre sus objetivos reducir las flexiones de rodilla de quienes preparan pedidos, ligadas a malas posturas y fatiga, además del tiempo de recorrido."
paper:
  title: "To walk or not to walk? Designing intelligent order picking warehouses with collaborative robots"
  authors:
    - "Mahmut Tutam"
    - "René De Koster"
  year: 2024
  venue: "Transportation Research Part E: Logistics and Transportation Review"
  doi: "10.1016/j.tre.2024.103696"
  url: "https://doi.org/10.1016/j.tre.2024.103696"
whyItMatters: "En los almacenes de palés, el operario sube y baja del vehículo unas 1.200 veces por turno, según un fabricante citado, lo que cansa y exige las rodillas. El estudio muestra que planificar juntos la ruta y los tramos a pie reduce a la vez el tiempo y ese esfuerzo. El vehículo aquí es una carretilla autónoma de preparación de pedidos, no un brazo colaborativo: la colaboración es el reparto del recorrido entre caminar e ir montado."
method: "Es un trabajo de investigación operativa. Los autores formularon un modelo que minimiza el tiempo total de recorrido y el número de veces que la persona sube al vehículo, con una penalización de tiempo por cada subida. Como el modelo exacto solo resuelve listas pequeñas, crearon un algoritmo de programación dinámica que resuelve cualquier tamaño. Compararon siete estrategias por simulación, con 1.000 listas aleatorias por tamaño, en almacenes de 1 o 2 bloques con 10 o 20 pasillos, y aplicaron el método a 102 listas reales de un centro de distribución de bebidas de los Países Bajos."
findings:
  - "La ruta y los puntos de subida y bajada deben decidirse juntos: el tiempo entre dos ubicaciones depende de si la persona llegó a pie o montada."
  - "El programa comercial de optimización resolvió listas de hasta 30 recogidas en hasta 7.200 segundos. El algoritmo propuesto tardó como máximo 0,025 segundos para cualquier tamaño, con resultados idénticos en las listas pequeñas."
  - "En la simulación con un bloque y 10 pasillos, la estrategia óptima redujo el tiempo entre un 9,5% y un 27,9% (media del 18,2%) frente a la práctica de la empresa, en la que la persona va siempre montada. Con 20 pasillos, la media fue del 13,4%."
  - "En el caso real, la estrategia óptima redujo el tiempo entre un 14,5% y un 24,1% (media del 17,4%). Mantener la ruta actual y solo elegir dónde caminar ya dio un 13,3% de media. Las flexiones de rodilla bajaron entre un 40% y un 80%, según el tamaño de la lista."
  - "Hay un compromiso entre tiempo y ergonomía, pero con un costo pequeño en cierto rango: en una lista de 60 recogidas, eliminar una cuarta parte de las flexiones (de 40 a 30) empeoró el tiempo solo un 1%."
limitations: "La ergonomía entra solo como un recuento de flexiones de rodilla convertido en unos segundos de penalización, valor fijado por la empresa, sin medida biomecánica ni de fatiga a lo largo del turno. El modelo no considera el tiempo de recogida y supone velocidad constante e instrucciones que siempre se siguen. El estudio no analiza el riesgo de colisión entre la persona y el vehículo autónomo."
---
