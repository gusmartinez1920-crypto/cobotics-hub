---
title: "Modelo de linguagem e realidade aumentada para guiar a montagem com cobots"
description: "Os autores propõem um sistema que une modelo de linguagem e óculos de realidade aumentada para orientar a montagem com cobots de uma cabine eletrônica aeroespacial, testado com 20 participantes."
translationKey: nie2025
topic: industry-5-0
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "Probing Augmented Intelligent Human–Robot Collaborative Assembly Methods Toward Industry 5.0"
  authors:
    - "Qingwei Nie"
    - "Yiping Shen"
    - "Ye Ma"
    - "Shuqi Zhang"
    - "Lujie Zong"
    - "Ze Zheng"
    - "Yunbo Zhangwa"
    - "Yu Chen"
  year: 2025
  venue: "Electronics"
  doi: "10.3390/electronics14153125"
  url: "https://doi.org/10.3390/electronics14153125"
  openAccess: true
  license: "CC BY"
whyItMatters: "A montagem em espaços apertados depende muito da memória e da decisão do operador, e o cobot sozinho não resolve isso. O estudo mostra uma forma de levar o conhecimento do processo até a pessoa, no campo de visão, e de usar um modelo de linguagem para sugerir quem faz o quê. Também registra um ponto de atenção: o cobot sem apoio adequado tendeu a aumentar o estresse do operador."
method: "É uma proposta técnica validada em um único estudo de caso: a montagem de uma cabine eletrônica aeroespacial, em uma bancada com dois cobots com visão, um para pegar peças e outro para aparafusar. As tarefas foram descritas em fichas estruturadas, consultadas por um modelo de linguagem ajustado ao domínio, e a orientação aparece em óculos de realidade aumentada comandados por voz, gesto ou olhar. Os autores avaliaram as respostas do modelo, o rastreamento de posição em três cenários e compararam quatro formas de montagem com 20 participantes."
findings:
  - "O módulo de raciocínio não só dá instruções: ele analisa se a tarefa exige colaboração e decide de forma autônoma a divisão de trabalho entre operadores e cobots. Com o retorno da inspeção de qualidade, sugere mudanças como a rota dos cabos ou a sequência de fixação."
  - "Depois do ajuste ao domínio, em 100 pares de pergunta e resposta, a precisão na explicação de termos subiu de 69,5% para 97,4% e a correção das respostas, de 62,4% para 90,2%."
  - "Na comparação com dois modelos de linguagem de uso geral, o sistema teve precisão média de 86% nas três categorias de perguntas, com vantagem maior em orientação de montagem e otimização de qualidade."
  - "No rastreamento de posição das peças, os autores não observaram perda de rastreamento nem reconhecimento errado relevante sob mudanças de postura, de ponto de vista e oclusões."
  - "No experimento com 20 participantes em quatro grupos, a colaboração básica com cobot melhorou a eficiência e a taxa de aprovação em relação à montagem manual, mas tendeu a aumentar o estresse do operador. O sistema proposto reduziu o tempo, melhorou a qualidade e aliviou o estresse."
limitations: "A validação usa um único caso aeroespacial, com cinco pessoas por grupo e estresse medido por um questionário próprio. O rastreamento foi avaliado de forma qualitativa, sem erro numérico. Os próprios autores apontam que o sistema depende de fichas de processo completas e corretas e que o rastreamento piora com oclusões em movimento e variação de luz; o estudo não discute a segurança de deixar um modelo de linguagem repartir as tarefas."
---
