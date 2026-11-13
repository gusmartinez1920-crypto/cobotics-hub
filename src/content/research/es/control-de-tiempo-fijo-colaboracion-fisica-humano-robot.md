---
title: "Un controlador que cede al contacto humano sin salir de límites de espacio que se mueven"
description: "Los autores proponen un controlador que combina complacencia ante el contacto humano con límites del espacio de trabajo que cambian en el tiempo. En simulación, el error de seguimiento bajó unas diez veces."
translationKey: sun2025
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "Fixed‐Time Adaptive Neural Control for Physical Human–Robot Collaboration With Time‐Varying Workspace Constraints"
  authors:
    - "Yuzhu Sun"
    - "Mien Van"
    - "Stephen McIlvanna"
    - "Nguyen Minh Nhat"
    - "Seán McLoone"
    - "Dariusz Ceglarek"
    - "Shuzhi Sam Ge"
  year: 2025
  venue: "International Journal of Robust and Nonlinear Control"
  doi: "10.1002/rnc.7922"
  url: "https://doi.org/10.1002/rnc.7922"
  openAccess: true
  license: "CC BY"
whyItMatters: "En la colaboración física, el robot debe ceder cuando la persona lo empuja a propósito y, a la vez, no invadir zonas prohibidas, que pueden ser un obstáculo móvil o el propio operador. El estudio muestra cómo la ingeniería de control trata este problema: la seguridad se convierte en una restricción matemática de posición, algo distinto de los límites de fuerza de las normas."
method: "Es un estudio teórico y de simulación, sin robot físico ni participantes. El controlador reúne el control de admitancia, que trata la fuerza humana como entrada y no como perturbación, una función de barrera que impide al robot cruzar límites variables en el tiempo, garantía de convergencia en tiempo fijo y una red neuronal que compensa la dinámica desconocida. Los autores demuestran la estabilidad y prueban el método en un manipulador plano de dos eslabones, con fuerza humana simulada, y en un UR10 simulado con un obstáculo móvil."
findings:
  - "En la simulación de dos eslabones, los tres enfoques comparados mantuvieron la trayectoria dentro de los límites variables; cuando tiende a cruzar el límite, es empujada de vuelta al área segura."
  - "El error medio de seguimiento en la articulación 1 bajó de 3,73 × 10⁻² con el controlador de barrera común a 2,20 × 10⁻³ con el controlador propuesto con red neuronal, cerca de un orden de magnitud menos."
  - "La red neuronal no lo mejora todo: el error máximo en la articulación 1 fue mayor con ella (0,0102 frente a 0,0054 en el controlador propuesto), aunque mejoró en la articulación 2."
  - "Hay un compromiso de ajuste: ganancias mayores reducen el error y el tiempo de establecimiento, pero aumentan el esfuerzo de control y las oscilaciones rápidas del mando, que aparecen cuando la fuerza humana entra y sale y pueden dañar el actuador."
  - "En el UR10 simulado, la red neuronal aprende en los primeros 2 s y los pares se mantienen dentro de los límites del robot."
limitations: "Todo se validó en simulación, con la fuerza humana representada por un perfil predefinido, sin operador real ni medida de comodidad o esfuerzo. Los propios autores señalan que, si el robot cruza el límite a alta velocidad, el controlador se detiene; el comportamiento seguro en ese caso queda abierto. La seguridad se trata como límite de posición, no como límite de fuerza o presión en el contacto."
---
