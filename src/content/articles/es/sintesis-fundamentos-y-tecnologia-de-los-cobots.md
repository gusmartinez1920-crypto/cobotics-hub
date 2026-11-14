---
title: "Fundamentos de los cobots: lo que muestra la investigación sobre colaborar y percibir"
description: "Panorama de 19 resúmenes sobre qué hace colaborativo a un robot y qué necesita percibir de la persona: niveles de interacción, sensores, predicción, reparto de tareas e interfaces."
translationKey: synthesis-fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intro
aiAssisted: true
humanReviewed: false
translationReviewed: false
---

En los resúmenes de este tema, “colaborativo” describe un modo de trabajar, con grados que van de la coexistencia a la colaboración sobre el mismo objeto ([Aaltonen et al., 2018](/es/research/niveles-de-colaboracion-entre-trabajador-y-cobot/)). Para compartir el espacio, el robot necesita percibir dónde está la persona, qué fuerza aplica y, cada vez más, qué hará a continuación ([Robinson et al., 2023](/es/research/vision-robotica-en-interaccion-y-colaboracion-humano-robot/); [Wang et al., 2023](/es/research/interaccion-humano-robot-multimodal-vision-voz-tacto-senales/); [Du et al., 2026](/es/research/prediccion-del-comportamiento-humano-en-colaboracion-con-robots/)). Esta síntesis se apoya en 19 resúmenes, casi todos de laboratorio o de simulación.

## “Colaborativo” describe el trabajo, no solo la máquina

Un marco de cuatro niveles va de la separación física a la colaboración sobre el mismo objeto. Aplicado a dos casos industriales, mostró que la tarea principal de ninguno de ellos llegaba a la colaboración. Mostró también que dos situaciones pueden ser iguales para la seguridad y distintas para la persona ([Aaltonen et al., 2018](/es/research/niveles-de-colaboracion-entre-trabajador-y-cobot/)). Una revisión de 65 artículos encontró que evitar colisiones no basta para la comodidad del trabajador ([Simões et al., 2022](/es/research/como-disenar-puestos-de-trabajo-colaborativos-humano-robot/)), y un editorial defiende, como opinión, que colaborar exige entender situaciones y comunicarse ([Faccio & Cohen, 2023](/es/research/cobots-inteligentes-colaboracion-mas-alla-de-evitar-colisiones/)).

## ¿Qué logra percibir el robot de la persona?

En una revisión de 310 artículos sobre visión robótica, el caso más común entre las acciones colaborativas es el robot que detecta a la persona y entonces se detiene, desacelera o cambia la trayectoria ([Robinson et al., 2023](/es/research/vision-robotica-en-interaccion-y-colaboracion-humano-robot/)). Cada sensor falla a su manera: la visión sufre con la oclusión y no distingue el contacto accidental del intencional, y el audio sufre con el ruido. Una revisión de 199 artículos trata la fuerza y el par como realimentación crítica ([Wang et al., 2023](/es/research/interaccion-humano-robot-multimodal-vision-voz-tacto-senales/)).

El contacto también se trata en el control. Un robot sin sensor de fuerza estimó el contacto por la diferencia entre la posición deseada y la real y acertó el 93% de los montajes de un engranaje, frente al 19% sin optimización automática ([Roveda et al., 2021](/es/research/robot-sin-sensor-de-fuerza-aprende-montaje-por-demostracion/)). En simulación, un controlador cedió a la fuerza humana sin salir de límites de espacio móviles ([Sun et al., 2025](/es/research/control-de-tiempo-fijo-colaboracion-fisica-humano-robot/)). Ceder tiene un costo: en una prueba de teleoperación con seis personas, la baja rigidez suavizó el contacto, pero trajo errores y retrasos de seguimiento ([Si et al., 2025](/es/research/ecografia-teleoperada-con-cobot-interfaz-haptica-o-raton-3d/)).

## Predecir a la persona ahorra tiempo, pero la seguridad de la predicción sigue abierta

Una revisión de 180 artículos compara tres familias de métodos de predicción. Los basados en mecanismo son interpretables y generalizan mal; la seguridad de los basados en datos es difícil de garantizar; la fusión de los dos crece, con garantías todavía empíricas ([Du et al., 2026](/es/research/prediccion-del-comportamiento-humano-en-colaboracion-con-robots/)). Las ganancias medidas son de tiempo y vienen de simulación: un cobot eliminó en promedio 3,4 s de espera por fase en una tarea de embalaje ([Ghadirzadeh et al., 2021](/es/research/cobot-proactivo-con-aprendizaje-por-refuerzo-profundo/)), y predecir dónde deja la pieza el operador redujo el tiempo de recogida en cerca del 16% ([Sobaszek, 2026](/es/research/algoritmo-predictivo-reduce-tiempo-de-recogida-del-cobot/)).

## Repartir las tareas pesa tanto como los sensores

