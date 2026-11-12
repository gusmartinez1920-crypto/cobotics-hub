---
# MODELO DE RESUMO DE ARTIGO CIENTÍFICO
# 1. Copie este arquivo para research/<idioma>/<slug>.md  (ex.: research/pt/gemeo-digital-manutencao.md)
# 2. Arquivos que começam com "_" não são publicados.
# 3. Escreva com as SUAS palavras. Não copie o abstract. Cite sempre o original.

title: "Título do resumo (pode ser diferente do título do artigo)"
description: "Uma ou duas frases dizendo o que o artigo descobriu (até 220 caracteres)."
translationKey: mesmo-valor-nas-traducoes
pillars: [twin]            # um ou mais: iot, twin, cobot
authors: [gustavo-martinez] # quem escreveu o RESUMO (ids de src/content/authors.json)
date: 2026-01-31
level: intermediate        # intro, intermediate, advanced
draft: true                # mude para false quando a revisão terminar
aiAssisted: false

# ODS (opcional). Só marque se o resumo explicar o vínculo. Aceitos: 4, 8, 9, 12, 13, 17
sdgs:
  - goal: 9
    why: "Uma frase dizendo como este estudo se liga ao ODS."

paper:
  title: "Título exato do artigo original"
  authors: ["Sobrenome, N.", "Sobrenome, N."]
  year: 2024
  venue: "Nome da revista ou congresso"
  doi: "10.xxxx/xxxxx"     # confira em https://doi.org — se não houver, apague a linha
  url: "https://..."       # link estável para o artigo
  openAccess: false
  # license: "CC BY 4.0"   # só se for acesso aberto

whyItMatters: "Por que isso interessa a quem trabalha com cobots, IoT ou gêmeos digitais — em 2 ou 3 frases."
method: "Como os autores chegaram ao resultado: experimento, simulação, estudo de caso, revisão..."
findings:
  - "Resultado 1, com número quando houver."
  - "Resultado 2."
limitations: "O que o estudo não mostra: amostra pequena, só simulação, um único fabricante..."
---

Texto livre opcional: contexto, explicação dos conceitos, uma figura própria, conexões com outros resumos do hub.
