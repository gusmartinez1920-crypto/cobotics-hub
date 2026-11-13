---
title: "Simular a colisão com o cobot antes de montar a célula"
description: "Os autores mediram colisões de um robô colaborativo variando seis parâmetros e descrevem um plug-in que calcula força e pressão de contato ainda no planejamento, antes de a célula existir."
translationKey: dombrowski2018
topic: safety
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo trata de como verificar, ainda no planejamento, se a força e a pressão de uma colisão entre robô e operador ficam dentro dos limites de segurança."
paper:
  title: "Simulation of human-robot collaboration by means of power and force limiting"
  authors:
    - "Uwe Dombrowski"
    - "Tobias Stefanak"
    - "Anne Reimer"
  year: 2018
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2018.10.028"
  url: "https://doi.org/10.1016/j.promfg.2018.10.028"
whyItMatters: "Hoje só se mede a força e a pressão de uma colisão depois que a célula está instalada, quando boa parte do investimento já foi feita. Se a medição reprova, resta reduzir a velocidade ou refazer a ferramenta. Fazer essa conta na simulação, com os dados de planejamento que já existem, antecipa o problema."
method: "O caso de uso é um parafusamento semiautomático numa linha de montagem de veículos, em que o robô aperta quatro parafusos no modo de limitação de potência e força (PFL). Num estudo experimental, um robô KUKA LBR iiwa colidiu com um medidor de força e pressão do instituto alemão IFA, variando velocidade, limite de força, massa e raio da ferramenta, configuração dos eixos e região do corpo, com cinco medições por série. Depois os autores descrevem um plug-in para o software Siemens Process Simulate que calcula força e pressão pelo método da massa refletida."
findings:
  - "Dos quatro modos colaborativos da ISO 10218, a limitação de potência e força é o único em que colisões inesperadas entre pessoa e robô são possíveis, e a medição real só pode ser feita ao fim do planejamento, com o sistema já em operação."
  - "A configuração dos eixos do robô pesa muito: a 400 mm/s, a força do contato transitório difere em quase 250 N entre as duas posturas testadas (ferramenta a 90° e a 45° do flange), com a mesma massa e a mesma geometria de ferramenta."
  - "A área de contato domina a pressão. A série com raio de 10 mm a 45° teve pressão cerca de 100 N/cm² maior que a série com raio de 25 mm a 90°, embora a força nesta última fosse cerca de 250 N maior."
  - "Os autores reduzem a simulação a três parâmetros críticos no ponto de colisão: massa refletida do robô e da ferramenta, velocidade e geometria da ferramenta. Todos saem dos dados de planejamento já existentes."
  - "Os autores relatam que as primeiras medições virtuais no caso de uso foram bem-sucedidas e pouparam ciclos de reprogramação."
limitations: "O artigo afirma que o plug-in funcionou, mas não apresenta comparação numérica entre valores simulados e medidos. Os testes usaram um único robô e uma única aplicação, e os próprios autores pedem ensaios com outros fabricantes e modelos mais precisos. A simulação calcula força e pressão, mas não substitui a avaliação de risco que define quais colisões podem ocorrer."
---
