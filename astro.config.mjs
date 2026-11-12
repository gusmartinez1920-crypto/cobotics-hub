// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Domínio público (usado em links canônicos e alternates de idioma).
  site: "https://cobotics-hub.com",
  i18n: {
    locales: ["en", "pt", "es"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  server: { port: 4321 },
});
