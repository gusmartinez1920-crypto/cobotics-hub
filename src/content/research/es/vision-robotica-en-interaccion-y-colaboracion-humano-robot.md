---
title: "Lo que los robots ven de las personas: diez años de visión robótica en revisión"
description: "Una revisión sistemática de 310 artículos de 2010 a 2020 muestra cómo los robots usan cámaras para interactuar con personas. Los gestos lideran las aplicaciones, y solo el 21% hizo pruebas con personas."
translationKey: robinson2023
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Robotic Vision for Human-Robot Interaction and Collaboration: A Survey and Systematic Review"
  authors:
    - "Nicole Robinson"
    - "Brendan Tidd"
    - "Dylan Campbell"
    - "Dana Kulić"
    - "Peter Corke"
  year: 2023
  venue: "ACM Transactions on Human-Robot Interaction"
  doi: "10.1145/3570731"
  url: "https://doi.org/10.1145/3570731"
  openAccess: true
whyItMatters: "La cámara es el principal medio de un robot para percibir a quien trabaja a su lado: con ella se detiene, reduce la velocidad o se desvía cuando alguien se acerca. La revisión muestra lo que ya es común y lo que todavía falta, como pruebas con personas, medidas comparables y cuidado con las imágenes captadas."
method: "Los autores hicieron una revisión sistemática según el estándar PRISMA en tres bases (IEEE Xplore, ACM Library y Scopus), con artículos revisados por pares publicados de 2010 a 2020. Solo entraron estudios con robot físico, en los que la visión tiene a la persona como foco y genera una acción en tiempo real o casi; la simulación y la teleoperación quedaron fuera. De 6.771 registros, se incluyeron 310 artículos, y dos evaluadores independientes revisaron el 10% de ellos, con acuerdo total."
findings:
  - "Las aplicaciones más frecuentes son reconocimiento de gestos (35%), movimiento del robot en espacios con personas (22%), entrega de objetos y acciones colaborativas (17%) y reconocimiento de acciones (13%). Las cámaras de color y profundidad, como el Kinect, fueron las más usadas."
  - "En los 56 artículos sobre entrega de objetos y acciones colaborativas, el caso más común (46%) es el robot que necesita operar con seguridad en un espacio compartido: al detectar a la persona, se detiene, reduce la velocidad o cambia la trayectoria."
  - "La interacción estudiada es casi siempre simple: el 88% de las tareas es de baja criticidad y el 91% de los estudios tiene una persona por robot. Los equipos con varias personas y varios robots y las tareas de mayor riesgo siguen poco estudiados."
  - "Solo 66 de los 310 artículos (21%) informan de un experimento con personas, con un total de 1.228 participantes. Donde se informó el sexo, el 70% eran hombres. Las medidas objetivas (384) superan con mucho a las subjetivas (40)."
  - "Pocos artículos informan medidas estandarizadas del desempeño de la visión, lo que impide comparar algoritmos, y solo tres publicaron sus datos. Los autores señalan como desafíos el uso ético de las imágenes (consentimiento, privacidad) y el riesgo de que la persona suponga que el robot ve más de lo que realmente ve."
limitations: "La revisión abarca la interacción con robots en general (móviles, sociales, aéreos y brazos manipuladores), y la industria es solo uno de los cuatro dominios; los resultados no describen únicamente cobots industriales. La búsqueda termina en 2020 y excluye textos no revisados por pares. Los casos de seguridad en espacio compartido no se relacionan con las normas de robots colaborativos."
---
