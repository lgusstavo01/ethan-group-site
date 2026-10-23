/* ===== LOGO =====
   Pelo guia da marca, em HTML o logo é sempre texto: ETHAN em peso 800 com o
   ponto final em ciano. Nunca usar o logo antigo azul ("Soluções empresariais"). */

export function Logo({ className = '' }) {
  return (
    <span className={`font-extrabold tracking-[-0.03em] text-white ${className}`}>
      ETHAN<span className="text-cyan">.</span>
    </span>
  )
}
