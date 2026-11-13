---
title: "Um robô que leva em conta a confiança da pessoa decide melhor em equipe"
description: "Os autores criaram um modelo de decisão em que o robô estima a confiança da pessoa e planeja suas ações com ela em mente. Em testes, a equipe rendeu mais e a pessoa interveio menos."
translationKey: chen2020
topic: human-factors
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "Trust-Aware Decision Making for Human-Robot Collaboration: Model Learning and Planning"
  authors:
    - "Min Chen"
    - "Stefanos Nikolaidis"
    - "Harold Soh"
    - "David Hsu"
    - "Siddhartha Srinivasa"
  year: 2020
  venue: "ACM Transactions on Human-Robot Interaction"
  doi: "10.1145/3359616"
  url: "https://doi.org/10.1145/3359616"
whyItMatters: "Quem confia de menos no robô intervém sem necessidade; quem confia demais deixa de intervir quando deveria. O estudo mostra que dá para modelar a confiança e usá-la no planejamento do robô, e que buscar confiança máxima não é o mesmo que buscar o melhor resultado. A tarefa é doméstica, não industrial: a aplicação à fábrica ainda está por demonstrar."
method: "O modelo trata a confiança como uma variável oculta, numa escala de 1 a 7, dentro de um processo de decisão com observação parcial (POMDP). A tarefa é tirar da mesa três garrafas de água, uma lata e uma taça de vinho; a cada passo a pessoa deixa o robô agir ou intervém. Os autores aprenderam o modelo com dados de 222 participantes online, que respondiam a um questionário de confiança a cada passo. Depois compararam o robô que considera a confiança com um que a ignora, online com vídeos (201 participantes válidos) e com um braço robótico real (20 participantes). Falhas do robô foram estudadas só em simulação."
findings:
  - "A confiança sobe quando o robô acerta e cai quando falha; quanto maior a confiança, maior a queda após uma falha. As pessoas intervêm mais nos objetos de maior risco, como a taça, e menos quando confiam mais."
  - "A equipe teve desempenho melhor com o robô que considera a confiança, tanto online quanto com o robô real, com diferença estatisticamente significativa nos dois casos."
  - "A vantagem veio de menos intervenções. Com o robô real, não houve intervenção na lata e houve 71% menos na taça. Esse robô começa pelas garrafas, de baixo risco, e deixa a taça para o fim; o outro pega primeiro a taça, que vale mais."
  - "O mesmo resultado pesa mais na confiança quando ocorre no início da tarefa. Um modelo que considera isso faz o robô investir mais cedo em ganhar confiança."
  - "Em simulação com falhas prováveis na taça, o robô pode falhar de propósito nas garrafas para baixar a confiança de alguém confiante demais e levá-lo a intervir. A política que maximiza o desempenho superou a que maximiza a confiança."
limitations: "A tarefa é doméstica e simples, com um braço assistivo, e nos testes com pessoas o robô sempre acertava; as falhas só foram simuladas. Os autores reconhecem que a confiança foi reduzida a um único número, que as capacidades do robô foram supostas fixas e que medir a confiança por questionário a cada ação não serve para tarefas maiores. O estudo não mede carga de trabalho nem estresse da pessoa."
---
