---
title: "Um cobot que desvia mais quando tem menos certeza de onde o trabalhador vai estar"
description: "Os autores propõem um planejador de trajetória que usa a previsão do movimento do trabalhador e a incerteza dessa previsão. Em 70 movimentos de cinco participantes, não houve colisão."
translationKey: kanazawa2019
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo busca manter o robô a uma distância segura do trabalhador na montagem, mesmo quando a pessoa se move de forma inesperada."
paper:
  title: "Adaptive Motion Planning for a Collaborative Robot Based on Prediction Uncertainty to Enhance Human Safety and Work Efficiency"
  authors:
    - "Akira Kanazawa"
    - "Jun Kinugawa"
    - "Kazuhiro Kosuge"
  year: 2019
  venue: "IEEE Transactions on Robotics"
  doi: "10.1109/tro.2019.2911800"
  url: "https://doi.org/10.1109/tro.2019.2911800"
whyItMatters: "Um robô que entrega peças precisa chegar perto da pessoa, então só manter distância não resolve. O estudo mostra uma forma de equilibrar segurança e tempo de trabalho: o robô aprende o padrão do trabalhador para não fazê-lo esperar e se afasta mais quando o movimento foge do padrão."
method: "Os autores propõem um algoritmo e o testam em experimento. Um modelo estatístico, atualizado durante o trabalho, prevê a posição e a trajetória do trabalhador; o planejador recalcula a trajetória do robô a cada instante, pesando chegar ao alvo no momento previsto, evitar colisão e respeitar limites de velocidade. O teste usou um robô de laboratório de dois elos que entrega peças e ferramentas num posto de montagem automotiva com três tarefas. Cinco participantes fizeram ciclos regulares de aprendizagem e depois movimentos regulares e irregulares, num total de 70 movimentos avaliados (50 regulares e 20 irregulares)."
findings:
  - "O campo de repulsão em torno do trabalhador fica mais largo na direção em que a previsão da posição é mais incerta. Assim o robô desvia mais justamente onde sabe menos sobre o que a pessoa vai fazer."
  - "Nos movimentos regulares, o tempo de espera do trabalhador pela entrega caiu com a repetição para todos os participantes nos deslocamentos longos. Num deslocamento curto, de cerca de 0,4 m, a queda foi pequena, porque o modelo acompanha só o centro do corpo."
  - "Nos movimentos irregulares, o robô ficou a cerca de 0,3 m do trabalhador. Em dois casos a distância mínima ficou um pouco abaixo disso, e não houve nenhuma colisão."
  - "Evitar a colisão é uma restrição flexível, pois o robô precisa se aproximar para entregar peças. Um coeficiente de peso define a prioridade entre chegar no tempo e manter distância: um peso maior aumenta a distância mínima nos casos irregulares, mas também o tempo de espera nos regulares."
  - "Os autores reconhecem que, se o trabalhador sair do posto ou se o rastreamento falhar, o método não garante resultado. Nesse caso o sistema precisaria detectar a anormalidade e parar o robô com segurança."
limitations: "O teste envolveu cinco participantes, um robô de laboratório de dois elos e um único processo de montagem, sem teste estatístico. O trabalhador é representado só pela posição do centro do corpo em duas dimensões, sem braços nem orientação. A distância de 0,3 m vem de simulação preliminar, e o estudo não trata de força ou pressão em caso de contato."
---
