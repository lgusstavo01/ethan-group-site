export const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v))

export const lerp = (a, b, t) => a + (b - a) * t

/** Onde `v` está entre `a` e `b`, limitado a 0–1. */
export const range = (v, a, b) => clamp((v - a) / (b - a))

export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

export const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

/**
 * Progresso do scroll dentro de uma seção alta cujo filho é `sticky`:
 * 0 quando o topo da seção encosta no topo da tela, 1 quando o filho vai soltar.
 */
export function pinProgress(el) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  const span = Math.max(1, rect.height - vh)
  return { p: clamp(-rect.top / span), rect, vh }
}
