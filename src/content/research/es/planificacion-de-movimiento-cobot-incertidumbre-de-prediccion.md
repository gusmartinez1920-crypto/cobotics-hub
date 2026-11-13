---
title: "Un cobot que se desvía más cuando tiene menos certeza de dónde estará el trabajador"
description: "Los autores proponen un planificador de trayectoria que usa la predicción del movimiento del trabajador y la incertidumbre de esa predicción. En 70 movimientos de cinco participantes no hubo colisión."
translationKey: kanazawa2019
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El estudio busca mantener el robot a una distancia segura del trabajador en el montaje, incluso cuando la persona se mueve de forma inesperada."
paper:
  title: "Adaptive Motion Planning for a Collaborative Robot Based on Prediction Uncertainty to Enhance Human Safety and Work Efficiency"
  authors:
    - "Akira Kanazawa"
    - "Jun Kinugawa"
    - "Kazuhiro Kosuge"
  year: 2019
  venue: "IEEE Transactions on Robotics"
  doi: "10.1109/tro.2019.2911800"
  url: "https://doi.org/10.1109/tro.2019.2911800"
whyItMatters: "Un robot que entrega piezas necesita acercarse a la persona, así que solo mantener la distancia no resuelve el problema. El estudio muestra una forma de equilibrar seguridad y tiempo de trabajo: el robot aprende el patrón del trabajador para no hacerlo esperar y se aleja más cuando el movimiento se sale del patrón."
method: "Los autores proponen un algoritmo y lo prueban en un experimento. Un modelo estadístico, actualizado durante el trabajo, predice la posición y la trayectoria del trabajador; el planificador recalcula la trayectoria del robot a cada instante, ponderando llegar al objetivo en el momento previsto, evitar la colisión y respetar límites de velocidad. La prueba usó un robot de laboratorio de dos eslabones que entrega piezas y herramientas en un puesto de montaje automotriz con tres tareas. Cinco participantes hicieron ciclos regulares de aprendizaje y después movimientos regulares e irregulares, con un total de 70 movimientos evaluados (50 regulares y 20 irregulares)."
findings:
  - "El campo de repulsión alrededor del trabajador se hace más ancho en la dirección en que la predicción de la posición es más incierta. Así el robot se desvía más justo donde sabe menos sobre lo que hará la persona."
  - "En los movimientos regulares, el tiempo de espera del trabajador por la entrega bajó con la repetición para todos los participantes en los desplazamientos largos. En un desplazamiento corto, de unos 0,4 m, la baja fue pequeña, porque el modelo sigue solo el centro del cuerpo."
  - "En los movimientos irregulares, el robot se mantuvo a unos 0,3 m del trabajador. En dos casos la distancia mínima quedó un poco por debajo de eso, y no hubo ninguna colisión."
  - "Evitar la colisión es una restricción flexible, pues el robot necesita acercarse para entregar piezas. Un coeficiente de peso define la prioridad entre llegar a tiempo y mantener la distancia: un peso mayor aumenta la distancia mínima en los casos irregulares, pero también el tiempo de espera en los regulares."
  - "Los autores reconocen que, si el trabajador sale del puesto o falla el seguimiento, el método no garantiza el resultado. En ese caso el sistema tendría que detectar la anomalía y detener el robot de forma segura."
limitations: "La prueba incluyó cinco participantes, un robot de laboratorio de dos eslabones y un único proceso de montaje, sin prueba estadística. El trabajador se representa solo por la posición del centro del cuerpo en dos dimensiones, sin brazos ni orientación. La distancia de 0,3 m proviene de una simulación preliminar, y el estudio no trata la fuerza ni la presión en caso de contacto."
---
