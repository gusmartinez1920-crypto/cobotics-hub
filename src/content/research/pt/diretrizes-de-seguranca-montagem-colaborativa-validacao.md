---
title: "Diretrizes de segurança permitem que não especialistas reduzam o risco de uma célula com cobot"
description: "Os autores criaram diretrizes de segurança para montagem colaborativa e as testaram num caso de laboratório: três engenheiros sem formação em segurança baixaram o índice de risco do pior caso de 12 para 6."
translationKey: gualtieri2022
topic: safety
pillars: [cobot, twin]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo propõe e testa diretrizes para reduzir o risco de lesão mecânica do operador em postos de montagem com robô colaborativo."
paper:
  title: "Development and validation of guidelines for safety in human-robot collaborative assembly systems"
  authors:
    - "Luca Gualtieri"
    - "Erwin Rauch"
    - "Renato Vidoni"
  year: 2022
  venue: "Computers & Industrial Engineering"
  doi: "10.1016/j.cie.2021.107801"
  url: "https://doi.org/10.1016/j.cie.2021.107801"
  openAccess: true
  license: "CC BY-NC-ND"
whyItMatters: "Muitas empresas não têm um especialista em segurança de robôs na equipe de projeto. O estudo indica que um conjunto organizado de diretrizes, alinhado às normas, ajuda engenheiros de manufatura a chegar a um projeto mais seguro. Também mostra o preço: o maior ganho veio de separar pessoa e robô."
method: "As diretrizes vêm de normas (ISO 12100, ISO 10218, ISO/TS 15066 e ISO/TR 20218-1), de manuais de fabricantes e da literatura científica, e tratam só de perigos mecânicos. Na validação, num laboratório em Bolzano, a equipe montou uma célula de montagem de um móvel metálico com um robô UR10 sem pensar em segurança, e um especialista certificado avaliou o risco. Três engenheiros de manufatura sem formação em segurança redesenharam a célula com as diretrizes; a nova versão foi modelada em gêmeo digital e reavaliada pelo mesmo especialista."
findings:
  - "As diretrizes se organizam em quatro objetivos: evitar aprisionamento de partes do corpo, evitar colisão, evitar queda de peças do sistema robótico e medidas que valem para todos os perigos mecânicos."
  - "Cada diretriz recebe uma prioridade pela lógica da ISO 12100, a aplicar nesta ordem: primeiro segurança pelo projeto, depois medidas de proteção adicionais e, por fim, segurança pela informação."
  - "Na célula original, o pior caso era o braço ou a garra atingir cabeça, pescoço, ombros ou tórax do operador concentrado na tarefa manual. O índice de risco foi 12, classificado como alto risco."
  - "Na célula redesenhada, o índice caiu para 6, classificado como risco sob controle. As quatro notas que compõem o índice caíram entre 33% e 67%. O maior ganho veio de uma mesa giratória que separa os espaços de trabalho e de um leiaute que limita o movimento do operador."
  - "Os engenheiros relataram três barreiras: custo e tempo dos sistemas de segurança adicionais, necessidade de manter o julgamento de um especialista e dependência de recursos técnicos da empresa, como um programador interno."
limitations: "A validação usou um único caso, três engenheiros e um modelo virtual, e não a célula real; os autores pedem casos industriais e mais participantes. A avaliação cobre só perigos mecânicos e só o operador da montagem, sem manutenção. O estudo não mede o efeito da separação entre pessoa e robô sobre o tempo de ciclo ou a carga do operador."
---
