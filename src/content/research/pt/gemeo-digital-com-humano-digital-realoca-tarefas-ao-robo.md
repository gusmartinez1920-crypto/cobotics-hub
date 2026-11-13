---
title: "Um gêmeo digital com humano digital passa ao robô as peças que mais pesam para o trabalhador"
description: "Uma prova de conceito mede o corpo inteiro do trabalhador, prevê atrasos na separação de peças e, quando o atraso passa de um limite, transfere ao robô as peças de maior carga física."
translationKey: maruyama2021
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O sistema calcula a carga física de cada movimento do trabalhador e usa esse valor para escolher quais tarefas passar ao robô."
paper:
  title: "Digital Twin-Driven Human Robot Collaboration Using a Digital Human"
  authors:
    - "Tsubasa Maruyama"
    - "Toshio Ueshiba"
    - "Mitsunori Tada"
    - "Haruki Toda"
    - "Yui Endo"
    - "Yukiyasu Domae"
    - "Yoshihiro Nakabo"
    - "Tatsuro Mori"
    - "Kazutsugu Suita"
  year: 2021
  venue: "Sensors"
  doi: "10.3390/s21248266"
  url: "https://doi.org/10.3390/s21248266"
  openAccess: true
  license: "CC BY"
whyItMatters: "Gêmeos digitais de células com robô costumam modelar bem a máquina e mal a pessoa. Este trabalho inclui um modelo detalhado do corpo do trabalhador e calcula o esforço em cada articulação, em vez de usar índices rápidos de postura. Mostra uma forma de ligar ergonomia e programação da produção em tempo real, e também o que ainda falta para levar isso a uma fábrica."
method: "Os autores desenvolveram e demonstraram um sistema com três módulos ligados por comunicação sem fio. O primeiro é um humano digital com 48 graus de liberdade, ajustado ao corpo do trabalhador e alimentado por captura óptica de movimento com 16 câmeras e 37 marcadores na roupa; ele calcula o torque nas articulações. O segundo é o modelo virtual de um robô móvel. O terceiro prevê o tempo de ciclo e realoca peças do trabalhador para o robô. O cenário foi a separação de peças em 40 caixas, com uma demonstração ao vivo com um operador, em 8 ciclos de 40 peças, e uma validação com dados que imitam três perfis de atraso."
findings:
  - "Os autores definem o gêmeo digital por quatro propriedades: individualizado, de alta fidelidade, em tempo real e controlável."
  - "A regra de realocação é acionada pelo atraso: quando o atraso previsto do trabalhador atinge um limite, as peças que exigem mais torque do tronco ou do ombro esquerdo vão para o robô, uma a uma, até o atraso cair."
  - "Na demonstração, a previsão do tempo de ciclo errou em média 9 ± 11 segundos, contra 33 ± 7 segundos do plano inicial. Com limite de 20 segundos, o sistema transferiu ao robô a peça de maior carga física entre as que podiam ser realocadas."
  - "Na validação com dados simulados, a previsão foi mais precisa que o plano inicial em todas as condições (p < 0,01). A carga física média transferida ao robô foi significativamente maior com a restrição ergonômica do que sem ela."
  - "O cálculo da postura leva 15 milissegundos e a avaliação ergonômica, 138 milissegundos, num notebook. O sistema roda de cerca de 6 a 50 quadros por segundo."
limitations: "O sistema foi testado com pessoas que não trabalham em fábrica, e o artigo não informa quantas participaram. Só a carga física entra no modelo; os autores reconhecem que a carga mental e condições individuais, como dor lombar, ficaram de fora. A ergonomia só atua depois que o trabalhador se atrasa, a segurança física não foi tratada, e a captura óptica com marcadores é cara e difícil de usar numa fábrica real."
---
