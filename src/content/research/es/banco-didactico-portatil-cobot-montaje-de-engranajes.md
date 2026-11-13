---
title: "Un banco portátil para practicar el montaje de engranajes junto con un cobot"
description: "Los autores diseñaron un banco didáctico portátil en el que un cobot y una persona montan conjuntos de engranajes, con una dificultad ajustable al conocimiento de quien se entrena."
translationKey: kovaluk2022
topic: education
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 4
    why: "El estudio diseña un banco de entrenamiento con cobot para desarrollar las habilidades manual, lógica y de programación de trabajadores y estudiantes."
paper:
  title: "DESIGN OF THE EDUCATIONAL WORKPLACE FOR WORKING WITH A COLLABORATIVE ROBOT"
  authors:
    - "Dávid Kovaľuk"
    - "Ján Semjon"
    - "Martin Syč-Krivaň"
    - "Matúš Sabol"
  year: 2022
  venue: "Technical Sciences and Technologies"
  doi: "10.25140/2411-5363-2022-3(29)-37-44"
  url: "https://doi.org/10.25140/2411-5363-2022-3(29)-37-44"
whyItMatters: "El diseño ofrece una idea concreta de ejercicio práctico con cobot: una tarea de montaje que mezcla cálculo, programación y trabajo manual, y que puede hacerse más fácil o más difícil. Quien monta un laboratorio de enseñanza o una capacitación interna puede aprovechar el diseño de la tarea, aun sin datos sobre cuánto se aprende con ella."
method: "Relato de un proyecto de ingeniería de una universidad técnica de Eslovaquia, sin experimento con personas. Los autores crearon tres variantes del puesto y eligieron la mejor en precio y facilidad de fabricación. El banco usa un cobot Fanuc CRX-10iA, programado por guiado manual y por tableta, con una pinza eléctrica colaborativa de dedos impresos en 3D. El texto describe el diseño mecánico y la secuencia de la tarea en un diagrama de flujo."
findings:
  - "El robot saca los engranajes del almacén y los encaja en los pernos. La persona coloca la arandela y el anillo de retención, comprueba visualmente el movimiento del robot y acciona el motor que prueba el mecanismo."
  - "La tarea es variable: hasta cuatro engranajes de dientes rectos, en un orden que puede cambiar, con una relación de transmisión final mayor, menor o igual a uno."
  - "El ejercicio trae su propia evaluación: el estudiante recibe varios engranajes, pero solo algunas combinaciones mueven el mecanismo. Tiene que calcular la transmisión, programar el robot, montar en conjunto y probar."
  - "Los autores afirman que el banco desarrolla tres habilidades: manual (uso de herramientas en un tiempo definido), lógica (cálculo de la relación de transmisión) y de programación (mover el cobot con seguridad en un espacio reducido)."
  - "Si el robot percibe resistencia durante una operación, repite el movimiento una vez. Si vuelve a fallar, se detiene, y hay que reconfigurar la tarea."
limitations: "No hay pruebas con estudiantes ni trabajadores: ningún dato de aprendizaje, tiempo, errores u opinión de quienes lo usaron. La seguridad se apoya en la parada del robot al contacto y en la comprobación visual del operador, sin evaluación de riesgos de la aplicación. La colaboración es secuencial: el robot coloca la pieza y solo después actúa la persona."
---
