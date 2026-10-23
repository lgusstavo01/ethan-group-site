import { useEffect, useRef } from 'react'
import { site, stats } from '../config/site.js'
import { CountUp } from '../components/CountUp.jsx'
import { CtaBanner } from '../components/CtaBanner.jsx'
import { Icon } from '../components/Icon.jsx'
import { Link } from '../components/Link.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { useReveals } from '../hooks/useReveals.js'
import { useSpotlight } from '../hooks/useSpotlight.js'
import { clamp } from '../lib/math.js'
import { onFrame } from '../lib/scroll.js'

/* ===== PÁGINA: SOBRE =====
   Conteúdo de ethangroup.com.br/sobre (out/2026). */

const PILLARS = [
  {
    icon: 'shield',
    area: 'Contabilidade',
    title: 'Conformidade e Segurança',
    text: 'Garantimos que sua empresa esteja 100% blindada perante o fisco. Utilizamos automação avançada para eliminar erros e garantir que você nunca pague um centavo a mais do que deve.',
    href: site.pages.contabilidade,
  },
  {
    icon: 'wallet',
    area: 'Financeiro (BPO)',
    title: 'Gestão e Rentabilidade',
    text: 'O pilar de BPO da Ethan assume o controle do seu caixa. Transformamos o caos de contas em dashboards de clareza, permitindo que você tome decisões baseadas em dados, não em palpites.',
    tags: ['Fluxo de Caixa', 'Contas a Pagar/Receber', 'DRE Mensal'],
    href: site.pages.financeiro,
  },
  {
    icon: 'cpu',
    area: 'Tecnologia',
    title: 'Dados e Automação',
    text: 'Não somos apenas contadores; somos desenvolvedores do seu sucesso. Integramos sistemas para criar uma visão 360º do seu negócio em tempo real.',
    href: site.pages.tecnologia,
  },
]

const MANIFESTO =
  'Diferente da contabilidade tradicional que só entrega guias, nós entregamos tempo. Nossa equipe é formada por especialistas que falam a língua do empreendedorismo moderno, prontos para atuar como o braço direito do seu crescimento.'

/* Texto que "acende" palavra por palavra conforme a página rola. */
function ScrollText({ text }) {
  const box = useRef(null)
  const words = text.split(' ')

  useEffect(
    () =>
      onFrame(() => {
        const el = box.current
        if (!el) return
        const r = el.getBoundingClientRect()
        const vh = window.innerHeight
        const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.35))
        const lit = Math.round(p * words.length)
        el.querySelectorAll('span').forEach((s, n) => s.classList.toggle('is-lit', n < lit))
      }),
    [words.length],
  )

  return (
    <p ref={box} className="text-[clamp(1.6rem,3.4vw,3rem)] font-bold leading-[1.25] tracking-[-0.03em]">
      {words.map((w, n) => (
        <span key={n} className="text-white/15 transition-colors duration-300 [&.is-lit]:text-white">
          {w}{' '}
        </span>
      ))}
    </p>
  )
}

export function Sobre() {
  const reveal = useReveals()
  const spot = useSpotlight()

  return (
    <>
      <PageHero
        eyebrow="DNA inovador & consultivo"
        title="Inteligência que"
        highlight="gera liberdade."
        text="O Ethan Group nasceu para quebrar o ciclo da contabilidade reativa. Unimos o rigor técnico à velocidade da tecnologia para que você pare de olhar para o passado e comece a projetar o futuro."
      />

      <div ref={reveal}>
        {/* ===== PILARES ===== */}
        <section className="px-4 py-20 sm:px-6 lg:py-24">
          <div ref={spot} className="mx-auto max-w-screen-xl">
            <SectionTitle eyebrow="Nossos pilares estratégicos" title="Três frentes," highlight="um só parceiro." />
            <div className="mt-14 grid gap-4 lg:grid-cols-3">
              {PILLARS.map((p, n) => (
                <article key={p.area} data-reveal style={{ '--d': `${n * 110}ms` }} className="spotlight group flex flex-col rounded-[2rem] border border-white/10 bg-ink-2/50 p-8 transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center rounded-2xl bg-cyan text-ink transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon name={p.icon} className="size-7" />
                    </span>
                    <span className="font-mono text-xs text-white/25">{String(n + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="mt-8 font-mono text-label uppercase text-cyan">{p.area}</p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{p.text}</p>
                  {p.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-soft">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <Link href={p.href} className="group/link mt-auto inline-flex items-center gap-2 pt-8 font-semibold text-cyan">
                    Saiba mais
                    <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== MISSÃO E VISÃO ===== */}
        <section className="px-4 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto grid max-w-screen-xl gap-4 md:grid-cols-2">
            {[
              {
                icon: 'target',
                title: 'Nossa Missão',
                text: 'Transformar o caos burocrático em clareza estratégica, permitindo que empreendedores foquem no que realmente importa: escalar o próprio negócio.',
              },
              {
                icon: 'rocket',
                title: 'Nossa Visão',
                text: 'Ser o maior ecossistema de inteligência empresarial do Brasil, elevando o padrão de gestão das PMEs através de um modelo 100% digital e consultivo.',
              },
            ].map((b, n) => (
              <article key={b.title} data-reveal style={{ '--d': `${n * 120}ms` }} className="beam noise relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-deep/30 via-ink-2 to-ink-2 p-9 sm:p-12">
                <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-50" />
                <div className="relative">
                  <Icon name={b.icon} className="size-9 text-cyan" />
                  <h3 className="mt-8 text-3xl font-extrabold tracking-tight text-white">{b.title}</h3>
                  <p className="mt-4 text-lead text-soft">{b.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* ===== POR QUE A ETHAN ===== */}
      <section className="px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-label uppercase text-cyan">Por que escolher a Ethan?</p>
          <div className="mt-8">
            <ScrollText text={MANIFESTO} />
          </div>
        </div>
      </section>

      {/* ===== NÚMEROS ===== */}
      <section className="px-4 sm:px-6">
        <dl className="mx-auto grid max-w-screen-xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink px-6 py-10 sm:px-9">
              <dd className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none tracking-[-0.05em] text-white">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-3 font-mono text-label uppercase text-cyan">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <CtaBanner
        title="Vamos construir o próximo capítulo"
        highlight="da sua empresa?"
        text="Converse com um especialista da Ethan e receba um diagnóstico gratuito do seu negócio."
        message="Olá! Conheci a Ethan pelo site e gostaria de conversar."
      />
    </>
  )
}
