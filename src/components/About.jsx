import { useEffect, useRef } from 'react'
import { site } from '../config/site.js'
import { useReveals } from '../hooks/useReveals.js'
import { onFrame } from '../lib/scroll.js'
import { Eyebrow } from './Eyebrow.jsx'
import { Icon } from './Icon.jsx'

/* ===== SOBRE =====
   Foto do site atual (reunião em luz ciano) com parallax: a imagem anda mais
   devagar que a moldura enquanto a página rola. */

const VALUES = [
  { icon: 'target', title: 'Clareza estratégica', text: 'Não entregamos só guias: entregamos números que orientam decisões.' },
  { icon: 'cpu', title: 'Tecnologia própria', text: 'Processos automatizados e portal 24h para você acompanhar tudo.' },
  { icon: 'chat', title: 'Atendimento consultivo', text: 'Gente de verdade, que conhece a sua empresa pelo nome.' },
]

export function About() {
  const reveal = useReveals()
  const frame = useRef(null)
  const img = useRef(null)

  useEffect(
    () =>
      onFrame(() => {
        const f = frame.current
        if (!f || !img.current) return
        const r = f.getBoundingClientRect()
        const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight
        img.current.style.transform = `translate3d(0, ${p * -60}px, 0) scale(1.18)`
      }),
    [],
  )

  return (
    <section ref={reveal} id="sobre" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-screen-xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="relative">
          <div ref={frame} className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 sm:aspect-[5/4] lg:aspect-[4/5]">
            <img ref={img} src="/img/reuniao.webp" alt="Equipe analisando relatórios financeiros" loading="lazy" className="size-full object-cover will-change-transform" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
              <p className="max-w-[16rem] text-xl font-bold leading-snug text-white sm:text-2xl">Tradição contábil + inovação digital.</p>
              <span className="text-5xl font-extrabold tracking-tighter text-white sm:text-6xl">
                5<span className="text-cyan">+</span>
                <span className="mt-1 block font-mono text-label font-medium uppercase tracking-[0.2em] text-muted">anos</span>
              </span>
            </div>
          </div>
          <div aria-hidden="true" className="absolute -right-6 -top-6 -z-10 size-40 rounded-full bg-cyan/20 blur-3xl" />
        </div>

        <div>
          <div data-reveal>
            <Eyebrow>Sobre a empresa</Eyebrow>
            <h2 className="mt-6 text-display font-extrabold text-white">
              Unindo tradição contábil à <span className="text-shine">inovação digital.</span>
            </h2>
          </div>
          <p data-reveal className="mt-7 text-lead text-soft">
            O Ethan Group nasceu com o propósito de redefinir a relação entre empresas e contabilidade. Não entregamos apenas guias de impostos,
            entregamos clareza estratégica.
          </p>
          <p data-reveal className="mt-4 text-lead text-muted">
            Nossa missão é simplificar a complexidade tributária brasileira com tecnologia própria e um atendimento consultivo que coloca você no controle
            total do seu patrimônio.
          </p>

          <ul className="mt-10 space-y-3">
            {VALUES.map((v, n) => (
              <li key={v.title} data-reveal style={{ '--d': `${n * 90}ms` }} className="group flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-colors duration-300 hover:border-cyan/30 hover:bg-cyan/[0.04]">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan transition-transform duration-300 group-hover:scale-110">
                  <Icon name={v.icon} />
                </span>
                <span>
                  <span className="block font-semibold text-white">{v.title}</span>
                  <span className="mt-0.5 block text-sm text-muted">{v.text}</span>
                </span>
              </li>
            ))}
          </ul>

          <a data-reveal href={site.pages.sobre} className="group mt-9 inline-flex items-center gap-2 font-semibold text-cyan">
            Conheça a nossa história
            <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
