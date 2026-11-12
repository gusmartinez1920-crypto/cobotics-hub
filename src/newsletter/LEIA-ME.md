# Newsletter (Hostinger Reach)

O site mostra o bloco "Receba conteúdos novos por e-mail" (na página inicial) assim que algum dos
itens abaixo estiver preenchido. Enquanto estiverem vazios, o bloco não aparece.

## Opção A — formulário dentro do site (recomendado)

No painel do Reach: **Formulários → (seu formulário) → Incorporar / Embed**. O Reach mostra dois trechos:

1. **Script de rastreamento** → cole em `reach-script.html` (vai antes de `</body>` em todas as páginas).
2. **Código do formulário (marcador)** → cole em `reach-form.html`.

Se criar um formulário por idioma, use `reach-form.pt.html`, `reach-form.en.html` e `reach-form.es.html`
(cada idioma usa o seu; se faltar, usa `reach-form.html`).

## Opção B — só um link

Se preferir não incorporar, copie a **URL pública do formulário** no Reach e coloque em
`NEWSLETTER_URL` no arquivo `src/site-config.ts`. O site mostra um botão que abre o formulário.

## Privacidade

Ao coletar e-mails, o site já mostra o link para o aviso de privacidade (`/<idioma>/privacy/`).
Se o e-mail de contato mudar, atualize `CONTACT_EMAIL` em `src/site-config.ts`.
