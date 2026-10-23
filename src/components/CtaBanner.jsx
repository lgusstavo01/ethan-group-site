import { whatsappLink } from '../config/site.js'
import { useReveals } from '../hooks/useReveals.js'
import { Icon } from './Icon.jsx'

/* ===== CHAMADA FINAL =====
   Faixa grande com feixe de luz na borda, no fim de cada página. */

export function CtaBanner({ title, highlight, text, label = 'Falar com um especialista', message }) {
  const reveal = useReveals()

  return (
    <section ref={reveal} className="px-4 py-20 sm:px-6 lg:py-28">
      <div data-reveal className="beam noise relative mx-auto max-w-screen-xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-deep/50 via-ink-2 to-ink-2">
        <div aria-hidden="true" className="grid-lines absolute inset-0" />
        <div aria-hidden="true" className="absolute -right-24 -top-24 size-96 rounded-full bg-cyan/25 blur-[100px] [animation:aurora-a_16s_ease-in-out_infinite]" />
        <div className="relative px-7 py-16 text-center sm:px-12 lg:py-24">
          <h2 className="mx-auto max-w-3xl text-display font-extrabold text-white">
            {title} {highlight && <span className="text-shine">{highlight}</span>}
          </h2>
          {text && <p className="mx-auto mt-6 max-w-2xl text-lead text-soft">{text}</p>}
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-8 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgb(34_211_238/0.7)]"
          >
            {label}
            <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
