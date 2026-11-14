---
title: "Predecir dónde deja la pieza el operador acorta el ciclo de recogida del cobot"
description: "Un algoritmo estadístico predice dónde deja el operador la pieza en la cinta y permite al cobot fotografiar desde más cerca. En simulación, el tiempo de recogida bajó un 16% de media con datos históricos."
translationKey: sobaszek2026
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Design and implementation of a predictive algorithm for collaborative robot programming"
  authors:
    - "Łukasz Sobaszek"
  year: 2026
  venue: "Scientific Reports"
  doi: "10.1038/s41598-025-34643-7"
  url: "https://doi.org/10.1038/s41598-025-34643-7"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "La propuesta ataca el tiempo de ciclo de una celda de tomar y colocar sin comprar equipo nuevo: usa solo software y los datos que el propio robot ya registra. Es un ejemplo sencillo de cómo la estadística del comportamiento de quien trabaja en la estación anterior puede ajustar el programa del cobot."
method: "El autor modela la posición en que se deja la pieza como una variable aleatoria, ajusta una distribución estadística para cada operador y, cuando ninguna sirve, usa una estimación no paramétrica. Con la predicción, la cámara en la muñeca del robot baja y cubre un área menor. Los datos proceden de un banco de laboratorio, con 5 operadores que depositaron 30 rodamientos cada uno. El robot, un UR10e, se probó en simulación en RoboDK, con y sin predicción, con los datos recogidos y después con datos sintéticos de 5, 10 y 15 piezas."
findings:
  - "Con los datos históricos de 30 piezas, el tiempo de finalización bajó de unos 150,5 s a entre 121,5 y 131,2 s: una reducción media de 24,06 s (15,98%). La trayectoria se acortó un 9,59% de media."
  - "Con datos sintéticos, que incluyen piezas fuera del área reducida, la reducción media de tiempo rondó el 10% (10,76% con 5 piezas, 10,70% con 10 y 10,23% con 15)."
  - "La predicción permitió bajar la altura de captura de la cámara entre 177 y 238 mm, según el operador."
  - "La ganancia fue mayor cuando una distribución paramétrica se ajustó a los datos del operador. Cuantas más piezas caen fuera del área reducida, menor es la ganancia, pero en ningún caso aumentó el tiempo."
  - "El autor defiende que la solución se quede en el software del robot, sin hardware adicional, y sugiere que la trayectoria más corta puede reducir el desgaste y el mantenimiento."
limitations: "El robot solo se simuló, y los datos proceden de un banco de laboratorio con cinco operadores, no de una línea de producción. El estudio no trata la seguridad ni mide efecto alguno sobre quien trabaja: el operador aparece solo como la posición en que deja la pieza. Las piezas irregulares y con varias orientaciones quedan para trabajos futuros."
---
