---
title: "Prever onde o operador deixa a peça encurta o ciclo de coleta do cobot"
description: "Um algoritmo estatístico prevê onde o operador deposita a peça na esteira e deixa o cobot fotografar de mais perto. Em simulação, o tempo de coleta caiu em média 16% com dados históricos."
translationKey: sobaszek2026
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
paper:
  title: "Design and implementation of a predictive algorithm for collaborative robot programming"
  authors:
    - "Łukasz Sobaszek"
  year: 2026
  venue: "Scientific Reports"
  doi: "10.1038/s41598-025-34643-7"
  url: "https://doi.org/10.1038/s41598-025-34643-7"
whyItMatters: "A proposta ataca o tempo de ciclo de uma célula de pegar e colocar sem comprar equipamento novo: usa só software e os dados que o próprio robô já registra. É um exemplo simples de como a estatística do comportamento de quem trabalha na estação anterior pode ajustar o programa do cobot."
method: "O autor modela a posição em que a peça é deixada como uma variável aleatória, ajusta uma distribuição estatística para cada operador e, quando nenhuma serve, usa uma estimativa não paramétrica. Com a previsão, a câmera no punho do robô desce e cobre uma área menor. Os dados vieram de uma bancada de laboratório, com 5 operadores depositando 30 rolamentos cada. O robô, um UR10e, foi testado em simulação no RoboDK, com e sem a predição, usando os dados coletados e depois dados sintéticos de 5, 10 e 15 peças."
findings:
  - "Com os dados históricos de 30 peças, o tempo de conclusão caiu de cerca de 150,5 s para entre 121,5 e 131,2 s: redução média de 24,06 s (15,98%). A trajetória encurtou em média 9,59%."
  - "Com dados sintéticos, que incluem peças fora da área reduzida, a redução média de tempo ficou em torno de 10% (10,76% com 5 peças, 10,70% com 10 e 10,23% com 15)."
  - "A previsão permitiu baixar a altura de captura da câmera entre 177 e 238 mm, conforme o operador."
  - "O ganho foi maior quando uma distribuição paramétrica se ajustou aos dados do operador. Quanto mais peças caem fora da área reduzida, menor o ganho, mas em nenhum caso o tempo aumentou."
  - "O autor defende que a solução fique no software do robô, sem hardware adicional, e sugere que a trajetória menor pode reduzir desgaste e manutenção."
limitations: "O robô só foi simulado, e os dados vêm de uma bancada de laboratório com cinco operadores, não de uma linha de produção. O estudo não trata de segurança nem mede efeito algum sobre quem trabalha: o operador entra apenas como a posição em que deixa a peça. Peças irregulares e com várias orientações ficam para trabalhos futuros."
---
