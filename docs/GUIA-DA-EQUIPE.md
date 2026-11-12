# Guia da equipe — como escrever e publicar no Cobotics Hub

Este guia é para quem escreve e revisa textos do site **cobotics-hub.com**. Tudo é feito pelo
navegador, no site do GitHub — **não é preciso instalar nada**.

> **Resumo em uma frase:** você cria o texto numa cópia separada (branch), pede revisão
> (pull request), alguém da equipe confere e aprova, e o site se atualiza sozinho em ~1 minuto.

---

## 0. Antes de começar (uma vez só)

1. Crie uma conta gratuita em https://github.com (se ainda não tiver) e mande o seu **nome de usuário** para o Gustavo.
2. O Gustavo envia um convite: aceite pelo e-mail ou em https://github.com/gusmartinez1920-crypto/cobotics-hub/invitations.
3. Pronto: você já pode propor mudanças.

### Palavras que você vai ver

| Termo | O que significa aqui |
|---|---|
| **Repositório** | A pasta do projeto no GitHub, com todos os arquivos do site. |
| **Branch** | Uma cópia de trabalho. Você escreve nela sem mexer no site publicado. |
| **Commit** | Salvar uma alteração, com uma frase dizendo o que mudou. |
| **Pull request (PR)** | O pedido de revisão: "estas mudanças podem entrar no site?" |
| **Merge** | Aprovar o PR. A mudança entra na versão principal (`main`) e o site é publicado. |
| **Front matter** | O bloco no topo do arquivo, entre `---`, com título, autores, data etc. |

---

## 1. Onde fica cada tipo de texto

Cada texto é um arquivo `.md` (Markdown) dentro de `src/content/`, separado por idioma:

| Seção do site | Pasta | Modelo para copiar |
|---|---|---|
| Resumos de pesquisa | `src/content/research/pt/` | `src/content/research/_modelo.md` |
| Tutoriais | `src/content/tutorials/pt/` | `src/content/tutorials/_modelo.md` |
| Artigos ("Aprenda") | `src/content/articles/pt/` | copie um artigo existente |
| Setores | `src/content/sectors/pt/` | copie um setor existente |

Troque `pt` por `en` ou `es` para os outros idiomas. O nome do arquivo vira o endereço da página:
`gemeo-digital-manutencao.md` → `cobotics-hub.com/pt/research/gemeo-digital-manutencao/`.
Use só letras minúsculas, números e hífens, sem acentos.

---

## 2. Escrever um texto novo (passo a passo)

**Exemplo:** um resumo de artigo científico em português.

1. Abra o modelo: https://github.com/gusmartinez1920-crypto/cobotics-hub/blob/main/src/content/research/_modelo.md
2. Clique no ícone **Copy raw file** (dois quadradinhos, à direita) para copiar todo o conteúdo.
3. Vá para a pasta onde o texto vai morar: https://github.com/gusmartinez1920-crypto/cobotics-hub/tree/main/src/content/research
   — se a pasta `pt` ainda não existir, ela será criada no passo seguinte.
4. Clique em **Add file → Create new file**.
5. No nome do arquivo, digite `pt/` e depois o nome, por exemplo: `pt/gemeo-digital-manutencao.md`.
6. Cole o modelo e preencha. As linhas que começam com `#` no topo são instruções — pode apagá-las.
   **Deixe `draft: true` enquanto o texto não estiver aprovado.**
7. Clique em **Commit changes...** (botão verde). Na janela:
   - Escreva uma frase curta: "Resumo: gêmeo digital para manutenção (rascunho)".
   - Marque **Create a new branch for this commit and start a pull request**.
   - Dê um nome à branch, por exemplo `resumo-gemeo-digital`.
   - Clique em **Propose changes**.
8. Na tela seguinte, clique em **Create pull request**. Aparece uma lista de conferência — é a mesma que o revisor vai usar.

### A verificação automática

Alguns segundos depois de criar o PR aparece **Conferir proposta**:

- ✅ **verde:** o texto está bem formatado.
- ❌ **vermelho:** algo está faltando ou errado. Clique em **Details** e procure a mensagem em
  português (por exemplo: *"Explique o vínculo com o ODS em pelo menos uma frase"* ou um DOI no formato errado).
  Corrija no mesmo PR (veja o item 3) e a verificação roda de novo.

