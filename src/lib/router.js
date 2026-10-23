import { useSyncExternalStore } from 'react'

/* ===== ROTEADOR =====
   Mínimo, sem biblioteca: lê o caminho da URL (/contabilidade, /blog/3...) e
   troca a página com history.pushState. Na Vercel, o vercel.json manda toda
   rota para o index.html. */

const listeners = new Set()

function subscribe(fn) {
  listeners.add(fn)
  window.addEventListener('popstate', fn)
  return () => {
    listeners.delete(fn)
    window.removeEventListener('popstate', fn)
  }
}

/** Caminho atual sem barra no fim ("/" na inicial). */
export const currentPath = () => window.location.pathname.replace(/\/+$/, '') || '/'

export function usePath() {
  return useSyncExternalStore(subscribe, currentPath)
}

/** Vai para outra página do site (aceita âncora: "/#contato"). */
export function navigate(to) {
  history.pushState(null, '', to)
  listeners.forEach((fn) => fn())
}
