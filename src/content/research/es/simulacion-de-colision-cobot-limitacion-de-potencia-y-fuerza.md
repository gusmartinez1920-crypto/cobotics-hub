---
title: "Simular la colisión con el cobot antes de montar la celda"
description: "Los autores midieron colisiones de un robot colaborativo variando seis parámetros y describen un plug-in que calcula fuerza y presión de contacto ya en la planificación, antes de que exista la celda."
translationKey: dombrowski2018
topic: safety
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El estudio trata de cómo verificar, ya en la planificación, si la fuerza y la presión de una colisión entre robot y operador quedan dentro de los límites de seguridad."
paper:
  title: "Simulation of human-robot collaboration by means of power and force limiting"
  authors:
    - "Uwe Dombrowski"
    - "Tobias Stefanak"
    - "Anne Reimer"
  year: 2018
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2018.10.028"
  url: "https://doi.org/10.1016/j.promfg.2018.10.028"
whyItMatters: "Hoy la fuerza y la presión de una colisión solo se miden después de instalar la celda, cuando buena parte de la inversión ya está hecha. Si la medición no se aprueba, queda reducir la velocidad o rehacer la herramienta. Hacer ese cálculo en la simulación, con los datos de planificación que ya existen, anticipa el problema."
method: "El caso de uso es un atornillado semiautomático en una línea de montaje de vehículos, en el que el robot aprieta cuatro tornillos en el modo de limitación de potencia y fuerza (PFL). En un estudio experimental, un robot KUKA LBR iiwa chocó con un medidor de fuerza y presión del instituto alemán IFA, variando velocidad, límite de fuerza, masa y radio de la herramienta, configuración de los ejes y región del cuerpo, con cinco mediciones por serie. Después los autores describen un plug-in para el software Siemens Process Simulate que calcula fuerza y presión por el método de la masa reflejada."
findings:
  - "De los cuatro modos colaborativos de la ISO 10218, la limitación de potencia y fuerza es el único en el que son posibles colisiones inesperadas entre persona y robot, y la medición real solo puede hacerse al final de la planificación, con el sistema ya en operación."
  - "La configuración de los ejes del robot pesa mucho: a 400 mm/s, la fuerza del contacto transitorio difiere en casi 250 N entre las dos posturas probadas (herramienta a 90° y a 45° de la brida), con la misma masa y la misma geometría de herramienta."
  - "El área de contacto domina la presión. La serie con radio de 10 mm a 45° tuvo una presión unos 100 N/cm² mayor que la serie con radio de 25 mm a 90°, aunque la fuerza en esta última fuera unos 250 N mayor."
  - "Los autores reducen la simulación a tres parámetros críticos en el punto de colisión: masa reflejada del robot y de la herramienta, velocidad y geometría de la herramienta. Todos salen de los datos de planificación ya existentes."
  - "Los autores informan que las primeras mediciones virtuales en el caso de uso fueron exitosas y ahorraron ciclos de reprogramación."
limitations: "El artículo afirma que el plug-in funcionó, pero no presenta una comparación numérica entre valores simulados y medidos. Las pruebas usaron un único robot y una única aplicación, y los propios autores piden ensayos con otros fabricantes y modelos más precisos. La simulación calcula fuerza y presión, pero no sustituye la evaluación de riesgos que define qué colisiones pueden ocurrir."
---
