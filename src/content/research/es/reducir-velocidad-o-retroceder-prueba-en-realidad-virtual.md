---
title: "Reducir la velocidad o retroceder: dos estrategias de seguridad probadas en realidad virtual"
description: "En un simulador de realidad virtual, estudiantes trabajaron junto a un robot que reducía la velocidad o retrocedía cuando la persona se acercaba. Ninguna de las dos estrategias resultó claramente superior."
translationKey: vosniakos2019
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
    why: "El estudio compara, en simulación, dos estrategias para evitar que el robot golpee a la persona con fuerza capaz de causar dolor."
paper:
  title: "Exploration of two safety strategies in human-robot collaborative manufacturing using Virtual Reality"
  authors:
    - "George-Christopher Vosniakos"
    - "Lucas Ouillon"
    - "Elias Matsas"
  year: 2019
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2020.01.066"
  url: "https://doi.org/10.1016/j.promfg.2020.01.066"
whyItMatters: "Ajustar los parámetros de seguridad en una celda real cuesta tiempo y expone a las personas. El estudio muestra cómo la realidad virtual permite probar esos ajustes antes de la implementación física y medir el efecto sobre las colisiones y el ritmo de trabajo. También deja a la vista el conflicto entre seguridad y productividad."
method: "Los autores usaron un entorno virtual con casco inmersivo y seguimiento del cuerpo, que reproduce una celda de laminado manual de fibra de carbono para piezas aeroespaciales con un brazo robótico suspendido. Las dos estrategias se activan cuando la persona está a menos de 1,5 m del robot y el tiempo hasta la colisión es menor que 1,5 s. Los límites de velocidad por región del cuerpo se calcularon con el modelo de colisión de la ISO/TS 15066. Hubo cuatro conjuntos de pruebas, dos con 22 y dos con 11 estudiantes de último año de Ingeniería Mecánica, con registro de velocidad media, tiempo de colaboración, activaciones y colisiones, más un cuestionario."
findings:
  - "Los límites de velocidad calculados para el robot varían mucho según la región del cuerpo: de 1897 mm/s para mano y dedos a 313 mm/s para la pierna y 322 mm/s para el tórax."
  - "Con la velocidad reducida al 25% y una espera de 1 s, las dos estrategias son equivalentes en velocidad media y número de activaciones. Pero el 25% (440 mm/s) todavía supera la mayor parte de los límites calculados, y retroceder tuvo menos colisiones, sobre todo las dolorosas."
  - "Con una espera de 2 s y la velocidad reducida al 20%, retroceder tuvo menos activaciones y colisiones y mayor tiempo de colaboración. No hubo colisiones peligrosas con ninguna de las dos estrategias."
  - "Colorear en grados el volumen de movimiento del robot, para indicar cuánto invadía la persona el área, no redujo las activaciones ni las colisiones. Un factor de reducción variable con la distancia dio más velocidad, pero más colisiones, y los autores lo consideraron inaceptable tal como está."
  - "Cerca del 15% de los participantes no terminó las pruebas iniciales por mareo fuerte; los autores desactivaron parte del seguimiento del tronco para resolver el problema."
limitations: "No hay pruebas estadísticas, y la muestra es pequeña y formada solo por estudiantes de ingeniería; los propios autores dicen que la leve ventaja que atribuyen a reducir la velocidad aún necesita demostrarse con una muestra mayor. El robot simulado es un brazo industrial convencional, no un cobot, y todo ocurre en realidad virtual, sin contacto físico."
---
