---
title: "Balancear a linha de montagem com cobots olhando tempo de ciclo e ergonomia juntos"
description: "Um modelo de otimização distribui tarefas entre pessoas, robôs e duplas pessoa-robô em linhas de montagem. Em 164 testes, considerar a ergonomia reduziu em cerca de um quarto os indicadores de risco."
translationKey: kulac2026
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O modelo coloca o risco ergonômico de cada posto, físico, ambiental e psicossocial, no mesmo nível do tempo de ciclo ao distribuir tarefas entre pessoas e cobots."
paper:
  title: "Collaborative robot integration in mixed-model assembly line balancing with ergonomic risk considerations"
  authors:
    - "Seçil Kulaç"
    - "Alper Kiraz"
  year: 2026
  venue: "Flexible Services and Manufacturing Journal"
  doi: "10.1007/s10696-026-09662-9"
  url: "https://doi.org/10.1007/s10696-026-09662-9"
whyItMatters: "Quem projeta uma linha com cobots precisa decidir quais tarefas vão para a pessoa, para o robô ou para os dois juntos. O estudo mostra que dá para incluir a ergonomia nessa decisão sem necessariamente perder produtividade, e que acrescentar robôs tem retorno decrescente. Isso interessa a quem avalia quantos cobots comprar."
method: "Os autores formularam um modelo de programação linear inteira mista para linhas que montam vários modelos de produto. Cada tarefa pode ser feita por pessoa, robô ou em colaboração, e o modelo minimiza ao mesmo tempo o tempo de ciclo e dois indicadores de risco ergonômico por posto. O risco de cada tarefa combina avaliações físicas, ambientais e psicossociais num só valor. Testaram o modelo em 164 configurações derivadas de 13 linhas de referência, com tempos e riscos gerados por sorteio, e em dois estudos de caso, um deles uma linha de ferramentas elétricas com 62 tarefas e 5 postos."
findings:
  - "Nas 164 configurações, incluir o risco ergonômico no modelo reduziu em média 27% o indicador de categoria de risco e 25% o risco máximo por posto. Em uma das linhas, a queda chegou a 40% e 44% sem aumento do tempo de ciclo."
  - "Mais robôs nem sempre ajudam. Em uma das linhas de referência, dois robôs reduziram o tempo de ciclo em 14% e os indicadores de risco em mais de 40%; o terceiro trouxe ganho menor e o quarto, nenhum."
  - "O custo da ergonomia depende de quantos robôs há. Com até dois robôs, dar mais peso à ergonomia reduziu o risco sem aumento claro do tempo de ciclo; com três robôs e peso alto, o tempo de ciclo subiu 12%."
  - "Na análise estatística, o número de robôs afetou de forma significativa só o risco máximo por posto, e não o tempo de ciclo. Os pesos dados à ergonomia afetaram os três indicadores."
  - "Os autores recomendam um peso moderado para a ergonomia e, para pequenas e médias empresas, começar pelas tarefas repetitivas ou de alto risco, usando o modelo como apoio à decisão antes da implantação."
limitations: "O estudo fica no plano do projeto da linha: não há implantação física nem medição com trabalhadores. Em grande parte dos testes, tempos e riscos foram sorteados, e o risco da tarefa colaborativa foi suposto menor que o da manual, de modo que o ganho ergonômico da colaboração entra como hipótese, não como medida. O modelo não trata da segurança de contato entre pessoa e robô."
---
