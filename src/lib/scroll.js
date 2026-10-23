import Lenis from 'lenis'

/* ===== MOTOR DE SCROLL =====
   Um único loop de requestAnimationFrame para a página toda. O Lenis avança
   primeiro; depois cada seção animada lê a própria posição e escreve estilos
   direto no DOM — nada passa pelo estado do React, então rolar nunca
   re-renderiza a página. */

const subscribers = new Set()
let lenis = null

export function startScroll(reducedMotion) {
  if (!reducedMotion) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 0.9 })
  }

  let raf = 0
  const loop = (time) => {
    lenis?.raf(time)
    subscribers.forEach((fn) => fn(time))
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)

  return () => {
    cancelAnimationFrame(raf)
    lenis?.destroy()
    lenis = null
  }
}

export function onFrame(fn) {
  subscribers.add(fn)
  return () => {
    subscribers.delete(fn)
  }
}

/** Rola suave até uma âncora (`#obras`) ou até o topo (`#top`).
    `immediate` salta direto (usado ao chegar de outra página com âncora). */
export function scrollToHash(hash, { immediate = false } = {}) {
  const target = hash === '#top' ? 0 : document.querySelector(hash)
  if (target === null) return
  if (immediate) {
    const top = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY - 8
    window.scrollTo(0, top)
    lenis?.scrollTo(top, { immediate: true })
  } else if (lenis) {
    lenis.scrollTo(target, { duration: 1.4, offset: hash === '#top' ? 0 : -8 })
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target })
  } else {
    target.scrollIntoView()
  }
  history.replaceState(null, '', hash === '#top' ? ' ' : hash)
}

/** onClick para links internos: intercepta `#âncora` e rola com o Lenis. */
export function goTo(e, then) {
  const hash = e.currentTarget.getAttribute('href')
  if (!hash?.startsWith('#')) return
  e.preventDefault()
  then?.()
  // Fora da página inicial (ex.: página de uma obra) a âncora não existe aqui:
  // volta para a inicial já apontando para a seção.
  if (hash !== '#top' && !document.querySelector(hash)) {
    window.location.href = `/${hash}`
    return
  }
  scrollToHash(hash)
}
