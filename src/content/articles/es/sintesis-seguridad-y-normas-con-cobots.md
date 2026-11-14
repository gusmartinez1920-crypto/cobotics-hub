---
title: "Seguridad y normas con cobots: lo que muestra la investigación"
description: "Panorama de 20 estudios sobre seguridad en la colaboración humano-robot: la protección viene de evaluar el riesgo de toda la aplicación, y casi todo se ha probado solo en laboratorio."
translationKey: synthesis-safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intro
aiAssisted: true
humanReviewed: false
translationReviewed: false
---

En los 20 resúmenes de esta síntesis, ningún dispositivo protege por sí solo a quien comparte el puesto con un robot. La protección viene de la evaluación de riesgos de toda la aplicación: robot, herramienta, distribución y persona. Esa decisión queda en manos de proyectistas e integradores ([Chemweno et al., 2020](/es/research/iso-ts-15066-salvaguardas-y-evaluacion-de-riesgos/); [Segura et al., 2022](/es/research/mapa-de-normas-de-seguridad-para-sistemas-colaborativos/)). Los resúmenes no discuten la responsabilidad legal por un accidente.

## La seguridad es de la aplicación, no del robot

La edición de 2025 de la ISO 10218, norma de base para robots industriales, deja de usar el término robot colaborativo: la colaboración pasa a ser una propiedad de la aplicación ([Hartmann et al., 2026](/es/research/iso-10218-edicion-2025-que-cambio-respecto-a-2011/)). El cobot sale de fábrica con medidas de seguridad, pero esa condición cambia cuando recibe una pinza y entra en un puesto ([Gualtieri et al., 2020](/es/research/directrices-de-diseno-puesto-de-montaje-colaborativo/)).

Una revisión relata, sin datos, que las organizaciones evalúan el cobot con los mismos procedimientos de los robots convencionales ([Segura et al., 2022](/es/research/mapa-de-normas-de-seguridad-para-sistemas-colaborativos/)). Una revisión narrativa encontró que los límites de velocidad, fuerza y parada rara vez se vinculan con la evaluación de riesgos ([Chemweno et al., 2020](/es/research/iso-ts-15066-salvaguardas-y-evaluacion-de-riesgos/)). Otra, de 58 artículos, encontró que las empresas usan programas comerciales que rara vez cubren todo lo que exigen las normas ([Giallanza et al., 2024](/es/research/seguridad-y-salud-laboral-en-la-colaboracion-humano-robot/)).

## El riesgo no termina en la colisión

Una revisión de 32 documentos reunió 254 factores de riesgo en cinco clases. Tecnología concentra el 44% y humano, el 27%; en la clase humano, más de la mitad es psicosocial. El conteo no dice qué factores son más graves ([Berx et al., 2022](/es/research/factores-de-riesgo-colaboracion-humano-robot-cinco-clases/)). Para 13 especialistas, el trabajador responde por el 44,9% del peso en la prevención de accidentes y los sistemas robóticos, por el 21,3%; son opiniones, no datos de accidentes ([Lee & Lim, 2025](/es/research/evaluacion-de-riesgo-no-fisico-en-el-trabajo-con-cobots/)).

Una prueba de intrusión en un único modelo de cobot logró apagar el robot sin autenticación; los autores describen cómo desactivar la detección de colisión crearía un peligro físico ([Hollerer et al., 2021](/es/research/prueba-de-intrusion-en-cobot-ciberseguridad-y-seguridad-fisica/)). La edición de 2025 de la ISO 10218 convierte la ciberseguridad en un requisito ([Hartmann et al., 2026](/es/research/iso-10218-edicion-2025-que-cambio-respecto-a-2011/)).

## ¿Se puede prever el contacto antes de montar la celda?

En el modo de limitación de potencia y fuerza, el contacto se permite dentro de límites biomecánicos, pero la carga solo se mide con la aplicación montada ([Schlotzhauer et al., 2022](/es/research/estimar-carga-de-contacto-del-cobot-en-la-planificacion/)). En un único robot, a 400 mm/s, la fuerza del contacto transitorio cambió casi 250 N entre dos posturas del brazo. El complemento de simulación de los mismos autores no se comparó en números con las mediciones ([Dombrowski et al., 2018](/es/research/simulacion-de-colision-cobot-limitacion-de-potencia-y-fuerza/)).

