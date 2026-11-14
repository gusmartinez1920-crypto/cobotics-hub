---
title: "Un cobot UR3 que frena, pide confirmación o se detiene según la fatiga del operador"
description: "Un sistema abierto en ROS 2 controla un cobot UR3 con gestos de la mano y reduce su velocidad según un índice de fatiga del operador. Es un estudio de viabilidad con un único operador."
translationKey: goonetilleke2026
topic: industry-5-0
pillars: [cobot, twin, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El sistema ajusta la velocidad del cobot a la fatiga estimada del operador, un factor de seguridad que las normas actuales tratan como constante."
paper:
  title: "Predictive fatigue-aware human-robot collaboration: a real-time, open-source ROS 2 instantiation of a three-module human-centric digital twin framework on a standard cobot"
  authors:
    - "Ranidu P. Goonetilleke"
    - "Azfar Khalid"
  year: 2026
  venue: "Frontiers in Robotics and AI"
  doi: "10.3389/frobt.2026.1897261"
  url: "https://doi.org/10.3389/frobt.2026.1897261"
  openAccess: true
  license: "CC BY"
whyItMatters: "Las normas de seguridad para robots tratan la capacidad del operador como constante, aunque el cansancio cambia el tiempo de reacción y la precisión. Este trabajo muestra, con código abierto y una computadora común sin tarjeta gráfica, cómo llevar el estado del operador al control del cobot. Sirve de punto de partida para quienes quieren probar gemelos digitales centrados en el humano en un robot de banco."
method: "Los autores implementaron el sistema en un cobot UR3 con pinza, una cámara web suspendida y gafas de seguimiento ocular, y probaron el software en un gemelo simulado antes de cada sesión con el robot real. El sistema tiene tres módulos: percepción (puntos de la mano y datos de los ojos), razonamiento (una máquina de estados y un índice de fatiga que combina parpadeos, tiempo con los ojos cerrados y temblor de la mano) y movimiento. El clasificador de gestos se entrenó con 2.600 muestras de un solo operador, el primer autor. Como las gafas fallaron el día de los ensayos, los estados de fatiga y de estrés se activaron manualmente desde el teclado, en modo simulado."
findings:
  - "El robot responde en cuatro niveles de fatiga: velocidad plena, velocidad reducida, movimiento solo tras confirmación por gesto y bloqueo. La velocidad ordenada baja al 70%, al 40% y al 15% de la nominal en los tres niveles por encima del descansado."
  - "El clasificador de gestos acertó el 99,62% de los casos de prueba (518 de 520), con datos de un único operador."
  - "La latencia del reconocimiento tuvo una mediana de 64 a 65 milisegundos, y los autores estiman un techo de unos 830 milisegundos entre el gesto y el movimiento del robot, por debajo de la meta de 1 segundo."
  - "Variar en un 20% los pesos del índice de fatiga cambia la clasificación de solo el 3% al 6% de los puntos probados. La frontera entre fatiga moderada y severa, la más crítica para la seguridad, fue la más estable."
  - "Los autores advierten que la parada por gesto y la limitación del espacio de trabajo son comportamientos de investigación, sin certificación. La protección contra el contacto sigue a cargo de la detección de colisiones del propio UR3."
limitations: "El sistema se probó con un único operador, el propio primer autor, sin participantes externos. La detección de fatiga y de estrés no se validó con datos reales de los ojos, porque las gafas fallaron y esos estados se activaron a mano; los pesos y umbrales del índice son fijos, sin calibración por persona. No se midió el error de la predicción de intención, y el estudio con 30 o más participantes queda para trabajo futuro."
---
