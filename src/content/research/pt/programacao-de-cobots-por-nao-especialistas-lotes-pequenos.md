---
title: "Cobot programado no chão de fábrica por quem não é especialista, e a conta lote a lote"
description: "Os autores propõem um método em que operadores sem experiência em robótica completam e corrigem o programa do cobot, e um cálculo de quando o lote compensa. Num piloto, a aplicação ficou pronta em menos de 10 min."
translationKey: giberti2022
topic: implementation
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 9
    why: "O estudo ataca duas barreiras à adoção de cobots na produção em lotes pequenos: a programação difícil e a justificativa do investimento."
paper:
  title: "A Methodology for Flexible Implementation of Collaborative Robots in Smart Manufacturing Systems"
  authors:
    - "Hermes Giberti"
    - "Tommaso Abbattista"
    - "Marco Carnevale"
    - "Luca Giagu"
    - "Fabio Cristini"
  year: 2022
  venue: "Robotics"
  doi: "10.3390/robotics11010009"
  url: "https://doi.org/10.3390/robotics11010009"
  openAccess: true
  license: "CC BY"
whyItMatters: "A programação complexa é apontada como uma das principais barreiras à difusão dos cobots, sobretudo em lotes pequenos e variados. O estudo mostra uma forma de dividir o trabalho entre especialistas, engenharia de processo e operadores, para que o cobot mude de posto com frequência. Também oferece uma fórmula simples para decidir a partir de que tamanho de lote vale usar o robô."
method: "É uma proposta de método testada num caso piloto industrial. Especialistas em robótica preparam bibliotecas de habilidades prontas, a engenharia de processo monta a sequência da tarefa, e o operador insere parâmetros e corrige erros com ajuda de uma interface gráfica. O teste ocorreu numa fábrica da ABB na região de Milão, numa tarefa de pegar e colocar placas eletrônicas com um cobot de dois braços, com dois usuários não especialistas. A análise econômica cobriu seis processos do mesmo departamento, com simulação da demanda a partir de dados históricos."
findings:
  - "Os dois usuários ensinaram e corrigiram cada uma das quatro etapas da tarefa em cerca de 1 min 40 s a 2 min 30 s, na média da segunda à quarta tentativa. A primeira tentativa foi cerca de 25% mais longa."
  - "Os autores relatam que a aplicação completa foi criada em menos de 10 minutos, com tempo de ciclo de 37 s por peça. Os resultados dos dois usuários não diferiram de forma sistemática, embora só um tivesse noção de programação de robôs."
  - "O programa ficou menos otimizado em trajetória e tempo de ciclo do que um feito por especialista. Os autores consideram a flexibilidade mais importante quando o robô muda de posto continuamente."
  - "O método inclui o cálculo de um lote limiar, acima do qual o tempo de preparação do robô compensa o trabalho manual. Um dos seis processos simulados ficou abaixo dele: lote médio de 50 peças contra limiar de 56."
  - "Para um investimento de cerca de 50 000 euros, a simulação estimou economia de 656 horas por ano, ou 19 688 euros por ano, e retorno em cerca de 2,5 anos."
limitations: "O teste envolveu só dois usuários, quatro tentativas e uma tarefa simples de pegar e colocar, sem análise estatística. O estudo não trata da avaliação de risco da aplicação nem mede carga de trabalho ou aceitação do operador, e a calibração dos postos a cada mudança ficou fora do trabalho. A conta econômica considera apenas horas de trabalho economizadas, e os dados da empresa têm acesso restrito."
---
