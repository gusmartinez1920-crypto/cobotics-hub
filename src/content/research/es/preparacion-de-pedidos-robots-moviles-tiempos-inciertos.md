---
title: "Preparación de pedidos con robots móviles y personas cuando los tiempos son inciertos"
description: "Los autores modelan la preparación de pedidos en almacenes con robots móviles y operarios, con tiempos inciertos, y proponen un algoritmo que logró el menor tiempo total en los casos simulados más grandes."
translationKey: cai2026
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Human–Robot Collaborative Order Picking in Smart Warehouses with Fuzzy Transportation and Processing Time"
  authors:
    - "Zhiheng Cai"
    - "Ziyan Zhao"
    - "Yunuo Su"
    - "Zijie Yu"
  year: 2026
  venue: "Mathematics"
  doi: "10.3390/math14183295"
  url: "https://doi.org/10.3390/math14183295"
whyItMatters: "En los almacenes donde robots móviles llevan las estanterías hasta la persona, la planificación suele suponer tiempos fijos de transporte y de preparación, algo que rara vez se cumple en la práctica. El estudio muestra cómo planificar con tiempos inciertos. Conviene notar que aquí los robots son vehículos que cargan estanterías: el reparto de tareas es secuencial, sin espacio compartido ni contacto, por lo que el caso es de logística y no de cobot."
method: "Los autores escribieron un modelo matemático que decide de forma conjunta qué estanterías buscar, el orden de trabajo de los robots, la estación de destino y la preparación manual, con los tiempos de transporte y de preparación descritos por números difusos (mínimo, más probable y máximo). Para resolverlo, combinaron una búsqueda global adaptativa con una búsqueda local en cinco vecindarios. Probaron el algoritmo en siete casos sintéticos (6 a 50 estanterías, 2 a 4 robots, 2 estaciones, 10 a 44 pedidos), con diez ejecuciones cada uno, frente a cinco algoritmos conocidos, y aplicaron pruebas estadísticas."
findings:
  - "En el relevamiento de los autores, ningún estudio anterior trataba a la vez la selección de estanterías, la programación de los robots, la asignación de estación, la preparación manual y los tiempos inciertos."
  - "En el caso más grande, el algoritmo propuesto alcanzó un tiempo total de finalización de 109,50, entre un 5,6% y un 25,1% por debajo de los cinco algoritmos comparados. En un caso intermedio (41,91), la ventaja estuvo entre el 2,8% y el 21,9%."
  - "La prueba global indicó diferencia entre los algoritmos (p < 0,001) y el propuesto tuvo la mejor posición media. Las comparaciones por pares, tras la corrección estadística, no dieron evidencia concluyente de superioridad."
  - "En los dos casos más pequeños, quitar partes del algoritmo casi no cambió el resultado. En los más grandes, la búsqueda global fue la parte que más se echó en falta: sin ella, el tiempo del caso más grande subió de 109,50 a 123,41."
  - "Los autores señalan que los robots reducen las caminatas de los operarios, mientras las personas se ocupan de los productos variados, difíciles de automatizar, y que repartir el trabajo según la capacidad de cada estación puede equilibrar la carga entre ellas."
limitations: "El modelo es estático: no considera pedidos que llegan en tiempo real, pedidos urgentes ni fallas de robots, como reconocen los autores. Los tiempos inciertos son sintéticos, derivados de otro estudio, y los casos son pequeños (hasta 50 estanterías, 4 robots y 2 estaciones), sin validación en un almacén real. La persona entra solo como tiempo de preparación: la fatiga, la ergonomía y la carga de trabajo quedan fuera del modelo."
---
