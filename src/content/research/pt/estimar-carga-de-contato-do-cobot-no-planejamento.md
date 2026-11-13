---
title: "Como estimar a força de contato de um cobot antes de montar a aplicação"
description: "Os autores propõem estimar, ainda no planejamento, a carga que um cobot impõe ao corpo num contato, com um banco de ensaios de colisão automatizado e um banco de dados. É um protótipo, sem medições."
translationKey: schlotzhauer2022
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo trata de como verificar, antes da montagem, se o contato entre cobot e operador respeita os limites que marcam o início da dor ou da lesão."
paper:
  title: "Virtual Validation of Power and Force Limiting Setups in Human-Robot-Collaboration"
  authors:
    - "Andreas Schlotzhauer"
    - "Til Stotz"
    - "Ramez Awad"
    - "Werner Kraus"
  year: 2022
  venue: "Procedia CIRP"
  doi: "10.1016/j.procir.2022.05.073"
  url: "https://doi.org/10.1016/j.procir.2022.05.073"
whyItMatters: "Em aplicações com limitação de potência e força, o contato entre robô e pessoa é permitido desde que respeite limites biomecânicos. Hoje só dá para medir essa carga depois que a aplicação está montada, e o projeto pode ter de ser refeito. Uma estimativa no planejamento ajudaria a saber cedo se a velocidade e o tempo de ciclo desejados são viáveis."
method: "É uma proposta conceitual com protótipo, apresentada em conferência, sem dados experimentais. Num banco de ensaios, um robô industrial posiciona um dispositivo de medição que imita o corpo humano e um cobot leva um impactador modular contra ele. Variam-se posição e direção do contato, velocidade, carga útil, material e forma da superfície e a parte do corpo atingida. Os valores ficam num banco de dados por tipo de robô, e um sistema especialista sugere o conjunto de parâmetros seguro mais próximo."
findings:
  - "Segundo os autores, os maiores obstáculos à difusão da limitação de potência e força são a falta de uma descrição suficiente de como validar a aplicação contra os limites biomecânicos e a falta de uma estimativa inicial do tempo de ciclo. O artigo trata do segundo."
  - "Os autores relatam que o planejamento atual é feito por tentativa e erro: medir os contatos de um único robô toma cerca de um dia de trabalho de usuários experientes, mais quando os parâmetros precisam de ajuste, e envolve várias pessoas."
  - "Eles avaliam que as estimativas baseadas em modelos servem mal aos contatos em que o corpo fica prensado, porque é difícil modelar a detecção da colisão e a parada do robô. Por isso escolhem uma abordagem baseada em dados medidos."
  - "No sistema proposto, o usuário fixa um requisito (por exemplo, a velocidade exigida pelo tempo de ciclo) e pede o parâmetro livre (por exemplo, a maior carga útil admissível). A resposta vem como medida concreta: mudar o ângulo de aproximação, usar material mais macio ou restringir o contato a partes menos sensíveis do corpo."
  - "Os autores afirmam que os cobots são instalados com menos frequência que os robôs clássicos e supõem que a maioria opera atrás de cercas, aproveitada pela leveza e pela programação fácil, não pela sensibilidade."
limitations: "O artigo não traz nenhum resultado medido: a validação virtual do título é uma proposta. O protótipo tem estruturas de suporte rudimentares, ainda não mede pressão, e a análise dos dados e da incerteza de medição fica para trabalhos futuros. O operador aparece apenas como parte do corpo representada pelo dispositivo de medição."
---
