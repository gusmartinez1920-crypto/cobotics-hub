---
title: "Avaliar o risco em tempo real para o robô desviar em vez de só parar"
description: "Os autores propõem um índice de risco calculado em tempo real e um robô que desacelera ou desvia conforme esse índice. Em simulação, o método reagiu em 159 ms, perto do monitoramento convencional (147 ms)."
translationKey: liu2020
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo propõe avaliar em tempo real o risco para o operador que divide o espaço com um robô industrial e fazer o robô reagir antes do contato."
paper:
  title: "Dynamic risk assessment and active response strategy for industrial human-robot collaboration"
  authors:
    - "Zhihao Liu"
    - "Xinran Wang"
    - "Yijie Cai"
    - "Wenjun Xu"
    - "Quan Liu"
    - "Zude Zhou"
    - "Duc Truong Pham"
  year: 2020
  venue: "Computers & Industrial Engineering"
  doi: "10.1016/j.cie.2020.106302"
  url: "https://doi.org/10.1016/j.cie.2020.106302"
  openAccess: true
whyItMatters: "O monitoramento convencional de velocidade e separação para o robô sempre que a pessoa se aproxima, o que protege mas interrompe o trabalho. Este estudo mostra uma alternativa em que o robô reduz a velocidade ou muda de trajetória conforme o risco do momento, e em que o operador vê a zona de risco por realidade aumentada."
method: "Os autores partem dos indicadores de risco da ISO/TS 15066 e os dividem em dois tipos: os inerentes, pontuados antes por especialistas com uma matriz de risco, e os dinâmicos (velocidade do robô, movimento e posição do operador), avaliados em tempo real. Duas câmeras de profundidade acompanham o esqueleto da pessoa. A validação é feita principalmente por simulação de uma tarefa de transporte e processamento de peças, com um obstáculo esférico no lugar da pessoa, e por comparação com dois métodos de monitoramento de velocidade e separação. Os autores descrevem ainda a integração com um robô ABB e óculos de realidade aumentada."
findings:
  - "O modelo calcula um índice de risco para qualquer ponto do espaço de trabalho, a partir da separação mínima entre a mão da pessoa e a ponta da ferramenta, estendida a todos os elos do robô."
  - "O índice divide o espaço em três estados: sem perigo (abaixo de 0,4), em que o robô segue a tarefa em velocidade normal; alerta (de 0,4 a 0,62), em que desacelera; e perigo (acima de 0,62), em que passa a desviar. Os limites foram definidos por especialistas e pelo cenário do experimento."
  - "Na simulação com obstáculo e sem a estratégia, o índice ultrapassou o limite de perigo em 1,1 s. Com a resposta ativa, a colisão foi evitada, com tempo de tarefa maior."
  - "O tempo médio de reação foi de 147 ms no monitoramento convencional, 162 ms num método de três modos da literatura e 159 ms no método proposto. O convencional é o mais rápido porque só freia; segundo os autores, o método proposto afeta menos a produtividade."
  - "Se a pessoa fica parada, o robô a trata como obstáculo fixo e replaneja a trajetória. Um gesto da pessoa leva o robô ao modo de interação."
limitations: "A validação é sobretudo simulada, e o obstáculo é uma esfera, não uma pessoa; o sistema físico é descrito sem medidas. Os pesos dos indicadores e os limites do índice são subjetivos, o que os próprios autores apontam como ponto a melhorar. O estudo não mede o efeito das desacelerações nem da realidade aumentada sobre o operador."
---
