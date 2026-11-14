---
title: "Ecografía teleoperada con cobot: la interfaz háptica rinde más, pero cansa más"
description: "El estudio comparó dos interfaces para teleoperar un cobot en un examen de ecografía. El dispositivo háptico dio menos error y menos tiempo que el ratón 3D, pero exigió más esfuerzo."
translationKey: si2025
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Design and Quantitative Assessment of Teleoperation-Based Human–Robot Collaboration Method for Robot-Assisted Sonography"
  authors:
    - "Weiyong Si"
    - "Ning Wang"
    - "Chenguang Yang"
  year: 2025
  venue: "IEEE Transactions on Automation Science and Engineering"
  doi: "10.1109/tase.2024.3350524"
  url: "https://doi.org/10.1109/tase.2024.3350524"
  openAccess: true
whyItMatters: "Elegir la interfaz de teleoperación suele ser una decisión de costo, sin datos de uso. Este estudio propone un conjunto de medidas objetivas y subjetivas para comparar interfaces y muestra una tensión común en la robótica colaborativa: la opción de mejor desempeño puede ser la que más carga al operador."
method: "Los autores montaron un sistema de teleoperación en el que el operador maneja un cobot Franka Emika Panda con una sonda de ecografía, usando un dispositivo háptico (Touch X) o un ratón 3D de bajo costo. El robot usa control de impedancia, que lo vuelve complaciente en el contacto. Seis personas exploraron un simulador de entrenamiento procurando mantener 10 N de fuerza de contacto. Se midieron la carga de trabajo percibida (cuestionario NASA-TLX), los tiempos de aprendizaje y de ejecución, el error de fuerza, la calidad de la imagen y la fatiga muscular por electromiografía."
findings:
  - "Con el dispositivo háptico el error de fuerza fue de 3,8 N, frente a 7,4 N con el ratón 3D, y el tiempo medio de la tarea fue de 53 s frente a 84 s."
  - "El dispositivo háptico también tuvo menor error de orientación de la sonda y menos ruido en la imagen. En cambio, lleva más tiempo aprenderlo."
  - "El índice de fatiga muscular fue mayor con el dispositivo háptico (89,34 frente a 76,23). En el cuestionario, la demanda mental media fue casi el doble de la del ratón 3D (13,4 frente a 6,8)."
  - "La baja rigidez del control hace más suave el contacto con la persona, pero causa errores y retrasos en el seguimiento de la posición y la orientación. Los autores lo tratan como un límite propio de este tipo de control."
  - "Los autores concluyen que el dispositivo háptico supera al ratón 3D en todo, salvo en la fatiga muscular, y proponen control compartido y aprendizaje automático para aliviar al operador."
limitations: "La muestra tiene seis participantes, las pruebas se hicieron en un simulador de entrenamiento y no en pacientes, y no hay prueba estadística de las diferencias. El estudio no analiza límites de fuerza para la seguridad del paciente."
---
