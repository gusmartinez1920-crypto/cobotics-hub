---
title: "Soldagem com robô e soldador: cada um faz o cordão que sabe fazer melhor"
description: "Os autores descrevem o conceito de uma célula de soldagem em que soldador e robô dividem as tarefas conforme suas habilidades, com programação simples e instruções projetadas sobre a peça."
translationKey: muller2017
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intro
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 9
    why: "O conceito mira pequenas e médias empresas de lotes pequenos, para as quais a automação completa da soldagem não compensa."
paper:
  title: "Skill-based Dynamic Task Allocation in Human-Robot-Cooperation with the Example of Welding Application"
  authors:
    - "Rainer Müller"
    - "Matthias Vette"
    - "Aaron Geenen"
  year: 2017
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2017.07.113"
  url: "https://doi.org/10.1016/j.promfg.2017.07.113"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "Em lotes pequenos e peças muito variadas, automatizar tudo não compensa, e o saber do soldador continua necessário. O artigo oferece um exemplo concreto de como escolher o modo de interação em cada etapa e de como dividir o trabalho entre pessoa e robô. É útil como referência de projeto para quem pensa em cobots na soldagem."
method: "É um trabalho descritivo de concepção de sistema, apresentado em congresso, sem experimento nem medição. O caso é a soldagem de estruturas de aço inoxidável para unidades de filtragem de sangue, em que peças com defeito são descartadas e a ordem dos cordões é crítica. Os autores revisam os modos de interação humano-robô, comparam de forma qualitativa as habilidades do soldador e do robô e descrevem a programação e um sistema de projeção para orientar o operador."
findings:
  - "A célula combina dois modos. Na preparação, pessoa e robô trabalham ao mesmo tempo no mesmo espaço, em tarefas separadas; na soldagem, o robô só solda com o operador fora da área, por causa do calor e da luz, o que é verificado por tapetes de segurança sensíveis à pressão."
  - "Na comparação dos autores, o soldador se sai melhor em cordões curtos e complexos, na inspeção visual rápida e na preparação das peças. O robô oferece atenção e desempenho constantes, precisão e cordões longos e retos sem interrupção."
  - "A programação proposta junta rotinas prontas com ajustes feitos na hora: os cordões são desenhados no modelo CAD e o operador corrige as posições arrastando indicadores. Segundo os autores, um operador com pouca ou nenhuma experiência em programação consegue montar o processo."
  - "Um projetor mostra sobre a peça quais tarefas são do robô e quais são do operador, além da sequência dos cordões, e pede confirmação do operador depois de cada alteração."
  - "Os autores ressalvam que robôs colaborativos não resolvem toda necessidade de automação: só a análise dos requisitos de cada caso mostra se há vantagem."
limitations: "O artigo descreve um conceito e não mede nada: não há dados de tempo, defeitos de solda, ergonomia ou aceitação pelo operador, de modo que o ganho de eficiência e qualidade é afirmado, não demonstrado. A divisão de tarefas é qualitativa, e o texto não apresenta avaliação de risco da aplicação."
---
