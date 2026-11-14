---
title: "A ISO/TS 15066 pede avaliação de risco, mas os estudos raramente a ligam às proteções"
description: "Uma revisão compara as estratégias de segurança da literatura com as cláusulas da ISO/TS 15066 e propõe um quadro em três fases para orientar as proteções pelo resultado da avaliação de risco."
translationKey: chemweno2020
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "A revisão discute como ligar as proteções de quem trabalha com cobots a uma avaliação de risco estruturada, e não a valores escolhidos caso a caso."
paper:
  title: "Orienting safety assurance with outcomes of hazard analysis and risk assessment: A review of the ISO 15066 standard for collaborative robot systems"
  authors:
    - "Peter Chemweno"
    - "Liliane Pintelon"
    - "Wilm Decre"
  year: 2020
  venue: "Safety Science"
  doi: "10.1016/j.ssci.2020.104832"
  url: "https://doi.org/10.1016/j.ssci.2020.104832"
  openAccess: true
  license: "CC BY"
whyItMatters: "A norma condiciona várias proteções de projeto ao resultado da análise de perigos e da avaliação de risco, mas não diz como fazer essa ligação. Na prática, a decisão fica com projetistas e integradores. O estudo ajuda quem integra cobots a ver onde os limites de velocidade, força e parada costumam ser escolhidos sem base na avaliação de risco e sugere métodos para estruturá-la."
method: "É uma revisão narrativa em duas etapas. Os autores primeiro separaram as cláusulas da ISO/TS 15066 que condicionam proteções à avaliação de risco e depois buscaram artigos alinhados a cada uma, priorizando periódicos de robótica e de segurança. A análise percorre as cláusulas sobre o local de trabalho colaborativo, a operação colaborativa e os modos de operação, e organiza a proposta nas três fases da ISO 31000: identificação, análise e avaliação do risco."
findings:
  - "A revisão encontrou que a literatura tende a proteções de hardware ou de controle voltadas a evitar colisões, desvinculadas de processos estruturados de análise de perigos e avaliação de risco."
  - "Os limiares das funções de parada e de velocidade variam de estudo para estudo e não se ligam à avaliação de risco. Um estudo citado usa 100 mm/s, abaixo dos limiares da norma."
  - "Para a limitação de potência e força, a norma fixa limites de dor para 29 regiões do corpo. A literatura privilegia sensores de força e peles táteis, com pouca evidência de ligação com a avaliação de risco formal, e o limiar depende do processo: uma ferramenta pontiaguda muda o risco."
  - "Os autores propõem um quadro em três fases baseado na ISO 31000 e sugerem métodos como HAZOP, análise hierárquica de tarefas e UML, porque as listas de verificação das normas não são exaustivas."
  - "A norma adota 1,6 m/s como velocidade do operador em direção ao robô. Como essa velocidade depende do comportamento, os autores propõem incluir na análise estresse, fadiga, falta de concentração e medo."
limitations: "A revisão não segue protocolo sistemático nem informa quantos artigos analisou, e o quadro proposto não foi aplicado a um caso. Os autores reconhecem que o HAZOP gera um número de cenários difícil de tratar em tarefas complexas. O estudo é anterior à edição de 2025 da ISO 10218 e usa a ISO 31000 como base."
---
