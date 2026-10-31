/** Prefixes a `public/` path with Vite's base URL so assets resolve under a sub-path deploy (e.g. GitHub Pages). */
export function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}
