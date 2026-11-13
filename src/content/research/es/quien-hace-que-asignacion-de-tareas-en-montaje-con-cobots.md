---
title: "Quién hace qué en el montaje con cobots: cómo se reparte el trabajo entre persona y robot"
description: "Una revisión sistemática de 37 estudios clasifica los métodos de reparto de tareas entre persona y robot en el montaje, identifica 12 grupos de criterios y propone un modelo de referencia de siete etapas."
translationKey: petzoldt2023
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "La revisión muestra con qué frecuencia la ergonomía y la seguridad entran en el reparto de tareas entre persona y robot y discute monotonía, estrés y aceptación del trabajador."
paper:
  title: "Review of task allocation for human-robot collaboration in assembly"
  authors:
    - "Christoph Petzoldt"
    - "Matthias Harms"
    - "Michael Freitag"
  year: 2023
  venue: "International Journal of Computer Integrated Manufacturing"
  doi: "10.1080/0951192x.2023.2204467"
  url: "https://doi.org/10.1080/0951192x.2023.2204467"
whyItMatters: "Decidir qué queda para la persona y qué para el robot define el tiempo de ciclo, la ergonomía e incluso si el trabajo será monótono o estresante. La revisión ordena las opciones y muestra lo que suele quedar fuera de la decisión, como la seguridad, lo que ayuda a quien planifica una celda colaborativa."
method: "Los autores hicieron una revisión sistemática con búsqueda en enero de 2022 en las bases Scopus e IEEE Xplore, restringida a textos revisados por pares en inglés o alemán. De los 576 registros, tres rondas de cribado dejaron 24 estudios de alta relevancia, y la búsqueda en referencias y citas añadió 13, con un total de 37. Los enfoques se clasificaron en dos categorías y cuatro subcategorías, definidas en discusión entre los autores."
findings:
  - "La revisión divide los enfoques en estáticos, que deciden antes de la ejecución (19 estudios), y dinámicos, que deciden durante la ejecución (18). Los estáticos se basan en evaluar la adecuación de cada tarea (14) o en simulación (5); los dinámicos son reactivos (12) o proactivos (6)."
  - "Los criterios de decisión forman 12 grupos. En los 30 enfoques analizados en cuanto a criterios, las características de la persona y del robot aparecen en todos, los requisitos del proceso en el 87%, el tiempo en el 70% y la ergonomía en el 47%; la seguridad aparece en solo 8. La ergonomía cubre casi únicamente postura y esfuerzo físico."
  - "La elección y el peso de los criterios rara vez se validan en la práctica o se derivan de normas. Casi todos los enfoques se evaluaron en laboratorio, y faltan implantaciones reales y estudios de larga duración."
  - "En la asignación proactiva, la persona lidera y el robot anticipa tareas de apoyo. La revisión encontró una ganancia de autonomía y menos monotonía, a costa de menor eficiencia, tiempos de ciclo impredecibles y un retorno de la inversión más difícil de calcular."
  - "Los autores proponen un modelo de referencia de hasta siete etapas, desde los criterios de entrada hasta el monitoreo con realimentación. Indican la asignación estática para lotes grandes y procesos estandarizados y la dinámica para procesos menos estandarizados; esta exige sensores, computación en tiempo real y cuidado con la privacidad de los datos del trabajador."
limitations: "La búsqueda llega solo hasta enero de 2022 y usó dos bases. Como casi todos los estudios revisados se probaron en laboratorio, la revisión no muestra cómo se comportan estos enfoques en fábricas, y el modelo de referencia es una propuesta de los autores, todavía no validada. También faltan medidas estandarizadas para comparar los enfoques entre sí."
---
