import { Fragment } from 'react'
import { Eyebrow } from './Eyebrow.jsx'

/* ===== TOPO DAS PÁGINAS INTERNAS =====
   Mesmo fundo do hero da inicial (grade + luzes), título subindo palavra por
   palavra. `highlight` é o trecho final do título que ganha o brilho ciano.
   `visual` vai à direita no desktop (ou some, se não vier). */

export function PageHero({ eyebrow, title, highlight, text, actions, visual }) {
  let i = 0
  const words = (str, cls = '') =>
    str.split(' ').map((w) => (
      <Fragment key={`${w}-${i}`}>
        <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span className={`inline-block animate-rise ${cls}`} style={{ animationDelay: `${120 + i++ * 70}ms` }}>
            {w}
          </span>
        </span>{' '}
      </Fragment>
    ))

  return (
    <section className="noise relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 lg:pb-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0" />
        <div className="absolute -top-1/3 left-[-15%] size-[50vmax] rounded-full bg-cyan/20 blur-[120px] [animation:aurora-a_18s_ease-in-out_infinite]" />
        <div className="absolute -bottom-1/2 right-[-20%] size-[45vmax] rounded-full bg-sky-600/20 blur-[140px] [animation:aurora-b_22s_ease-in-out_infinite]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className={`mx-auto grid max-w-screen-xl items-center gap-14 px-4 sm:px-6 ${visual ? 'lg:grid-cols-12 lg:gap-10' : ''}`}>
        <div className={visual ? 'lg:col-span-7' : 'max-w-4xl'}>
          <div className="animate-rise">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-7 text-[clamp(2.4rem,5.4vw,5rem)] font-extrabold leading-[1.03] tracking-[-0.045em] text-white">
            {words(title)}
            {highlight && words(highlight, 'text-shine')}
          </h1>
          {text && <p className="mt-7 max-w-xl animate-rise text-lead text-soft [animation-delay:700ms]">{text}</p>}
          {actions && <div className="mt-10 flex animate-rise flex-col gap-3 [animation-delay:850ms] sm:flex-row">{actions}</div>}
        </div>
        {visual && <div className="relative animate-rise [animation-delay:400ms] lg:col-span-5">{visual}</div>}
      </div>
    </section>
  )
}
