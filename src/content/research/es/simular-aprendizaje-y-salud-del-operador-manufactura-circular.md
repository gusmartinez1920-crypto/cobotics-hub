---
title: "Cómo incluir el aprendizaje y la salud del operador en una simulación de fábrica"
description: "Los autores proponen directrices para simular, por eventos discretos, cómo el operador gana competencia y desgasta su salud en sistemas de manufactura circular, y las ilustran con 30 participantes."
translationKey: denu2024
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "La propuesta incluye la salud física y psicosocial y el aprendizaje del operador como variables de la simulación de un sistema de producción."
  - goal: 12
    why: "El estudio trata de sistemas de manufactura circular, como la remanufactura, la reparación y el desmontaje, que dependen mucho del trabajo manual calificado."
paper:
  title: "Towards Human-Centric Digital Simulation: Guidelines to Simulate Operators Skills Acquisition and Health in Circular Manufacturing Systems"
  authors:
    - "Maxence Denu"
    - "Pierre David"
    - "Fabien Mangione"
    - "Aurélie Landry"
  year: 2024
  venue: "IFAC-PapersOnLine"
  doi: "10.1016/j.ifacol.2024.09.252"
  url: "https://doi.org/10.1016/j.ifacol.2024.09.252"
whyItMatters: "Las simulaciones de fábrica suelen tratar al operador como un recurso de tiempo fijo. Este trabajo muestra cómo incluir el aprendizaje, la fatiga y la salud en el modelo, lo que interesa a quienes construyen gemelos digitales de puestos de trabajo. El estudio no trata de robots: el cobot aparece solo como tecnología por incluir en trabajos futuros, y el puente con la cobótica es del lector."
method: "Es un artículo de congreso con tres partes. Primero, una revisión narrativa sobre simulación en manufactura circular (remanufactura, reparación, desmontaje), competencias y salud del operador. Después, la propuesta: tres componentes (producto, operador y proceso), un modelo para el tiempo de procesamiento, otro para actualizar la salud y la competencia, un patrón de simulación en tres etapas y un protocolo de recolección de datos con observación ergonómica, cuestionarios y video. Por último, una aplicación en una plataforma tecnológica, en la que 30 participantes de 19 a 45 años desmontaron pequeñas turbinas mareomotrices durante una hora, con unos cinco procesos completados por persona."
findings:
  - "La revisión encontró que las simulaciones de manufactura circular en general ignoran el aspecto social y rara vez usan conocimiento de las ciencias humanas. Según los autores, los modelos de aprendizaje, olvido y fatiga existen solo por separado."
  - "En la manufactura circular, la cantidad imprevisible de operaciones dificulta estandarizar y automatizar. Eso exige mucho trabajo manual y competencias amplias, y la experiencia se traduce en mejor calidad."
  - "El patrón de simulación propuesto tiene tres etapas: elegir un operador con experiencia y salud suficientes, procesar la pieza y actualizar la competencia y la salud de ese operador. Las reglas de asignación pueden variar para probar formas de organizar el trabajo."
  - "El tiempo de procesamiento sigue una curva de aprendizaje ajustada a cada operador y depende también de la calidad de la pieza y de la salud de quien la procesa."
  - "La salud se modela como un capital del 0% al 100%, con una parte física y otra psicosocial, que se reduce en cada operación según su impacto ergonómico. Los autores aclaran que el valor representa un factor de riesgo, no una predicción de dolor."
limitations: "La aplicación solo ilustra la metodología: el caso es simplificado, con estudiantes voluntarios en una sesión corta, y no se pudieron estudiar los efectos de largo plazo sobre la salud. Los autores reconocen que el modelo necesita más datos y que añadir variables humanas hace más difícil la validación."
---
