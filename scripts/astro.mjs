// Executa o Astro garantindo a letra do drive em maiúscula no Windows.
// Motivo: com o diretório atual como "d:\..." (minúsculo), o Astro gera as páginas
// SEM o CSS. Com "D:\..." funciona. Uso: node scripts/astro.mjs <comando astro>
import { spawnSync } from "node:child_process";

const cwd = process.platform === "win32" ? process.cwd().replace(/^[a-z]:/, (d) => d.toUpperCase()) : process.cwd();
const res = spawnSync("npx", ["astro", ...process.argv.slice(2)], { stdio: "inherit", shell: true, cwd, env: { ...process.env, PWD: cwd, INIT_CWD: cwd } });
process.exit(res.status ?? 1);
