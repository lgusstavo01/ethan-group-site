import { useEffect, useRef } from 'react'
import { easeOutCubic } from '../lib/math.js'

/* ===== CONTADOR =====
   Sobe de 0 até `value` na primeira vez que aparece na tela. Escreve direto
   no DOM (sem estado), então não re-renderiza a cada quadro. */

/** 184250 → "184.250". */
const fmt = (n) => n.toLocaleString('pt-BR')

export function CountUp({ value, suffix = '', duration = 1800, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = `${fmt(value)}${suffix}`
      return
    }
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration)
        el.textContent = `${fmt(Math.round(easeOutCubic(t) * value))}${suffix}`
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, suffix, duration])

  return (
    <span ref={ref} className={`tabular ${className}`}>
      0{suffix}
    </span>
  )
}