Un verificador automático señaló, en una fábrica real, 60 ocurrencias de 27 peligros de contacto, el 45% derivado de usos no previstos o de errores del operador ([Vicentini et al., 2020](/es/research/verificacion-formal-evaluacion-de-riesgos-celdas-colaborativas/)). En un caso de laboratorio, tres ingenieros sin formación en seguridad usaron directrices y bajaron el índice de riesgo del peor caso de 12 a 6. La mayor mejora vino de separar a la persona y al robot ([Gualtieri et al., 2022](/es/research/directrices-de-seguridad-montaje-colaborativo-validacion/)).

## Cómo proteger sin detener el robot en cada acercamiento

El monitoreo convencional detiene el robot cada vez que la persona se acerca. Un índice de riesgo en tiempo real, que hace que el robot desacelere o se desvíe, reaccionó en 159 ms en simulación, frente a 147 ms del convencional ([Liu et al., 2020](/es/research/evaluacion-dinamica-de-riesgo-y-respuesta-activa-del-robot/)). Con una cámara que reconoce partes del cuerpo, el ciclo medio de una tarea de laboratorio fue de 22,78 s, frente a 26,98 s con escáner láser; no es un sistema certificado ([Bricher & Müller, 2025](/es/research/vision-con-aprendizaje-profundo-ajusta-velocidad-del-cobot/)). Un planificador que se desvía más cuando la predicción del movimiento es incierta no tuvo colisiones en 70 movimientos de cinco participantes ([Kanazawa et al., 2019](/es/research/planificacion-de-movimiento-cobot-incertidumbre-de-prediccion/)).

En realidad virtual, con estudiantes, ni reducir la velocidad ni retroceder se mostró claramente superior ([Vosniakos et al., 2019](/es/research/reducir-velocidad-o-retroceder-prueba-en-realidad-virtual/)). Una revisión de 55 artículos advierte que robots más rápidos y seguros pueden llevar al operador a trabajar más cerca de ellos, en perjuicio del lado psicológico ([Gualtieri et al., 2021](/es/research/seguridad-y-ergonomia-en-la-robotica-colaborativa-revision/)).

## Lo que todavía no se sabe

Casi todo se probó en laboratorio, simulación o realidad virtual, con un único robot y pocas personas; una revisión encontró lo mismo en casi todas las soluciones publicadas ([Giallanza et al., 2024](/es/research/seguridad-y-salud-laboral-en-la-colaboracion-humano-robot/)). Las herramientas de evaluación propuestas todavía no se han validado en empresas ([Berx et al., 2022](/es/research/preparacion-en-seguridad-antes-de-comprar-un-cobot/); [Gholamizadeh et al., 2025](/es/research/identificacion-de-peligros-hazid-en-la-industria-5-0/)). Ningún artículo de una de las revisiones trata la participación del operador en la evaluación de riesgos ([Berx et al., 2022](/es/research/factores-de-riesgo-colaboracion-humano-robot-cinco-clases/)).

## En la práctica

- Evalúe toda la aplicación, no solo el robot, y empiece antes de la compra ([Berx et al., 2022](/es/research/preparacion-en-seguridad-antes-de-comprar-un-cobot/)).
- Vincule cada límite de velocidad, fuerza y parada con el resultado de la evaluación de riesgos ([Chemweno et al., 2020](/es/research/iso-ts-15066-salvaguardas-y-evaluacion-de-riesgos/)).
- Aplique las medidas en este orden: seguridad por diseño, protecciones adicionales y, por último, información ([Gualtieri et al., 2022](/es/research/directrices-de-seguridad-montaje-colaborativo-validacion/)).
- Incluya en la evaluación la seguridad de la red y factores no físicos, como estrés, fatiga y capacitación ([Hollerer et al., 2021](/es/research/prueba-de-intrusion-en-cobot-ciberseguridad-y-seguridad-fisica/); [Lee & Lim, 2025](/es/research/evaluacion-de-riesgo-no-fisico-en-el-trabajo-con-cobots/)).
- Involucre al operador en la definición de la distribución y de las actividades ([Gualtieri et al., 2020](/es/research/directrices-de-diseno-puesto-de-montaje-colaborativo/)).
