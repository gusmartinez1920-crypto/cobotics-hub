---
title: "Repartir las tareas según la distancia mantiene al cobot rápido por más tiempo"
description: "Un modelo matemático reparte las tareas entre operador y cobot y solo reduce la velocidad del robot cuando ambos trabajan cerca. En un caso simulado de 12 tareas, el tiempo total bajó cerca de un 15%."
translationKey: faccio2023b
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Task allocation model for human-robot collaboration with variable cobot speed"
  authors:
    - "Maurizio Faccio"
    - "Irene Granata"
    - "Riccardo Minto"
  year: 2023
  venue: "Journal of Intelligent Manufacturing"
  doi: "10.1007/s10845-023-02073-9"
  url: "https://doi.org/10.1007/s10845-023-02073-9"
whyItMatters: "En muchas celdas el cobot funciona siempre despacio, muy por debajo de lo que puede, por razones de seguridad. El estudio muestra que el orden y la posición de las tareas pueden recuperar parte de esa productividad sin dispositivos adicionales, y da un ejemplo numérico del cálculo de la distancia de separación basado en la ISO/TS 15066."
method: "Los autores formularon un modelo no lineal de asignación de tareas para una estación con un operador y un cobot que comparten el espacio, con el objetivo de minimizar el tiempo total de finalización. El tiempo de la tarea del cobot aumenta cada vez que ocurre al mismo tiempo que una tarea del operador a menos de la distancia de seguridad. Probaron el modelo en un caso numérico de 12 tareas, con una distancia de seguridad de 80 cm, y lo compararon con el modelo sin la restricción, variando también el número de tareas (de 9 a 20) y la distancia de seguridad (de 10 a 150 cm)."
findings:
  - "En la revisión de 20 estudios hecha por los autores, la asignación de tareas y la seguridad no aparecen juntas: los modelos de asignación tratan al cobot como seguro por naturaleza, y las soluciones de seguridad dependen de dispositivos que reducen la flexibilidad de la celda."
  - "En el caso de 12 tareas, el tiempo total de finalización bajó cerca de un 15% respecto al modelo sin la restricción de seguridad."
  - "El tiempo en que operador y cobot están más cerca que la distancia de seguridad bajó de 19 minutos (50% del tiempo total) a 6 minutos (18%). El modelo no reduce el número de veces en que las tareas quedan cerca, sino el tiempo sumado en esa condición."
  - "La ventaja crece con el número de tareas: del 3% con 9 tareas a casi el 18% con 20. Por encima de 20 tareas, el programa de optimización no encontró solución en tiempo limitado, y los autores sugieren usar una heurística."
  - "Los autores encontraron una distancia de seguridad óptima, cercana a 60 cm, que maximiza la ganancia. Como esa distancia depende de la velocidad del cobot, el resultado permite elegir la velocidad más ventajosa."
limitations: "La validación es solo numérica, en un caso sintético, sin cobot real ni personas. El modelo supone tiempos fijos y tareas sin orden obligatorio, y trata la seguridad únicamente como distancia y velocidad: la ergonomía, la carga mental y la seguridad percibida por el operador quedan fuera."
---
