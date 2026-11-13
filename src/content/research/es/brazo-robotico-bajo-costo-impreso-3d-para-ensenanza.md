---
title: "Un brazo robótico impreso en 3D para la enseñanza: qué funcionó y qué falló"
description: "Los autores construyeron y probaron un brazo robótico de bajo costo, impreso en plástico, para clases de ingeniería. Con tres ejes montados cargó 314 g; la detección de colisiones no funcionó."
translationKey: ananias2022
topic: education
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 4
    why: "El estudio desarrolla un brazo robótico barato y replicable, pensado para clases de laboratorio en las carreras de ingeniería."
paper:
  title: "A Low-Cost Collaborative Robot for Science and Education Purposes to Foster the Industry 4.0 Implementation"
  authors:
    - "Estevão Ananias"
    - "Pedro Dinis Gaspar"
  year: 2022
  venue: "Applied System Innovation"
  doi: "10.3390/asi5040072"
  url: "https://doi.org/10.3390/asi5040072"
whyItMatters: "Quien quiera montar un robot para enseñanza o investigación con poco dinero encuentra aquí un diseño detallado y un relato franco de los problemas. El caso muestra que llamar colaborativo a un brazo no basta: sin una detección de colisiones fiable, el uso en clase exige precauciones que el estudio no discute."
method: "Desarrollo y prueba de un prototipo, sin estudiantes ni evaluación del aprendizaje. La estructura partió de un modelo abierto y se imprimió en plástico PLA; las articulaciones usan motores paso a paso, con un microcontrolador ESP32 por eje y una interfaz gráfica en MATLAB. La cinemática inversa se calcula mediante optimización por enjambre de partículas, y una red neuronal debía detectar colisiones a partir de la corriente de los motores. Los autores hicieron cinco ensayos, entre ellos el de exactitud y repetibilidad según la norma ISO 9283, con 30 repeticiones."
findings:
  - "El brazo completo, de seis ejes, no pudo montarse debido al peso. Todos los ensayos se hicieron con los tres primeros ejes, a velocidad reducida."
  - "La carga útil máxima fue de 314 g con el brazo extendido en horizontal. Con tres ejes, el alcance fue de 434 mm en horizontal y 597 mm de altura."
  - "En el ensayo según la ISO 9283, la exactitud de posición llegó a 0,170 mm y la repetibilidad a 0,3835 mm, en los peores casos. Los peores resultados se dieron a la velocidad más alta probada."
  - "La detección de colisiones falló: la red neuronal, entrenada con 290 datos, estimó corrientes muy superiores a los picos medidos, de modo que el robot no percibiría una colisión. Como solución provisional, los autores fijaron un límite de corriente por eje, igual al máximo observado más un 2%."
  - "Los autores señalan como principal limitación los engranajes de plástico, que pueden dañarse con facilidad en las colisiones. El calentamiento del motor también dilató un engranaje y lo soltó del eje."
limitations: "El uso en la enseñanza solo se propone: no hay asignatura, estudiantes ni resultados de aprendizaje. El robot se probó con la mitad de los ejes y sin ningún ensayo de trabajo junto a personas. No hubo evaluación de riesgos ni verificación de límites de fuerza o velocidad."
---
