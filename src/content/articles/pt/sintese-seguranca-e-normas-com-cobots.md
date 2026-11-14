---
title: "Segurança e normas com cobots: o que a pesquisa mostra"
description: "Panorama de 20 estudos sobre segurança na colaboração humano-robô: a proteção vem da avaliação de risco da aplicação inteira, e quase tudo ainda foi testado só em laboratório."
translationKey: synthesis-safety
pillars: [cobot]
authors: [claude]
date: 2026-11-13
level: intro
aiAssisted: true
humanReviewed: false
---

Nos 20 resumos desta síntese, nenhum dispositivo sozinho protege quem divide o posto com um robô. A proteção vem da avaliação de risco da aplicação inteira: robô, ferramenta, leiaute e pessoa. Essa decisão fica com projetistas e integradores ([Chemweno et al., 2020](/pt/research/iso-ts-15066-salvaguardas-e-avaliacao-de-risco/); [Segura et al., 2022](/pt/research/mapa-de-normas-de-seguranca-para-sistemas-colaborativos/)). Os resumos não discutem a responsabilidade legal por um acidente.

## A segurança é da aplicação, não do robô

A edição de 2025 da ISO 10218, norma de base para robôs industriais, deixa de usar o termo robô colaborativo: a colaboração passa a ser uma propriedade da aplicação ([Hartmann et al., 2026](/pt/research/iso-10218-edicao-2025-o-que-mudou-em-relacao-a-2011/)). O cobot sai de fábrica com medidas de segurança, mas essa condição muda quando ele recebe uma garra e entra num posto ([Gualtieri et al., 2020](/pt/research/diretrizes-de-projeto-posto-de-montagem-colaborativo/)).

Um levantamento relata, sem dados, que as organizações avaliam o cobot com os mesmos procedimentos dos robôs convencionais ([Segura et al., 2022](/pt/research/mapa-de-normas-de-seguranca-para-sistemas-colaborativos/)). Uma revisão narrativa encontrou que os limites de velocidade, força e parada raramente se ligam à avaliação de risco ([Chemweno et al., 2020](/pt/research/iso-ts-15066-salvaguardas-e-avaliacao-de-risco/)). Outra, de 58 artigos, encontrou que as empresas usam softwares comerciais que raramente cobrem tudo o que as normas exigem ([Giallanza et al., 2024](/pt/research/saude-e-seguranca-do-trabalho-na-colaboracao-humano-robo/)).

## O risco não termina na colisão

Uma revisão de 32 documentos reuniu 254 fatores de risco em cinco classes. Tecnologia concentra 44% e humano, 27%; na classe humano, mais da metade é psicossocial. A contagem não diz quais fatores são mais graves ([Berx et al., 2022](/pt/research/fatores-de-risco-colaboracao-humano-robo-cinco-classes/)). Para 13 especialistas, o trabalhador responde por 44,9% do peso na prevenção de acidentes e os sistemas robóticos, por 21,3%; são opiniões, não dados de acidentes ([Lee & Lim, 2025](/pt/research/avaliacao-de-risco-nao-fisico-no-trabalho-com-cobots/)).

Um teste de intrusão em um único modelo de cobot conseguiu desligar o robô sem autenticação; os autores descrevem como desativar a detecção de colisão criaria perigo físico ([Hollerer et al., 2021](/pt/research/teste-de-intrusao-em-cobot-ciberseguranca-e-seguranca-fisica/)). A edição de 2025 da ISO 10218 torna a cibersegurança um requisito ([Hartmann et al., 2026](/pt/research/iso-10218-edicao-2025-o-que-mudou-em-relacao-a-2011/)).

## Dá para prever o contato antes de montar a célula?

No modo de limitação de potência e força, o contato é permitido dentro de limites biomecânicos, mas a carga só é medida com a aplicação montada ([Schlotzhauer et al., 2022](/pt/research/estimar-carga-de-contato-do-cobot-no-planejamento/)). Num único robô, a 400 mm/s, a força do contato transitório mudou quase 250 N entre duas posturas do braço. O plug-in de simulação dos mesmos autores não foi comparado em números com as medições ([Dombrowski et al., 2018](/pt/research/simulacao-de-colisao-cobot-limitacao-de-potencia-e-forca/)).

