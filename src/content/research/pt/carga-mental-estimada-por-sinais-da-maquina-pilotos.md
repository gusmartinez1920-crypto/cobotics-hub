---
title: "Os dados da máquina revelam a carga mental do operador melhor que os sinais do corpo"
description: "Com pilotos de helicóptero em simulador, um modelo de aprendizado de máquina estimou a carga mental. Os dados dos comandos e da aeronave previram melhor que os sinais fisiológicos."
translationKey: roques2025
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "Continuous Assessment of Mental Workload During Complex Human–Machine Interaction: Inferring Cognitive State from Signals External to the Operator"
  authors:
    - "Axel Roques"
    - "Dimitri Keriven Serpollet"
    - "Alice Nicolaï"
    - "Stéphane Buffat"
    - "Yannick James"
    - "Nicolas Vayatis"
    - "Ioannis Bargiotas"
    - "Pierre-Paul Vidal"
  year: 2025
  venue: "Sensors"
  doi: "10.3390/s25123624"
  url: "https://doi.org/10.3390/s25123624"
whyItMatters: "O estudo é sobre pilotagem de helicóptero, não sobre robôs: a ligação com cobots é do leitor, não do estudo. A ideia que interessa é que o estado mental de quem opera uma máquina complexa pode ser estimado pelo modo como a pessoa age sobre os comandos, sem sensores presos ao corpo. Para quem pensa em monitorar a carga mental de operadores com dados conectados, é um argumento a favor de olhar primeiro para o que a própria máquina já registra."
method: "Nove pilotos profissionais de helicóptero voaram duas missões em um simulador de voo completo: uma de reconhecimento e uma de resgate com mau tempo e falhas, pensada para elevar a carga mental. Os dados de dois pilotos foram excluídos por ruído nos sensores. Os autores calcularam 76 indicadores em três grupos (fisiologia do piloto, estado da máquina e ações sobre os comandos) e treinaram um modelo simples de aprendizado de máquina para separar carga alta de carga baixa. A referência principal foi a nota de 0 a 100 que o próprio piloto dizia em voz alta em momentos-chave."
findings:
  - "Com os 76 indicadores, o modelo alcançou área sob a curva ROC de 0,836, medida de acerto em que 0,5 equivale ao acaso e 1 ao acerto total. O desempenho variou bastante de um piloto para outro."
  - "Os indicadores mais usados pelo modelo medem a interação com os comandos e o movimento da aeronave, como a variação do deslocamento e da força nos pedais e no manche. A frequência cardíaca média foi o único indicador fisiológico entre os mais usados."
  - "Sozinhos, os sinais fisiológicos renderam 0,699, os dados do estado da máquina 0,777 e os das ações sobre os comandos 0,763. Nenhum grupo isolado igualou o conjunto completo."
  - "Quando a referência foi o questionário NASA-TLX respondido depois do voo, o desempenho caiu para 0,733. A estimativa feita por pilotos instrutores, que não voaram os cenários, antecipou mal a carga vivida pelos pilotos (0,622)."
  - "Os autores levantam a hipótese de que a cadeia de comando entre piloto e máquina filtra o ruído dos sinais do corpo, o que tornaria menos necessário o registro fisiológico, que eles consideram problemático dos pontos de vista prático e ético."
limitations: "A amostra é pequena para aprendizado de máquina (sete pilotos com dados válidos, todos homens) e o ambiente é um simulador de helicóptero, não uma fábrica. Os autores reconhecem medidas ruidosas, autoavaliações frequentes que perturbam a tarefa e pouca comparação com outros algoritmos; a transferência para operadores de chão de fábrica não foi demonstrada."
---
