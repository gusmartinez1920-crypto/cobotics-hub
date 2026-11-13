---
title: "Un gemelo digital acompaña una celda con cobot del diseño a la operación, en un caso real de montaje"
description: "En un caso de montaje de baterías en Dinamarca, un gemelo digital sirvió para diseñar, programar y ajustar una celda con cobot UR5. En 30 montajes, registró 14 colisiones entre robot y persona."
translationKey: malik2021
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 9
    why: "El caso muestra cómo una empresa de montaje usa un gemelo digital para diseñar, poner en marcha y ajustar una celda con cobot a lo largo del ciclo de vida."
paper:
  title: "Digital twins for collaborative robots: A case study in human-robot interaction"
  authors:
    - "Ali Ahmad Malik"
    - "Alexander Brem"
  year: 2021
  venue: "Robotics and Computer-Integrated Manufacturing"
  doi: "10.1016/j.rcim.2020.102092"
  url: "https://doi.org/10.1016/j.rcim.2020.102092"
whyItMatters: "Los modelos de simulación suelen abandonarse cuando la celda empieza a producir. Este caso muestra, paso a paso, cómo mantener vivo el modelo: del layout al programa del robot y a los datos de operación que vuelven para corregir el diseño. Es una guía concreta para quienes quieren montar el gemelo digital de una celda colaborativa."
method: "Es un estudio de caso único con demostrador físico. Los autores primero proponen un modelo conceptual: gemelo digital y gemelo físico que evolucionan juntos, un ciclo de evaluación en siete pasos y cinco formas del gemelo según la fase (diseño, desarrollo, puesta en marcha, operación y mantenimiento). Después aplican el modelo al montaje de un paquete de baterías con ocho tareas, que antes hacían dos operadores; cuatro tareas pasaron al robot. El gemelo se construyó en un software de simulación con un cobot UR5, un maniquí digital y sensores virtuales; el programa del robot se generó en el modelo y se transfirió al robot real, que envió datos a una nube durante 30 montajes."
findings:
  - "Los autores sostienen que el gemelo digital debe nacer ya en la fase de ideas y evolucionar en paralelo al sistema físico. Debe servir a todo el ciclo de vida, y no solo al diseño."
  - "En la fase de diseño, el modelo permitió probar alcance, colisiones y postura. El volumen barrido por el robot orientó un layout con la mínima actividad humana en esa zona."
  - "Conectar el robot real, colocado en un espacio vacío, con el modelo virtual con los equipos y la persona virtual permitió encontrar colisiones y ajustar el layout con seguridad antes de montar la celda."
  - "En 30 montajes, con un ciclo de unos 87 segundos, robot y persona chocaron 14 veces, y el robot esperó al operador más de 20 segundos en 8 ocasiones. Con esos datos, el gemelo estimó 326 montajes por turno de 8 horas."
  - "Los datos llevaron a reubicar los dispositivos de fijación y a crear una pared virtual que limita el avance del robot. Los autores advierten que no vale la pena modelarlo todo: cada dato adicional tiene un costo y solo compensa si genera valor."
limitations: "Es un caso único, sin estudio de largo plazo y sin considerar diferencias culturales, como reconocen los propios autores. La persona entra en el modelo como maniquí y trayectoria captada por cámara; no se midieron la fatiga, el estrés ni la carga biomecánica. Las colisiones se tratan como pérdida de productividad, sin análisis de riesgos ni referencia a límites de contacto."
---
