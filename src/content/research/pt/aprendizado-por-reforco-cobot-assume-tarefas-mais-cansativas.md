---
title: "Um planejador com aprendizado por reforço faz o cobot assumir as tarefas mais cansativas"
description: "Um planejador de tarefas estima o esforço muscular do operador com sensores no corpo e passa ao cobot as etapas mais fatigantes. Em teste com 8 pessoas, o esforço percebido caiu de 4,56 para 2,31."
translationKey: you2025
topic: human-factors
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O método distribui as tarefas de montagem para reduzir o esforço físico do operador, ligado a distúrbios musculoesqueléticos no trabalho."
paper:
  title: "Towards human-centric manufacturing: A reinforcement learning method for physical exertion alleviation in HRCA"
  authors:
    - "Yingchao You"
    - "Ze Ji"
  year: 2025
  venue: "Robotics and Computer-Integrated Manufacturing"
  doi: "10.1016/j.rcim.2025.103025"
  url: "https://doi.org/10.1016/j.rcim.2025.103025"
  openAccess: true
  license: "CC BY"
whyItMatters: "A divisão de tarefas entre pessoa e cobot costuma ser definida pelo tempo de ciclo, não pelo cansaço de quem trabalha. Este estudo mostra um caminho para o robô decidir, durante a montagem, o que assumir com base numa estimativa do esforço físico, sem impor uma sequência fixa ao operador. Interessa a quem pesquisa alocação dinâmica de tarefas e ergonomia em células colaborativas."
method: "Os autores modelaram a montagem como um jogo de turnos entre pessoa e robô e treinaram uma política de aprendizado por reforço cuja recompensa penaliza o aumento do esforço muscular. O esforço vem de um modelo musculoesquelético do membro superior, alimentado por sensores inerciais no corpo e acelerado por uma rede neural. Uma máscara bloqueia ações fora da ordem de montagem ou além da capacidade da garra. A validação teve duas partes: simulação com dois produtos (um computador de mesa de 9 peças e uma bomba de 36 peças), comparada com sete outros algoritmos, e uma montagem real do computador com um cobot KUKA LBR iiwa e 8 participantes, que fizeram cinco montagens com a política treinada e cinco com uma política aleatória."
findings:
  - "Na simulação, o método proposto obteve a melhor recompensa nos dois produtos e em todos os números de ciclos testados, e convergiu mais rápido que os sete algoritmos de comparação."
  - "Sem a máscara de ações, a política produziu em média mais de quatro ações inválidas já na montagem de uma unidade (4,18 no computador e 4,88 na bomba). Com a máscara, nenhuma. Os autores consideram ações inválidas inaceitáveis numa linha com cobots, por causarem defeitos ou risco."
  - "A decisão leva cerca de 0,0007 segundo, com modelos de pouco mais de 50 mil parâmetros, o que permite uso quase em tempo real."
  - "No experimento real, o esforço percebido na escala de Borg modificada caiu de 4,56 com a política aleatória para 2,31 com a política treinada (p = 0,0123). O índice de esforço calculado pelo modelo caiu de 0,37 para 0,32 (p = 0,0456)."
  - "Com a política treinada, o robô montou a placa de vídeo, o cooler e a fonte; a pessoa ficou com placa-mãe, processador, memória, disco e tampa, em parte porque a garra não consegue pegar a placa-mãe nem a tampa."
limitations: "O teste real foi feito em laboratório, com 8 participantes jovens e cinco montagens por condição, sem fábrica nem jornadas longas. O planejador otimiza só o esforço físico, sem considerar tempo de ciclo ou segurança, e o modelo de esforço cobre apenas o lado direito do tronco superior e ignora as forças de contato da montagem. Na simulação, o esforço muscular foi representado por valores aleatórios, não por movimento humano real."
---
