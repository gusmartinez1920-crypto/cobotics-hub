---
title: "Câmera que reconhece partes do corpo deixa o cobot mais rápido dentro da ISO/TS 15066"
description: "Um sistema com câmera e aprendizado profundo ajusta a velocidade do robô conforme a parte do corpo mais próxima. Em laboratório, o ciclo ficou mais de 15% menor que com scanner a laser."
translationKey: bricher2025
topic: safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: advanced
aiAssisted: true
humanReviewed: false
paper:
  title: "Analysis of Deep-Learning Methods in an ISO/TS 15066–Compliant Human–Robot Safety Framework"
  authors:
    - "David Bricher"
    - "Andreas Müller"
  year: 2025
  venue: "Sensors"
  doi: "10.3390/s25237136"
  url: "https://doi.org/10.3390/s25237136"
whyItMatters: "Em muitas células colaborativas, o robô anda sempre na velocidade mais baixa permitida, mesmo quando a colisão é improvável, e isso alonga o ciclo. O estudo mostra, com o cálculo da distância de separação aberto parcela por parcela, quanto se pode ganhar quando o sistema sabe onde estão a cabeça, as mãos e o tronco da pessoa. Mostra também por que isso ainda não é um sistema de segurança certificado."
method: "Experimento de laboratório com um robô KUKA LBR iiwa e uma câmera de cor e profundidade. Os autores compararam quatro métodos de aprendizado profundo: reconhecimento do corpo, segmentação do corpo, estimativa de pose e segmentação de partes do corpo. Mediram a latência de cada método, o erro de posição contra um sistema de captura de movimento em uma única pessoa e as velocidades máximas por parte do corpo a partir de forças e pressões de contato. A validação foi uma tarefa de aparafusamento em bloco de motor, com dez repetições por método, comparada a um scanner a laser e à operação sem sistema adicional de segurança."
findings:
  - "O ciclo médio foi de 22,78 s com segmentação de partes do corpo, 26,98 s com o scanner a laser e 35,08 s sem sistema adicional: redução de até 35% frente à operação sem sistema e de mais de 15% frente ao scanner."
  - "A latência pesa na distância de separação: vai de 305 ms na estimativa de pose a 812 ms na segmentação de partes, o que corresponde a parcelas de 488 mm a 1299 mm."
  - "Os métodos que localizam partes do corpo erram menos a posição que os de corpo inteiro. Apesar da maior latência, a segmentação de partes teve o menor ciclo médio; reconhecimento do corpo e pose oscilaram mais porque reagem mal à oclusão."
  - "As velocidades máximas medidas para a tarefa variam conforme a parte do corpo: 50 mm/s para crânio e testa, 100 mm/s para mãos, antebraços, braços e tórax e 200 mm/s para coxas."
  - "A resolução de profundidade da câmera é o fator limitante: ela resolve bem as partes do corpo até 4 m, e a 6 m o erro de profundidade passa de 0,5 m para algumas partes."
limitations: "Os próprios autores dizem que não se trata de um sistema certificado nem pronto para implantação: faltam estudos de robustez, de falha segura e de certificação de segurança funcional. O experimento usou uma única pessoa, uma única tarefa e poucas repetições, sem teste estatístico formal, e tratou só o contato quase estático. O ganho é medido apenas em tempo de ciclo, sem nenhuma medida sobre quem trabalha."
---
