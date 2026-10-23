import { stats } from '../config/site.js'
import { useReveals } from '../hooks/useReveals.js'
import { useSpotlight } from '../hooks/useSpotlight.js'
import { CountUp } from './CountUp.jsx'
import { Eyebrow } from './Eyebrow.jsx'
import { Icon } from './Icon.jsx'

/* ===== PILARES + NÚMEROS ===== */

const PILLARS = [
  { icon: 'shield', title: 'Segurança fiscal', text: 'Foco total em resultados e conformidade estratégica para sua tranquilidade.' },
  { icon: 'phone', title: 'Contabilidade digital', text: 'Tecnologia de ponta e agilidade máxima na palma da sua mão.' },
  { icon: 'chart', title: 'Planejamento tributário', text: 'Análise profunda para redução inteligente e legal da sua carga tributária.' },
  { icon: 'handshake', title: 'Suporte consultivo', text: 'Mais que geradores de guias, somos seus parceiros estratégicos de negócio.' },
]

export function Pillars() {
  const reveal = useReveals()
  const spot = useSpotlight()

  return (
    <section ref={reveal} className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div ref={spot} className="mx-auto max-w-screen-xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, n) => (
            <article key={p.title} data-reveal style={{ '--d': `${n * 90}ms` }} className="spotlight group rounded-3xl border border-white/10 bg-ink-2/50 p-7 transition-transform duration-500 hover:-translate-y-1.5">
              <span className="grid size-12 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <Icon name={p.icon} className="size-6" />
              </span>
              <h3 className="mt-6 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </article>
          ))}
        </div>

        {/* ===== TRAJETÓRIA ===== */}
        <div className="mt-28 grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal>
            <Eyebrow>Nossa trajetória</Eyebrow>
            <h2 className="mt-6 text-display font-extrabold text-white">
              Resultados sólidos, construídos com <span className="text-shine">inteligência</span> e transparência.
            </h2>
            <p className="mt-6 max-w-md text-lead text-muted">
              Mais do que números, apresentamos a segurança financeira que proporcionamos para centenas de empresas em todo o país.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:col-span-7">
            {stats.map((s, n) => (
              <div key={s.label} data-reveal style={{ '--d': `${n * 100}ms` }} className="bg-ink px-6 py-9 sm:px-9 sm:py-12">
                <dd className="text-[clamp(2.6rem,6vw,4.6rem)] font-extrabold leading-none tracking-[-0.05em] text-white">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-3 font-mono text-label uppercase text-cyan">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
