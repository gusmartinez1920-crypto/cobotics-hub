---
title: "Cobots que aprenden juntos sin enviar los datos brutos de la fábrica a la nube"
description: "El autor propone que los cobots entrenen modelos de IA en conjunto intercambiando solo actualizaciones. En un gemelo digital con seis cobots, la exactitud fue del 91,2%, frente al 93,5% del entrenamiento centralizado."
translationKey: rahmati2025
topic: implementation
pillars: [cobot, twin, iot]
authors: [claude]
date: 2026-11-13
level: advanced
draft: true
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Federated learning for privacy-preserving AI in human–robot collaboration for smart manufacturing"
  authors:
    - "Milad Rahmati"
  year: 2025
  venue: "Journal of Intelligent Manufacturing and Special Equipment"
  doi: "10.1108/jimse-03-2025-0003"
  url: "https://doi.org/10.1108/jimse-03-2025-0003"
whyItMatters: "Entrenar inteligencia artificial en la nube obliga a la fábrica a enviar datos de operación al exterior, con riesgo de fugas y de pérdida de secreto industrial. El aprendizaje federado es una alternativa: cada robot entrena localmente y comparte solo lo que aprendió. El estudio da una idea de lo que se gana y se pierde en exactitud, costo de cómputo y privacidad."
method: "Es una propuesta de arquitectura evaluada solo en simulación. Cada robot aprende por refuerzo con sus propios datos y envía a un agregador solo las actualizaciones del modelo, protegidas con cifrado y con ruido añadido a propósito. La prueba usó un gemelo digital de una fábrica de 20 × 20 m, con seis cobots en tareas de montaje, inspección de calidad y transporte de material. El autor comparó el resultado con el entrenamiento centralizado y con otras técnicas."
findings:
  - "Tras 50 rondas, el aprendizaje federado alcanzó un 91,2% de exactitud, frente al 93,5% del entrenamiento centralizado. El autor considera que la pérdida de 2,3 puntos se compensa con la ganancia de privacidad."
  - "En las tareas colaborativas simuladas, los robots entrenados de forma federada tuvieron un 87,6% de éxito, frente al 81,4% con aprendizaje por refuerzo tradicional."
  - "El autor informa una reducción del 41,5% en el riesgo de fuga de datos respecto de los modelos tradicionales, convergencia en 45 rondas frente a más de 60 y un costo de cómputo un 23,8% menor."
  - "La protección tiene un precio: la agregación con cifrado añade un 12,5% de costo de cómputo respecto de la agregación sin cifrado."
  - "Al pasar de 6 a 12 robots, el tiempo de entrenamiento aumentó un 18% por límite de ancho de banda. La latencia de respuesta varió de 45 a 75 ms según el dispositivo."
limitations: "Toda la evaluación se hizo en simulación, sin robots físicos ni trabajadores reales; la implantación real queda para trabajos futuros. La privacidad tratada es la de los datos y secretos de la empresa, no la de los datos del operador. Las medidas son solo del robot: el estudio no evalúa seguridad física, carga de trabajo ni aceptación, y la escala no se probó más allá de 12 robots."
---
