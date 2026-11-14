---
title: "Un gemelo digital del operador genera un mapa ergonómico del puesto con cobot"
description: "Un estudio de viabilidad acopla un modelo biomecánico del operador al gemelo digital de un cobot y genera un mapa con las mejores y peores posiciones de trabajo para el hombro y el brazo."
translationKey: miehling2026
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El estudio busca prevenir trastornos musculoesqueléticos de quienes trabajan con cobots, evaluando el esfuerzo del hombro y del brazo en cada posición de trabajo."
paper:
  title: "A Digital Twin-Based Framework for Biomechanical Ergonomics Assessment in Human–Robot Collaboration"
  authors:
    - "Jörg Miehling"
    - "Matthias Guertler"
    - "Marc Carmichael"
    - "Richardo Khonasty"
    - "Louis Fernandez"
    - "Sandro Wartzack"
    - "Christopher Löffelmann"
  year: 2026
  venue: "Digital"
  doi: "10.3390/digital6020051"
  url: "https://doi.org/10.3390/digital6020051"
  openAccess: true
  license: "CC BY"
whyItMatters: "La evaluación ergonómica de los puestos con cobot todavía suele hacerse por observación, una sola vez, en la instalación. Este estudio prueba otro camino: usar simulación biomecánica para estimar el esfuerzo de articulaciones y músculos en cada punto donde el cobot puede presentar la pieza. Para quien diseña celdas colaborativas, es una muestra de lo que un gemelo digital del operador puede y todavía no puede decir."
method: "Los autores hicieron un estudio de viabilidad en laboratorio con tres participantes hombres. Un cobot UR5e presentaba un cubo en 28 posiciones de una cuadrícula de 4 por 7, y el participante atornillaba con la mano derecha, con los pies fijos. Una cámara de profundidad sin marcadores registró los movimientos y el sensor del cobot midió las fuerzas; después, una simulación en un modelo musculoesquelético del miembro superior calculó pares articulares, activaciones musculares y fuerzas de reacción en las articulaciones. Esos valores se normalizaron, se ponderaron y se sumaron en una nota de 1 (mejor) a 10 (peor) por posición."
findings:
  - "Los mapas de los tres participantes muestran el mismo patrón: peor ergonomía en la esquina superior izquierda y mejor en la inferior derecha, coherente con una tarea hecha con la mano derecha. Sin embargo, la región superior derecha y el centro salieron peores de lo esperado en parte de los participantes."
  - "La elevación del hombro tuvo los mayores pares y la mayor variación. Con fuerzas externas bajas (menos de 3,8 N), el peso del propio brazo domina el esfuerzo, y las masas de brazo estimadas (3,39, 4,33 y 5,82 kg) explican las diferencias entre los participantes."
  - "Las fuerzas de reacción en el hombro quedaron por debajo de 500 N en un participante y llegaron a 1000 N en otro, con predominio de la compresión, que los autores consideran deseable para la estabilidad de la articulación."
  - "No hubo correlación cuantitativa con la comodidad declarada por los participantes; la comparación cualitativa mostró una concordancia parcial, sobre todo en las posiciones elevadas. El modelo destaca la dirección vertical, mientras que los participantes señalaron una incomodidad marcada en los desplazamientos laterales."
  - "El uso de una sola cámara sin marcadores produjo fallos en los mapas, por ejemplo cuando el brazo del cobot tapaba el cuerpo. Los autores recomiendan añadir cámaras laterales."
limitations: "Son solo tres participantes, todos hombres, sin análisis estadístico, sin comparación con métodos observacionales y sin validación del seguimiento. El mapa es relativo al propio puesto y usa pesos elegidos por los autores, sin umbrales biomecánicos absolutos, de modo que no indica si una posición es aceptable o de riesgo. La simulación se hizo después de la toma de datos, para una sola tarea casi estática y sin incluir la muñeca; el uso en tiempo real queda para trabajos futuros."
---
