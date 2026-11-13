---
title: "Uma câmera de baixo custo para o robô desacelerar quando a pessoa se aproxima"
description: "Os autores usam uma câmera Kinect V2 para rastrear o esqueleto do trabalhador e ajustar a velocidade do robô conforme a distância: velocidade plena acima de 1,70 m e parada abaixo de 0,85 m."
translationKey: rosenstrauch2018
topic: safety
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo propõe reduzir a velocidade do robô e pará-lo conforme a distância até o trabalhador, para evitar o contato no espaço compartilhado."
paper:
  title: "Human robot collaboration - using kinect v2 for ISO/TS 15066 speed and separation monitoring"
  authors:
    - "Martin J. Rosenstrauch"
    - "Tessa J. Pannen"
    - "Jörg Krüger"
  year: 2018
  venue: "Procedia CIRP"
  doi: "10.1016/j.procir.2018.01.026"
  url: "https://doi.org/10.1016/j.procir.2018.01.026"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "O monitoramento de velocidade e separação é um dos modos colaborativos da ISO/TS 15066 e costuma depender de sensores caros. O estudo testa uma câmera de baixo custo para essa função, com a ideia de levar robôs industriais pequenos já instalados para aplicações colaborativas. Serve como exemplo didático de como o modo funciona."
method: "É um artigo curto de congresso. O cenário é de coexistência, sem interação direta, com o robô acessível por um só lado. A câmera rastreia 11 pontos do corpo do quadril para cima, e o sistema lê as posições das juntas do robô no próprio controlador, calcula a menor distância entre pessoa e robô e ajusta a velocidade máxima. Os testes usaram uma pessoa real diante da câmera e um robô UR5 simulado."
findings:
  - "A velocidade do robô se adapta à posição do trabalhador, da velocidade plena até a parada completa. Abaixo de 0,85 m o robô para; acima de 1,70 m roda sem restrição; entre os dois valores a velocidade varia de forma linear."
  - "O sistema só precisa detectar a pessoa, porque as posições do robô vêm do controlador. Segundo os autores, isso dispensa distinguir a pessoa dos objetos que o robô deve tocar, o que sensores a laser não conseguem fazer."
  - "O rastreamento do esqueleto funcionou a cerca de 15 Hz. Se ele for interrompido, por exemplo por um objeto que esconde a pessoa, o sistema inicia uma parada de emergência."
  - "Os dois limites de distância correspondem a um e a dois comprimentos do braço do robô usado e podem ser ajustados a outros robôs ou requisitos."
  - "Os autores deixam para trabalho futuro comparar a precisão com um sistema de captura de movimento, considerar a direção do movimento e usar várias câmeras para reduzir pontos cegos."
limitations: "O teste usou um robô simulado e não traz número de ensaios, erro de distância, atraso nem tempo de parada. Os limites de distância foram escolhidos pelo comprimento do braço, e não calculados pela fórmula de distância de separação da norma. O sistema observa uma só pessoa e um só lado de aproximação."
---
