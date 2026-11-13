---
title: "Monitorar a distância entre operador e cobot por câmera falha com excesso de brilho"
description: "Uma revisão de 53 estudos sobre segurança na colaboração humano-robô e um teste em laboratório mostram que a detecção de risco de colisão por câmera simples falha com excesso de brilho."
translationKey: patalasmaliszewska2025
topic: industry-5-0
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo trata da segurança física de quem trabalha ao lado de cobots e testa quando um sistema de câmera deixa de avisar o risco de colisão."
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
whyItMatters: "Monitorar por câmera a distância entre a pessoa e o cobot é uma opção barata, e os autores mostram que dá para fazer isso com equipamento simples. O estudo, porém, mede quanto esse monitoramento depende da qualidade da imagem. Para quem projeta uma célula colaborativa, fica o alerta sobre iluminação e a sugestão de não confiar em uma única câmera."
method: "O trabalho tem duas partes. Primeiro, uma revisão sistemática de artigos de 2021 a 2023 em três bases, que partiu de 4107 registros e analisou 53 por completo. Depois, um experimento em laboratório com dois cobots UR10e e um operador que se movia entre eles e provocava colisões, filmado por uma câmera. Um detector de objetos identificava partes do operador e do cobot, e um algoritmo dos autores classificava o risco em quatro níveis pela menor distância entre eles; o vídeo de referência foi então degradado com brilho alterado, ruído, aberração cromática e distorção de transmissão."
findings:
  - "A revisão encontrou a segurança tratada em três frentes: segurança mecânica, supervisão e controle do espaço de trabalho, e questões éticas. Os setores mais presentes são o automotivo e o aeroespacial, em montagem e desmontagem."
  - "As técnicas dominantes nos estudos revisados são a realidade aumentada (alertas e informação sobreposta) e a inteligência artificial (detecção de colisão e planejamento de movimento). A grande maioria dos 53 estudos foi feita em laboratório ou simulação."
  - "No experimento, o risco tem quatro níveis: sem risco acima de 50 cm, dois níveis intermediários (25 a 50 cm e 10 a 25 cm) e colisão abaixo de 10 cm. Os autores dizem que esses valores não são críticos e que o importante é aplicar um critério uniforme."
  - "O excesso de brilho foi a interferência mais grave: com o brilho a 175% e 200%, em uma das etapas do vídeo o sistema deixou de detectar a colisão ou o risco alto em 100% dos quadros. A aberração cromática mais forte também levou a 100% de falhas em duas etapas; com a distorção de transmissão digital, as falhas não passaram de 20% dos quadros."
  - "Os autores recomendam iluminação compatível com a sensibilidade da câmera, limites de distância ajustados pela velocidade e direção do operador, uma segunda câmera para confirmar o risco e marcação por cores das partes do cobot."
limitations: "O experimento usa um único operador, que provoca a colisão de propósito, um vídeo de referência de cerca de 4 segundos e uma só câmera, com distância medida em duas dimensões. Os limites de distância não estão ligados às normas de segurança de cobots. As questões éticas ficam para trabalhos futuros, e o estudo não mede conforto nem percepção do trabalhador, embora os próprios autores citem o desconforto das pessoas com câmeras e sensores."
---
