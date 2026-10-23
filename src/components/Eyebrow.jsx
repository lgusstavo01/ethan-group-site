/* Rótulo pequeno acima dos títulos de seção (com um ponto ciano pulsando). */
export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`inline-flex items-center gap-2.5 rounded-full border border-cyan/20 bg-cyan/5 px-3.5 py-1.5 font-mono text-label font-medium uppercase text-cyan ${className}`}>
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full rounded-full bg-cyan [animation:ping-soft_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <span className="relative inline-flex size-1.5 rounded-full bg-cyan" />
      </span>
      {children}
    </p>
  )
}
