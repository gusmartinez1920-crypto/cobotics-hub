---
title: "Prueba de intrusión en un cobot: fallas simples de software pueden volverse riesgo físico"
description: "Una prueba de intrusión en un cobot Franka Emika Panda encontró fallas en su aplicación web de control, como apagar el robot sin autenticación y sesiones que nunca caducan. El fabricante lanzó un nuevo firmware."
translationKey: hollerer2021
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
    why: "El estudio muestra cómo una falla de seguridad de la información en un cobot conectado a la red puede convertirse en un riesgo de lesión para el trabajador."
paper:
  title: "Cobot attack: a security assessment exemplified by a specific collaborative robot"
  authors:
    - "Siegfried Hollerer"
    - "Clara Fischer"
    - "Bernhard Brenner"
    - "Maximilian Papa"
    - "Sebastian Schlund"
    - "Wolfgang Kastner"
    - "Joachim Fabini"
    - "Tanja Zseby"
  year: 2021
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2021.07.029"
  url: "https://doi.org/10.1016/j.promfg.2021.07.029"
  openAccess: true
  license: "CC BY"
whyItMatters: "Un cobot conectado a la red de la fábrica deja de ser un equipo aislado. Quien cambia a distancia el movimiento del brazo o desactiva la detección de colisiones crea un peligro para la persona que está junto al robot. El estudio muestra que la seguridad de la información debe entrar en la evaluación de seguridad de la celda."
method: "Es un estudio de caso con un único robot, un Panda con un firmware específico, conectado por su controlador a una red de planta. Los autores trazaron las superficies de ataque físicas y digitales y probaron solo las digitales: la aplicación web del robot, los servicios y la red. La prueba siguió metodologías abiertas de pruebas de seguridad, con un escaneo automático seguido de ataques manuales."
findings:
  - "Un ataque digital puede tener consecuencias físicas. Alterar la posición o la configuración de las articulaciones puede llevar al robot a golpear la cabeza del trabajador, un movimiento inesperado de la pinza puede atrapar un dedo, y desactivar la detección de colisiones puede causar una contusión o una fractura."
  - "La aplicación web permite apagar el cobot sin autenticación. Una computadora comprometida en la red de la fábrica puede así detener la producción."
  - "Las sesiones de inicio no se invalidan ni al salir ni al reiniciar el robot, lo que permite descargar y alterar programas y manipular cuentas. Además, solo se pueden crear usuarios con privilegios de administrador, de modo que cualquier cuenta comprometida da control total."
  - "La mayor parte de los problemas se encontró manualmente, sin que las herramientas automáticas los señalaran. Los autores concluyen que no se debe confiar ciegamente en esas herramientas."
  - "Hay un conflicto entre los dos tipos de seguridad: la norma de parada de emergencia exige que esté siempre disponible, y exigir autenticación para apagar el robot contradice ese requisito. Los autores sugieren restringir el acceso al cobot mediante una red privada (VPN)."
limitations: "La prueba cubre un único modelo de cobot y una única versión de firmware, y solo las superficies digitales; no hubo ataque físico. El estudio describe escenarios de daño al trabajador, pero no mide la fuerza ni la presión de una colisión provocada. La solución por VPN se sugiere, no se prueba."
---
