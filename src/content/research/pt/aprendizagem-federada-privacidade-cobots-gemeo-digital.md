---
title: "Cobots que aprendem juntos sem enviar os dados brutos da fábrica para a nuvem"
description: "O autor propõe que cobots treinem modelos de IA em conjunto trocando só atualizações dos modelos. Num gêmeo digital com seis cobots, a acurácia foi de 91,2%, contra 93,5% do treino centralizado."
translationKey: rahmati2025
topic: implementation
pillars: [cobot, twin, iot]
authors: [claude]
date: 2026-11-13
level: advanced
draft: true
aiAssisted: true
humanReviewed: false
paper:
  title: "Federated learning for privacy-preserving AI in human–robot collaboration for smart manufacturing"
  authors:
    - "Milad Rahmati"
  year: 2025
  venue: "Journal of Intelligent Manufacturing and Special Equipment"
  doi: "10.1108/jimse-03-2025-0003"
  url: "https://doi.org/10.1108/jimse-03-2025-0003"
whyItMatters: "Treinar inteligência artificial na nuvem obriga a fábrica a enviar dados de operação para fora, com risco de vazamento e de perda de segredo industrial. A aprendizagem federada é uma alternativa: cada robô treina localmente e compartilha apenas o que aprendeu. O estudo dá uma ideia do que se ganha e do que se perde em acurácia, custo de computação e privacidade."
method: "É uma proposta de arquitetura avaliada apenas em simulação. Cada robô aprende por reforço com seus próprios dados e envia a um agregador só as atualizações do modelo, protegidas por criptografia e por ruído adicionado de propósito. O teste usou um gêmeo digital de uma fábrica de 20 × 20 m, com seis cobots em tarefas de montagem, inspeção de qualidade e transporte de material. O autor comparou o resultado com o treino centralizado e com outras técnicas."
findings:
  - "Após 50 rodadas, a aprendizagem federada chegou a 91,2% de acurácia, contra 93,5% do treino centralizado. O autor considera a perda de 2,3 pontos compensada pelo ganho de privacidade."
  - "Nas tarefas colaborativas simuladas, os robôs treinados de forma federada tiveram 87,6% de sucesso, contra 81,4% com aprendizagem por reforço tradicional."
  - "O autor relata redução de 41,5% no risco de vazamento de dados em relação aos modelos tradicionais, convergência em 45 rodadas contra mais de 60 e custo computacional 23,8% menor."
  - "A proteção tem preço: a agregação com criptografia acrescenta 12,5% de custo computacional em relação à agregação sem criptografia."
  - "Ao passar de 6 para 12 robôs, o tempo de treino aumentou 18% por limite de banda. A latência de resposta variou de 45 a 75 ms conforme o dispositivo."
limitations: "Toda a avaliação foi feita em simulação, sem robôs físicos nem trabalhadores reais; a implantação real fica para trabalhos futuros. A privacidade tratada é a dos dados e segredos da empresa, não a dos dados do operador. As medidas são só do robô: o estudo não avalia segurança física, carga de trabalho nem aceitação, e a escala não foi testada além de 12 robôs."
---
