---
title: "Cómo el robot predice lo que hará la persona: tres familias de métodos comparadas"
description: "Una revisión de 180 artículos compara tres formas de predecir el comportamiento humano en el trabajo con robots: modelos basados en mecanismo, modelos basados en datos y la fusión de ambos."
translationKey: du2026
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "La revisión trata la predicción del comportamiento humano como medio para evitar colisiones y lesiones de quien trabaja cerca del robot, e incluye fatiga y carga de trabajo."
paper:
  title: "Towards seamless and safe human-robot collaboration in Industry 5.0: advances in human behaviour prediction"
  authors:
    - "Yuyang Du"
    - "Bi Zhang"
    - "Chen Zheng"
    - "Yunlong Tang"
  year: 2026
  venue: "International Journal of Production Research"
  doi: "10.1080/00207543.2026.2639732"
  url: "https://doi.org/10.1080/00207543.2026.2639732"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "Para trabajar cerca de una persona sin golpearla, el robot necesita anticipar sus movimientos e intenciones. La revisión muestra lo que ofrece cada tipo de método en dependencia de datos, transparencia y seguridad, lo que ayuda a elegir un enfoque y a desconfiar de promesas de seguridad obtenida solo por aprendizaje."
method: "Los autores buscaron en Google Scholar y Web of Science artículos en inglés de 2010 a 2025, con una cadena de búsqueda para cada familia de métodos. La búsqueda de enero de 2025 arrojó 524 y 1.687 registros; el cribado dejó 282 y la lectura completa, sumada a la búsqueda en las referencias, llegó a 180 artículos. Los estudios se tabularon por escenario, aplicación, tipo de dato y modelo, y los autores también revisaron 10 bases de datos y propusieron un marco unificado."
findings:
  - "La revisión separa dos escenarios: la colaboración cercana (entrega de piezas, montaje, guiado físico), en la que el robot predice la meta o la acción del trabajador, y la navegación social, en la que un robot móvil busca una trayectoria segura cerca de las personas."
  - "Los métodos basados en mecanismo (cinemática del cuerpo y del movimiento, modelo de fuerza social) dependen poco de los datos, son fáciles de interpretar y tienen seguridad por diseño, pero exigen conocimiento experto y generalizan mal. Los basados en datos (inferencia probabilística y aprendizaje profundo) dependen mucho de los datos, son poco interpretables y su seguridad es difícil de garantizar."
  - "La fusión usa el mecanismo biológico o cognitivo (cinemática, activación muscular, confianza, carga de trabajo) como restricción del modelo de datos. En los artículos filtrados, creció en los últimos siete años y superó a los métodos basados en datos de 2022 a 2024, pero sus garantías de seguridad siguen siendo empíricas."
  - "Según los autores, la principal limitación no es la falta de técnicas, sino de marcos unificados y centrados en el ser humano: la predicción se trata como un módulo aislado de corto plazo, sin vínculo con la planificación de tareas, la confianza o el aprendizaje de largo plazo."
  - "Entre los desafíos están la variación entre personas y a lo largo del tiempo y la falta de bases de datos estandarizadas: de las 10 revisadas, pocas incluyen datos cognitivos y todas menos una usan sensores sujetos al cuerpo. Los autores proponen un marco de cuatro capas: datos de varias fuentes, modelo físico del mundo, predicción por fusión y control adaptativo."
limitations: "La revisión no evalúa la calidad de los estudios incluidos, y el marco de cuatro capas es una propuesta todavía no probada. El conjunto mezcla cobots industriales con robots móviles, teleoperación y aplicaciones médicas, de modo que los resultados no valen solo para la manufactura. El texto no discute cómo una predicción aprendida entraría en la evaluación de riesgos que exigen las normas de seguridad."
---
