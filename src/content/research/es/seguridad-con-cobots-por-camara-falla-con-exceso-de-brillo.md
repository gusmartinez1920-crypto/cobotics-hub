---
title: "Vigilar con cámara la distancia entre operador y cobot falla con exceso de brillo"
description: "Una revisión de 53 estudios sobre seguridad en la colaboración humano-robot y una prueba de laboratorio muestran que la detección del riesgo de colisión con cámara simple falla con exceso de brillo."
translationKey: patalasmaliszewska2025
topic: industry-5-0
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
translationReviewed: false
sdgs:
  - goal: 8
    why: "El estudio trata la seguridad física de quienes trabajan junto a cobots y prueba cuándo un sistema de cámara deja de avisar del riesgo de colisión."
paper:
  title: "Improving safety in human–robot collaboration towards sustainable production in Industry 5.0"
  authors:
    - "Justyna Patalas-Maliszewska"
    - "Hanna Łosyk"
    - "Adam Dudek"
  year: 2025
  venue: "Journal of Intelligent Manufacturing"
  doi: "10.1007/s10845-025-02676-4"
  url: "https://doi.org/10.1007/s10845-025-02676-4"
whyItMatters: "Vigilar con una cámara la distancia entre la persona y el cobot es una opción barata, y los autores muestran que puede hacerse con equipo sencillo. El estudio, sin embargo, mide cuánto depende esa vigilancia de la calidad de la imagen. Para quien diseña una celda colaborativa, queda la advertencia sobre la iluminación y la sugerencia de no confiar en una sola cámara."
method: "El trabajo tiene dos partes. Primero, una revisión sistemática de artículos de 2021 a 2023 en tres bases, que partió de 4107 registros y analizó 53 por completo. Después, un experimento de laboratorio con dos cobots UR10e y un operador que se movía entre ellos y provocaba colisiones, filmado por una cámara. Un detector de objetos identificaba partes del operador y del cobot, y un algoritmo de los autores clasificaba el riesgo en cuatro niveles según la menor distancia entre ellos; el video de referencia se degradó luego con brillo alterado, ruido, aberración cromática y distorsión de transmisión."
findings:
  - "La revisión encontró la seguridad tratada en tres frentes: seguridad mecánica, supervisión y control del espacio de trabajo, y cuestiones éticas. Los sectores más presentes son el automotriz y el aeroespacial, en montaje y desmontaje."
  - "Las técnicas dominantes en los estudios revisados son la realidad aumentada (alertas e información superpuesta) y la inteligencia artificial (detección de colisiones y planificación de movimiento). La gran mayoría de los 53 estudios se hizo en laboratorio o en simulación."
  - "En el experimento, el riesgo tiene cuatro niveles: sin riesgo por encima de 50 cm, dos niveles intermedios (de 25 a 50 cm y de 10 a 25 cm) y colisión por debajo de 10 cm. Los autores dicen que esos valores no son críticos y que lo importante es aplicar un criterio uniforme."
  - "El exceso de brillo fue la interferencia más grave: con el brillo al 175% y al 200%, en una de las etapas del video el sistema dejó de detectar la colisión o el riesgo alto en el 100% de los cuadros. La aberración cromática más fuerte también llevó al 100% de fallos en dos etapas; con la distorsión de transmisión digital, los fallos no superaron el 20% de los cuadros."
  - "Los autores recomiendan una iluminación compatible con la sensibilidad de la cámara, umbrales de distancia ajustados a la velocidad y la dirección del operador, una segunda cámara para confirmar el riesgo y el marcado por colores de las partes del cobot."
limitations: "El experimento usa un único operador, que provoca la colisión a propósito, un video de referencia de unos 4 segundos y una sola cámara, con la distancia medida en dos dimensiones. Los umbrales de distancia no están vinculados a las normas de seguridad de cobots. Las cuestiones éticas quedan para trabajos futuros, y el estudio no mide la comodidad ni la percepción del trabajador, aunque los propios autores mencionan la incomodidad de las personas ante cámaras y sensores."
---
