---
title: "Reduzir a velocidade ou recuar: duas estratégias de segurança testadas em realidade virtual"
description: "Num simulador de realidade virtual, estudantes trabalharam ao lado de um robô que reduzia a velocidade ou recuava quando a pessoa se aproximava. Nenhuma das duas estratégias se mostrou claramente superior."
translationKey: vosniakos2019
topic: safety
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo compara, em simulação, duas estratégias para evitar que o robô atinja a pessoa com força capaz de causar dor."
paper:
  title: "Exploration of two safety strategies in human-robot collaborative manufacturing using Virtual Reality"
  authors:
    - "George-Christopher Vosniakos"
    - "Lucas Ouillon"
    - "Elias Matsas"
  year: 2019
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2020.01.066"
  url: "https://doi.org/10.1016/j.promfg.2020.01.066"
whyItMatters: "Ajustar os parâmetros de segurança numa célula real custa tempo e expõe pessoas. O estudo mostra como a realidade virtual permite testar esses ajustes antes da implementação física e medir o efeito sobre colisões e ritmo de trabalho. Também deixa visível o conflito entre segurança e produtividade."
method: "Os autores usaram um ambiente virtual com capacete imersivo e rastreamento do corpo, que reproduz uma célula de laminação manual de fibra de carbono para peças aeroespaciais com um braço robótico suspenso. As duas estratégias disparam quando a pessoa fica a menos de 1,5 m do robô e o tempo até a colisão é menor que 1,5 s. Os limites de velocidade por região do corpo foram calculados pelo modelo de colisão da ISO/TS 15066. Houve quatro conjuntos de testes, dois com 22 e dois com 11 estudantes do último ano de Engenharia Mecânica, com registro de velocidade média, tempo de colaboração, disparos e colisões, mais um questionário."
findings:
  - "Os limites de velocidade calculados para o robô variam muito conforme a região do corpo: de 1897 mm/s para mão e dedos a 313 mm/s para a perna e 322 mm/s para o tórax."
  - "Com a velocidade reduzida a 25% e espera de 1 s, as duas estratégias se equivalem em velocidade média e número de disparos. Mas 25% (440 mm/s) ainda excede a maior parte dos limites calculados, e recuar teve menos colisões, sobretudo as dolorosas."
  - "Com espera de 2 s e velocidade reduzida a 20%, recuar teve menos disparos e colisões e maior tempo de colaboração. Não houve colisão perigosa em nenhuma das duas estratégias."
  - "Colorir em graus o volume de movimento do robô, para indicar o quanto a pessoa invadia a área, não reduziu disparos nem colisões. Um fator de redução variável com a distância deu mais velocidade, mas mais colisões, e os autores o julgaram inaceitável como está."
  - "Cerca de 15% dos participantes não concluíram os testes iniciais por tontura forte; os autores desativaram parte do rastreamento do tronco para resolver o problema."
limitations: "Não há testes estatísticos, e a amostra é pequena e formada só por estudantes de engenharia; os próprios autores dizem que a leve vantagem que atribuem a reduzir a velocidade ainda precisa de prova com amostra maior. O robô simulado é um braço industrial convencional, não um cobot, e tudo ocorre em realidade virtual, sem contato físico."
---
