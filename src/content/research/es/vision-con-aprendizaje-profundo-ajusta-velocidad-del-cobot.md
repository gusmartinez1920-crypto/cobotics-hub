---
title: "Una cámara que reconoce partes del cuerpo acelera el cobot dentro de la ISO/TS 15066"
description: "Un sistema con cámara y aprendizaje profundo ajusta la velocidad del robot según la parte del cuerpo más cercana. En laboratorio, el ciclo fue más de un 15% menor que con escáner láser."
translationKey: bricher2025
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Analysis of Deep-Learning Methods in an ISO/TS 15066–Compliant Human–Robot Safety Framework"
  authors:
    - "David Bricher"
    - "Andreas Müller"
  year: 2025
  venue: "Sensors"
  doi: "10.3390/s25237136"
  url: "https://doi.org/10.3390/s25237136"
whyItMatters: "En muchas celdas colaborativas, el robot va siempre a la velocidad más baja permitida, incluso cuando la colisión es improbable, y eso alarga el ciclo. El estudio muestra, con el cálculo de la distancia de separación desglosado término a término, cuánto se puede ganar cuando el sistema sabe dónde están la cabeza, las manos y el tronco de la persona. Muestra también por qué esto aún no es un sistema de seguridad certificado."
method: "Experimento de laboratorio con un robot KUKA LBR iiwa y una cámara de color y profundidad. Los autores compararon cuatro métodos de aprendizaje profundo: reconocimiento del cuerpo, segmentación del cuerpo, estimación de pose y segmentación de partes del cuerpo. Midieron la latencia de cada método, el error de posición frente a un sistema de captura de movimiento en una sola persona y las velocidades máximas por parte del cuerpo a partir de fuerzas y presiones de contacto. La validación fue una tarea de atornillado en un bloque de motor, con diez repeticiones por método, comparada con un escáner láser y con la operación sin sistema adicional de seguridad."
findings:
  - "El ciclo medio fue de 22,78 s con segmentación de partes del cuerpo, 26,98 s con el escáner láser y 35,08 s sin sistema adicional: una reducción de hasta el 35% frente a la operación sin sistema y de más del 15% frente al escáner."
  - "La latencia pesa en la distancia de separación: va de 305 ms en la estimación de pose a 812 ms en la segmentación de partes, lo que corresponde a términos de 488 mm a 1299 mm."
  - "Los métodos que localizan partes del cuerpo tienen menos error de posición que los de cuerpo entero. Pese a su mayor latencia, la segmentación de partes tuvo el menor ciclo medio; el reconocimiento del cuerpo y la pose oscilaron más porque reaccionan mal a la oclusión."
  - "Las velocidades máximas medidas para la tarea varían según la parte del cuerpo: 50 mm/s para cráneo y frente, 100 mm/s para manos, antebrazos, brazos y tórax, y 200 mm/s para muslos."
  - "La resolución de profundidad de la cámara es el factor limitante: resuelve bien las partes del cuerpo hasta 4 m, y a 6 m el error de profundidad supera 0,5 m para algunas partes."
limitations: "Los propios autores dicen que no se trata de un sistema certificado ni listo para implantarse: faltan estudios de robustez, de fallo seguro y de certificación de seguridad funcional. El experimento usó una sola persona, una sola tarea y pocas repeticiones, sin prueba estadística formal, y trató solo el contacto cuasiestático. La ganancia se mide únicamente en tiempo de ciclo, sin ninguna medida sobre quien trabaja."
---
