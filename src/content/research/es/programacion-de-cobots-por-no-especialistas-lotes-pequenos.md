---
title: "Cobot programado en planta por personas no especialistas, y la cuenta lote a lote"
description: "Los autores proponen un método en que operadores sin experiencia robótica completan y corrigen el programa del cobot, y una cuenta de cuándo compensa el lote. En un piloto, la aplicación quedó lista en menos de 10 min."
translationKey: giberti2022
topic: implementation
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 9
    why: "El estudio aborda dos barreras para la adopción de cobots en la producción en lotes pequeños: la programación difícil y la justificación de la inversión."
paper:
  title: "A Methodology for Flexible Implementation of Collaborative Robots in Smart Manufacturing Systems"
  authors:
    - "Hermes Giberti"
    - "Tommaso Abbattista"
    - "Marco Carnevale"
    - "Luca Giagu"
    - "Fabio Cristini"
  year: 2022
  venue: "Robotics"
  doi: "10.3390/robotics11010009"
  url: "https://doi.org/10.3390/robotics11010009"
whyItMatters: "La programación compleja se señala como una de las principales barreras para la difusión de los cobots, sobre todo en lotes pequeños y variados. El estudio muestra una forma de repartir el trabajo entre especialistas, ingeniería de procesos y operadores, para que el cobot cambie de puesto con frecuencia. También ofrece una fórmula sencilla para decidir a partir de qué tamaño de lote conviene usar el robot."
method: "Es una propuesta de método probada en un caso piloto industrial. Especialistas en robótica preparan bibliotecas de habilidades listas, la ingeniería de procesos arma la secuencia de la tarea, y el operador introduce parámetros y corrige errores con ayuda de una interfaz gráfica. La prueba se hizo en una fábrica de ABB en la zona de Milán, en una tarea de tomar y colocar placas electrónicas con un cobot de dos brazos, con dos usuarios no especialistas. El análisis económico abarcó seis procesos del mismo departamento, con simulación de la demanda a partir de datos históricos."
findings:
  - "Los dos usuarios enseñaron y corrigieron cada una de las cuatro etapas de la tarea en aproximadamente 1 min 40 s a 2 min 30 s, en el promedio del segundo al cuarto intento. El primer intento fue cerca de un 25% más largo."
  - "Los autores informan que la aplicación completa se creó en menos de 10 minutos, con un tiempo de ciclo de 37 s por pieza. Los resultados de los dos usuarios no difirieron de forma sistemática, aunque solo uno tenía nociones de programación de robots."
  - "El programa quedó menos optimizado en trayectoria y tiempo de ciclo que uno hecho por un especialista. Los autores consideran más importante la flexibilidad cuando el robot cambia de puesto continuamente."
  - "El método incluye el cálculo de un lote umbral, por encima del cual el tiempo de preparación del robot compensa el trabajo manual. Uno de los seis procesos simulados quedó por debajo: lote medio de 50 piezas frente a un umbral de 56."
  - "Para una inversión de unos 50 000 euros, la simulación estimó un ahorro de 656 horas al año, o 19 688 euros al año, y un retorno en unos 2,5 años."
limitations: "La prueba incluyó solo dos usuarios, cuatro intentos y una tarea simple de tomar y colocar, sin análisis estadístico. El estudio no trata la evaluación de riesgos de la aplicación ni mide la carga de trabajo o la aceptación del operador, y la calibración de los puestos en cada cambio quedó fuera del trabajo. La cuenta económica considera solo las horas de trabajo ahorradas, y los datos de la empresa tienen acceso restringido."
---
