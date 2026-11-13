---
title: "Um braço robótico impresso em 3D para o ensino: o que funcionou e o que falhou"
description: "Os autores construíram e testaram um braço robótico de baixo custo, impresso em plástico, para aulas de engenharia. Com três eixos montados, ele carregou 314 g; a detecção de colisão não funcionou."
translationKey: ananias2022
topic: education
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 4
    why: "O estudo desenvolve um braço robótico barato e replicável, pensado para aulas de laboratório nos cursos de engenharia."
paper:
  title: "A Low-Cost Collaborative Robot for Science and Education Purposes to Foster the Industry 4.0 Implementation"
  authors:
    - "Estevão Ananias"
    - "Pedro Dinis Gaspar"
  year: 2022
  venue: "Applied System Innovation"
  doi: "10.3390/asi5040072"
  url: "https://doi.org/10.3390/asi5040072"
whyItMatters: "Quem quer montar um robô para ensino ou pesquisa com pouco dinheiro encontra aqui um projeto detalhado e um relato franco dos problemas. O caso mostra que chamar um braço de colaborativo não basta: sem detecção de colisão confiável, o uso em aula pede cuidados que o estudo não discute."
method: "Desenvolvimento e teste de protótipo, sem alunos nem avaliação de aprendizagem. A estrutura partiu de um modelo aberto e foi impressa em plástico PLA; as juntas usam motores de passo, com um microcontrolador ESP32 por eixo e uma interface gráfica em MATLAB. A cinemática inversa é calculada por otimização por enxame de partículas, e uma rede neural deveria detectar colisões pela corrente dos motores. Os autores fizeram cinco ensaios, entre eles o de exatidão e repetibilidade pela norma ISO 9283, com 30 repetições."
findings:
  - "O braço completo, de seis eixos, não pôde ser montado por causa do peso. Todos os ensaios foram feitos com os três primeiros eixos, em velocidade reduzida."
  - "A carga útil máxima foi de 314 g com o braço estendido na horizontal. Com três eixos, o alcance foi de 434 mm na horizontal e 597 mm de altura."
  - "No ensaio pela ISO 9283, a exatidão de posição chegou a 0,170 mm e a repetibilidade a 0,3835 mm, nos piores casos. Os piores resultados ocorreram na velocidade mais alta testada."
  - "A detecção de colisão falhou: a rede neural, treinada com 290 dados, estimou correntes muito acima dos picos medidos, de modo que o robô não perceberia uma colisão. Como solução provisória, os autores fixaram um limite de corrente por eixo, igual ao máximo observado mais 2%."
  - "Os autores apontam como principal limitação as engrenagens de plástico, que podem se danificar com facilidade em colisões. O aquecimento do motor também dilatou uma engrenagem e a soltou do eixo."
limitations: "O uso em ensino é apenas proposto: não há disciplina, alunos nem resultados de aprendizagem. O robô foi testado com metade dos eixos e sem nenhum ensaio de trabalho junto com pessoas. Não houve avaliação de risco nem verificação de limites de força ou velocidade."
---
