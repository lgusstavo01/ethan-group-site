import { Eyebrow } from './Eyebrow.jsx'

/* Rótulo + título (com trecho em destaque) + texto, para abrir uma seção. */
export function SectionTitle({ eyebrow, title, highlight, after = '', text, center = false, className = '' }) {
  return (
    <div data-reveal className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-6 text-display font-extrabold text-white">
        {title} {highlight && <span className="text-shine">{highlight}</span>}
        {after}
      </h2>
      {text && <p className={`mt-6 text-lead text-muted ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>{text}</p>}
    </div>
  )
}
