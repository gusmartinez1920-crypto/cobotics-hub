---
title: "La ISO/TS 15066 pide evaluación de riesgos, pero los estudios rara vez la vinculan a las protecciones"
description: "Una revisión compara las estrategias de seguridad de la literatura con las cláusulas de la ISO/TS 15066 y propone un marco en tres fases para orientar las protecciones según la evaluación de riesgos."
translationKey: chemweno2020
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "La revisión discute cómo vincular las protecciones de quienes trabajan con cobots a una evaluación de riesgos estructurada, y no a valores elegidos caso por caso."
paper:
  title: "Orienting safety assurance with outcomes of hazard analysis and risk assessment: A review of the ISO 15066 standard for collaborative robot systems"
  authors:
    - "Peter Chemweno"
    - "Liliane Pintelon"
    - "Wilm Decre"
  year: 2020
  venue: "Safety Science"
  doi: "10.1016/j.ssci.2020.104832"
  url: "https://doi.org/10.1016/j.ssci.2020.104832"
  openAccess: true
  license: "CC BY"
whyItMatters: "La norma condiciona varias protecciones de diseño al resultado del análisis de peligros y de la evaluación de riesgos, pero no dice cómo hacer ese vínculo. En la práctica, la decisión queda en manos de diseñadores e integradores. El estudio ayuda a quien integra cobots a ver dónde los límites de velocidad, fuerza y parada suelen elegirse sin base en la evaluación de riesgos y sugiere métodos para estructurarla."
method: "Es una revisión narrativa en dos etapas. Los autores primero separaron las cláusulas de la ISO/TS 15066 que condicionan protecciones a la evaluación de riesgos y después buscaron artículos alineados con cada una, priorizando revistas de robótica y de seguridad. El análisis recorre las cláusulas sobre el lugar de trabajo colaborativo, la operación colaborativa y los modos de operación, y organiza la propuesta en las tres fases de la ISO 31000: identificación, análisis y valoración del riesgo."
findings:
  - "La revisión encontró que la literatura tiende a protecciones de hardware o de control orientadas a evitar colisiones, desvinculadas de procesos estructurados de análisis de peligros y evaluación de riesgos."
  - "Los umbrales de las funciones de parada y de velocidad varían de un estudio a otro y no se vinculan a la evaluación de riesgos. Un estudio citado usa 100 mm/s, por debajo de los umbrales de la norma."
  - "Para la limitación de potencia y fuerza, la norma fija límites de dolor para 29 regiones del cuerpo. La literatura privilegia sensores de fuerza y pieles táctiles, con poca evidencia de vínculo con la evaluación de riesgos formal, y el umbral depende del proceso: una herramienta puntiaguda cambia el riesgo."
  - "Los autores proponen un marco en tres fases basado en la ISO 31000 y sugieren métodos como HAZOP, análisis jerárquico de tareas y UML, porque las listas de verificación de las normas no son exhaustivas."
  - "La norma adopta 1,6 m/s como velocidad del operador hacia el robot. Como esa velocidad depende del comportamiento, los autores proponen incluir en el análisis el estrés, la fatiga, la falta de concentración y el miedo."
limitations: "La revisión no sigue un protocolo sistemático ni informa cuántos artículos analizó, y el marco propuesto no se aplicó a un caso. Los autores reconocen que el HAZOP genera un número de escenarios difícil de tratar en tareas complejas. El estudio es anterior a la edición de 2025 de la ISO 10218 y usa la ISO 31000 como base."
---
