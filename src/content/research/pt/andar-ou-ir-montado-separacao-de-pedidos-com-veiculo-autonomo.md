---
title: "Andar ou ir montado? Como planejar a rota de quem separa pedidos com um veículo autônomo"
description: "Os autores criam um método que decide a rota e onde o separador sobe no veículo autônomo ou anda. Num centro de distribuição real, o tempo de percurso caiu 17,4% em média, com menos flexões de joelho."
translationKey: tutam2024
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O modelo inclui entre os objetivos reduzir as flexões de joelho de quem separa pedidos, ligadas a más posturas e fadiga, além do tempo de percurso."
paper:
  title: "To walk or not to walk? Designing intelligent order picking warehouses with collaborative robots"
  authors:
    - "Mahmut Tutam"
    - "René De Koster"
  year: 2024
  venue: "Transportation Research Part E: Logistics and Transportation Review"
  doi: "10.1016/j.tre.2024.103696"
  url: "https://doi.org/10.1016/j.tre.2024.103696"
  openAccess: true
whyItMatters: "Em armazéns de paletes, o separador sobe e desce do veículo cerca de 1.200 vezes por turno, segundo um fabricante citado, o que cansa e força os joelhos. O estudo mostra que planejar em conjunto a rota e os trechos a pé reduz ao mesmo tempo o tempo e esse esforço. O veículo aqui é uma empilhadeira de separação autônoma, não um braço colaborativo: a colaboração é a divisão do percurso entre andar e ir montado."
method: "É um trabalho de pesquisa operacional. Os autores formularam um modelo que minimiza o tempo total de percurso e o número de vezes que a pessoa sobe no veículo, com uma penalidade de tempo para cada subida. Como o modelo exato só resolve listas pequenas, criaram um algoritmo de programação dinâmica que resolve qualquer tamanho. Compararam sete estratégias por simulação, com 1.000 listas aleatórias por tamanho, em armazéns de 1 ou 2 blocos com 10 ou 20 corredores, e aplicaram o método a 102 listas reais de um centro de distribuição de bebidas nos Países Baixos."
findings:
  - "A rota e os pontos de subida e descida precisam ser decididos juntos: o tempo entre dois locais depende de a pessoa ter chegado a pé ou montada."
  - "O programa de otimização comercial resolveu listas de até 30 coletas em até 7.200 segundos. O algoritmo proposto levou no máximo 0,025 segundo para qualquer tamanho, com resultados idênticos nas listas pequenas."
  - "Na simulação com um bloco e 10 corredores, a estratégia ótima reduziu o tempo entre 9,5% e 27,9% (média de 18,2%) em relação à prática da empresa, em que a pessoa vai sempre montada. Com 20 corredores, a média foi de 13,4%."
  - "No caso real, a estratégia ótima reduziu o tempo entre 14,5% e 24,1% (média de 17,4%). Manter a rota atual e apenas escolher onde andar já deu 13,3% em média. As flexões de joelho caíram de 40% a 80%, conforme o tamanho da lista."
  - "Há troca entre tempo e ergonomia, mas com custo pequeno em certa faixa: numa lista de 60 coletas, cortar um quarto das flexões (de 40 para 30) piorou o tempo em apenas 1%."
limitations: "A ergonomia entra só como contagem de flexões de joelho convertida em alguns segundos de penalidade, valor fixado pela empresa, sem medida biomecânica nem de fadiga ao longo do turno. O modelo despreza o tempo de coleta e supõe velocidade constante e instruções sempre seguidas. O estudo não analisa o risco de colisão entre a pessoa e o veículo autônomo."
---
