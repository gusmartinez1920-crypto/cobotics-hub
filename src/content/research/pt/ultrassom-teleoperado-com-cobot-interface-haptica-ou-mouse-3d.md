---
title: "Ultrassom teleoperado com cobot: a interface háptica rende mais, mas cansa mais"
description: "O estudo comparou duas interfaces para teleoperar um cobot em exame de ultrassom. O dispositivo háptico deu menos erro e menos tempo que o mouse 3D, mas exigiu mais esforço do operador."
translationKey: si2025
topic: fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intermediate
aiAssisted: true
humanReviewed: false
paper:
  title: "Design and Quantitative Assessment of Teleoperation-Based Human–Robot Collaboration Method for Robot-Assisted Sonography"
  authors:
    - "Weiyong Si"
    - "Ning Wang"
    - "Chenguang Yang"
  year: 2025
  venue: "IEEE Transactions on Automation Science and Engineering"
  doi: "10.1109/tase.2024.3350524"
  url: "https://doi.org/10.1109/tase.2024.3350524"
whyItMatters: "Escolher a interface de teleoperação costuma ser uma decisão de custo, sem dados de uso. Este estudo propõe um conjunto de medidas objetivas e subjetivas para comparar interfaces e mostra uma tensão comum em robótica colaborativa: a opção de melhor desempenho pode ser a que mais carrega o operador."
method: "Os autores montaram um sistema de teleoperação em que o operador comanda um cobot Franka Emika Panda com uma sonda de ultrassom, usando um dispositivo háptico (Touch X) ou um mouse 3D de baixo custo. O robô usa controle de impedância, que o deixa complacente no contato. Seis pessoas varreram um simulador de treino buscando manter 10 N de força de contato. Mediram-se carga de trabalho percebida (questionário NASA-TLX), tempos de aprendizado e de execução, erro de força, qualidade da imagem e fadiga muscular por eletromiografia."
findings:
  - "Com o dispositivo háptico o erro de força foi de 3,8 N, contra 7,4 N com o mouse 3D, e o tempo médio da tarefa foi de 53 s contra 84 s."
  - "O dispositivo háptico também teve menor erro de orientação da sonda e menos ruído na imagem. Em compensação, leva mais tempo para aprender."
  - "O índice de fadiga muscular foi maior com o dispositivo háptico (89,34 contra 76,23). No questionário, a demanda mental média foi quase o dobro da do mouse 3D (13,4 contra 6,8)."
  - "A baixa rigidez do controle torna o contato com a pessoa mais suave, mas causa erros e atrasos no seguimento da posição e da orientação. Os autores tratam isso como limite próprio desse tipo de controle."
  - "Os autores concluem que o dispositivo háptico supera o mouse 3D em tudo, menos na fadiga muscular, e propõem controle compartilhado e aprendizado de máquina para aliviar o operador."
limitations: "A amostra tem seis participantes, os testes foram feitos em um simulador de treino e não em pacientes, e não há teste estatístico das diferenças. O estudo não analisa limites de força para a segurança do paciente."
---
