---
title: "Um gêmeo digital acompanha uma célula com cobot do projeto à operação, num caso real de montagem"
description: "Num caso de montagem de baterias na Dinamarca, um gêmeo digital serviu para projetar, programar e ajustar uma célula com cobot UR5. Em 30 montagens, registrou 14 colisões entre robô e pessoa."
translationKey: malik2021
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 9
    why: "O caso mostra como uma empresa de montagem usa um gêmeo digital para projetar, comissionar e ajustar uma célula com cobot ao longo do ciclo de vida."
paper:
  title: "Digital twins for collaborative robots: A case study in human-robot interaction"
  authors:
    - "Ali Ahmad Malik"
    - "Alexander Brem"
  year: 2021
  venue: "Robotics and Computer-Integrated Manufacturing"
  doi: "10.1016/j.rcim.2020.102092"
  url: "https://doi.org/10.1016/j.rcim.2020.102092"
whyItMatters: "Modelos de simulação costumam ser abandonados quando a célula começa a produzir. Este caso mostra, passo a passo, como manter o modelo vivo: do leiaute ao programa do robô e aos dados de operação que voltam para corrigir o projeto. É um roteiro concreto para quem quer montar o gêmeo digital de uma célula colaborativa."
method: "É um estudo de caso único com demonstrador físico. Os autores primeiro propõem um modelo conceitual: gêmeo digital e gêmeo físico que evoluem juntos, um ciclo de avaliação em sete passos e cinco formas do gêmeo conforme a fase (projeto, desenvolvimento, comissionamento, operação e manutenção). Depois aplicam o modelo à montagem de um pacote de baterias com oito tarefas, antes feita por dois operadores; quatro tarefas passaram ao robô. O gêmeo foi construído num software de simulação com um cobot UR5, um manequim digital e sensores virtuais; o programa do robô foi gerado no modelo e transferido ao robô real, que enviou dados a uma nuvem durante 30 montagens."
findings:
  - "Os autores defendem que o gêmeo digital nasça já na fase de ideias e evolua em paralelo ao sistema físico. Ele deve servir a todo o ciclo de vida, e não só ao projeto."
  - "Na fase de projeto, o modelo permitiu testar alcance, colisões e postura. O volume percorrido pelo robô orientou um leiaute com o mínimo de atividade humana nessa zona."
  - "Ligar o robô real, colocado num espaço vazio, ao modelo virtual com os equipamentos e a pessoa virtual permitiu achar colisões e ajustar o leiaute com segurança antes da montagem da célula."
  - "Em 30 montagens, com ciclo de cerca de 87 segundos, robô e pessoa colidiram 14 vezes, e o robô esperou o operador por mais de 20 segundos em 8 ocasiões. Com esses dados, o gêmeo estimou 326 montagens por turno de 8 horas."
  - "Os dados levaram a reposicionar os dispositivos de fixação e a criar uma parede virtual que limita o avanço do robô. Os autores alertam que não vale a pena modelar tudo: cada dado a mais tem custo e só compensa se gerar valor."
limitations: "É um caso único, sem estudo de longo prazo e sem considerar diferenças culturais, como os próprios autores reconhecem. A pessoa entra no modelo como manequim e trajetória capturada por câmera; fadiga, estresse e carga biomecânica não foram medidos. As colisões são tratadas como perda de produtividade, sem análise de risco nem referência a limites de contato."
---
