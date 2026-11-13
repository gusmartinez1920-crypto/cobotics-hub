---
title: "Um cobot que aprende a hora certa de se antecipar à pessoa"
description: "Os autores treinam juntas a percepção e a decisão de um cobot por aprendizado por reforço. Num simulador de uma tarefa de embalagem, o robô eliminou em média 3,4 s de espera por fase."
translationKey: ghadirzadeh2021
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "Human-Centered Collaborative Robots With Deep Reinforcement Learning"
  authors:
    - "Ali Ghadirzadeh"
    - "Xi Chen"
    - "Wenjie Yin"
    - "Zhengrong Yi"
    - "Marten Bjorkman"
    - "Danica Kragic"
  year: 2021
  venue: "IEEE Robotics and Automation Letters"
  doi: "10.1109/lra.2020.3047730"
  url: "https://doi.org/10.1109/lra.2020.3047730"
  openAccess: true
whyItMatters: "Um robô que só age depois de ter certeza do que a pessoa fez deixa o parceiro esperando; um que age cedo demais erra e atrasa a tarefa. O estudo mostra uma forma de o robô aprender esse equilíbrio sozinho, sem que alguém precise rotular à mão as atividades humanas."
method: "O robô recebe apenas o movimento do corpo da pessoa, captado por um traje de captura de movimento, e ganha como recompensa o tempo que economiza ao agir antes; a ação errada é punida pelo atraso para desfazê-la. A percepção e a política de decisão são redes neurais treinadas juntas por aprendizado por reforço profundo. O treino usou um simulador das interações, montado com 200 sessões reais de colaboração entre duas pessoas, numa tarefa de embalagem com um robô ABB YuMi. Os autores compararam o resultado com um classificador supervisionado que só age acima de certo nível de confiança."
findings:
  - "Os modelos treinados eliminaram, em média, 3,4 segundos de espera em cada fase da colaboração; uma sessão típica de embalagem tem seis fases."
  - "O melhor método supervisionado da comparação obteve cerca de 2,9 segundos de ganho médio, contra 3,4 segundos da proposta, que além disso dispensa dados anotados."
  - "Acrescentar atividades rotuladas ao treino da percepção não melhorou o desempenho: a representação aprendida sem rótulos bastou."
  - "O tamanho das redes pesou pouco: o desempenho quase não mudou com o número de neurônios nem com o tamanho da representação interna."
  - "A incerteza sobre a ação humana não é calculada de forma explícita; a política aprende a decidir se vale agir ou esperar mais dados. Os autores afirmam que a política treinada no simulador pode ser levada direto para a tarefa real."
limitations: "Os resultados vêm de um simulador alimentado por sessões entre duas pessoas; não houve avaliação com pessoas trabalhando com o robô, e a transferência para a tarefa real é afirmada, não medida. A tarefa é simples, de laboratório, e o único critério é o tempo economizado: segurança, esforço e aceitação da pessoa ficam fora. A adaptação a novos parceiros humanos ficou para trabalhos futuros."
---
