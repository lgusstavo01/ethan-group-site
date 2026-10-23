import { whatsappLink } from '../config/site.js'
import { useReveals } from '../hooks/useReveals.js'
import { useSpotlight } from '../hooks/useSpotlight.js'
import { Eyebrow } from './Eyebrow.jsx'
import { Icon } from './Icon.jsx'

/* ===== PARA QUEM ATENDEMOS ===== */

const SEGMENTS = [
  { icon: 'rocket', title: 'MEI em crescimento', text: 'Para quem está perto do limite do MEI e precisa migrar de regime sem susto.' },
  { icon: 'briefcase', title: 'Prestadores de serviço', text: 'Consultorias, agências e profissionais liberais que querem pagar menos imposto dentro da lei.' },
  { icon: 'heart', title: 'Saúde', text: 'Clínicas, consultórios e profissionais da saúde que precisam de uma estrutura tributária eficiente.' },
  { icon: 'store', title: 'Comércio e varejo', text: 'Lojas físicas e e-commerce com controle de estoque, notas e impostos em dia.' },
  { icon: 'cpu', title: 'Tecnologia e startups', text: 'Empresas que crescem rápido e precisam de números confiáveis para decidir e captar.' },
  { icon: 'building', title: 'Empresas em expansão', text: 'Negócios no Lucro Presumido ou Real que precisam de controle, relatórios e planejamento.' },
]

export function Audience() {
  const reveal = useReveals()
  const spot = useSpotlight()

  return (
    <section ref={reveal} className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div ref={spot} className="mx-auto max-w-screen-xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end" data-reveal>
          <div>
            <Eyebrow>Para quem atendemos</Eyebrow>
            <h2 className="mt-6 text-display font-extrabold text-white">
              Do primeiro CNPJ à <span className="text-shine">empresa consolidada.</span>
            </h2>
          </div>
          <p className="text-lead text-muted lg:pb-2">
            Atendemos empresas de diferentes portes e segmentos, com uma estrutura que acompanha cada fase do seu crescimento.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SEGMENTS.map((s, n) => (
            <article key={s.title} data-reveal style={{ '--d': `${(n % 3) * 90}ms` }} className="spotlight group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2/40 p-7 transition-transform duration-500 hover:-translate-y-1.5">
              <span className="absolute right-6 top-6 font-mono text-xs text-white/20">{String(n + 1).padStart(2, '0')}</span>
              <span className="grid size-12 place-items-center rounded-2xl bg-white/5 text-cyan transition-all duration-500 group-hover:bg-cyan group-hover:text-ink">
                <Icon name={s.icon} className="size-6" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </article>
          ))}
        </div>

        {/* ===== TROCA DE CONTADOR ===== */}
        <div data-reveal className="beam relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-deep/40 via-ink-2 to-ink-2">
          <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />
          <div className="relative flex flex-col gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-cyan text-ink">
                <Icon name="swap" className="size-7" />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Já tem contador? A troca é simples.</h3>
                <p className="mt-3 max-w-2xl text-soft">
                  Nós cuidamos da transição com o seu contador atual: solicitamos a documentação, revisamos o histórico da empresa e assumimos a rotina sem
                  interromper suas obrigações.
                </p>
              </div>
            </div>
            <a
              href={whatsappLink('Olá! Quero trocar de contador e gostaria de um diagnóstico.')}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan"
            >
              Quero trocar de contador
              <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
