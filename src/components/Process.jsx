import { useEffect, useRef } from 'react'
import { useReveals } from '../hooks/useReveals.js'
import { clamp } from '../lib/math.js'
import { onFrame } from '../lib/scroll.js'
import { Eyebrow } from './Eyebrow.jsx'

/* ===== COMO FUNCIONA =====
   Linha do tempo que vai se preenchendo de ciano conforme a página rola; cada
   etapa "acende" quando a linha passa por ela. */

const STEPS = [
  { title: 'Diagnóstico', text: 'Analisamos sua situação fiscal e financeira atual sem custos.' },
  { title: 'Onboarding', text: 'Integração digital rápida de todos os seus dados e contas.' },
  { title: 'Execução', text: 'Gestão ativa, BPO e monitoramento em tempo real via BI.' },
  { title: 'Escalabilidade', text: 'Relatórios mensais focados em redução de custos e lucro.' },
]

/* Sem props, mostra o fluxo da página inicial; as páginas de serviço passam o seu. */
export function Process({ steps = STEPS, eyebrow = 'Fluxo de trabalho', title = 'Sua empresa em', highlight = '4 etapas', after = ' simples.', text, id = 'como-funciona' }) {
  const reveal = useReveals()
  const track = useRef(null)
  const fill = useRef(null)
  const dots = useRef([])

  useEffect(
    () =>
      onFrame(() => {
        const t = track.current
        if (!t || !fill.current) return
        const r = t.getBoundingClientRect()
        const vh = window.innerHeight
        // 0 quando o topo da trilha chega a 75% da tela, 1 quando o fim chega a 45%.
        const p = clamp((vh * 0.75 - r.top) / (r.height + vh * 0.3))
        const vertical = window.innerWidth < 1024
        fill.current.style.transform = vertical ? `scaleY(${p})` : `scaleX(${p})`
        dots.current.forEach((d, n) => d?.classList.toggle('is-on', p >= n / (steps.length - 1) - 0.02))
      }),
    [steps.length],
  )

  return (
    <section ref={reveal} id={id} className="relative scroll-mt-24 overflow-hidden px-4 py-24 sm:px-6 lg:py-32">
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-full w-[70rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgb(34_211_238/0.08),transparent_60%)]" />
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 text-display font-extrabold text-white">
            {title} <span className="text-shine">{highlight}</span>
            {after}
          </h2>
          {text && <p className="mx-auto mt-6 max-w-2xl text-lead text-muted">{text}</p>}
        </div>

        <div ref={track} className="relative mt-20">
          {/* Trilha: horizontal no desktop, vertical no celular */}
          <div aria-hidden="true" className="absolute left-6 top-0 h-full w-px bg-white/10 lg:left-0 lg:top-6 lg:h-px lg:w-full">
            <div ref={fill} className="size-full origin-top bg-gradient-to-b from-cyan to-cyan-soft lg:origin-left lg:bg-gradient-to-r" />
          </div>

          <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, n) => (
              <li key={s.title} data-reveal style={{ '--d': `${n * 120}ms` }} className="relative pl-20 lg:pl-0 lg:pt-20">
                <span
                  ref={(el) => (dots.current[n] = el)}
                  className="group absolute left-0 top-0 grid size-12 place-items-center rounded-2xl border border-white/15 bg-ink font-mono text-sm font-medium text-muted transition-all duration-500 [&.is-on]:border-cyan [&.is-on]:bg-cyan [&.is-on]:text-ink [&.is-on]:shadow-[0_0_40px_-4px_rgb(34_211_238/0.7)]"
                >
                  {String(n + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
