---
title: "Los cobots que se adaptan al cuerpo del operador avanzaron; a la mente, todavía poco"
description: "Una revisión narrativa reúne métodos, sensores y sistemas en los que el cobot ajusta su comportamiento para mejorar la ergonomía física y cognitiva del trabajador, y señala lo que falta."
translationKey: lorenzini2023
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "La revisión trata de cómo el cobot puede reducir la sobrecarga física y mental del trabajador, ligada a dolores musculoesqueléticos y estrés."
paper:
  title: "Ergonomic human-robot collaboration in industry: A review"
  authors:
    - "Marta Lorenzini"
    - "Marta Lagomarsino"
    - "Luca Fortini"
    - "Soheil Gholami"
    - "Arash Ajoudani"
  year: 2023
  venue: "Frontiers in Robotics and AI"
  doi: "10.3389/frobt.2022.813907"
  url: "https://doi.org/10.3389/frobt.2022.813907"
whyItMatters: "Para quien diseña una celda colaborativa, el texto funciona como una guía de lo que existe para evaluar postura, esfuerzo y carga mental, y de qué sensores sirven en la planta. Muestra dónde la investigación está madura, que es la postura, y dónde todavía falta base, que es la carga cognitiva. También recuerda que monitorear al trabajador plantea cuestiones de costo y de privacidad."
method: "Revisión narrativa con búsqueda por palabras clave en Google Scholar y Scopus. Los trabajos sobre colaboración humano-robot ergonómica abarcan de 2011 a agosto de 2022; las herramientas de evaluación ergonómica se recopilaron desde los primeros informes del área. La teleoperación y los exoesqueletos quedaron fuera, y el foco es el puesto de trabajo, no la organización del trabajo. El artículo no informa cuántos estudios se incluyeron."
findings:
  - "La revisión señala que los métodos de observación con planilla, como RULA y REBA, tienen poca precisión, varían según el evaluador y consideran poco la dinámica de la tarea. Las mediciones directas, como los modelos musculoesqueléticos y la electromiografía, se quedaron casi solo en el laboratorio."
  - "Para uso industrial, los sensores deben medir durante la tarea, no estorbar al trabajador y tener calidad. La captura óptica con marcadores es precisa, pero cara y poco práctica; sin marcadores pierde precisión; los sensores inerciales acumulan error con el tiempo."
  - "En la ergonomía física, REBA es el método más usado en los sistemas revisados, seguido de RULA: el robot reposiciona la pieza o redistribuye subtareas para llevar a la persona a la postura de menor riesgo. Otros trabajos hacen que el robot se adapte cuando detecta el inicio de la fatiga."
  - "En la ergonomía cognitiva, la revisión encontró solo siete trabajos que intentan evaluar la demanda mental durante la tarea y aliviar la presión, por ejemplo ajustando el ritmo del cobot a partir de señales del corazón."
  - "Los autores concluyen que no hay método ni métricas aceptados para la carga cognitiva, y que los métodos posturales, aunque consolidados, tratan solo del movimiento. Señalan las cámaras y los sensores sin contacto, con protección de la privacidad, como dirección de investigación."
limitations: "Es una revisión narrativa, sin recuento de artículos ni flujo de selección, y los resultados que reúne provienen casi todos de experimentos de laboratorio, no de fábricas con trabajadores reales. La organización del trabajo, como los turnos y la distribución de recursos, queda fuera del análisis."
---
