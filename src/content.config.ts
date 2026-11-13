// Coleções de conteúdo do Cobotics Hub.
// Cada texto vive em src/content/<coleção>/<idioma>/<slug>.md
// Versões do mesmo texto em idiomas diferentes compartilham o mesmo `translationKey`.
// Arquivos que começam com "_" (ex.: _modelo.md) são modelos e não são publicados.
import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";
import { SDG_GOALS, type SdgGoal } from "./lib/sdgs";

const lang = z.enum(["en", "pt", "es"]);
/** Os três pilares da Indústria 5.0 tratados no hub. */
export const pillar = z.enum(["iot", "twin", "cobot"]);

/** Temas dos resumos de pesquisa, na ordem em que aparecem na lista. */
export const RESEARCH_TOPICS = [
  "fundamentals",
  "safety",
  "human-factors",
  "industry-5-0",
  "applications",
  "implementation",
  "education",
] as const;
const researchTopic = z.enum(RESEARCH_TOPICS);

const common = {
  title: z.string(),
  description: z.string().max(220),
  translationKey: z.string(),
  pillars: z.array(pillar).min(1),
  authors: z.array(reference("authors")).min(1),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  /** false = tradução ainda não revisada por uma pessoa da equipe. */
  translationReviewed: z.boolean().default(true),
  /** Texto redigido ou traduzido com apoio de IA (exibido no rodapé do texto). */
  aiAssisted: z.boolean().default(false),
  /**
   * false = o texto (no idioma original) ainda não foi revisado por uma pessoa da equipe.
   * O site mostra um aviso até alguém revisar e trocar para true.
   */
  humanReviewed: z.boolean().default(true),
  /**
   * ODS ligados ao conteúdo. Regra editorial: só marque um ODS se o texto explicar o vínculo;
   * `why` é exibido junto do conteúdo. Objetivos aceitos: ver src/lib/sdgs.ts.
   */
  sdgs: z
    .array(
      z.object({
        goal: z.union(SDG_GOALS.map((g) => z.literal(g)) as [z.ZodLiteral<SdgGoal>, z.ZodLiteral<SdgGoal>, ...z.ZodLiteral<SdgGoal>[]]),
        why: z.string().min(30, "Explique o vínculo com o ODS em pelo menos uma frase."),
      }),
    )
    .default([]),
};

const articles = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/_*.md"], base: "./src/content/articles" }),
  schema: z.object({ ...common, level: z.enum(["intro", "intermediate", "advanced"]).default("intro") }),
});

const tutorials = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/_*.md"], base: "./src/content/tutorials" }),
  schema: z.object({
    ...common,
    difficulty: z.enum(["beginner", "intermediate", "advanced"]),
    duration: z.string(), // ex.: "2 h"
    hardware: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
  }),
});

/** Aplicações por setor industrial (automotivo, eletrônica, alimentos, logística...). */
const sectors = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/_*.md"], base: "./src/content/sectors" }),
  schema: z.object({
    ...common,
    order: z.number().int().default(100), // posição na lista
    /** Aplicações típicas, em frases curtas (aparecem no cartão e no topo da página). */
    applications: z.array(z.string()).min(1),
  }),
});

/** Resumos de artigos científicos. O resumo é escrito com palavras próprias; o original é sempre citado. */
const research = defineCollection({
  loader: glob({ pattern: ["**/*.md", "!**/_*.md"], base: "./src/content/research" }),
  schema: z.object({
    ...common,
    /** Tema do resumo (agrupa a lista). Nomes exibidos: chaves `topic.*` em src/i18n/ui.ts. */
    topic: researchTopic.optional(),
    paper: z.object({
      title: z.string(),
      authors: z.array(z.string()).min(1),
      year: z.number().int().min(1950).max(2100),
      venue: z.string(),
      doi: z.string().regex(/^10\.\d{4,9}\/\S+$/, "DOI no formato 10.xxxx/...").optional(),
      url: z.string().url(),
      openAccess: z.boolean().default(false),
      license: z.string().optional(), // ex.: "CC BY 4.0"
    }),
    method: z.string(),
    findings: z.array(z.string()).min(1),
    limitations: z.string(),
    whyItMatters: z.string(),
    level: z.enum(["intro", "intermediate", "advanced"]).default("intermediate"),
  }),
});

const authors = defineCollection({
  loader: file("./src/content/authors.json"),
  schema: z.object({
    name: z.string(),
    role: z.object({ en: z.string(), pt: z.string(), es: z.string() }),
    bio: z.object({ en: z.string(), pt: z.string(), es: z.string() }).optional(),
    orcid: z.string().optional(),
    github: z.string().optional(),
    linkedin: z.string().url().optional(),
    kind: z.enum(["team", "researcher", "ai"]).default("team"),
  }),
});

/** Vitrine técnica (Fase 1: sem preços e sem venda). */
const catalog = defineCollection({
  loader: file("./src/content/catalog.json"),
  schema: z.object({
    name: z.string(),
    brand: z.string(),
    pillar,
    kind: z.enum(["cobot", "sensor", "gateway", "software", "kit"]),
    line: z.enum(["maker", "industrial", "both"]),
    specs: z.record(z.string(), z.union([z.string(), z.number()])),
    sourceUrl: z.string().url(),
    /** false = especificações ainda não conferidas na ficha oficial do fabricante. */
    verified: z.boolean().default(false),
  }),
});

export const collections = { articles, tutorials, research, sectors, authors, catalog };
export type Lang = z.infer<typeof lang>;
