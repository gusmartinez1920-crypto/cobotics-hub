---
title: "Sensores vestíveis reconhecem o que o trabalhador rural faz ao entregar uma caixa ao robô"
description: "Com cinco sensores de movimento no corpo e uma rede neural, os autores reconheceram seis etapas da tarefa de levar uma caixa até um robô agrícola, com acurácia média de 85,6%."
translationKey: anagnostis2021
topic: applications
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "Human Activity Recognition through Recurrent Neural Networks for Human–Robot Interaction in Agriculture"
  authors:
    - "Athanasios Anagnostis"
    - "Lefteris Benos"
    - "Dimitrios Tsaopoulos"
    - "Aristotelis Tagarakis"
    - "Naoum Tsolakis"
    - "Dionysis Bochtis"
  year: 2021
  venue: "Applied Sciences"
  doi: "10.3390/app11052188"
  url: "https://doi.org/10.3390/app11052188"
whyItMatters: "Para trabalhar perto de uma pessoa, o robô precisa saber o que ela está fazendo. Este estudo testa esse reconhecimento no campo, onde a luz varia e não há como instalar câmeras fixas, usando sensores vestíveis. O robô aqui é um veículo de transporte agrícola, não um braço colaborativo, mas o método interessa a qualquer aplicação em que o robô precise acompanhar a atividade humana."
method: "O experimento foi feito em uma fazenda na Grécia com 20 participantes saudáveis. Cada um caminhava, levantava uma caixa (vazia ou com cerca de 20% da própria massa) e a colocava sobre um de dois robôs parados, com alturas de depósito de 40 e 80 cm. Cinco sensores inerciais, no tronco e nos dois punhos, registraram os movimentos, que foram rotulados com apoio de vídeo. Uma rede neural recorrente do tipo LSTM foi treinada para classificar seis subatividades, com os dados de quatro participantes reservados para teste."
findings:
  - "As seis subatividades são: ficar parado, andar sem caixa, curvar-se, levantar a caixa, andar com a caixa e colocá-la no robô. A acurácia média do modelo foi de 85,6%."
  - "Andar sem caixa foi a atividade mais bem reconhecida. Curvar-se teve a menor precisão (0,741), o que os autores atribuem às várias formas de levantar a caixa, deixadas livres de propósito."
  - "As confusões mais comuns foram entre colocar a caixa e andar com a caixa, e entre levantar a caixa e curvar-se. Classificar as atividades em que a pessoa quase não se desloca foi o mais difícil."
  - "Usar os três tipos de sensor juntos deu o melhor resultado (85,7%). Sozinhos, giroscópio e acelerômetro ficaram perto de 83% e o magnetômetro, em 73,4%."
  - "Os autores publicaram o conjunto de dados e situam o reconhecimento de atividade como base para um robô que ajuste velocidade e distância em relação ao agricultor."
limitations: "O estudo trata só do reconhecimento de atividade: o robô ficou parado, e a segurança da interação, a ergonomia e a navegação ficam para trabalhos posteriores. A amostra é pequena e homogênea, de adultos saudáveis com idade média de 31 anos, e os autores planejam repetir os testes com trabalhadores reais. Carga física, fadiga e aceitação não foram medidas."
---
