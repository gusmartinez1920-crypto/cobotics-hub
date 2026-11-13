---
title: "Como colocar a aprendizagem e a saúde do operador dentro de uma simulação de fábrica"
description: "Os autores propõem diretrizes para simular, por eventos discretos, como o operador ganha competência e desgasta a saúde em sistemas de manufatura circular, e as ilustram com 30 participantes."
translationKey: denu2024
topic: industry-5-0
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "A proposta inclui a saúde física e psicossocial e a aprendizagem do operador como variáveis da simulação de um sistema de produção."
  - goal: 12
    why: "O estudo trata de sistemas de manufatura circular, como remanufatura, reparo e desmontagem, que dependem muito de trabalho manual qualificado."
paper:
  title: "Towards Human-Centric Digital Simulation: Guidelines to Simulate Operators Skills Acquisition and Health in Circular Manufacturing Systems"
  authors:
    - "Maxence Denu"
    - "Pierre David"
    - "Fabien Mangione"
    - "Aurélie Landry"
  year: 2024
  venue: "IFAC-PapersOnLine"
  doi: "10.1016/j.ifacol.2024.09.252"
  url: "https://doi.org/10.1016/j.ifacol.2024.09.252"
whyItMatters: "Simulações de fábrica costumam tratar o operador como um recurso de tempo fixo. Este trabalho mostra como incluir aprendizagem, fadiga e saúde no modelo, o que interessa a quem constrói gêmeos digitais de postos de trabalho. O estudo não trata de robôs: o cobot aparece só como tecnologia a incluir em trabalhos futuros, e a ponte com a cobótica é do leitor."
method: "É um artigo de congresso com três partes. Primeiro, uma revisão narrativa sobre simulação em manufatura circular (remanufatura, reparo, desmontagem), competências e saúde do operador. Depois, a proposta: três componentes (produto, operador e processo), um modelo para o tempo de processamento, outro para atualizar a saúde e a competência, um padrão de simulação em três etapas e um protocolo de coleta de dados com observação ergonômica, questionários e vídeo. Por fim, uma aplicação numa plataforma tecnológica, em que 30 participantes de 19 a 45 anos desmontaram pequenas turbinas maremotrizes durante uma hora, com cerca de cinco processos concluídos por pessoa."
findings:
  - "A revisão encontrou que as simulações de manufatura circular em geral ignoram o aspecto social e raramente usam conhecimento das ciências humanas. Segundo os autores, os modelos de aprendizagem, esquecimento e fadiga existem apenas separados."
  - "Na manufatura circular, a quantidade imprevisível de operações dificulta padronizar e automatizar. Isso exige muito trabalho manual e competências extensas, e a experiência se traduz em melhor qualidade."
  - "O padrão de simulação proposto tem três etapas: escolher um operador com experiência e saúde suficientes, processar a peça e atualizar a competência e a saúde desse operador. As regras de alocação podem variar para testar formas de organizar o trabalho."
  - "O tempo de processamento segue uma curva de aprendizagem ajustada a cada operador e depende também da qualidade da peça e da saúde de quem a processa."
  - "A saúde é modelada como um capital de 0% a 100%, com parte física e parte psicossocial, reduzido a cada operação conforme seu impacto ergonômico. Os autores esclarecem que o valor representa um fator de risco, não uma previsão de dor."
limitations: "A aplicação só ilustra a metodologia: o caso é simplificado, com estudantes voluntários numa sessão curta, e os efeitos de longo prazo sobre a saúde não puderam ser estudados. Os autores reconhecem que o modelo precisa de mais dados e que acrescentar variáveis humanas torna a validação mais difícil."
---
