---
title: "La IA convierte planos de obra en instrucciones para personas y robots"
description: "Los autores proponen separar qué construir de cómo construirlo en dos modelos y usan IA multimodal para generar ambos a partir de planos, en dos casos preliminares que no llegaron a la ejecución."
translationKey: das2026
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Translating intention: AI-assisted model generation for collaborative human–robot construction"
  authors:
    - "Avishek Das"
    - "Begüm Saral"
    - "Lidia Atanasova"
    - "Tizian Rein"
    - "Kathrin Dörfler"
  year: 2026
  venue: "Construction Robotics"
  doi: "10.1007/s41693-026-00205-0"
  url: "https://doi.org/10.1007/s41693-026-00205-0"
  openAccess: true
  license: "CC BY"
whyItMatters: "Las personas leen un plano con experiencia y criterio; los robots necesitan pasos explícitos, sin margen de interpretación. Hoy esa traducción se hace con programación manual, lenta y dependiente de especialistas. El estudio sugiere un camino para que persona y robot partan de la misma descripción de la obra, incluso cuando solo existe el plano en papel."
method: "Es un artículo conceptual con una demostración experimental preliminar. Los autores describen dos modelos en forma de grafo: uno espacial, en el que cada nodo es un elemento de la construcción, y uno procedimental, en el que cada nodo es una acción ejecutable. Un modelo de IA multimodal (Gemini 2.5 Pro), guiado solo por instrucciones y formatos de salida rígidos, sin entrenamiento adicional, generó los dos modelos a partir de planos, con revisión humana en cada etapa. Los dos casos fueron una columna de ladrillos y una pared de montantes de madera irregular, tomados de un manual de construcción de 1936."
findings:
  - "Los autores describen la diferencia central: la instrucción para la persona dice qué hacer y cuenta con su experiencia; la instrucción para el robot dice cómo hacerlo, paso a paso."
  - "En el modelo propuesto, las acciones de personas y de robots se describen en el mismo formato. Así, según los autores, las tareas pueden sincronizarse, intercalarse o pasar de uno a otro sin rehacer el modelo."
  - "En la columna de ladrillos, la IA generó un modelo espacial coherente a partir de dos plantas y un texto, y acertó la mayor parte de las relaciones entre las piezas. Los cortes diagonales exigieron aclaración del usuario, y la secuencia de acciones también necesitó corrección."
  - "En la pared de madera, los ajustes por texto e imagen corrigieron la geometría y las conexiones, y la respuesta del usuario reordenó los pasos para mantener la estructura estable en cada etapa."
  - "Los autores informan que el enfoque no requiere especialista en robótica para generar los modelos y funciona sin modelo digital previo, lo que abriría su uso en reparación y conservación del patrimonio."
limitations: "La demostración genera y visualiza los modelos, pero ningún robot ejecutó las tareas y no hubo interacción entre persona y robot. El estudio no aporta medida de desempeño: la proporción de relaciones correctas no viene con número, y la fiabilidad dependió de supervisión humana. No se tratan la seguridad, las normas ni los efectos sobre quienes trabajan en la obra."
---
