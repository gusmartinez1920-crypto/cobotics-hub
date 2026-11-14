---
title: "Dividir tarefas com o robô levando em conta o cansaço e a variação do operador"
description: "Os autores propõem um planejador de montagem colaborativa que considera o esforço físico e a variação do operador. Em teste com 4 pessoas, a duração variou 32,4% menos."
translationKey: you2026
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O planejador inclui o esforço físico acumulado do operador como objetivo, ao lado do tempo de produção, ao dividir tarefas com o robô."
paper:
  title: "Towards human-centric manufacturing: Task planning under uncertainties in human–robot collaborative assembly"
  authors:
    - "Yingchao You"
    - "Ze Ji"
    - "Changyun Wei"
  year: 2026
  venue: "Robotics and Computer-Integrated Manufacturing"
  doi: "10.1016/j.rcim.2026.103293"
  url: "https://doi.org/10.1016/j.rcim.2026.103293"
  openAccess: true
whyItMatters: "A maioria dos planejadores de montagem colaborativa só tenta reduzir o tempo total e trata a pessoa como uma máquina de tempo fixo. Este estudo mostra uma forma de pôr no cálculo o cansaço muscular e a variação natural do trabalho humano, e sugere um critério prático: entregar ao robô as tarefas mais imprevisíveis, não apenas as mais lentas."
method: "Os autores representam a duração e o esforço de cada tarefa com números que carregam a incerteza e calculam o esforço físico com um modelo de acúmulo e recuperação muscular. Um agente de aprendizado por reforço decide quem faz cada tarefa (humano, robô ou os dois) e em que ordem, buscando reduzir ao mesmo tempo o tempo total e o esforço excessivo. A validação tem um estudo numérico com dados sintéticos de uma caixa de engrenagens com 24 tarefas e uma prova de conceito em laboratório: a montagem de um gabinete de computador por 1 pessoa e 1 robô, com 4 participantes e 5 ensaios por grupo."
findings:
  - "No estudo numérico, frente a regras heurísticas, o método reduziu em até 13,97% o tempo total médio e em 17,64% o esforço acumulado."
  - "Otimizar só o esforço gera um plano conservador, que prioriza descanso e alonga o tempo total (125,38 contra 92,14 no modelo completo). Otimizar só o tempo aumenta o esforço (15,82 contra 12,14)."
  - "No laboratório, o desvio-padrão médio da duração caiu de 17,76 para 12,00 (32,4% menor) e o do esforço de 0,0735 para 0,054 (26,5% menor), em comparação com um planejador sem modelo de incerteza. As médias ficaram comparáveis."
  - "O ganho vem de reduzir a dispersão, não de acelerar: a instalação da fonte, tarefa de alinhamento preciso e alta variação, vai para o robô, enquanto o planejador sem incerteza a entrega ao humano por ser mais rápido em média."
limitations: "O estudo numérico usa dados sintéticos, e o teste real tem apenas 4 participantes jovens, sem teste estatístico. O modelo considera só o esforço muscular: carga mental, estresse e confiança ficam de fora. A segurança não é tratada, e o planejador decide a divisão das tarefas sem ouvir o trabalhador."
---
