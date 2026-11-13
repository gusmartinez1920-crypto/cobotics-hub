---
title: "Repartir las tareas según lo que cada uno hace mejor, con la ergonomía en primer lugar"
description: "Los autores proponen un procedimiento de tres etapas para repartir tareas de montaje entre operador y robot según las capacidades de cada uno, con el riesgo ergonómico como criterio de exclusión."
translationKey: ranz2017
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El método tiene como objetivo declarado mejorar la calidad del trabajo: las tareas que causarían daño progresivo al cuerpo del operador pasan al robot antes que cualquier otro criterio."
paper:
  title: "Capability-based Task Allocation in Human-robot Collaboration"
  authors:
    - "Fabian Ranz"
    - "Vera Hummel"
    - "Wilfried Sihn"
  year: 2017
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2017.04.011"
  url: "https://doi.org/10.1016/j.promfg.2017.04.011"
whyItMatters: "En una encuesta de los propios autores, decidir dónde usar la colaboración y quién hace cada tarea apareció como un obstáculo mayor que los problemas técnicos. El procedimiento ofrece una guía sencilla para esa decisión y deja clara una prioridad: lo que daña el cuerpo de la persona pasa al robot, sea cual sea el tiempo, el costo o la calidad."
method: "El estudio tiene dos partes. Primero, una encuesta en la que 34 participantes, entre ellos 15 fabricantes de robots y 14 integradores, evaluaron 17 desafíos de implantación, además de entrevistas con 5 empresas usuarias. Después, la propuesta del procedimiento: descomponer el proceso en tareas, asignar las tareas de decisión obligatoria mediante una lista de exclusión con 12 capacidades humanas y límites ergonómicos, y asignar las demás mediante indicadores de capacidad sobre un catálogo de 25 criterios. La propuesta se probó de forma cualitativa en dos casos de fábricas de aprendizaje, uno de preparación de kits y uno de montaje final."
findings:
  - "En la encuesta, el 73% de los participantes consideró grande o muy grande el desafío de identificar el puesto adecuado para la colaboración y decidir el reparto de tareas, y el 68% dijo lo mismo del diseño del puesto. Los desafíos técnicos, como el esfuerzo de reprogramación, no quedaron entre los más votados."
  - "Los autores critican los enfoques que generalizan las capacidades de \"robots\" y \"humanos\": la capacidad del robot depende del equipo instalado (sensor de fuerza, visión) y la de la persona, de su condición. Citan que la destreza cae cerca de un 30% entre los 20 y los 60 años."
  - "En el primer filtro, cuando los criterios entran en conflicto, el riesgo ergonómico pesa más que las capacidades y la tarea pasa al robot. Una tarea que causaría daño progresivo a la persona queda excluida para ella, independientemente del tiempo, el costo o la calidad."
  - "Las tareas restantes se comparan en tres dimensiones (tiempo de proceso, inversión adicional y calidad del proceso), con una nota de mejor, igual o peor para cada criterio. Los pesos, iguales al inicio, pueden ajustarse."
  - "En un ejemplo con 8 tareas, cuatro se decidieron por la lista de exclusión y cuatro por los indicadores de capacidad."
limitations: "La propuesta solo se probó en fábricas de aprendizaje, sin ningún resultado medido de tiempo, calidad o ergonomía; los propios autores dicen que todavía tiene que demostrar su practicidad en la industria. El método considera a la persona en general, no al individuo, y la ergonomía entra solo como riesgo físico: la carga mental y la seguridad no son criterios de asignación."
---
