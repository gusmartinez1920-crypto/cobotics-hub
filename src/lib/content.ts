import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "../i18n/ui";

type Editorial = "articles" | "tutorials" | "research";

/** Rascunhos aparecem só em `npm run dev` (pré-visualização da equipe), nunca no site publicado. */
const showDrafts = import.meta.env.DEV;

/** id "pt/meu-texto" → { lang: "pt", slug: "meu-texto" } */
export function splitId(id: string) {
  const [lang, ...rest] = id.split("/");
  return { lang: lang as Lang, slug: rest.join("/") };
}

export async function entries<C extends Editorial>(collection: C, lang?: Lang) {
  const all = (await getCollection(collection, (e) => showDrafts || !e.data.draft)) as CollectionEntry<C>[];
  return all
    .filter((e) => !lang || splitId(e.id).lang === lang)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * Link do seletor de idioma para cada idioma: a tradução, se existir;
 * senão, a lista da seção naquele idioma (evita levar o leitor a uma página 404).
 */
export function alternatesFor(
  section: string,
  lang: Lang,
  slug: string,
  translations: { lang: Lang; slug: string }[],
): Record<Lang, string> {
  const out = { en: `/en/${section}/`, pt: `/pt/${section}/`, es: `/es/${section}/` } as Record<Lang, string>;
  out[lang] = `/${lang}/${section}/${slug}/`;
  for (const tr of translations) out[tr.lang] = `/${tr.lang}/${section}/${tr.slug}/`;
  return out;
}

/** Outras versões (idiomas) do mesmo texto. */
export async function translationsOf<C extends Editorial>(collection: C, entry: CollectionEntry<C>) {
  const all = await entries(collection);
  return all
    .filter((e) => e.data.translationKey === entry.data.translationKey && e.id !== entry.id)
    .map((e) => ({ lang: splitId(e.id).lang, slug: splitId(e.id).slug }));
}

/** ODS presentes numa lista de conteúdos, em ordem numérica (para o filtro). */
export function presentSdgs(list: { data: { sdgs: { goal: number }[] } }[]) {
  return [...new Set(list.flatMap((e) => e.data.sdgs.map((s) => s.goal)))].sort((a, b) => a - b) as import("./sdgs").SdgGoal[];
}
