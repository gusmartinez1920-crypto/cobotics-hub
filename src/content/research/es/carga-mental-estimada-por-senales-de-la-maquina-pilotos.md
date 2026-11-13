---
title: "Los datos de la máquina revelan la carga mental del operador mejor que las señales del cuerpo"
description: "Con pilotos de helicóptero en simulador, un modelo de aprendizaje automático estimó la carga mental. Los datos de los mandos y de la aeronave la predijeron mejor que las señales fisiológicas."
translationKey: roques2025
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Continuous Assessment of Mental Workload During Complex Human–Machine Interaction: Inferring Cognitive State from Signals External to the Operator"
  authors:
    - "Axel Roques"
    - "Dimitri Keriven Serpollet"
    - "Alice Nicolaï"
    - "Stéphane Buffat"
    - "Yannick James"
    - "Nicolas Vayatis"
    - "Ioannis Bargiotas"
    - "Pierre-Paul Vidal"
  year: 2025
  venue: "Sensors"
  doi: "10.3390/s25123624"
  url: "https://doi.org/10.3390/s25123624"
whyItMatters: "El estudio trata del pilotaje de helicópteros, no de robots: el vínculo con los cobots lo pone el lector, no el estudio. La idea que interesa es que el estado mental de quien opera una máquina compleja puede estimarse por la forma en que la persona actúa sobre los mandos, sin sensores sujetos al cuerpo. Para quien piensa en monitorear la carga mental de los operadores con datos conectados, es un argumento a favor de mirar primero lo que la propia máquina ya registra."
method: "Nueve pilotos profesionales de helicóptero volaron dos misiones en un simulador de vuelo completo: una de reconocimiento y una de rescate con mal tiempo y fallas, pensada para elevar la carga mental. Los datos de dos pilotos se excluyeron por ruido en los sensores. Los autores calcularon 76 indicadores en tres grupos (fisiología del piloto, estado de la máquina y acciones sobre los mandos) y entrenaron un modelo sencillo de aprendizaje automático para separar carga alta de carga baja. La referencia principal fue la nota de 0 a 100 que el propio piloto decía en voz alta en momentos clave."
findings:
  - "Con los 76 indicadores, el modelo alcanzó un área bajo la curva ROC de 0,836, medida de acierto en la que 0,5 equivale al azar y 1 al acierto total. El rendimiento varió bastante de un piloto a otro."
  - "Los indicadores más usados por el modelo miden la interacción con los mandos y el movimiento de la aeronave, como la variación del desplazamiento y de la fuerza en los pedales y en la palanca. La frecuencia cardíaca media fue el único indicador fisiológico entre los más usados."
  - "Por sí solas, las señales fisiológicas dieron 0,699, los datos del estado de la máquina 0,777 y los de las acciones sobre los mandos 0,763. Ningún grupo aislado igualó al conjunto completo."
  - "Cuando la referencia fue el cuestionario NASA-TLX respondido después del vuelo, el rendimiento bajó a 0,733. La estimación hecha por pilotos instructores, que no volaron los escenarios, anticipó mal la carga vivida por los pilotos (0,622)."
  - "Los autores plantean la hipótesis de que la cadena de mando entre piloto y máquina filtra el ruido de las señales del cuerpo, lo que haría menos necesario el registro fisiológico, que consideran problemático desde los puntos de vista práctico y ético."
limitations: "La muestra es pequeña para el aprendizaje automático (siete pilotos con datos válidos, todos hombres) y el entorno es un simulador de helicóptero, no una fábrica. Los autores reconocen mediciones ruidosas, autoevaluaciones frecuentes que perturban la tarea y poca comparación con otros algoritmos; la transferencia a operadores de planta no se ha demostrado."
---
