---
title: "Um cobot UR3 que desacelera, pede confirmação ou para conforme a fadiga do operador"
description: "Um sistema aberto em ROS 2 comanda um cobot UR3 por gestos da mão e reduz sua velocidade conforme um índice de fadiga do operador. É um estudo de viabilidade com um único operador."
translationKey: goonetilleke2026
topic: industry-5-0
pillars: [cobot, twin, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O sistema ajusta a velocidade do cobot à fadiga estimada do operador, um fator de segurança que as normas atuais tratam como constante."
paper:
  title: "Predictive fatigue-aware human-robot collaboration: a real-time, open-source ROS 2 instantiation of a three-module human-centric digital twin framework on a standard cobot"
  authors:
    - "Ranidu P. Goonetilleke"
    - "Azfar Khalid"
  year: 2026
  venue: "Frontiers in Robotics and AI"
  doi: "10.3389/frobt.2026.1897261"
  url: "https://doi.org/10.3389/frobt.2026.1897261"
  openAccess: true
  license: "CC BY"
whyItMatters: "As normas de segurança para robôs tratam a capacidade do operador como constante, embora o cansaço mude o tempo de reação e a precisão. Este trabalho mostra, com código aberto e um computador comum sem placa gráfica, como levar o estado do operador para dentro do controle do cobot. Serve de ponto de partida para quem quer testar gêmeos digitais centrados no humano num robô de bancada."
method: "Os autores implementaram o sistema num cobot UR3 com garra, uma webcam suspensa e óculos de rastreamento ocular, e testaram o software num gêmeo simulado antes de cada sessão com o robô real. O sistema tem três módulos: percepção (pontos da mão e dados dos olhos), raciocínio (uma máquina de estados e um índice de fadiga que combina piscadas, tempo de olhos fechados e tremor da mão) e movimento. O classificador de gestos foi treinado com 2.600 amostras de um só operador, o primeiro autor. Como os óculos falharam no dia dos ensaios, os estados de fadiga e de estresse foram acionados manualmente pelo teclado, em modo simulado."
findings:
  - "O robô responde em quatro níveis de fadiga: velocidade plena, velocidade reduzida, movimento só após confirmação por gesto e bloqueio. A velocidade comandada cai para 70%, 40% e 15% da nominal nos três níveis acima do descansado."
  - "O classificador de gestos acertou 99,62% dos casos de teste (518 de 520), com dados de um único operador."
  - "A latência do reconhecimento teve mediana de 64 a 65 milissegundos, e os autores estimam um teto de cerca de 830 milissegundos entre o gesto e o movimento do robô, abaixo da meta de 1 segundo."
  - "Variar em 20% os pesos do índice de fadiga muda a classificação de apenas 3% a 6% dos pontos testados. A fronteira entre fadiga moderada e severa, a mais crítica para a segurança, foi a mais estável."
  - "Os autores avisam que a parada por gesto e a limitação do espaço de trabalho são comportamentos de pesquisa, sem certificação. A proteção contra contato continua a cargo da detecção de colisão do próprio UR3."
limitations: "O sistema foi testado com um único operador, o próprio primeiro autor, sem participantes externos. A detecção de fadiga e de estresse não foi validada com dados reais dos olhos, porque os óculos falharam e esses estados foram disparados à mão; os pesos e limiares do índice são fixos, sem calibração por pessoa. O erro da previsão de intenção não foi medido, e o estudo com 30 ou mais participantes fica para trabalho futuro."
---
