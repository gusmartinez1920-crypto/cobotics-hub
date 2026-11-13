---
title: "Luva com RFID, eletrodos e câmeras automatizam a avaliação ergonômica de uma montagem"
description: "Os autores propõem uma arquitetura com luva RFID, eletromiografia e câmeras de profundidade que preenche três seções do método EAWS e aponta, tarefa por tarefa, onde o risco físico é alto."
translationKey: tomelleri2024
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo busca proteger a saúde física de quem monta peças, medindo postura, força e carga em cada tarefa para apontar onde o risco é alto."
paper:
  title: "Digital ergonomic assessment to enhance the physical resilience of human-centric manufacturing systems in Industry 5.0"
  authors:
    - "Federica Tomelleri"
    - "Andrea Sbaragli"
    - "Francesco Picariello"
    - "Francesco Pilati"
  year: 2024
  venue: "Journal of Manufacturing Systems"
  doi: "10.1016/j.jmsy.2024.09.003"
  url: "https://doi.org/10.1016/j.jmsy.2024.09.003"
whyItMatters: "A avaliação ergonômica de postos de montagem costuma ser feita à mão, com observação e julgamento do avaliador. Uma medição automática por tarefa mostra onde está o esforço e serve de linha de base para decidir onde um apoio, um elevador ou um cobot faria diferença. O estudo trata de montagem manual, não de robôs: o cobot só aparece como possível medida de alívio, e a ligação com projetos colaborativos é do leitor."
method: "Os autores desenvolveram a arquitetura e a testaram num ambiente piloto de laboratório. Uma luva com leitor RFID lê etiquetas em peças, caixas e ferramentas e, com isso, divide o trabalho em tarefas; eletrodos de eletromiografia de superfície em quatro músculos dos braços medem o esforço em relação à contração máxima da pessoa; duas câmeras de profundidade sem marcadores classificam a postura das costas. Os dados alimentam as seções de posturas, forças de ação e movimentação manual de cargas do EAWS (European Assembly Worksheet). O caso de teste foi um operador montando uma cômoda em 22 tarefas, numa sequência de 51,7 minutos."
findings:
  - "A pontuação global de corpo inteiro foi de 51,03 pontos, nível de risco alto. Em cada tarefa, vale a maior entre as pontuações de postura, força e movimentação de carga; a global é a média das tarefas."
  - "A pior tarefa em postura foi encaixar as gavetas: 69,3 pontos em 171,7 segundos. O operador ficou de pé só 23,1% desse tempo e com o tronco girado em 73,1% dele; os autores propõem um apoio de altura regulável e ferramentas ao alcance."
  - "Em forças de ação, cerca de 68,1% das tarefas ficaram em risco baixo, mas a inserção manual de cavilhas se destacou: um músculo flexor do antebraço direito chegou a 66,7% da contração máxima durante 57,3 segundos."
  - "Um sinal de eletromiografia de grande amplitude não significa esforço alto. Trechos visualmente intensos corresponderam a 5,5% e 1,5% da contração máxima, porque a medida depende da força máxima de cada pessoa."
  - "Na movimentação de cargas, a pontuação global foi baixa (1,3), mas só 4 das 22 tarefas envolviam peças de mais de 3 kg, o que torna a média pouco informativa. Para preservar a privacidade, o sistema não registra o gênero e pontua todas as cargas pelos valores femininos, mais altos."
limitations: "A validação foi feita com um único operador, em laboratório, sem comparação com a avaliação de um ergonomista nem medida da precisão do sistema. Os próprios autores reconhecem que o EAWS não cobre a carga mental, que a seção de movimentos repetitivos dos membros superiores ficou de fora e que a arquitetura funciona só depois da coleta, não em tempo real. O estudo não discute o uso dos dados de monitoramento pela gerência nem o consentimento do trabalhador."
---
