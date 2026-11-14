---
title: "Dividir tarefas pela distância deixa o cobot rápido por mais tempo"
description: "Um modelo matemático divide as tarefas entre operador e cobot e só reduz a velocidade do robô quando os dois trabalham perto. Num caso simulado de 12 tarefas, o tempo total caiu cerca de 15%."
translationKey: faccio2023b
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "Task allocation model for human-robot collaboration with variable cobot speed"
  authors:
    - "Maurizio Faccio"
    - "Irene Granata"
    - "Riccardo Minto"
  year: 2023
  venue: "Journal of Intelligent Manufacturing"
  doi: "10.1007/s10845-023-02073-9"
  url: "https://doi.org/10.1007/s10845-023-02073-9"
  openAccess: true
  license: "CC BY"
whyItMatters: "Em muitas células o cobot roda sempre devagar, bem abaixo do que consegue, por causa da segurança. O estudo mostra que a ordem e a posição das tarefas podem recuperar parte dessa produtividade sem dispositivos adicionais, e dá um exemplo numérico do cálculo da distância de separação com base na ISO/TS 15066."
method: "Os autores formularam um modelo não linear de alocação de tarefas para uma estação com um operador e um cobot que dividem o espaço, com o objetivo de minimizar o tempo total de conclusão. O tempo da tarefa do cobot aumenta sempre que ela acontece ao mesmo tempo que uma tarefa do operador a menos da distância de segurança. Testaram o modelo num caso numérico de 12 tarefas, com distância de segurança de 80 cm, e o compararam com o modelo sem a restrição, variando também o número de tarefas (de 9 a 20) e a distância de segurança (de 10 a 150 cm)."
findings:
  - "Na revisão de 20 estudos feita pelos autores, alocação de tarefas e segurança não aparecem juntas: os modelos de alocação tratam o cobot como seguro por natureza, e as soluções de segurança dependem de dispositivos que reduzem a flexibilidade da célula."
  - "No caso de 12 tarefas, o tempo total de conclusão caiu cerca de 15% em relação ao modelo sem a restrição de segurança."
  - "O tempo em que operador e cobot ficam mais próximos que a distância de segurança caiu de 19 minutos (50% do tempo total) para 6 minutos (18%). O modelo não reduz o número de vezes em que as tarefas ficam próximas, e sim o tempo somado nessa condição."
  - "A vantagem cresce com o número de tarefas: de 3% com 9 tarefas a quase 18% com 20. Acima de 20 tarefas, o programa de otimização não encontrou solução em tempo limitado, e os autores sugerem usar uma heurística."
  - "Os autores encontraram uma distância de segurança ótima, perto de 60 cm, que maximiza o ganho. Como essa distância depende da velocidade do cobot, o resultado permite escolher a velocidade mais vantajosa."
limitations: "A validação é só numérica, num caso sintético, sem cobot real nem pessoas. O modelo supõe tempos fixos e tarefas sem ordem obrigatória, e trata a segurança apenas como distância e velocidade: ergonomia, carga mental e segurança percebida pelo operador ficam de fora."
---
