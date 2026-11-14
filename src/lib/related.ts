// Ligações cruzadas: encontra os resumos de pesquisa que mencionam um termo, uma norma ou um setor.
// A busca é feita no texto do resumo (título, descrição e campos), sem acentos e sem diferenciar maiúsculas.
import type { CollectionEntry } from "astro:content";

type Research = CollectionEntry<"research">;

export function plain(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

const cache = new WeakMap<object, string>();
function textOf(e: Research) {
  let t = cache.get(e);
  if (!t) {
    const d = e.data;
    t = plain([d.title, d.description, d.whyItMatters, d.method, ...d.findings, d.limitations].join(" \n "));
    cache.set(e, t);
  }
  return t;
}

/**
 * Resumos cujo texto contém algum dos padrões. Cada padrão é um trecho de texto simples
 * (comparado no início de palavra): "armazem" casa com "armazém" e "armazéns".
 */
export function mentioning(list: Research[], patterns: string[]) {
  if (patterns.length === 0) return [];
  // padrões de até 4 letras (siglas como "pfl", "iot") só casam como palavra inteira
  const res = patterns.map((p) => {
    const body = plain(p).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${body}${p.length <= 4 ? "s?($|[^a-z0-9])" : ""}`);
  });
  return list
    .filter((e) => res.some((re) => re.test(textOf(e))))
    .sort((a, b) => b.data.paper.year - a.data.paper.year || a.data.title.localeCompare(b.data.title));
}
