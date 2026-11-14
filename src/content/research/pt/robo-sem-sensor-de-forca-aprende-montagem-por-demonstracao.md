---
title: "Robô sem sensor de força aprende montagem por demonstração e se ajusta sozinho"
description: "Um robô sem sensor de força aprendeu a montar uma engrenagem com poucas demonstrações humanas. Com otimização automática, acertou 93% das montagens, contra 19% sem ela."
translationKey: roveda2021
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "Human–robot collaboration in sensorless assembly task learning enhanced by uncertainties adaptation via Bayesian Optimization"
  authors:
    - "Loris Roveda"
    - "Mauro Magni"
    - "Martina Cantoni"
    - "Dario Piga"
    - "Giuseppe Bucca"
  year: 2021
  venue: "Robotics and Autonomous Systems"
  doi: "10.1016/j.robot.2020.103711"
  url: "https://doi.org/10.1016/j.robot.2020.103711"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "Sensores de força e torque encarecem a célula, e muitos robôs industriais não os têm. O estudo mostra um caminho para ensinar uma montagem de encaixe justo guiando o robô com a mão e deixar que ele mesmo corrija os desvios de posição das peças. Interessa a quem programa cobots por demonstração e precisa lidar com peças que nunca chegam exatamente no mesmo lugar."
method: "Experimento com um robô Franka EMIKA Panda que monta uma engrenagem em um eixo de seção quadrada, com tolerância justa e peças posicionadas com erro de até ±7,5 mm. Quinze pessoas guiaram o robô com a mão, cinco vezes por etapa (aproximação, inserção e empurrão). Um Modelo Oculto de Markov (HMM) escolhe a demonstração mais confiável, e uma Otimização Bayesiana ajusta o ponto de destino e a rigidez do controle depois que a posição de montagem é alterada em ±7,5 mm e ±5°. A comparação final teve 10 repetições por pessoa, 150 por método."
findings:
  - "A taxa de sucesso da montagem foi de 93% com aprendizado mais otimização, contra 19% só com o aprendizado por demonstração, em 150 repetições de cada."
  - "Sem medir forças, o robô estima a força de contato pela diferença entre a posição desejada e a real. Essa estimativa entra na função de custo para evitar a parada de emergência e a falha da tarefa."
  - "A inserção é a etapa mais crítica, porque concentra a maior incerteza de posição. Por isso a otimização foi feita em dois passos: primeiro localizar o ponto de inserção, depois refinar a pose e a rigidez."
  - "No empurrão final, uma pequena oscilação de rotação sobreposta ao movimento garante o engrenamento; a amplitude dessa oscilação também é otimizada."
  - "Os autores sustentam que um robô com sensor de força precisaria da mesma reotimização, porque sem a posição exata das peças nem ele monta às cegas. Uma câmera resolveria, mas com mais custo e tempo de preparação."
limitations: "O estudo testou uma única peça e uma única tolerância, e comparou a otimização com a ausência de qualquer adaptação, não com outro método adaptativo. As figuras mostram os dados de uma pessoa; os das outras 14 são descritos apenas como semelhantes. Nada foi medido do lado humano, que só participa na fase de ensino."
---
