---
title: "O que os robôs enxergam das pessoas: dez anos de visão robótica em revisão"
description: "Uma revisão sistemática de 310 artigos de 2010 a 2020 mostra como robôs usam câmeras para interagir com pessoas. Gestos lideram as aplicações, e só 21% dos estudos fizeram testes com pessoas."
translationKey: robinson2023
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
paper:
  title: "Robotic Vision for Human-Robot Interaction and Collaboration: A Survey and Systematic Review"
  authors:
    - "Nicole Robinson"
    - "Brendan Tidd"
    - "Dylan Campbell"
    - "Dana Kulić"
    - "Peter Corke"
  year: 2023
  venue: "ACM Transactions on Human-Robot Interaction"
  doi: "10.1145/3570731"
  url: "https://doi.org/10.1145/3570731"
whyItMatters: "A câmera é o principal meio de um robô perceber quem trabalha ao seu lado: é com ela que ele para, desacelera ou desvia quando alguém se aproxima. A revisão mostra o que já é comum e o que ainda falta, como testes com pessoas, medidas comparáveis e cuidado com as imagens captadas."
method: "Os autores fizeram uma revisão sistemática no padrão PRISMA em três bases (IEEE Xplore, ACM Library e Scopus), com artigos revisados por pares publicados de 2010 a 2020. Só entraram estudos com robô físico, em que a visão tem a pessoa como foco e gera uma ação em tempo real ou quase; simulação e teleoperação ficaram de fora. De 6.771 registros, 310 artigos foram incluídos, e dois avaliadores independentes conferiram 10% deles, com acordo total."
findings:
  - "As aplicações mais frequentes são reconhecimento de gestos (35%), movimento do robô em espaços com pessoas (22%), entrega de objetos e ações colaborativas (17%) e reconhecimento de ações (13%). As câmeras de cor e profundidade, como o Kinect, foram as mais usadas."
  - "Nos 56 artigos sobre entrega de objetos e ações colaborativas, o caso mais comum (46%) é o robô que precisa operar com segurança num espaço compartilhado: ao detectar a pessoa, ele para, reduz a velocidade ou muda a trajetória."
  - "A interação estudada é quase sempre simples: 88% das tarefas são de baixa criticidade e 91% dos estudos têm uma pessoa para um robô. Equipes com várias pessoas e vários robôs e tarefas de maior risco seguem pouco estudadas."
  - "Só 66 dos 310 artigos (21%) relatam experimento com pessoas, num total de 1.228 participantes. Onde o sexo foi informado, 70% eram homens. As medidas objetivas (384) superam de longe as subjetivas (40)."
  - "Poucos artigos relatam medidas padronizadas do desempenho da visão, o que impede comparar algoritmos, e só três liberaram seus dados. Os autores apontam como desafios o uso ético das imagens (consentimento, privacidade) e o risco de a pessoa supor que o robô enxerga mais do que de fato enxerga."
limitations: "A revisão cobre a interação com robôs em geral (móveis, sociais, aéreos e braços manipuladores), e a indústria é só um dos quatro domínios; os resultados não descrevem apenas cobots industriais. A busca termina em 2020 e exclui textos não revisados por pares. Os casos de segurança em espaço compartilhado não são relacionados às normas de robôs colaborativos."
---
