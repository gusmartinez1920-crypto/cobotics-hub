---
title: "Um controlador que cede ao toque humano sem sair de limites de espaço que se movem"
description: "Os autores propõem um controlador que combina complacência ao contato humano com limites de espaço de trabalho que mudam no tempo. Em simulação, o erro de seguimento caiu cerca de dez vezes."
translationKey: sun2025
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "Fixed‐Time Adaptive Neural Control for Physical Human–Robot Collaboration With Time‐Varying Workspace Constraints"
  authors:
    - "Yuzhu Sun"
    - "Mien Van"
    - "Stephen McIlvanna"
    - "Nguyen Minh Nhat"
    - "Seán McLoone"
    - "Dariusz Ceglarek"
    - "Shuzhi Sam Ge"
  year: 2025
  venue: "International Journal of Robust and Nonlinear Control"
  doi: "10.1002/rnc.7922"
  url: "https://doi.org/10.1002/rnc.7922"
  openAccess: true
  license: "CC BY"
whyItMatters: "Na colaboração física, o robô precisa ceder quando a pessoa o empurra de propósito e, ao mesmo tempo, não invadir zonas proibidas, que podem ser um obstáculo móvel ou o próprio operador. O estudo mostra como a engenharia de controle trata esse problema: a segurança vira uma restrição matemática de posição, o que é diferente dos limites de força das normas."
method: "É um estudo teórico e de simulação, sem robô físico nem participantes. O controlador junta controle de admitância, que trata a força humana como entrada e não como perturbação, uma função de barreira que impede o robô de cruzar limites variáveis no tempo, garantia de convergência em tempo fixo e uma rede neural que compensa a dinâmica desconhecida. Os autores provam a estabilidade e testam o método em um manipulador plano de dois elos, com força humana simulada, e em um UR10 simulado com um obstáculo móvel."
findings:
  - "Na simulação de dois elos, as três abordagens comparadas mantiveram a trajetória dentro dos limites variáveis; quando ela tende a cruzar o limite, é empurrada de volta à área segura."
  - "O erro médio de seguimento na junta 1 caiu de 3,73 × 10⁻² com o controlador de barreira comum para 2,20 × 10⁻³ com o controlador proposto com rede neural, cerca de uma ordem de grandeza menor."
  - "A rede neural não melhora tudo: o erro máximo na junta 1 foi maior com ela (0,0102 contra 0,0054 no controlador proposto), embora tenha melhorado na junta 2."
  - "Há um compromisso de ajuste: ganhos maiores reduzem o erro e o tempo de acomodação, mas aumentam o esforço de controle e as oscilações rápidas do comando, que aparecem quando a força humana entra e sai e podem danificar o atuador."
  - "No UR10 simulado, a rede neural aprende nos primeiros 2 s e os torques ficam dentro dos limites do robô."
limitations: "Tudo foi validado em simulação, com a força humana representada por um perfil pré-definido, sem operador real nem medida de conforto ou esforço. Os próprios autores apontam que, se o robô cruzar o limite em alta velocidade, o controlador para; o comportamento seguro nesse caso fica em aberto. A segurança é tratada como limite de posição, não como limite de força ou pressão no contato."
---