Um verificador automático apontou, numa fábrica real, 60 ocorrências de 27 perigos de contato, 45% vindos de usos não previstos ou de erros do operador ([Vicentini et al., 2020](/pt/research/verificacao-formal-na-avaliacao-de-risco-de-celulas-colaborativas/)). Num caso de laboratório, três engenheiros sem formação em segurança usaram diretrizes e baixaram o índice de risco do pior caso de 12 para 6. O maior ganho veio de separar pessoa e robô ([Gualtieri et al., 2022](/pt/research/diretrizes-de-seguranca-montagem-colaborativa-validacao/)).

## Como proteger sem parar o robô a cada aproximação

O monitoramento convencional para o robô sempre que a pessoa se aproxima. Um índice de risco em tempo real, que faz o robô desacelerar ou desviar, reagiu em 159 ms em simulação, contra 147 ms do convencional ([Liu et al., 2020](/pt/research/avaliacao-dinamica-de-risco-e-resposta-ativa-do-robo/)). Com uma câmera que reconhece partes do corpo, o ciclo médio de uma tarefa de laboratório foi de 22,78 s, contra 26,98 s com scanner a laser; não é um sistema certificado ([Bricher & Müller, 2025](/pt/research/visao-com-aprendizado-profundo-ajusta-velocidade-do-cobot/)). Um planejador que desvia mais quando a previsão do movimento é incerta não teve colisão em 70 movimentos de cinco participantes ([Kanazawa et al., 2019](/pt/research/planejamento-de-movimento-cobot-incerteza-da-previsao/)).

Em realidade virtual, com estudantes, nem reduzir a velocidade nem recuar se mostrou claramente superior ([Vosniakos et al., 2019](/pt/research/reduzir-velocidade-ou-recuar-teste-em-realidade-virtual/)). Uma revisão de 55 artigos alerta que robôs mais rápidos e seguros podem levar o operador a trabalhar mais perto deles, com prejuízo para o lado psicológico ([Gualtieri et al., 2021](/pt/research/seguranca-e-ergonomia-na-robotica-colaborativa-revisao/)).

## O que ainda não se sabe

Quase tudo foi testado em laboratório, simulação ou realidade virtual, com um único robô e poucas pessoas; uma revisão encontrou o mesmo em quase todas as soluções publicadas ([Giallanza et al., 2024](/pt/research/saude-e-seguranca-do-trabalho-na-colaboracao-humano-robo/)). As ferramentas de avaliação propostas ainda não foram validadas em empresas ([Berx et al., 2022](/pt/research/prontidao-de-seguranca-antes-de-comprar-um-cobot/); [Gholamizadeh et al., 2025](/pt/research/identificacao-de-perigos-hazid-na-industria-5-0/)). Nenhum artigo de uma das revisões trata da participação do operador na avaliação de riscos ([Berx et al., 2022](/pt/research/fatores-de-risco-colaboracao-humano-robo-cinco-classes/)).

## Na prática

- Avalie a aplicação inteira, não só o robô, e comece antes da compra ([Berx et al., 2022](/pt/research/prontidao-de-seguranca-antes-de-comprar-um-cobot/)).
- Ligue cada limite de velocidade, força e parada ao resultado da avaliação de risco ([Chemweno et al., 2020](/pt/research/iso-ts-15066-salvaguardas-e-avaliacao-de-risco/)).
- Aplique as medidas nesta ordem: segurança pelo projeto, proteções adicionais e, por fim, informação ([Gualtieri et al., 2022](/pt/research/diretrizes-de-seguranca-montagem-colaborativa-validacao/)).
- Inclua na avaliação a segurança da rede e fatores não físicos, como estresse, fadiga e treinamento ([Hollerer et al., 2021](/pt/research/teste-de-intrusao-em-cobot-ciberseguranca-e-seguranca-fisica/); [Lee & Lim, 2025](/pt/research/avaliacao-de-risco-nao-fisico-no-trabalho-com-cobots/)).
- Envolva o operador na definição do leiaute e das atividades ([Gualtieri et al., 2020](/pt/research/diretrizes-de-projeto-posto-de-montagem-colaborativo/)).
