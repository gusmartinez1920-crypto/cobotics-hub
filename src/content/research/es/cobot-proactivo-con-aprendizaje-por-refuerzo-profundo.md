---
title: "Un cobot que aprende el momento justo para anticiparse a la persona"
description: "Los autores entrenan juntas la percepción y la decisión de un cobot con aprendizaje por refuerzo. En un simulador de una tarea de embalaje, el robot eliminó en promedio 3,4 s de espera por fase."
translationKey: ghadirzadeh2021
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Human-Centered Collaborative Robots With Deep Reinforcement Learning"
  authors:
    - "Ali Ghadirzadeh"
    - "Xi Chen"
    - "Wenjie Yin"
    - "Zhengrong Yi"
    - "Marten Bjorkman"
    - "Danica Kragic"
  year: 2021
  venue: "IEEE Robotics and Automation Letters"
  doi: "10.1109/lra.2020.3047730"
  url: "https://doi.org/10.1109/lra.2020.3047730"
whyItMatters: "Un robot que solo actúa cuando está seguro de lo que hizo la persona deja a su compañero esperando; uno que actúa demasiado pronto se equivoca y retrasa la tarea. El estudio muestra una forma de que el robot aprenda ese equilibrio por sí solo, sin que alguien tenga que etiquetar a mano las actividades humanas."
method: "El robot recibe únicamente el movimiento del cuerpo de la persona, captado por un traje de captura de movimiento, y obtiene como recompensa el tiempo que ahorra al actuar antes; la acción equivocada se penaliza con el retraso necesario para deshacerla. La percepción y la política de decisión son redes neuronales entrenadas juntas con aprendizaje por refuerzo profundo. El entrenamiento usó un simulador de las interacciones, construido con 200 sesiones reales de colaboración entre dos personas, en una tarea de embalaje con un robot ABB YuMi. Los autores compararon el resultado con un clasificador supervisado que solo actúa por encima de cierto nivel de confianza."
findings:
  - "Los modelos entrenados eliminaron, en promedio, 3,4 segundos de espera en cada fase de la colaboración; una sesión típica de embalaje tiene seis fases."
  - "El mejor método supervisado de la comparación obtuvo cerca de 2,9 segundos de ganancia media, frente a 3,4 segundos de la propuesta, que además no necesita datos anotados."
  - "Añadir actividades etiquetadas al entrenamiento de la percepción no mejoró el desempeño: la representación aprendida sin etiquetas fue suficiente."
  - "El tamaño de las redes pesó poco: el desempeño casi no cambió con el número de neuronas ni con el tamaño de la representación interna."
  - "La incertidumbre sobre la acción humana no se calcula de forma explícita; la política aprende a decidir si conviene actuar o esperar más datos. Los autores afirman que la política entrenada en el simulador puede llevarse directamente a la tarea real."
limitations: "Los resultados provienen de un simulador alimentado por sesiones entre dos personas; no hubo evaluación con personas trabajando con el robot, y la transferencia a la tarea real se afirma, no se mide. La tarea es sencilla, de laboratorio, y el único criterio es el tiempo ahorrado: la seguridad, el esfuerzo y la aceptación de la persona quedan fuera. La adaptación a nuevos compañeros humanos quedó para trabajos futuros."
---
