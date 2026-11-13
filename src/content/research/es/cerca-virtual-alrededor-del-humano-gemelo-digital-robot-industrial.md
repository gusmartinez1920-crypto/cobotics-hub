---
title: "Una cerca virtual alrededor de la persona, y no del robot, para compartir el espacio sin vallas"
description: "Los autores presentan una plataforma de simulación que hace que el robot industrial esquive una envolvente virtual alrededor del trabajador y prueban redes neuronales para reconocer objetos en 3D."
translationKey: droder2018
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "A Machine Learning-Enhanced Digital Twin Approach for Human-Robot-Collaboration"
  authors:
    - "Klaus Dröder"
    - "Paul Bobka"
    - "Tomas Germann"
    - "Felix Gabriel"
    - "Franz Dietrich"
  year: 2018
  venue: "Procedia CIRP"
  doi: "10.1016/j.procir.2018.02.010"
  url: "https://doi.org/10.1016/j.procir.2018.02.010"
whyItMatters: "La distancia de separación que exige la ISO/TS 15066 suele aplicarse con zonas fijas, que detienen o frenan el robot y cuestan productividad. Este trabajo invierte la lógica: la envolvente de seguridad acompaña a la persona y el robot replanifica la trayectoria a su alrededor. Los problemas que relatan los autores también muestran a quienes investigan el tema dónde falla la percepción por aprendizaje automático."
method: "Es una prueba de concepto de ingeniería presentada en un congreso, sin estudio con usuarios. Los autores construyeron en MATLAB una plataforma de simulación a la que llaman gemelo digital. En ella compararon dos formas de representar al trabajador como obstáculo: una envolvente convexa y una malla con forma de cilindro con hemisferio, que acompaña la posición de la persona. La evasión se probó en banco con un robot industrial KUKA KR6. En paralelo, entrenaron una red neuronal con modelos 3D de las partes del robot para reconocer objetos en nubes de puntos."
findings:
  - "Los autores proponen una escala de nueve etapas para la seguridad en la colaboración humano-robot, que va de la cerca fija al robot que evalúa la situación y actúa de forma proactiva, pasando por barreras ópticas, zonas de velocidad reducida y evasión reactiva."
  - "La propuesta central es rodear a la persona con una malla virtual que la acompaña y obliga a todos los eslabones del robot a mantener la distancia mínima de separación de la ISO/TS 15066."
  - "La malla es más conservadora, porque impide que el robot pase por debajo de partes del cuerpo. La envolvente convexa representa a la persona con más precisión, pero hace menos confiable la evaluación de seguridad."
  - "La evasión funcionó en banco, pero el equipo usado no opera en tiempo real. Los movimientos fluidos en situaciones críticas exigen una interfaz de comunicación mucho más rápida."
  - "La red neuronal reconoció bien los modelos simulados, pero mal las escenas reales: en un ejemplo, detectó solo uno de los siete componentes del robot. Los autores relatan que las fallas en el reconocimiento del esqueleto de la persona llevaron, a veces, a trayectorias equivocadas."
limitations: "El artículo no ofrece medidas cuantitativas de desempeño, tiempo de respuesta o distancia mantenida, ni discute cómo validar la seguridad de un método basado en redes neuronales. El robot es industrial convencional, no un cobot con limitación de fuerza, y la persona entra en el modelo solo como obstáculo geométrico. Los propios autores reconocen debilidades de confiabilidad y de velocidad."
---
