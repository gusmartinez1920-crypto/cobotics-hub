---
title: "Gêmeo digital mede a fadiga do operador e indica como ajustar o posto com cobot"
description: "Os autores combinam olhos, postura e sinais musculares em um índice de fadiga física e usam um gêmeo digital para comparar configurações de um posto de montagem com cobot."
translationKey: wang2026
topic: industry-5-0
pillars: [cobot, twin, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo mede a fadiga física do operador na montagem com cobot e usa o resultado para ajustar o posto de trabalho e reduzir o esforço."
paper:
  title: "Fatigue detection and optimisation method for human–robot collaborative assembly based on digital twin"
  authors:
    - "Haoqi Wang"
    - "Yongle Wang"
    - "Hao Li"
    - "Shuo Ji"
    - "Gen Liu"
    - "Cunbo Zhuang"
    - "Xiaoyu Wen"
    - "Chunya Sun"
    - "WenChao Yang"
    - "Wenxiang Ren"
  year: 2026
  venue: "Digital Twin"
  doi: "10.1080/27525783.2025.2610579"
  url: "https://doi.org/10.1080/27525783.2025.2610579"
  openAccess: true
  license: "CC BY-NC"
whyItMatters: "A fadiga física costuma ser avaliada por uma única medida e sem considerar que as pessoas são diferentes. Este estudo mostra como juntar câmeras e sensores musculares em um gêmeo digital do operador para apontar o posto mais pesado da linha e testar ajustes de altura, distância e apoio. É um exemplo concreto de sensores vestíveis e simulação a serviço da ergonomia em uma célula colaborativa."
method: "Os autores modelaram o processo de montagem de um diferencial com nove peças para localizar os postos de maior carga. No posto escolhido, mediram a fadiga por três fontes: fechamento dos olhos e ângulos das articulações, captados por câmera, e sinais elétricos de dois músculos (eletromiografia de superfície), classificados por uma rede neural treinada com 10 voluntários. Os três índices foram ponderados e fundidos em uma nota de 0 a 1. Em laboratório, com um cobot leve de bancada, compararam três configurações do posto com três participantes homens."
findings:
  - "A rede neural que classifica os sinais musculares teve acurácia de 0,947, acima da regressão logística (0,913), da máquina de vetores de suporte (0,919) e de um limiar simples (0,731)."
  - "Em uma sessão de 20 minutos no posto de alta carga, 65,7% dos segmentos do músculo do ombro e 56,2% dos segmentos do músculo das costas foram classificados como fadiga."
  - "Na fusão dos índices, os sinais musculares receberam o maior peso (0,56), seguidos da postura (0,32) e dos olhos (0,12)."
  - "A configuração com o melhor resultado, que muda a altura do ponto de trabalho, a distância da cadeira, o apoio do braço e a folga para os joelhos, deu a menor nota de fadiga para os três participantes: 0,49, 0,51 e 0,47, contra 0,73, 0,56 e 0,59 na configuração original."
  - "O sistema só gera recomendações depois da análise: a fadiga ainda não entra no planejamento das tarefas do robô, e o comportamento do cobot não muda."
limitations: "A validação usa um único cenário, sentado e com os braços elevados, com amostra pequena e homogênea: voluntários jovens no treino e três homens na comparação. Tudo foi feito em laboratório, sem testar suor, deslocamento dos eletrodos ou interferência elétrica de fábrica. O ganho medido vem de ajustes físicos do posto, não de uma mudança na colaboração com o robô, que é um braço leve de pesquisa e ensino."
---
