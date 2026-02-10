/**
 * Répond 404 pour des chemins qui n'appartiennent pas à ce site (ex. autre app Vite/React).
 * Évite que Vue Router et le handler d'erreur Nuxt ne traitent ces requêtes
 * (Accept sans text/html → body JSON → html.replace is not a function).
 */
const BLOCKED_PATHS = [
  "/@vite/client",
  "/src/index.tsx",
  "/manifest.json",
  "/vite.svg",
  "/sw.js",
];

export default defineEventHandler((event) => {
  const path = event.path ?? getRequestURL(event).pathname;
  if (BLOCKED_PATHS.some((p) => path === p || path.startsWith(p + "?"))) {
    setResponseStatus(event, 404);
    return "Not found";
  }
});
