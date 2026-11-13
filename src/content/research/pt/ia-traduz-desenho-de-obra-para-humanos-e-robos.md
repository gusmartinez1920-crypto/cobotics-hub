---
title: "IA transforma desenhos de obra em instruções para pessoas e robôs"
description: "Os autores propõem separar o que construir de como construir em dois modelos e usam IA multimodal para gerar ambos a partir de desenhos, em dois casos preliminares que não chegaram à execução."
translationKey: das2026
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
paper:
  title: "Translating intention: AI-assisted model generation for collaborative human–robot construction"
  authors:
    - "Avishek Das"
    - "Begüm Saral"
    - "Lidia Atanasova"
    - "Tizian Rein"
    - "Kathrin Dörfler"
  year: 2026
  venue: "Construction Robotics"
  doi: "10.1007/s41693-026-00205-0"
  url: "https://doi.org/10.1007/s41693-026-00205-0"
whyItMatters: "Pessoas leem um desenho com experiência e julgamento; robôs precisam de passos explícitos, sem margem para interpretação. Hoje essa tradução é feita por programação manual, lenta e dependente de especialistas. O estudo sugere um caminho para que pessoa e robô partam da mesma descrição da obra, inclusive quando só existe o desenho em papel."
method: "É um artigo conceitual com uma demonstração experimental preliminar. Os autores descrevem dois modelos em forma de grafo: um espacial, em que cada nó é um elemento da construção, e um procedimental, em que cada nó é uma ação executável. Um modelo de IA multimodal (Gemini 2.5 Pro), orientado só por instruções e formatos de saída rígidos, sem treinamento adicional, gerou os dois modelos a partir de desenhos, com revisão humana a cada etapa. Os dois casos foram uma coluna de tijolos e uma parede de montantes de madeira irregular, tirados de um manual de construção de 1936."
findings:
  - "Os autores descrevem a diferença central: a instrução para a pessoa diz o que fazer e conta com sua experiência; a instrução para o robô diz como fazer, passo a passo."
  - "No modelo proposto, ações de pessoas e de robôs são descritas no mesmo formato. Assim, segundo os autores, as tarefas podem ser sincronizadas, intercaladas ou passadas de um para o outro sem refazer o modelo."
  - "Na coluna de tijolos, a IA gerou um modelo espacial coerente a partir de duas plantas e um texto, e acertou a maior parte das relações entre as peças. Os cortes diagonais exigiram esclarecimento do usuário, e a sequência de ações também precisou de correção."
  - "Na parede de madeira, ajustes por texto e imagem corrigiram a geometria e as conexões, e o retorno do usuário reordenou os passos para manter a estrutura estável em cada etapa."
  - "Os autores relatam que a abordagem dispensa especialista em robótica para gerar os modelos e funciona sem modelo digital prévio, o que abriria uso em reparo e conservação de patrimônio."
limitations: "A demonstração gera e visualiza os modelos, mas nenhum robô executou as tarefas e não houve interação entre pessoa e robô. O estudo não traz medida de desempenho: a proporção de relações corretas não vem com número, e a confiabilidade dependeu de supervisão humana. Segurança, normas e efeitos sobre quem trabalha na obra não são tratados."
---