Enquanto houver ❌, o texto **não** pode ir para o site — isso protege o site de erros.

---

## 3. Corrigir ou continuar um texto que já está em revisão

1. Abra o seu pull request (aba **Pull requests** do repositório).
2. Vá em **Files changed**, clique nos **três pontinhos** do arquivo → **Edit file**.
3. Faça as mudanças e clique em **Commit changes** — deixe marcado **Commit directly to the `nome-da-sua-branch` branch**.

As mudanças entram no mesmo PR. Nunca é preciso criar outro.

---

## 4. Revisar o texto de um colega

Toda publicação passa por **outra pessoa**. Como revisor:

1. Abra o PR e leia o texto em **Files changed** (o botão **Display the rich diff**, ícone de documento, mostra o texto formatado).
2. Para comentar um trecho, passe o mouse sobre a linha e clique no **+** azul.
3. Confira cada item da lista do PR. Para resumos científicos, **abra o DOI** e confirme título, autores, ano e revista.
4. No fim, clique em **Review changes**:
   - **Request changes** se algo precisa mudar (explique o quê);
   - **Approve** se está tudo certo.

---

## 5. Publicar

Quando o texto estiver aprovado:

1. No PR, edite o arquivo (item 3) e troque **`draft: true` → `draft: false`**.
   Se o texto foi escrito com apoio de IA e você acabou de revisá-lo, troque também **`humanReviewed: false` → `true`**.
2. Espere a verificação ficar ✅.
3. Clique em **Merge pull request → Confirm merge**.
4. Em cerca de **1 minuto** o texto está em cobotics-hub.com. Pode apagar a branch (o GitHub oferece o botão **Delete branch**).

---

## 6. Traduções

- A versão em outro idioma é **outro arquivo**, na pasta do idioma (`en/`, `es/`), com o **mesmo `translationKey`**.
  É isso que liga as versões no seletor de idioma do site.
- Se a tradução foi feita por IA ou ainda não foi conferida por alguém fluente: `translationReviewed: false`.
  O site mostra um aviso até alguém revisar e trocar para `true`.

---

## 7. Regras editoriais (resumo)

1. **Palavras próprias.** Nunca copie trechos de abstracts, sites, livros ou catálogos.
2. **Cite a fonte.** Resumo científico sempre com DOI ou link estável; números de impacto sempre com estudo ou dado.
3. **ODS com justificativa.** Só marque um ODS se o texto explicar o vínculo (campo `why`). Veja a página ODS do site.
4. **Segurança em primeiro lugar.** Não escreva que algo é "seguro porque é cobot": toda aplicação precisa de avaliação de risco.
5. **Transparência sobre IA.** Texto escrito com apoio de IA leva `aiAssisted: true`.
6. **Catálogo:** especificações só entram como `verified: true` depois de conferidas na ficha técnica oficial do fabricante.
7. **Conflitos de interesse:** declare no PR se você tem vínculo com um fabricante ou com os autores do artigo.

---

## 8. Primeira tarefa sugerida para a equipe

Os 4 textos da seção **Setores** (automotivo, eletrônica, alimentos e bebidas, logística) foram escritos
com apoio de IA e estão marcados com `humanReviewed: false` — o site mostra "Ainda em revisão pela equipe".

Cada aluno pode revisar **um setor** (versão em português):

1. Ler o texto com olhar crítico: está correto? falta algo importante? alguma afirmação exagerada?
2. Corrigir e completar pelo fluxo dos itens 2 a 5 (o arquivo já existe: abra-o e use **Edit file**).
3. Adicionar o seu identificador em `authors` (peça ao Gustavo para incluir você em `src/content/authors.json`).
4. Trocar `humanReviewed: false` → `true`.

---

## 9. Opcional: ver o site no seu computador antes de publicar

Para quem quiser ir além (precisa instalar Node.js e Git):

```bash
git clone https://github.com/gusmartinez1920-crypto/cobotics-hub.git
cd cobotics-hub
npm install
npm run dev        # abre em http://localhost:4321, incluindo os rascunhos (draft: true)
```

---

## Precisa de ajuda?

Abra uma *issue* em https://github.com/gusmartinez1920-crypto/cobotics-hub/issues descrevendo a dúvida,
ou fale com o Gustavo.
