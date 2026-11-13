---
title: "Un cobot simulado que oye y ve prefiere rechazar el comando antes que tomar la pieza equivocada"
description: "En simulación, un sistema que pondera voz y visión según la calidad de cada señal no tomó ningún objeto equivocado en 210 ejecuciones, pero rechazó la mayoría de los comandos con ruido fuerte."
translationKey: alfaroviquez2026
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
translationReviewed: false
paper:
  title: "A Digital Twin Framework for Multimodal Operator-Centered Human–Cobot Collaboration in Assembly Tasks"
  authors:
    - "David Alfaro-Viquez"
    - "Mauricio Zamora-Hernandez"
    - "Michael Fernandez-Vega"
    - "David Ortiz-Perez"
    - "Jose Garcia-Rodriguez"
    - "Jorge Azorin-Lopez"
  year: 2026
  venue: "Machines"
  doi: "10.3390/machines14070780"
  url: "https://doi.org/10.3390/machines14070780"
  openAccess: true
  license: "CC BY"
whyItMatters: "Las fábricas tienen ruido de máquinas, poca luz y objetos tapados, y eso dificulta el trabajo de un cobot controlado por voz y cámara. El estudio muestra una forma de que el sistema note que una señal empeoró y decida no actuar, en lugar de actuar mal. También registra los pesos de cada decisión, lo que facilita auditar por qué el robot hizo o dejó de hacer algo."
method: "Los autores montaron el sistema en simulación, con un robot de dos brazos ABB YuMi virtual, una cámara de profundidad y un modelo de lenguaje que se ejecuta localmente. La voz pasa por reconocimiento del habla y la imagen por detección de objetos; un motor de fusión pondera cada canal según su calidad, y un umbral rechaza los comandos de baja confianza antes de que lleguen al modelo de lenguaje. En el banco virtual había tres cubos de colores y un destornillador. Un único operador grabó 15 comandos, repetidos en siete condiciones de ruido sonoro y degradación de la imagen, con la fusión adaptativa y con pesos fijos del 50% para cada canal, con un total de 210 ejecuciones."
findings:
  - "Con audio limpio o ruido leve a moderado, y con cualquier nivel de degradación de la imagen, las dos configuraciones acertaron el 100% de los comandos."
  - "El peso dado al audio bajó de 0,796 a 0,753 cuando aumentó el ruido, todavía con el 100% de acierto. La fusión notó el empeoramiento de la señal antes de que afectara el resultado."
  - "Con ruido fuerte, la fusión adaptativa ejecutó correctamente solo el 13,3% de los comandos, porque el umbral bloqueó 13 de los 15. Con pesos fijos, el acierto fue del 60,0%, pero el robot tomó el objeto equivocado tres veces."
  - "En las 210 ejecuciones, la fusión adaptativa no manipuló ningún objeto equivocado; la de pesos fijos se equivocó 8 veces. En la condición de ruido fuerte con imagen degradada, el 45,5% de los comandos que los pesos fijos llegaron a ejecutar fue sobre el objeto equivocado."
  - "Todo el procesamiento es local: el audio, las transcripciones y las imágenes del puesto no salen del sistema. Los autores sostienen que publicar los pesos y la confianza de cada decisión responde a las exigencias de trazabilidad de la regulación europea de inteligencia artificial."
limitations: "Todo se hizo en simulación, sin robot físico, y los propios autores dicen que el sistema no es un gemelo digital completo. La prueba usó un solo operador, 15 comandos, tres cubos que se distinguen por el color y degradación sintética, y no se estudió la sensibilidad del umbral de rechazo. La reducción de la carga mental del operador, usada como justificación, no se midió."
---
