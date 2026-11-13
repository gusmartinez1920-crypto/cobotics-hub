---
title: "Separação de pedidos com robôs móveis e pessoas quando os tempos são incertos"
description: "Os autores modelam a separação de pedidos em armazéns com robôs móveis e separadores humanos, com tempos incertos, e propõem um algoritmo que obteve o menor tempo total nos maiores casos simulados."
translationKey: cai2026
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "Human–Robot Collaborative Order Picking in Smart Warehouses with Fuzzy Transportation and Processing Time"
  authors:
    - "Zhiheng Cai"
    - "Ziyan Zhao"
    - "Yunuo Su"
    - "Zijie Yu"
  year: 2026
  venue: "Mathematics"
  doi: "10.3390/math14183295"
  url: "https://doi.org/10.3390/math14183295"
whyItMatters: "Em armazéns onde robôs móveis levam as prateleiras até a pessoa, o planejamento costuma supor tempos fixos de transporte e de separação, o que raramente vale na prática. O estudo mostra como planejar com tempos incertos. Vale notar que os robôs aqui são veículos que carregam prateleiras: a divisão de tarefas é sequencial, sem espaço compartilhado nem contato, e por isso o caso é de logística, não de cobot."
method: "Os autores escreveram um modelo matemático que decide em conjunto quais prateleiras buscar, a ordem de trabalho dos robôs, a estação de destino e a separação manual, com os tempos de transporte e de separação descritos por números difusos (mínimo, mais provável e máximo). Para resolvê-lo, combinaram uma busca global adaptativa com uma busca local em cinco vizinhanças. Testaram o algoritmo em sete casos sintéticos (6 a 50 prateleiras, 2 a 4 robôs, 2 estações, 10 a 44 pedidos), com dez execuções cada, contra cinco algoritmos conhecidos, e aplicaram testes estatísticos."
findings:
  - "No levantamento dos autores, nenhum estudo anterior tratava ao mesmo tempo da seleção de prateleiras, da programação dos robôs, da atribuição de estação, da separação manual e de tempos incertos."
  - "No maior caso, o algoritmo proposto chegou a um tempo total de conclusão de 109,50, entre 5,6% e 25,1% abaixo dos cinco algoritmos comparados. Num caso intermediário (41,91), a vantagem ficou entre 2,8% e 21,9%."
  - "O teste global indicou diferença entre os algoritmos (p < 0,001) e o proposto teve a melhor posição média. As comparações par a par, depois da correção estatística, não deram evidência conclusiva de superioridade."
  - "Nos dois casos menores, retirar partes do algoritmo quase não mudou o resultado. Nos maiores, a busca global foi a parte que mais fez falta: sem ela, o tempo do maior caso subiu de 109,50 para 123,41."
  - "Os autores apontam que os robôs reduzem a caminhada dos separadores, enquanto as pessoas cuidam dos produtos variados, difíceis de automatizar, e que distribuir o trabalho pela capacidade de cada estação pode equilibrar a carga entre elas."
limitations: "O modelo é estático: não considera pedidos que chegam em tempo real, pedidos urgentes nem falhas de robôs, como os autores reconhecem. Os tempos incertos são sintéticos, derivados de outro estudo, e os casos são pequenos (até 50 prateleiras, 4 robôs e 2 estações), sem validação em armazém real. A pessoa entra só como tempo de separação: fadiga, ergonomia e carga de trabalho ficam fora do modelo."
---
