---
title: "Un planificador con aprendizaje por refuerzo hace que el cobot asuma las tareas más fatigosas"
description: "Un planificador de tareas estima el esfuerzo muscular del operador con sensores en el cuerpo y pasa al cobot las etapas más fatigosas. En una prueba con 8 personas, el esfuerzo percibido bajó de 4,56 a 2,31."
translationKey: you2025
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El método distribuye las tareas de montaje para reducir el esfuerzo físico del operador, vinculado a trastornos musculoesqueléticos en el trabajo."
paper:
  title: "Towards human-centric manufacturing: A reinforcement learning method for physical exertion alleviation in HRCA"
  authors:
    - "Yingchao You"
    - "Ze Ji"
  year: 2025
  venue: "Robotics and Computer-Integrated Manufacturing"
  doi: "10.1016/j.rcim.2025.103025"
  url: "https://doi.org/10.1016/j.rcim.2025.103025"
  openAccess: true
  license: "CC BY"
whyItMatters: "El reparto de tareas entre persona y cobot suele definirse por el tiempo de ciclo, no por el cansancio de quien trabaja. Este estudio muestra un camino para que el robot decida, durante el montaje, qué asumir a partir de una estimación del esfuerzo físico, sin imponer una secuencia fija al operador. Interesa a quienes investigan la asignación dinámica de tareas y la ergonomía en celdas colaborativas."
method: "Los autores modelaron el montaje como un juego por turnos entre persona y robot y entrenaron una política de aprendizaje por refuerzo cuya recompensa penaliza el aumento del esfuerzo muscular. El esfuerzo proviene de un modelo musculoesquelético del miembro superior, alimentado por sensores inerciales en el cuerpo y acelerado por una red neuronal. Una máscara bloquea las acciones fuera del orden de montaje o que superan la capacidad de la pinza. La validación tuvo dos partes: una simulación con dos productos (una computadora de escritorio de 9 piezas y una bomba de 36 piezas), comparada con otros siete algoritmos, y un montaje real de la computadora con un cobot KUKA LBR iiwa y 8 participantes, que hicieron cinco montajes con la política entrenada y cinco con una política aleatoria."
findings:
  - "En la simulación, el método propuesto obtuvo la mejor recompensa en los dos productos y en todos los números de ciclos probados, y convergió más rápido que los siete algoritmos de comparación."
  - "Sin la máscara de acciones, la política produjo en promedio más de cuatro acciones inválidas ya en el montaje de una unidad (4,18 en la computadora y 4,88 en la bomba). Con la máscara, ninguna. Los autores consideran inaceptables las acciones inválidas en una línea con cobots, porque causan defectos o riesgo."
  - "La decisión tarda cerca de 0,0007 segundos, con modelos de poco más de 50 mil parámetros, lo que permite un uso casi en tiempo real."
  - "En el experimento real, el esfuerzo percibido en la escala de Borg modificada bajó de 4,56 con la política aleatoria a 2,31 con la política entrenada (p = 0,0123). El índice de esfuerzo calculado por el modelo bajó de 0,37 a 0,32 (p = 0,0456)."
  - "Con la política entrenada, el robot montó la tarjeta gráfica, el disipador y la fuente; la persona se encargó de la placa base, el procesador, la memoria, el disco y la tapa, en parte porque la pinza no puede tomar la placa base ni la tapa."
limitations: "La prueba real se hizo en laboratorio, con 8 participantes jóvenes y cinco montajes por condición, sin fábrica ni jornadas largas. El planificador optimiza solo el esfuerzo físico, sin considerar el tiempo de ciclo ni la seguridad, y el modelo de esfuerzo cubre únicamente el lado derecho del tronco superior e ignora las fuerzas de contacto del montaje. En la simulación, el esfuerzo muscular se representó con valores aleatorios, no con movimiento humano real."
---
