---
title: "Sensores vestibles reconocen lo que hace el trabajador agrícola al entregar una caja al robot"
description: "Con cinco sensores de movimiento en el cuerpo y una red neuronal, los autores reconocieron seis etapas de la tarea de llevar una caja hasta un robot agrícola, con una exactitud media del 85,6%."
translationKey: anagnostis2021
topic: applications
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Human Activity Recognition through Recurrent Neural Networks for Human–Robot Interaction in Agriculture"
  authors:
    - "Athanasios Anagnostis"
    - "Lefteris Benos"
    - "Dimitrios Tsaopoulos"
    - "Aristotelis Tagarakis"
    - "Naoum Tsolakis"
    - "Dionysis Bochtis"
  year: 2021
  venue: "Applied Sciences"
  doi: "10.3390/app11052188"
  url: "https://doi.org/10.3390/app11052188"
  openAccess: true
  license: "CC BY"
whyItMatters: "Para trabajar cerca de una persona, el robot necesita saber qué está haciendo. Este estudio prueba ese reconocimiento en el campo, donde la luz varía y no es posible instalar cámaras fijas, usando sensores vestibles. El robot aquí es un vehículo de transporte agrícola, no un brazo colaborativo, pero el método interesa a cualquier aplicación en la que el robot deba seguir la actividad humana."
method: "El experimento se hizo en una finca de Grecia con 20 participantes sanos. Cada uno caminaba, levantaba una caja (vacía o con cerca del 20% de su propia masa) y la colocaba sobre uno de dos robots detenidos, con alturas de depósito de 40 y 80 cm. Cinco sensores inerciales, en el tronco y en las dos muñecas, registraron los movimientos, que se etiquetaron con apoyo de video. Se entrenó una red neuronal recurrente del tipo LSTM para clasificar seis subactividades, con los datos de cuatro participantes reservados para la prueba."
findings:
  - "Las seis subactividades son: estar de pie sin moverse, caminar sin caja, inclinarse, levantar la caja, caminar con la caja y colocarla en el robot. La exactitud media del modelo fue del 85,6%."
  - "Caminar sin caja fue la actividad mejor reconocida. Inclinarse tuvo la menor precisión (0,741), lo que los autores atribuyen a las distintas formas de levantar la caja, dejadas libres a propósito."
  - "Las confusiones más comunes fueron entre colocar la caja y caminar con la caja, y entre levantar la caja e inclinarse. Clasificar las actividades en las que la persona casi no se desplaza fue lo más difícil."
  - "Usar los tres tipos de sensor juntos dio el mejor resultado (85,7%). Por separado, el giroscopio y el acelerómetro quedaron cerca del 83% y el magnetómetro, en el 73,4%."
  - "Los autores publicaron el conjunto de datos y sitúan el reconocimiento de actividad como base para un robot que ajuste su velocidad y su distancia respecto al agricultor."
limitations: "El estudio trata solo el reconocimiento de actividad: el robot permaneció detenido, y la seguridad de la interacción, la ergonomía y la navegación quedan para trabajos posteriores. La muestra es pequeña y homogénea, de adultos sanos con una edad media de 31 años, y los autores planean repetir las pruebas con trabajadores reales. No se midieron la carga física, la fatiga ni la aceptación."
---
