---
title: "Un gemelo digital mide la fatiga del operador e indica cómo ajustar el puesto con cobot"
description: "Los autores combinan ojos, postura y señales musculares en un índice de fatiga física y usan un gemelo digital para comparar configuraciones de un puesto de montaje con cobot."
translationKey: wang2026
topic: industry-5-0
pillars: [cobot, twin, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El estudio mide la fatiga física del operador en el montaje con cobot y usa el resultado para ajustar el puesto de trabajo y reducir el esfuerzo."
paper:
  title: "Fatigue detection and optimisation method for human–robot collaborative assembly based on digital twin"
  authors:
    - "Haoqi Wang"
    - "Yongle Wang"
    - "Hao Li"
    - "Shuo Ji"
    - "Gen Liu"
    - "Cunbo Zhuang"
    - "Xiaoyu Wen"
    - "Chunya Sun"
    - "WenChao Yang"
    - "Wenxiang Ren"
  year: 2026
  venue: "Digital Twin"
  doi: "10.1080/27525783.2025.2610579"
  url: "https://doi.org/10.1080/27525783.2025.2610579"
  openAccess: true
  license: "CC BY-NC"
whyItMatters: "La fatiga física suele evaluarse con una sola medida y sin considerar que las personas son distintas. Este estudio muestra cómo reunir cámaras y sensores musculares en un gemelo digital del operador para señalar el puesto más pesado de la línea y probar ajustes de altura, distancia y apoyo. Es un ejemplo concreto de sensores vestibles y simulación al servicio de la ergonomía en una celda colaborativa."
method: "Los autores modelaron el proceso de montaje de un diferencial de nueve piezas para localizar los puestos de mayor carga. En el puesto elegido, midieron la fatiga con tres fuentes: cierre de los ojos y ángulos de las articulaciones, captados por cámara, y señales eléctricas de dos músculos (electromiografía de superficie), clasificadas por una red neuronal entrenada con 10 voluntarios. Los tres índices se ponderaron y se fusionaron en una nota de 0 a 1. En laboratorio, con un cobot ligero de banco, compararon tres configuraciones del puesto con tres participantes hombres."
findings:
  - "La red neuronal que clasifica las señales musculares tuvo una exactitud de 0,947, por encima de la regresión logística (0,913), de la máquina de vectores de soporte (0,919) y de un umbral simple (0,731)."
  - "En una sesión de 20 minutos en el puesto de alta carga, el 65,7% de los segmentos del músculo del hombro y el 56,2% de los segmentos del músculo de la espalda se clasificaron como fatiga."
  - "En la fusión de los índices, las señales musculares recibieron el mayor peso (0,56), seguidas de la postura (0,32) y de los ojos (0,12)."
  - "La configuración con el mejor resultado, que cambia la altura del punto de trabajo, la distancia de la silla, el apoyo del brazo y el espacio para las rodillas, dio la menor nota de fatiga para los tres participantes: 0,49, 0,51 y 0,47, frente a 0,73, 0,56 y 0,59 en la configuración original."
  - "El sistema solo genera recomendaciones después del análisis: la fatiga todavía no entra en la planificación de tareas del robot, y el comportamiento del cobot no cambia."
limitations: "La validación usa un único escenario, sentado y con los brazos elevados, con una muestra pequeña y homogénea: voluntarios jóvenes en el entrenamiento y tres hombres en la comparación. Todo se hizo en laboratorio, sin probar el sudor, el desplazamiento de los electrodos ni la interferencia eléctrica de fábrica. La mejora medida proviene de ajustes físicos del puesto, no de un cambio en la colaboración con el robot, que es un brazo ligero de investigación y enseñanza."
---
