---
title: "Um modelo de custo para balancear linhas de montagem com pessoas, cobots e garras"
description: "Os autores propõem um modelo matemático que distribui tarefas, pessoas, cobots e garras pelas estações de uma linha de montagem ao menor custo, e o ilustram com a montagem de um forno de 20 tarefas."
translationKey: demiralay2025
topic: implementation
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "A Cost-Effective Balancing Model for Human-Robot Collaborative Assembly Lines"
  authors:
    - "Yuksel Degirmencioglu Demiralay"
    - "Yakup Kara"
  year: 2025
  venue: "Procedia Computer Science"
  doi: "10.1016/j.procs.2025.02.001"
  url: "https://doi.org/10.1016/j.procs.2025.02.001"
whyItMatters: "Ao planejar uma linha com cobots, não basta decidir quem faz cada tarefa: é preciso definir em qual estação e com qual garra. O estudo mostra como colocar essas decisões num único modelo de otimização e quais custos entram na conta. Serve de ponto de partida para quem estuda o balanceamento de linhas com colaboração humano-robô."
method: "Os autores formularam um modelo de programação linear inteira mista para uma linha reta, de produto único e com tempos fixos. O modelo minimiza a soma dos custos de estação, de trabalhador, de cobot e de garra, respeitando o tempo de ciclo, a ordem das tarefas e o peso máximo de garras por cobot. Eles o aplicaram a um exemplo ilustrativo, a montagem de um forno rotativo elétrico de padaria com 20 tarefas e ciclo de 60 minutos, com custos de referência de empresas de porte médio da Turquia."
findings:
  - "Os autores afirmam que nenhum estudo anterior de balanceamento de linhas incluiu o custo da garra junto com a alocação de pessoas e cobots às estações."
  - "O modelo usa quatro custos: trabalhador (salário, alimentação, serviço), cobot (energia, manutenção, reparo), estação (espaço, limpeza, renovação de equipamento) e garra. Um cobot pode levar várias garras, desde que o peso total não passe de sua carga máxima."
  - "No exemplo, os custos mensais adotados foram 750 dólares por trabalhador, 250 por cobot, 30 por estação e 1 por garra."
  - "Das 20 tarefas, 14 ficaram com pessoas (corte, solda, limpeza e parte elétrica) e 6 com cobots (encaixe de paredes, grupo rotativo, isolamento e tampas externas). Essa divisão é dado de entrada do modelo."
  - "A solução ótima abriu quatro estações, com custo de 0,3353 dólar por minuto. Pessoa e cobot trabalham ora em paralelo, ora em sequência, e o cobot fica parado em alguns momentos por causa da ordem das tarefas."
limitations: "O exemplo é ilustrativo, com valores definidos pelos autores, sem dados de empresa nem comparação com outros modelos. O modelo trata o trabalhador apenas como custo: não inclui ergonomia, carga de trabalho nem requisitos de segurança. O custo do cobot é só o operacional mensal, sem compra nem integração."
---