En una encuesta con 34 participantes, el 73% señaló como desafío grande o muy grande decidir dónde colaborar y quién hace qué. Los autores proponen enviar al robot toda tarea que causaría un daño progresivo a la persona ([Ranz et al., 2017](/es/research/asignacion-de-tareas-por-capacidades-entre-operador-y-robot/)). Una revisión de 37 estudios encontró la seguridad entre los criterios de solo 8 de los 30 enfoques analizados ([Petzoldt et al., 2023](/es/research/quien-hace-que-asignacion-de-tareas-en-montaje-con-cobots/)). En un caso numérico de 12 tareas, asignar según la distancia redujo el tiempo total en cerca del 15% ([Faccio et al., 2023](/es/research/asignacion-de-tareas-con-velocidad-variable-del-cobot/)); en una prueba con 4 personas, entregar al robot las tareas más impredecibles redujo en un 32,4% la variación de la duración ([You et al., 2026](/es/research/planificacion-de-tareas-humano-robot-esfuerzo-fisico-incertidumbre/)). Una advertencia: la conciencia situacional empeora cuando el robot decide solo la secuencia ([Simões et al., 2022](/es/research/como-disenar-puestos-de-trabajo-colaborativos-humano-robot/)).

## La interfaz tiene que informar sobre la tarea

En la industria, la pantalla táctil sigue siendo la opción comercial, y los gestos y la voz están en sus inicios, según una revisión narrativa ([Berg & Lu, 2020](/es/research/interfaces-gestos-voz-y-pantallas-para-robots-industriales/)). En un experimento con 40 estudiantes, un rostro en la pantalla del cobot no aumentó la confianza y desvió la mirada de la zona de entrega ([Onnasch & Hildebrandt, 2021](/es/research/rostro-en-el-cobot-no-aumenta-confianza-y-distrae/)). En prototipos, los pedidos en lenguaje natural tuvieron un 85% de acierto en la planificación en tres tareas de laboratorio ([Zheng et al., 2024](/es/research/robot-movil-planifica-tareas-por-lenguaje-y-realidad-mixta/)), y quienes no lograron hacer los gestos de un sistema de realidad aumentada no completaron la tarea ([Zhang & Ruttico, 2025](/es/research/colocacion-de-ladrillos-con-cobot-y-realidad-aumentada/)).

## Lo que todavía no se sabe

Casi todo viene de laboratorio, simulación o casos numéricos, con muestras de 4 a 40 personas, muchas veces estudiantes ([Onnasch & Hildebrandt, 2021](/es/research/rostro-en-el-cobot-no-aumenta-confianza-y-distrae/); [You et al., 2026](/es/research/planificacion-de-tareas-humano-robot-esfuerzo-fisico-incertidumbre/)). En la revisión sobre visión, solo el 21% de los artículos informa un experimento con personas ([Robinson et al., 2023](/es/research/vision-robotica-en-interaccion-y-colaboracion-humano-robot/)). Faltan implantaciones reales y estudios de larga duración ([Petzoldt et al., 2023](/es/research/quien-hace-que-asignacion-de-tareas-en-montaje-con-cobots/)). Y los estudios de predicción y de control no conectan sus resultados con la evaluación de riesgos ni con los límites de fuerza de las normas ([Du et al., 2026](/es/research/prediccion-del-comportamiento-humano-en-colaboracion-con-robots/); [Sun et al., 2025](/es/research/control-de-tiempo-fijo-colaboracion-fisica-humano-robot/)).

## En la práctica

- Describa la celda por espacio, actividad del robot, esfuerzo conjunto y contacto, incluidas tareas secundarias como resolver fallas ([Aaltonen et al., 2018](/es/research/niveles-de-colaboracion-entre-trabajador-y-cobot/)).
- No dependa de un solo sensor: sepa dónde fallan la cámara, el micrófono y el tacto ([Wang et al., 2023](/es/research/interaccion-humano-robot-multimodal-vision-voz-tacto-senales/)).
- Decida pronto el reparto de tareas, con la ergonomía entre los criterios, y escuche a quienes van a trabajar en el puesto ([Ranz et al., 2017](/es/research/asignacion-de-tareas-por-capacidades-entre-operador-y-robot/); [Simões et al., 2022](/es/research/como-disenar-puestos-de-trabajo-colaborativos-humano-robot/)).
- Defina primero la información que hay que intercambiar y después el modo de interacción; evite elementos de pantalla que no ayudan en la tarea ([Berg & Lu, 2020](/es/research/interfaces-gestos-voz-y-pantallas-para-robots-industriales/); [Onnasch & Hildebrandt, 2021](/es/research/rostro-en-el-cobot-no-aumenta-confianza-y-distrae/)).
- Trate las ganancias de tiempo por predicción como resultados de simulación, sin medida de seguridad ([Ghadirzadeh et al., 2021](/es/research/cobot-proactivo-con-aprendizaje-por-refuerzo-profundo/); [Sobaszek, 2026](/es/research/algoritmo-predictivo-reduce-tiempo-de-recogida-del-cobot/)).
