// "Quem é quem": autores dos artigos resumidos no hub, montado a partir de `paper.authors`.
// Só dados bibliográficos (nome e artigos). Não é um ranking da área.
import type { CollectionEntry } from "astro:content";

/** Partículas que fazem parte do sobrenome ("Giada La Scalia" → "La Scalia"). */
const PARTICLES = new Set(["de", "da", "do", "dos", "das", "del", "della", "delle", "di", "la", "le", "van", "von", "der", "den", "ten", "ter"]);

/** Âncora estável do autor: "Wilm Decré" → "wilm-decre". */
export function authorId(name: string) {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Sobrenome para ordenar a lista. Nomes de instituições ficam inteiros. */
export function familyName(name: string) {
  const parts = name.trim().split(/\s+/);
  if (parts.length < 2 || isOrganization(name)) return name;
  let i = parts.length - 1;
  while (i > 1 && PARTICLES.has(parts[i - 1].toLowerCase())) i--;
  return parts.slice(i).join(" ");
}

export function isOrganization(name: string) {
  return /\b(Agency|Foundation|Commission|Organization|Organisation|Institute|Committee|Office)\b/i.test(name);
}

export type Researcher = {
  id: string;
  name: string;
  family: string;
  papers: CollectionEntry<"research">[];
  topics: string[];
  coauthors: { id: string; name: string }[];
};

export function buildResearchers(list: CollectionEntry<"research">[], locale: string): Researcher[] {
  const map = new Map<string, Researcher>();
  for (const entry of list) {
    for (const name of entry.data.paper.authors) {
      const id = authorId(name);
      if (!id) continue;
      const r = map.get(id) ?? { id, name, family: familyName(name), papers: [], topics: [], coauthors: [] };
      r.papers.push(entry);
      if (entry.data.topic && !r.topics.includes(entry.data.topic)) r.topics.push(entry.data.topic);
      for (const other of entry.data.paper.authors) {
        const oid = authorId(other);
        if (oid && oid !== id && !r.coauthors.some((c) => c.id === oid)) r.coauthors.push({ id: oid, name: other });
      }
      map.set(id, r);
    }
  }
  const all = [...map.values()];
  for (const r of all) {
    r.papers.sort((a, b) => b.data.paper.year - a.data.paper.year);
    r.coauthors.sort((a, b) => familyName(a.name).localeCompare(familyName(b.name), locale));
  }
  return all.sort((a, b) => a.family.localeCompare(b.family, locale) || a.name.localeCompare(b.name, locale));
}

/** Letra inicial para o índice alfabético (sem acento). */
export function initial(r: Researcher) {
  const c = r.family.normalize("NFD").replace(/[̀-ͯ]/g, "").charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : "#";
}
