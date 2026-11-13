---
title: "Teste de intrusão num cobot: falhas simples de software podem virar risco físico"
description: "Um teste de intrusão num cobot Franka Emika Panda encontrou falhas na aplicação web de controle, como desligar o robô sem autenticação e sessões que nunca expiram. O fabricante lançou novo firmware."
translationKey: hollerer2021
topic: safety
pillars: [cobot, iot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
sdgs:
  - goal: 8
    why: "O estudo mostra como uma falha de segurança da informação num cobot ligado à rede pode se tornar um risco de lesão para o trabalhador."
paper:
  title: "Cobot attack: a security assessment exemplified by a specific collaborative robot"
  authors:
    - "Siegfried Hollerer"
    - "Clara Fischer"
    - "Bernhard Brenner"
    - "Maximilian Papa"
    - "Sebastian Schlund"
    - "Wolfgang Kastner"
    - "Joachim Fabini"
    - "Tanja Zseby"
  year: 2021
  venue: "Procedia Manufacturing"
  doi: "10.1016/j.promfg.2021.07.029"
  url: "https://doi.org/10.1016/j.promfg.2021.07.029"
  openAccess: true
  license: "CC BY"
whyItMatters: "Um cobot ligado à rede da fábrica deixa de ser um equipamento isolado. Quem altera à distância o movimento do braço ou desativa a detecção de colisão cria um perigo para a pessoa ao lado do robô. O estudo mostra que a segurança da informação precisa entrar na avaliação de segurança da célula."
method: "É um estudo de caso com um único robô, um Panda com um firmware específico, ligado por seu controlador a uma rede de chão de fábrica. Os autores mapearam as superfícies de ataque físicas e digitais e testaram só as digitais: a aplicação web do robô, os serviços e a rede. O teste seguiu metodologias abertas de teste de segurança, com varredura automática seguida de ataques manuais."
findings:
  - "Um ataque digital pode ter consequência física. Alterar a posição ou a configuração das juntas pode levar o robô a atingir a cabeça do trabalhador, um movimento inesperado da garra pode prender um dedo, e desativar a detecção de colisão pode causar contusão ou fratura."
  - "A aplicação web permite desligar o cobot sem autenticação. Um computador comprometido na rede da fábrica consegue assim parar a produção."
  - "As sessões de login não são invalidadas nem ao sair nem ao reiniciar o robô, o que permite baixar e alterar programas e mexer em contas. Além disso, só é possível criar usuários com privilégio de administrador, de modo que qualquer conta comprometida dá controle total."
  - "A maior parte dos problemas foi encontrada manualmente, sem que as ferramentas automáticas os apontassem. Os autores concluem que não se deve confiar cegamente nessas ferramentas."
  - "Há um conflito entre os dois tipos de segurança: a norma de parada de emergência exige que ela esteja sempre disponível, e exigir autenticação para desligar o robô contraria esse requisito. Os autores sugerem restringir o acesso ao cobot por rede privada (VPN)."
limitations: "O teste cobre um único modelo de cobot e uma única versão de firmware, e só as superfícies digitais; não houve ataque físico. O estudo descreve cenários de dano ao trabalhador, mas não mede a força nem a pressão de uma colisão provocada. A solução por VPN é indicada, não testada."
---
