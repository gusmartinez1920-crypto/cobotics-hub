---
title: "Una cámara de bajo costo para que el robot desacelere cuando la persona se acerca"
description: "Los autores usan una cámara Kinect V2 para seguir el esqueleto del trabajador y ajustar la velocidad del robot según la distancia: velocidad plena por encima de 1,70 m y parada por debajo de 0,85 m."
translationKey: rosenstrauch2018
topic: safety
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El estudio propone reducir la velocidad del robot y detenerlo según la distancia hasta el trabajador, para evitar el contacto en el espacio compartido."
paper:
  title: "Human robot collaboration - using kinect v2 for ISO/TS 15066 speed and separation monitoring"
  authors:
    - "Martin J. Rosenstrauch"
    - "Tessa J. Pannen"
    - "Jörg Krüger"
  year: 2018
  venue: "Procedia CIRP"
  doi: "10.1016/j.procir.2018.01.026"
  url: "https://doi.org/10.1016/j.procir.2018.01.026"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "El monitoreo de velocidad y separación es uno de los modos colaborativos de la ISO/TS 15066 y suele depender de sensores caros. El estudio prueba una cámara de bajo costo para esa función, con la idea de llevar robots industriales pequeños ya instalados a aplicaciones colaborativas. Sirve como ejemplo didáctico de cómo funciona el modo."
method: "Es un artículo corto de congreso. El escenario es de coexistencia, sin interacción directa, con el robot accesible por un solo lado. La cámara sigue 11 puntos del cuerpo de la cadera hacia arriba, y el sistema lee las posiciones de las articulaciones del robot en su propio controlador, calcula la menor distancia entre persona y robot y ajusta la velocidad máxima. Las pruebas usaron una persona real frente a la cámara y un robot UR5 simulado."
findings:
  - "La velocidad del robot se adapta a la posición del trabajador, desde la velocidad plena hasta la parada completa. Por debajo de 0,85 m el robot se detiene; por encima de 1,70 m funciona sin restricción; entre los dos valores la velocidad varía de forma lineal."
  - "El sistema solo necesita detectar a la persona, porque las posiciones del robot vienen del controlador. Según los autores, esto evita tener que distinguir a la persona de los objetos que el robot debe tocar, algo que los sensores láser no logran hacer."
  - "El seguimiento del esqueleto funcionó a unos 15 Hz. Si se interrumpe, por ejemplo por un objeto que oculta a la persona, el sistema inicia una parada de emergencia."
  - "Los dos límites de distancia corresponden a una y a dos longitudes del brazo del robot usado y pueden ajustarse a otros robots o requisitos."
  - "Los autores dejan para trabajo futuro comparar la precisión con un sistema de captura de movimiento, considerar la dirección del movimiento y usar varias cámaras para reducir puntos ciegos."
limitations: "La prueba usó un robot simulado y no informa número de ensayos, error de distancia, retardo ni tiempo de parada. Los límites de distancia se eligieron por la longitud del brazo, y no se calcularon con la fórmula de distancia de separación de la norma. El sistema observa a una sola persona y un solo lado de aproximación."
---
