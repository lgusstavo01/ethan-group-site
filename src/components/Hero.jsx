import { Fragment, useEffect, useRef } from 'react'
import { whatsappLink } from '../config/site.js'
import { lerp } from '../lib/math.js'
import { goTo, onFrame } from '../lib/scroll.js'
import { Eyebrow } from './Eyebrow.jsx'
import { Icon } from './Icon.jsx'

/* ===== HERO =====
   Fundo: grade fina + duas manchas de luz ciano que se movem sozinhas e uma
   terceira que segue o mouse. À direita, um "painel Ethan" ilustrativo que
   inclina com o mouse e se afasta ao rolar. */

const LINE_1 = ['Transforme', 'a', 'contabilidade', 'da', 'sua', 'empresa', 'com']
const LINE_2 = ['inteligência', 'e', 'precisão.']

const BARS = [38, 52, 44, 61, 57, 72, 68, 84, 79, 93]

const ROTINA = [
  { icon: 'check', label: 'DAS · out/2026', status: 'Pago', tone: 'text-emerald-400' },
  { icon: 'file', label: 'Folha + eSocial', status: 'Enviado', tone: 'text-cyan' },
  { icon: 'wallet', label: 'Conciliação bancária', status: '100%', tone: 'text-cyan' },
]

export function Hero() {
  const section = useRef(null)
  const glow = useRef(null)
  const panel = useRef(null)

  useEffect(() => {
    const el = section.current
    const mouse = { x: 0.5, y: 0.35 }
    const pos = { x: 0.5, y: 0.35 }
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      mouse.x = (e.clientX - r.left) / r.width
      mouse.y = (e.clientY - r.top) / r.height
    }
    el.addEventListener('pointermove', onMove)

    const off = onFrame(() => {
      pos.x = lerp(pos.x, mouse.x, 0.06)
      pos.y = lerp(pos.y, mouse.y, 0.06)
      if (glow.current) {
        glow.current.style.left = `${pos.x * 100}%`
        glow.current.style.top = `${pos.y * 100}%`
      }
      // No celular o painel fica abaixo do texto: sem inclinar nem apagar.
      if (panel.current && window.innerWidth >= 1024) {
        const scroll = Math.min(1, window.scrollY / window.innerHeight)
        const rx = (0.5 - pos.y) * 10
        const ry = (pos.x - 0.5) * 14
        panel.current.style.transform = `perspective(1200px) rotateX(${rx + scroll * 8}deg) rotateY(${ry}deg) translate3d(0, ${scroll * 80}px, 0)`
        panel.current.style.opacity = String(1 - scroll * 0.6)
      }
    })
    return () => {
      el.removeEventListener('pointermove', onMove)
      off()
    }
  }, [])

  let i = 0
  // Cada palavra sobe de dentro de uma "janela"; o espaço fica fora dela.
  const word = (w, cls = '') => (
    <Fragment key={`${w}-${i}`}>
      <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
        <span className={`inline-block animate-rise ${cls}`} style={{ animationDelay: `${150 + i++ * 70}ms` }}>
          {w}
        </span>
      </span>{' '}
    </Fragment>
  )

  return (
    <section ref={section} id="top" className="noise h-screen-s relative isolate flex items-center overflow-hidden pt-28 pb-20">
      {/* ===== FUNDO ===== */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-lines absolute inset-0" />
        <div className="absolute -top-1/4 left-[-10%] size-[60vmax] rounded-full bg-cyan/20 blur-[120px] [animation:aurora-a_18s_ease-in-out_infinite]" />
        <div className="absolute -bottom-1/3 right-[-15%] size-[55vmax] rounded-full bg-sky-600/20 blur-[140px] [animation:aurora-b_22s_ease-in-out_infinite]" />
        <div className="absolute inset-0">
          <div ref={glow} className="absolute left-1/2 top-1/2 size-[36rem] rounded-full bg-cyan/15 blur-[100px]" style={{ marginLeft: '-18rem', marginTop: '-18rem' }} />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto grid w-full max-w-screen-xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8">
        {/* ===== TEXTO ===== */}
        <div className="lg:col-span-7">
          <div className="animate-rise">
            <Eyebrow>Contabilidade · BPO Financeiro · Tecnologia</Eyebrow>
          </div>
          <h1 className="mt-7 text-[clamp(2.5rem,5.6vw,5.4rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white">
            {LINE_1.map((w) => word(w))}
            {LINE_2.map((w) => word(w, w === 'e' ? 'text-white' : 'text-shine'))}
          </h1>
          <p className="mt-7 max-w-xl animate-rise text-lead text-soft [animation-delay:900ms]">
            Deixe a burocracia conosco. Focamos em estratégia e conformidade tributária para impulsionar o crescimento do seu negócio.
          </p>
          <div className="mt-10 flex animate-rise flex-col gap-3 [animation-delay:1050ms] sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-4 font-semibold text-ink shadow-[0_0_0_0_rgb(34_211_238/0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgb(34_211_238/0.6)]"
            >
              Agendar consultoria gratuita
              <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              onClick={goTo}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-white/10"
            >
              Nossos serviços
            </a>
          </div>
          <div className="mt-12 flex animate-rise flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.18em] text-muted [animation-delay:1200ms]">
            <span className="flex items-center gap-2">
              <Icon name="pin" className="size-4 text-cyan" /> Salvador · BA
            </span>
            <span className="flex items-center gap-2">
              <Icon name="phone" className="size-4 text-cyan" /> Atendimento 100% digital
            </span>
            <span className="flex items-center gap-2">
              <Icon name="shield" className="size-4 text-cyan" /> Diagnóstico sem custo
            </span>
          </div>
        </div>

        {/* ===== PAINEL ILUSTRATIVO ===== */}
        <div className="relative animate-rise [animation-delay:500ms] lg:col-span-5">
          <div ref={panel} className="will-change-transform">
            <div className="animate-float">
              <div className="glass beam relative rounded-3xl border border-white/10 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-label uppercase text-muted">Painel da empresa</p>
                    <p className="mt-1 text-lg font-bold text-white">Resultado do mês</p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-xs font-medium text-emerald-400">▲ 18,4%</span>
                </div>

                {/* Gráfico: barras crescendo + linha se desenhando */}
                <div className="relative mt-6 h-40">
                  <div className="absolute inset-0 flex items-end gap-2">
                    {BARS.map((h, n) => (
                      <div
                        key={n}
                        className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-cyan/10 to-cyan/60 [animation:bar_1.2s_cubic-bezier(0.16,1,0.3,1)_both]"
                        style={{ height: `${h}%`, animationDelay: `${700 + n * 70}ms` }}
                      />
                    ))}
                  </div>
                  <svg viewBox="0 0 300 160" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
                    <path
                      d="M0 120 C 40 110, 60 90, 90 95 S 150 60, 180 66 S 240 30, 300 18"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeDasharray="600"
                      style={{ '--len': 600, animation: 'draw 2.2s cubic-bezier(0.65,0,0.35,1) 900ms both' }}
                    />
                  </svg>
                </div>

                <div className="mt-6 space-y-2.5">
                  {ROTINA.map((r, n) => (
                    <div key={r.label} className="flex animate-rise items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3" style={{ animationDelay: `${1300 + n * 160}ms` }}>
                      <span className="flex items-center gap-3 text-sm text-soft">
                        <span className={`grid size-7 place-items-center rounded-lg bg-white/5 ${r.tone}`}>
                          <Icon name={r.icon} className="size-4" />
                        </span>
                        {r.label}
                      </span>
                      <span className={`font-mono text-xs font-medium ${r.tone}`}>{r.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selo flutuante */}
              <div className="glass absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3 sm:-left-10">
                <span className="grid size-10 place-items-center rounded-xl bg-cyan text-ink">
                  <Icon name="shield" className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">Obrigações em dia</p>
                  <p className="font-mono text-xs text-muted">sem multa, sem susto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <div aria-hidden="true" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <span className="h-2 w-1 rounded-full bg-cyan [animation:float_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
