---
title: "Un gemelo digital con humano digital pasa al robot las piezas que más cargan al trabajador"
description: "Una prueba de concepto mide el cuerpo entero del trabajador, prevé retrasos en la preparación de piezas y, cuando el retraso supera un límite, transfiere al robot las piezas de mayor carga física."
translationKey: maruyama2021
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El sistema calcula la carga física de cada movimiento del trabajador y usa ese valor para elegir qué tareas pasar al robot."
paper:
  title: "Digital Twin-Driven Human Robot Collaboration Using a Digital Human"
  authors:
    - "Tsubasa Maruyama"
    - "Toshio Ueshiba"
    - "Mitsunori Tada"
    - "Haruki Toda"
    - "Yui Endo"
    - "Yukiyasu Domae"
    - "Yoshihiro Nakabo"
    - "Tatsuro Mori"
    - "Kazutsugu Suita"
  year: 2021
  venue: "Sensors"
  doi: "10.3390/s21248266"
  url: "https://doi.org/10.3390/s21248266"
whyItMatters: "Los gemelos digitales de celdas con robot suelen modelar bien la máquina y mal a la persona. Este trabajo incluye un modelo detallado del cuerpo del trabajador y calcula el esfuerzo en cada articulación, en lugar de usar índices rápidos de postura. Muestra una forma de vincular la ergonomía y la programación de la producción en tiempo real, y también lo que aún falta para llevarlo a una fábrica."
method: "Los autores desarrollaron y demostraron un sistema con tres módulos conectados por comunicación inalámbrica. El primero es un humano digital con 48 grados de libertad, ajustado al cuerpo del trabajador y alimentado por captura óptica de movimiento con 16 cámaras y 37 marcadores en la ropa; calcula el par en las articulaciones. El segundo es el modelo virtual de un robot móvil. El tercero prevé el tiempo de ciclo y reasigna piezas del trabajador al robot. El escenario fue la preparación de piezas en 40 cajas, con una demostración en vivo con un operador, en 8 ciclos de 40 piezas, y una validación con datos que imitan tres perfiles de retraso."
findings:
  - "Los autores definen el gemelo digital por cuatro propiedades: individualizado, de alta fidelidad, en tiempo real y controlable."
  - "La regla de reasignación se activa por el retraso: cuando el retraso previsto del trabajador alcanza un límite, las piezas que exigen más par del tronco o del hombro izquierdo pasan al robot, una a una, hasta que el retraso baja."
  - "En la demostración, la previsión del tiempo de ciclo erró en promedio 9 ± 11 segundos, frente a 33 ± 7 segundos del plan inicial. Con un límite de 20 segundos, el sistema transfirió al robot la pieza de mayor carga física entre las que podían reasignarse."
  - "En la validación con datos simulados, la previsión fue más precisa que el plan inicial en todas las condiciones (p < 0,01). La carga física media transferida al robot fue significativamente mayor con la restricción ergonómica que sin ella."
  - "El cálculo de la postura tarda 15 milisegundos y la evaluación ergonómica, 138 milisegundos, en una computadora portátil. El sistema funciona a entre unos 6 y 50 cuadros por segundo."
limitations: "El sistema se probó con personas que no trabajan en una fábrica, y el artículo no informa cuántas participaron. Solo la carga física entra en el modelo; los autores reconocen que la carga mental y las condiciones individuales, como el dolor lumbar, quedaron fuera. La ergonomía solo actúa después de que el trabajador se retrasa, la seguridad física no se trató, y la captura óptica con marcadores es cara y difícil de usar en una fábrica real."
---
