# Cobotics Hub — site público

Site estático em **Astro**, em três idiomas (EN, PT, ES). Todo o conteúdo fica em arquivos Markdown nesta pasta e é publicado pelo GitHub.

## Rodar no seu computador

```bash
cd site
npm install      # só na primeira vez
npm run dev      # http://localhost:4321  (mostra também os rascunhos)
npm run build    # confere erros e gera o site final em dist/
```

> No Windows, use sempre os comandos `npm run ...` acima. Eles corrigem um problema do Astro
> que gera o site sem estilos quando o terminal está em `d:\` (minúsculo).

## Onde fica cada coisa

| O quê | Onde |
|---|---|
| Artigos ("Aprenda") | `src/content/articles/<idioma>/<slug>.md` |
| Resumos de artigos científicos ("Pesquisa") | `src/content/research/<idioma>/<slug>.md` — modelo em `research/_modelo.md` |
| Tutoriais | `src/content/tutorials/<idioma>/<slug>.md` — modelo em `tutorials/_modelo.md` |
| Autores e equipe | `src/content/authors.json` |
| Catálogo (vitrine, sem venda) | `src/content/catalog.json` |
| Textos fixos da interface (menus, botões) | `src/i18n/ui.ts` |
| Endereço do repositório no GitHub | `src/site-config.ts` |

`<idioma>` é `en`, `pt` ou `es`. As versões do mesmo texto em idiomas diferentes usam o **mesmo `translationKey`** — é assim que o site liga uma à outra no seletor de idioma.

## Fluxo de publicação (equipe)

1. Crie uma *branch* e copie o modelo da seção (ex.: `research/_modelo.md` → `research/pt/meu-resumo.md`).
2. Escreva com `draft: true`. Rascunhos aparecem em `npm run dev`, nunca no site publicado.
3. Abra um *pull request*. Outra pessoa da equipe revisa: conteúdo, citação (DOI), direitos autorais.
4. Na aprovação, mude para `draft: false` e faça o *merge*. O site é publicado automaticamente.

**Traduções:** quem traduz (pessoa ou IA) marca `translationReviewed: false`. O site mostra um aviso até alguém da equipe revisar e trocar para `true`. Textos com apoio de IA levam `aiAssisted: true`.

**Resumos científicos — regras:** escreva com suas palavras (não copie o abstract), cite sempre o original com DOI, e só hospede o PDF se a licença permitir (ex.: CC BY).

**Catálogo:** todo item entra com `verified: false` até alguém conferir as especificações na ficha técnica oficial do fabricante.

## Pesquisadores externos

A página **Contribua** leva aos formulários em `.github/ISSUE_TEMPLATE/`. O envio vira uma *issue* no GitHub; a equipe transforma em arquivo Markdown e publica com o nome do pesquisador. Para adicionar o pesquisador à página Equipe, inclua-o em `authors.json` com `"kind": "researcher"` e o ORCID.

## Publicação (Hostinger)

Cada *push* na branch `main` dispara `.github/workflows/deploy.yml`: o GitHub gera o site e envia `dist/`
para `public_html/` na Hostinger por FTP. Dá para publicar manualmente em **Actions → Publicar site → Run workflow**.

Configuração única, em **GitHub → Settings → Secrets and variables → Actions → New repository secret**:

| Secret | Onde achar (hPanel) |
|---|---|
| `FTP_SERVER` | Arquivos → Contas FTP → "Servidor FTP" (IP ou ftp.seudominio) |
| `FTP_USERNAME` | mesma tela |
| `FTP_PASSWORD` | a senha da conta FTP (pode redefinir lá) |

As senhas ficam só nos *secrets* do GitHub — nunca no código nem em mensagens.

**Pasta de destino:** por padrão o site vai para `public_html/`. Se no hPanel o campo "Diretório" da conta FTP
já terminar em `public_html`, crie em **Settings → Secrets and variables → Actions → Variables** a variável
`FTP_SERVER_DIR` com o valor `./`.

`public/.htaccess` força HTTPS, remove o `www` e usa a página 404 do site. O domínio fica em `site` no `astro.config.mjs`.
