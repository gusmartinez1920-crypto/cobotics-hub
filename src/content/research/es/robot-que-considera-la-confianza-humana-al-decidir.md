---
title: "Un robot que tiene en cuenta la confianza de la persona decide mejor en equipo"
description: "Los autores crearon un modelo de decisión en el que el robot estima la confianza de la persona y planifica sus acciones teniéndola en cuenta. En las pruebas, el equipo rindió más y la persona intervino menos."
translationKey: chen2020
topic: human-factors
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Trust-Aware Decision Making for Human-Robot Collaboration: Model Learning and Planning"
  authors:
    - "Min Chen"
    - "Stefanos Nikolaidis"
    - "Harold Soh"
    - "David Hsu"
    - "Siddhartha Srinivasa"
  year: 2020
  venue: "ACM Transactions on Human-Robot Interaction"
  doi: "10.1145/3359616"
  url: "https://doi.org/10.1145/3359616"
  openAccess: true
whyItMatters: "Quien confía poco en el robot interviene sin necesidad; quien confía demasiado deja de intervenir cuando debería. El estudio muestra que se puede modelar la confianza y usarla en la planificación del robot, y que buscar la confianza máxima no es lo mismo que buscar el mejor resultado. La tarea es doméstica, no industrial: la aplicación a la fábrica todavía está por demostrar."
method: "El modelo trata la confianza como una variable oculta, en una escala de 1 a 7, dentro de un proceso de decisión con observación parcial (POMDP). La tarea es retirar de la mesa tres botellas de agua, una lata y una copa de vino; en cada paso la persona deja actuar al robot o interviene. Los autores aprendieron el modelo con datos de 222 participantes en línea, que respondían a un cuestionario de confianza en cada paso. Después compararon el robot que considera la confianza con uno que la ignora, en línea con videos (201 participantes válidos) y con un brazo robótico real (20 participantes). Los fallos del robot se estudiaron solo en simulación."
findings:
  - "La confianza sube cuando el robot acierta y baja cuando falla; cuanto mayor es la confianza, mayor es la caída tras un fallo. Las personas intervienen más en los objetos de mayor riesgo, como la copa, y menos cuando confían más."
  - "El equipo tuvo mejor desempeño con el robot que considera la confianza, tanto en línea como con el robot real, con una diferencia estadísticamente significativa en ambos casos."
  - "La ventaja vino de menos intervenciones. Con el robot real, no hubo intervención en la lata y hubo un 71% menos en la copa. Este robot empieza por las botellas, de bajo riesgo, y deja la copa para el final; el otro toma primero la copa, que vale más."
  - "El mismo resultado pesa más en la confianza cuando ocurre al inicio de la tarea. Un modelo que lo tiene en cuenta hace que el robot invierta antes en ganar confianza."
  - "En simulación con fallos probables en la copa, el robot puede fallar a propósito con las botellas para reducir la confianza de alguien demasiado confiado y llevarlo a intervenir. La política que maximiza el desempeño superó a la que maximiza la confianza."
limitations: "La tarea es doméstica y sencilla, con un brazo asistivo, y en las pruebas con personas el robot siempre acertaba; los fallos solo se simularon. Los autores reconocen que la confianza se redujo a un solo número, que las capacidades del robot se supusieron fijas y que medir la confianza por cuestionario en cada acción no sirve para tareas más grandes. El estudio no mide la carga de trabajo ni el estrés de la persona."
---
