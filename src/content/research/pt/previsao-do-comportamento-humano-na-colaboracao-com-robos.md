---
title: "Como o robô prevê o que a pessoa vai fazer: três famílias de métodos comparadas"
description: "Uma revisão de 180 artigos compara três formas de prever o comportamento humano no trabalho com robôs: modelos baseados em mecanismo, modelos baseados em dados e a fusão dos dois."
translationKey: du2026
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "A revisão trata a previsão do comportamento humano como meio de evitar colisões e lesões de quem trabalha perto do robô, e inclui fadiga e carga de trabalho."
paper:
  title: "Towards seamless and safe human-robot collaboration in Industry 5.0: advances in human behaviour prediction"
  authors:
    - "Yuyang Du"
    - "Bi Zhang"
    - "Chen Zheng"
    - "Yunlong Tang"
  year: 2026
  venue: "International Journal of Production Research"
  doi: "10.1080/00207543.2026.2639732"
  url: "https://doi.org/10.1080/00207543.2026.2639732"
whyItMatters: "Para trabalhar perto de uma pessoa sem bater nela, o robô precisa antecipar seus movimentos e intenções. A revisão mostra o que cada tipo de método entrega em dependência de dados, transparência e segurança, o que ajuda a escolher uma abordagem e a desconfiar de promessas de segurança obtida só por aprendizado."
method: "Os autores buscaram no Google Scholar e na Web of Science artigos em inglês de 2010 a 2025, com uma sequência de busca para cada família de métodos. A busca de janeiro de 2025 trouxe 524 e 1.687 registros; a triagem deixou 282 e a leitura completa, somada à busca nas referências, chegou a 180 artigos. Os estudos foram tabulados por cenário, aplicação, tipo de dado e modelo, e os autores também revisaram 10 bases de dados e propuseram um quadro unificado."
findings:
  - "A revisão separa dois cenários: a colaboração próxima (entrega de peças, montagem, guiagem física), em que o robô prevê a meta ou a ação do trabalhador, e a navegação social, em que um robô móvel procura uma trajetória segura perto das pessoas."
  - "Os métodos baseados em mecanismo (cinemática do corpo e do movimento, modelo de força social) dependem pouco de dados, são fáceis de interpretar e têm segurança por projeto, mas exigem conhecimento especialista e generalizam mal. Os baseados em dados (inferência probabilística e aprendizado profundo) dependem muito de dados, são pouco interpretáveis e têm segurança difícil de garantir."
  - "A fusão usa o mecanismo biológico ou cognitivo (cinemática, ativação muscular, confiança, carga de trabalho) como restrição do modelo de dados. Nos artigos filtrados, ela cresceu nos últimos sete anos e superou os métodos baseados em dados de 2022 a 2024, mas suas garantias de segurança continuam empíricas."
  - "Segundo os autores, a principal limitação não é falta de técnicas, e sim de quadros unificados e centrados no humano: a previsão é tratada como módulo isolado de curto prazo, sem ligação com planejamento de tarefa, confiança ou aprendizado de longo prazo."
  - "Entre os desafios estão a variação entre pessoas e ao longo do tempo e a falta de bases de dados padronizadas: das 10 revisadas, poucas trazem dados cognitivos e todas menos uma usam sensores presos ao corpo. Os autores propõem um quadro em quatro camadas: dados de várias fontes, modelo físico do mundo, previsão por fusão e controle adaptativo."
limitations: "A revisão não avalia a qualidade dos estudos incluídos, e o quadro em quatro camadas é uma proposta ainda não testada. O conjunto mistura cobots industriais com robôs móveis, teleoperação e aplicações médicas, de modo que os resultados não valem só para a manufatura. O texto não discute como uma previsão aprendida entraria na avaliação de risco exigida pelas normas de segurança."
---
