---
title: "Robô móvel planeja tarefas a partir de um pedido em linguagem natural"
description: "O estudo combina modelos de linguagem, visão e aprendizado por reforço, com óculos de realidade mista, para um robô móvel cumprir tarefas sem roteiro. O planejamento acertou 85% dos testes."
translationKey: zheng2024
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "A vision-language-guided and deep reinforcement learning-enabled approach for unstructured human-robot collaborative manufacturing task fulfilment"
  authors:
    - "Pai Zheng"
    - "Chengxi Li"
    - "Junming Fan"
    - "Lihui Wang"
  year: 2024
  venue: "CIRP Annals"
  doi: "10.1016/j.cirp.2024.04.003"
  url: "https://doi.org/10.1016/j.cirp.2024.04.003"
  openAccess: true
  license: "CC BY"
whyItMatters: "Programar um cobot para cada variação de produto é caro, e a personalização em massa pede tarefas sem roteiro fixo. O estudo mostra uma arquitetura em que a pessoa pede a tarefa em linguagem natural e os óculos de realidade mista servem de sensor da cena. Para quem acompanha a inteligência artificial generativa na robótica, traz números de acerto e as contrapartidas declaradas."
method: "Os autores propõem um sistema e o testam em laboratório, com um manipulador móvel (braço UR5e sobre base MiR100), uma câmera de profundidade e óculos HoloLens 2. Um modelo de visão e linguagem localiza o objeto citado no comando; modelos de linguagem dividem a instrução em etapas e geram o código do robô. Uma política treinada por aprendizado por reforço move base e braço ao mesmo tempo, usando imagens e dados dos óculos. A localização do objeto foi avaliada em 463 pares de imagem e texto, o planejamento em 3 tarefas com 20 repetições cada, e a política de movimento com 1000 alvos em cena simulada."
findings:
  - "O planejamento por modelo de linguagem teve sucesso em 17, 19 e 15 de 20 tentativas nas três tarefas, média de 85%. Quando falha, uma pessoa pode explicar o erro do plano anterior e pedir um plano ajustado."
  - "A localização do objeto a partir de imagem e texto atingiu 77,89 no índice de sobreposição usado, contra 65,36 e 72,76 de dois métodos de comparação."
  - "A política de movimento teve taxa média de sucesso de 54,4% só com os dados dos óculos, 86,6% com imagens mais esses dados e 90,2% com informação temporal. Só com imagens, não completou nenhuma tarefa."
  - "A segurança entra na política como um termo de recompensa ligado à distância entre pessoa e robô; os sensores internos do robô ficam só para a parada de emergência."
  - "Os autores reconhecem contrapartidas: atraso de rede e de cálculo por depender de modelos de linguagem na nuvem, mais conhecimento especializado e recursos computacionais, e custo maior ao levar os óculos a vários cenários."
limitations: "A política de movimento foi treinada e avaliada em cena simulada, e o estudo não informa quantos ensaios foram feitos no robô real. O planejamento foi julgado por especialistas, sem critério descrito. Nada foi medido do lado do operador, como carga mental ou conforto com os óculos, e a segurança não é discutida frente às normas."
---
