import { useEffect, useRef } from 'react'

/**
 * Observa cada `[data-reveal]` dentro do elemento do ref e adiciona `.is-in`
 * na primeira vez que ele aparece na tela.
 */
export function useReveals() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          io.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px' },
    )

    root.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return ref
}
