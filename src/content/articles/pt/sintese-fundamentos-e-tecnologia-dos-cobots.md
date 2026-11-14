---
title: "Fundamentos dos cobots: o que a pesquisa mostra sobre colaborar e perceber"
description: "Panorama de 19 resumos sobre o que faz um robô ser colaborativo e o que ele precisa perceber da pessoa: níveis de interação, sensores, previsão, divisão de tarefas e interfaces."
translationKey: synthesis-fundamentals
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intro
aiAssisted: true
humanReviewed: false
---

Nos resumos deste tema, “colaborativo” descreve um modo de trabalhar, com graus que vão da coexistência à colaboração no mesmo objeto ([Aaltonen et al., 2018](/pt/research/niveis-de-colaboracao-entre-trabalhador-e-cobot/)). Para dividir o espaço, o robô precisa perceber onde a pessoa está, que força ela aplica e, cada vez mais, o que ela fará em seguida ([Robinson et al., 2023](/pt/research/visao-robotica-na-interacao-e-colaboracao-humano-robo/); [Wang et al., 2023](/pt/research/interacao-humano-robo-multimodal-visao-voz-tato-sinais/); [Du et al., 2026](/pt/research/previsao-do-comportamento-humano-na-colaboracao-com-robos/)). Esta síntese se apoia em 19 resumos, quase todos de laboratório ou de simulação.

## “Colaborativo” descreve o trabalho, não só a máquina

Um quadro de quatro níveis vai da separação física à colaboração no mesmo objeto. Aplicado a dois casos industriais, mostrou que a tarefa principal de nenhum deles chegava à colaboração. Mostrou também que duas situações podem ser iguais para a segurança e diferentes para a pessoa ([Aaltonen et al., 2018](/pt/research/niveis-de-colaboracao-entre-trabalhador-e-cobot/)). Uma revisão de 65 artigos encontrou que evitar colisões não basta para o conforto do trabalhador ([Simões et al., 2022](/pt/research/como-projetar-postos-de-trabalho-colaborativos-humano-robo/)), e um editorial defende, como opinião, que colaborar exige entender situações e se comunicar ([Faccio & Cohen, 2023](/pt/research/cobots-inteligentes-colaboracao-alem-de-evitar-colisao/)).

## O que o robô consegue perceber da pessoa?

Numa revisão de 310 artigos sobre visão robótica, o caso mais comum entre as ações colaborativas é o robô que detecta a pessoa e então para, desacelera ou muda a trajetória ([Robinson et al., 2023](/pt/research/visao-robotica-na-interacao-e-colaboracao-humano-robo/)). Cada sensor falha de um jeito: a visão sofre com a oclusão e não distingue contato acidental de intencional, e o áudio sofre com o ruído. Uma revisão de 199 artigos trata força e torque como realimentação crítica ([Wang et al., 2023](/pt/research/interacao-humano-robo-multimodal-visao-voz-tato-sinais/)).

O contato também se trata no controle. Um robô sem sensor de força estimou o contato pela diferença entre a posição desejada e a real e acertou 93% das montagens de uma engrenagem, contra 19% sem otimização automática ([Roveda et al., 2021](/pt/research/robo-sem-sensor-de-forca-aprende-montagem-por-demonstracao/)). Em simulação, um controlador cedeu à força humana sem sair de limites de espaço móveis ([Sun et al., 2025](/pt/research/controle-de-tempo-fixo-para-colaboracao-fisica-humano-robo/)). Ceder tem custo: num teste de teleoperação com seis pessoas, a baixa rigidez suavizou o contato, mas trouxe erros e atrasos de seguimento ([Si et al., 2025](/pt/research/ultrassom-teleoperado-com-cobot-interface-haptica-ou-mouse-3d/)).

## Prever a pessoa poupa tempo, mas a segurança da previsão segue em aberto

Uma revisão de 180 artigos compara três famílias de métodos de previsão. Os baseados em mecanismo são interpretáveis e generalizam mal; os baseados em dados têm segurança difícil de garantir; a fusão dos dois cresce, com garantias ainda empíricas ([Du et al., 2026](/pt/research/previsao-do-comportamento-humano-na-colaboracao-com-robos/)). Os ganhos medidos são de tempo e vêm de simulação: um cobot eliminou em média 3,4 s de espera por fase numa tarefa de embalagem ([Ghadirzadeh et al., 2021](/pt/research/cobot-proativo-com-aprendizado-por-reforco-profundo/)), e prever onde o operador deixa a peça reduziu o tempo de coleta em cerca de 16% ([Sobaszek, 2026](/pt/research/algoritmo-preditivo-reduz-tempo-de-coleta-do-cobot/)).

## Dividir as tarefas pesa tanto quanto os sensores

