// Lê os trechos do Hostinger Reach colados em src/newsletter/*.html (ver LEIA-ME.md).
import type { Lang } from "../i18n/ui";
import { NEWSLETTER_URL } from "../site-config";

const files = import.meta.glob("../newsletter/*.html", { query: "?raw", import: "default", eager: true }) as Record<
  string,
  string
>;
const read = (name: string) => (files[`../newsletter/${name}`] ?? "").trim();

/** Script de rastreamento do Reach (vai antes de </body>). Vazio se não configurado. */
export const reachScript = read("reach-script.html");

/** Código do formulário para o idioma, com fallback para o formulário geral. */
export function reachForm(lang: Lang) {
  return read(`reach-form.${lang}.html`) || read("reach-form.html");
}

export type NewsletterMode = { kind: "embed"; html: string } | { kind: "link"; url: string } | { kind: "off" };

export function newsletterMode(lang: Lang): NewsletterMode {
  const html = reachForm(lang);
  if (html) return { kind: "embed", html };
  if (NEWSLETTER_URL) return { kind: "link", url: NEWSLETTER_URL };
  return { kind: "off" };
}
