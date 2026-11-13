---
title: "Cobot ensinado por demonstração coleta colônias de bactérias em laboratório"
description: "Um cobot ensinado por demonstração coletou e depositou 56 colônias de bactérias para identificação em um laboratório de microbiologia; cerca de 11% das amostras não foram identificadas."
translationKey: baumkircher2022
topic: applications
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
paper:
  title: "Collaborative Robot Precision Task in Medical Microbiology Laboratory"
  authors:
    - "Aljaz Baumkircher"
    - "Katja Seme"
    - "Marko Munih"
    - "Matjaž Mihelj"
  year: 2022
  venue: "Sensors"
  doi: "10.3390/s22082862"
  url: "https://doi.org/10.3390/s22082862"
whyItMatters: "Os sistemas automáticos de coleta de colônias são grandes e caros, ou servem a uma única tarefa. O estudo testa o cobot como alternativa que o próprio pessoal do laboratório poderia ensinar guiando o braço com as mãos, sem programar. Também mostra o limite desse tipo de ensino quando a tarefa exige precisão abaixo de um milímetro."
method: "Os autores montaram, em um laboratório universitário, um cobot Franka Emika Panda com uma ferramenta própria: câmera, medidor de perfil a laser, sensor de força e uma agulha de aço esterilizada por calor a cada uso. Um operador demonstrou a coleta guiando o braço, e um método de generalização adaptou o movimento a novas posições a partir de uma única demonstração. O robô coletou e depositou 56 colônias de duas espécies de bactéria, que seguiram para identificação por espectrometria de massas. Não houve comparação direta com um operador humano: a referência manual vem de outro estudo."
findings:
  - "A coleta ensinada por demonstração funcionou: nas seis colônias medidas, só a maior não saiu inteira em uma única passada, e a retirada do meio de cultura junto com a colônia foi insignificante, exceto na menor delas."
  - "A deposição ensinada por demonstração mostrou-se pouco confiável e foi trocada por uma trajetória programada; o método de generalização serviu apenas para adaptá-la às posições."
  - "Na deposição, a força de contato raramente passou de 1 N, e a média depois da compensação foi de 0,29 N, com correção de posição de cerca de 0,5 mm."
  - "Das 56 amostras, 6 foram inválidas na identificação, cerca de 11% do total: 5 de uma espécie (13,9%) e 1 da outra (5%). Os autores consideram essa taxa comparável à da deposição manual relatada em outro estudo."
  - "A aparência uniforme do material depositado não previu o sucesso da identificação. A escolha da colônia e a aplicação do reagente final continuaram a cargo do operador."
limitations: "É um caso único, com duas espécies de bactéria e sem comparação experimental com o trabalho manual. Só a coleta foi de fato ensinada por demonstração. O estudo não mede tempo de ensino, facilidade de uso nem aceitação pelos operadores, embora o argumento seja servir a pessoas sem experiência, e não apresenta avaliação de risco da aplicação."
---
