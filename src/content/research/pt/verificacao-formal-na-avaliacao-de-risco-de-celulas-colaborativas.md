---
title: "Verificação formal encontra perigos que a avaliação de risco manual pode deixar passar"
description: "Os autores propõem um método que modela a célula colaborativa em lógica temporal e usa um verificador automático para achar perigos de contato. Num caso real, apontou 60 ocorrências de 27 perigos."
translationKey: vicentini2020
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O método busca perigos de contato entre robô e operador ainda no projeto, incluindo os que nascem de erros e usos não previstos do trabalhador."
paper:
  title: "Safety Assessment of Collaborative Robotics Through Automated Formal Verification"
  authors:
    - "Federico Vicentini"
    - "Mehrnoosh Askarpour"
    - "Matteo G. Rossi"
    - "Dino Mandrioli"
  year: 2020
  venue: "IEEE Transactions on Robotics"
  doi: "10.1109/tro.2019.2937471"
  url: "https://doi.org/10.1109/tro.2019.2937471"
whyItMatters: "A avaliação de risco feita à mão é estática e depende de o avaliador imaginar o que pode dar errado. Aqui, o computador percorre todas as sequências possíveis de ações do robô e do operador, inclusive erros e atrasos, ainda na fase de projeto. O estudo mostra o que essa abordagem entrega e quanto custa em tempo."
method: "É uma proposta de método com estudo de caso. Os autores descrevem em lógica temporal o leiaute, o robô e o operador (com 11 regiões do corpo), além das tarefas divididas em ações elementares. O operador pode atrasar, omitir ou inserir ações. O modelo identifica perigos mecânicos de contato, estima o risco e testa medidas de redução; um verificador automático procura contraexemplos. O caso é a montagem de paletes de máquinas-ferramenta numa fábrica real, com um manipulador sobre base móvel e dois operadores."
findings:
  - "No caso real, o método encontrou 60 ocorrências de 27 perigos distintos, 73% do tipo transitório (impacto em que o corpo pode recuar). Os demais são quase estáticos, em que a pessoa fica presa contra um objeto."
  - "45% dos perigos vieram de usos não previstos ou de erros do operador."
  - "O método não substitui o avaliador humano: é ele quem ajusta o modelo e confirma a medida de mitigação (limitar força, reduzir velocidade, mudar a trajetória) antes de rodar a verificação outra vez."
  - "O operador é modelado pelos efeitos visíveis dos erros (atraso, lugar errado, sequência errada), sem representar as causas, como cansaço ou distração."
  - "Cada rodada de verificação levou em média 19 min 37 s num computador de mesa comum, além de alguns dias de modelagem que podem ser reaproveitados em aplicações parecidas. Os autores julgam o esforço menor que o de uma avaliação completa usual, com base na própria experiência."
limitations: "O método não foi comparado com uma avaliação manual da mesma célula. Modelos mais detalhados fazem o tempo de verificação crescer para horas, o que impede o uso com o sistema em operação. Só perigos mecânicos entram; fadiga, atenção e carga mental ficam de fora, e as probabilidades são estimadas por experiência."
---
