---
title: "Repartir tareas con el robot teniendo en cuenta el cansancio y la variación del operador"
description: "Los autores proponen un planificador de montaje colaborativo que considera el esfuerzo físico y la variación del operador. En una prueba con 4 personas, la duración varió un 32,4% menos."
translationKey: you2026
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El planificador incluye el esfuerzo físico acumulado del operador como objetivo, junto al tiempo de producción, al repartir tareas con el robot."
paper:
  title: "Towards human-centric manufacturing: Task planning under uncertainties in human–robot collaborative assembly"
  authors:
    - "Yingchao You"
    - "Ze Ji"
    - "Changyun Wei"
  year: 2026
  venue: "Robotics and Computer-Integrated Manufacturing"
  doi: "10.1016/j.rcim.2026.103293"
  url: "https://doi.org/10.1016/j.rcim.2026.103293"
whyItMatters: "La mayoría de los planificadores de montaje colaborativo solo intenta reducir el tiempo total y trata a la persona como una máquina de tiempo fijo. Este estudio muestra una forma de incluir en el cálculo el cansancio muscular y la variación natural del trabajo humano, y sugiere un criterio práctico: dar al robot las tareas más imprevisibles, no solo las más lentas."
method: "Los autores representan la duración y el esfuerzo de cada tarea con números que incorporan la incertidumbre y calculan el esfuerzo físico con un modelo de acumulación y recuperación muscular. Un agente de aprendizaje por refuerzo decide quién hace cada tarea (humano, robot o ambos) y en qué orden, buscando reducir a la vez el tiempo total y el esfuerzo excesivo. La validación tiene un estudio numérico con datos sintéticos de una caja de engranajes con 24 tareas y una prueba de concepto en laboratorio: el montaje de una caja de computadora por 1 persona y 1 robot, con 4 participantes y 5 ensayos por grupo."
findings:
  - "En el estudio numérico, frente a reglas heurísticas, el método redujo hasta un 13,97% el tiempo total medio y un 17,64% el esfuerzo acumulado."
  - "Optimizar solo el esfuerzo genera un plan conservador, que prioriza el descanso y alarga el tiempo total (125,38 frente a 92,14 en el modelo completo). Optimizar solo el tiempo aumenta el esfuerzo (15,82 frente a 12,14)."
  - "En el laboratorio, la desviación estándar media de la duración bajó de 17,76 a 12,00 (un 32,4% menos) y la del esfuerzo de 0,0735 a 0,054 (un 26,5% menos), en comparación con un planificador sin modelo de incertidumbre. Las medias fueron comparables."
  - "La ganancia viene de reducir la dispersión, no de acelerar: la instalación de la fuente de alimentación, tarea de alineación precisa y alta variación, va al robot, mientras que el planificador sin incertidumbre se la da al humano por ser más rápido de media."
limitations: "El estudio numérico usa datos sintéticos, y la prueba real tiene solo 4 participantes jóvenes, sin prueba estadística. El modelo considera solo el esfuerzo muscular: la carga mental, el estrés y la confianza quedan fuera. La seguridad no se trata, y el planificador decide el reparto de tareas sin escuchar al trabajador."
---
