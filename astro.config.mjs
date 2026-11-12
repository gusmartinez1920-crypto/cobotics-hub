// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Domínio público (usado em links canônicos, alternates de idioma e no sitemap).
  site: "https://cobotics-hub.com",
  i18n: {
    locales: ["en", "pt", "es"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    // Mapa do site para buscadores, com as versões de cada página nos três idiomas.
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", pt: "pt-BR", es: "es" } },
      // A raiz só redireciona para o idioma do visitante; não entra no mapa.
      filter: (page) => page !== "https://cobotics-hub.com/",
    }),
  ],
  server: { port: 4321 },
});
