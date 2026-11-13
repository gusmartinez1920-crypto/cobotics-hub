---
title: "Cobot para buscar peças grandes na montagem: a conta de ergonomia e retorno"
description: "Um modelo de apoio à decisão combina tempo de coleta, divisão de tarefas, ergonomia e retorno do investimento. Num caso simulado com 26 tarefas, o cobot reduziu o tempo total de 553 s para 507 s."
translationKey: faccio2026
topic: implementation
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O modelo inclui a exposição ergonômica dos operadores como objetivo e a converte em valor na análise do investimento em cobot."
paper:
  title: "Can collaborative robotics help in large parts picking for assembly? An ergonomics/economics model"
  authors:
    - "Maurizio Faccio"
    - "Irene Granata"
    - "Riccardo Minto"
  year: 2026
  venue: "The International Journal of Advanced Manufacturing Technology"
  doi: "10.1007/s00170-026-18980-z"
  url: "https://doi.org/10.1007/s00170-026-18980-z"
whyItMatters: "Justificar um cobot só pelo ganho de produtividade nem sempre fecha a conta. O estudo mostra uma forma de incluir a ergonomia no cálculo do investimento e indica onde o cobot tende a render mais: nas tarefas sem valor agregado e desgastantes, como buscar peças grandes atrás do operador. É útil na fase inicial do projeto de uma estação de montagem."
method: "Os autores estimam o tempo manual de coleta e posicionamento de cada peça conforme o local onde ela fica guardada e suas características. Esses tempos entram num modelo de otimização que divide as tarefas entre dois operadores e um cobot, com dois objetivos: o tempo total do ciclo e um índice de postura (REBA) ponderado pelo tempo. Uma camada econômica calcula o tempo de retorno simples do investimento. O modelo foi aplicado a um caso representativo de 26 tarefas, com leiaute e tempos do robô conferidos em simulação."
findings:
  - "Só com operadores, o ciclo levou 553 s. Otimizando apenas o tempo com o cobot, caiu para 493 s, cerca de 11% a menos, mas a melhora ergonômica ficou quase toda em um dos dois operadores."
  - "A solução que equilibra tempo e ergonomia ficou em 507 s e reduziu o índice de postura ponderado de 2,45 para 1,91 em um operador e de 2,05 para 0,73 no outro."
  - "Mesmo com o cobot 50% mais lento, o ciclo ficou em 516 s, abaixo do cenário só humano. Nesse caso, o modelo devolve aos operadores parte das coletas atrás deles."
  - "A margem por unidade é o principal fator de viabilidade quando as margens são baixas. Atribuir valor monetário à ergonomia amplia a região em que o retorno é aceitável, sobretudo com investimento alto."
  - "Os autores recomendam usar o cobot nas tarefas sem valor agregado e ergonomicamente críticas, não na montagem em si, e compartilhá-lo entre estações para aumentar seu uso."
limitations: "Os próprios autores tratam o caso como demonstração do método, não como validação industrial: tempos e índices de postura são supostos ou conferidos só em ambiente virtual. O modelo não inclui restrições de segurança, aceitação do trabalhador nem fadiga, e o cálculo de retorno é simples, sem desconto, impostos ou incerteza de demanda. O valor monetário da ergonomia é um parâmetro variado pelos autores, e o compartilhamento do cobot entre estações não foi modelado."
---