Num levantamento com 34 respondentes, 73% apontaram como desafio grande ou muito grande decidir onde colaborar e quem faz o quê. Os autores propõem mandar para o robô toda tarefa que causaria dano progressivo à pessoa ([Ranz et al., 2017](/pt/research/alocacao-de-tarefas-por-capacidades-entre-operador-e-robo/)). Uma revisão de 37 estudos encontrou a segurança entre os critérios de apenas 8 das 30 abordagens analisadas ([Petzoldt et al., 2023](/pt/research/quem-faz-o-que-alocacao-de-tarefas-na-montagem-com-cobots/)). Num caso numérico de 12 tarefas, alocar pela distância reduziu o tempo total em cerca de 15% ([Faccio et al., 2023](/pt/research/alocacao-de-tarefas-com-velocidade-variavel-do-cobot/)); num teste com 4 pessoas, entregar ao robô as tarefas mais imprevisíveis reduziu em 32,4% a variação da duração ([You et al., 2026](/pt/research/planejamento-de-tarefas-humano-robo-com-esforco-fisico-e-incerteza/)). Um alerta: a consciência situacional piora quando o robô decide sozinho a sequência ([Simões et al., 2022](/pt/research/como-projetar-postos-de-trabalho-colaborativos-humano-robo/)).

## A interface precisa informar sobre a tarefa

Na indústria, a tela sensível ao toque segue como a opção comercial, e gestos e voz estão no começo, segundo uma revisão narrativa ([Berg & Lu, 2020](/pt/research/interfaces-gestos-voz-e-telas-para-robos-industriais/)). Num experimento com 40 estudantes, um rosto na tela do cobot não aumentou a confiança e desviou o olhar da área de entrega ([Onnasch & Hildebrandt, 2021](/pt/research/rosto-no-cobot-nao-aumenta-confianca-e-distrai/)). Em protótipos, pedidos em linguagem natural tiveram 85% de acerto no planejamento em três tarefas de laboratório ([Zheng et al., 2024](/pt/research/robo-movel-planeja-tarefas-por-linguagem-e-realidade-mista/)), e quem não conseguiu fazer os gestos de um sistema de realidade aumentada não completou a tarefa ([Zhang & Ruttico, 2025](/pt/research/assentamento-de-tijolos-com-cobot-e-realidade-aumentada/)).

## O que ainda não se sabe

Quase tudo vem de laboratório, simulação ou casos numéricos, com amostras de 4 a 40 pessoas, muitas vezes estudantes ([Onnasch & Hildebrandt, 2021](/pt/research/rosto-no-cobot-nao-aumenta-confianca-e-distrai/); [You et al., 2026](/pt/research/planejamento-de-tarefas-humano-robo-com-esforco-fisico-e-incerteza/)). Na revisão sobre visão, só 21% dos artigos relatam experimento com pessoas ([Robinson et al., 2023](/pt/research/visao-robotica-na-interacao-e-colaboracao-humano-robo/)). Faltam implantações reais e estudos de longa duração ([Petzoldt et al., 2023](/pt/research/quem-faz-o-que-alocacao-de-tarefas-na-montagem-com-cobots/)). E os estudos de previsão e de controle não ligam seus resultados à avaliação de risco nem aos limites de força das normas ([Du et al., 2026](/pt/research/previsao-do-comportamento-humano-na-colaboracao-com-robos/); [Sun et al., 2025](/pt/research/controle-de-tempo-fixo-para-colaboracao-fisica-humano-robo/)).

## Na prática

- Descreva a célula por espaço, atividade do robô, esforço conjunto e contato, incluindo tarefas secundárias como liberar falhas ([Aaltonen et al., 2018](/pt/research/niveis-de-colaboracao-entre-trabalhador-e-cobot/)).
- Não dependa de um sensor só: saiba onde câmera, microfone e tato falham ([Wang et al., 2023](/pt/research/interacao-humano-robo-multimodal-visao-voz-tato-sinais/)).
- Decida cedo a divisão de tarefas, com a ergonomia entre os critérios, e ouça quem vai trabalhar no posto ([Ranz et al., 2017](/pt/research/alocacao-de-tarefas-por-capacidades-entre-operador-e-robo/); [Simões et al., 2022](/pt/research/como-projetar-postos-de-trabalho-colaborativos-humano-robo/)).
- Defina primeiro a informação a trocar e depois o modo de interação; evite elementos de tela que não ajudam na tarefa ([Berg & Lu, 2020](/pt/research/interfaces-gestos-voz-e-telas-para-robos-industriais/); [Onnasch & Hildebrandt, 2021](/pt/research/rosto-no-cobot-nao-aumenta-confianca-e-distrai/)).
- Trate ganhos de tempo por previsão como resultados de simulação, sem medida de segurança ([Ghadirzadeh et al., 2021](/pt/research/cobot-proativo-com-aprendizado-por-reforco-profundo/); [Sobaszek, 2026](/pt/research/algoritmo-preditivo-reduz-tempo-de-coleta-do-cobot/)).
