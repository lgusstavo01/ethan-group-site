import { useEffect, useRef } from 'react'

/**
 * Escreve a posição do mouse (--mx/--my) em cada `.spotlight` dentro do ref,
 * para o holofote e a borda acesa do CSS seguirem o cursor.
 */
export function useSpotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const onMove = (e) => {
      root.querySelectorAll('.spotlight').forEach((el) => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - r.left}px`)
        el.style.setProperty('--my', `${e.clientY - r.top}px`)
      })
    }
    root.addEventListener('pointermove', onMove)
    return () => root.removeEventListener('pointermove', onMove)
  }, [])

  return ref
}
