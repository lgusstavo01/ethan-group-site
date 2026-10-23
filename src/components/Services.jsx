import { useEffect, useRef } from 'react'
import { site, whatsappLink } from '../config/site.js'
import { useReveals } from '../hooks/useReveals.js'
import { clamp } from '../lib/math.js'
import { onFrame } from '../lib/scroll.js'
import { Eyebrow } from './Eyebrow.jsx'
import { Icon } from './Icon.jsx'
import { Link } from './Link.jsx'

/* ===== SERVIÇOS =====
   Cards empilhados: cada um gruda no topo (sticky) e, quando o próximo chega
   por cima, encolhe e escurece um pouco. Cada serviço tem uma ilustração
   própria (dados fictícios, só para ilustrar). */

const SERVICES = [
  {
    id: 'contabilidade',
    tag: 'Fiscal · Pessoal · Societário',
    title: 'Contabilidade',
    icon: 'calculator',
    text: 'Contabilidade consultiva que vai além das guias: cuidamos das obrigações da sua empresa e usamos os números para orientar cada decisão.',
    items: ['Planejamento tributário e escolha do melhor regime', 'Departamento fiscal e pessoal (folha e eSocial)', 'Abertura, alteração e regularização de CNPJ'],
    cta: { label: 'Conhecer a Contabilidade', href: site.pages.contabilidade },
  },
  {
    id: 'bpo',
    tag: 'Terceirização financeira',
    title: 'BPO Financeiro',
    icon: 'wallet',
    text: 'Assumimos a rotina financeira da sua empresa de ponta a ponta, com processos padronizados e visão clara do caixa todos os dias.',
    items: ['Contas a pagar e a receber sem atrasos', 'Conciliação bancária diária', 'Emissão de notas fiscais e boletos', 'Relatórios mensais com DRE e fluxo de caixa'],
    cta: { label: 'Conhecer o BPO Financeiro', href: site.pages.financeiro },
  },
  {
    id: 'bi',
    tag: 'Dados e indicadores',
    title: 'Business Intelligence',
    icon: 'bi',
    text: 'Transformamos os dados da sua operação em painéis claros e atualizados para decisões rápidas.',
    items: ['Dashboards personalizados', 'Indicadores de receita, custo e margem', 'Acompanhamento de metas'],
    cta: { label: 'Falar com um especialista', href: whatsappLink('Olá! Quero saber mais sobre Business Intelligence.'), external: true },
  },
  {
    id: 'controladoria',
    tag: 'Controle e resultado',
    title: 'Controladoria',
    icon: 'target',
    text: 'Controle interno e acompanhamento de resultados para que nenhuma decisão seja tomada no escuro.',
    items: ['Orçamento e projeções financeiras', 'Análise de custos e rentabilidade', 'Revisão de processos internos'],
    cta: { label: 'Falar com um especialista', href: whatsappLink('Olá! Quero saber mais sobre Controladoria.'), external: true },
  },
  {
    id: 'web',
    tag: 'Sites, sistemas e automação',
    title: 'Desenvolvimento Web',
    icon: 'code',
    text: 'Soluções digitais sob medida que integram sua operação e eliminam trabalho manual.',
    items: ['Sites e sistemas web', 'Automação de processos', 'Integrações e infraestrutura em nuvem'],
    cta: { label: 'Conhecer a Tecnologia', href: site.pages.tecnologia },
  },
]

export function Services() {
  const reveal = useReveals()
  const cards = useRef([])

  useEffect(
    () =>
      onFrame(() => {
        const list = cards.current
        // Empilhamento só no desktop; no celular um card alto não caberia grudado.
        const stacked = window.innerWidth >= 1024
        list.forEach((el, n) => {
          const next = list[n + 1]
          if (!el || !next) return
          if (!stacked) {
            el.style.transform = ''
            el.style.filter = ''
            return
          }
          // Quanto o próximo card já cobriu este (0 = longe, 1 = encostado).
          const a = el.getBoundingClientRect()
          const b = next.getBoundingClientRect()
          const p = clamp(1 - (b.top - a.top) / a.height)
          el.style.transform = `scale(${1 - p * 0.06})`
          el.style.filter = `brightness(${1 - p * 0.45})`
        })
      }),
    [],
  )

  return (
    <section ref={reveal} id="servicos" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <Eyebrow>Nossos serviços</Eyebrow>
          <h2 className="mt-6 text-display font-extrabold text-white">
            Sua empresa merece uma gestão de <span className="text-shine">alta performance.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lead text-muted">
            Da contabilidade à tecnologia, reunimos tudo o que sua empresa precisa para crescer com segurança, em um só parceiro.
          </p>
        </div>

        <div className="mt-16 space-y-6">
          {SERVICES.map((s, n) => (
            <article
              key={s.id}
              ref={(el) => (cards.current[n] = el)}
              className="origin-top overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2 will-change-transform lg:sticky lg:top-[var(--top)]"
              style={{ '--top': `${96 + n * 16}px` }}
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-7 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-2xl bg-cyan text-ink">
                      <Icon name={s.icon} className="size-6" />
                    </span>
                    <span className="font-mono text-label uppercase text-cyan">
                      {String(n + 1).padStart(2, '0')} · {s.tag}
                    </span>
                  </div>
                  <h3 className="mt-7 text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold tracking-[-0.04em] text-white">{s.title}</h3>
                  <p className="mt-4 max-w-lg text-lead text-muted">{s.text}</p>
                  <ul className="mt-7 space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-soft">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-cyan/15 text-cyan">
                          <Icon name="check" className="size-3" strokeWidth={2.6} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={s.cta.href}
                    {...(s.cta.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-cyan hover:bg-cyan hover:text-ink"
                  >
                    {s.cta.label}
                    <Icon name="arrowUp" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
                <div className="relative hidden min-h-[26rem] overflow-hidden border-l border-white/5 bg-ink lg:block">
                  <div aria-hidden="true" className="grid-lines absolute inset-0" />
                  <div aria-hidden="true" className="absolute -right-20 -top-20 size-72 rounded-full bg-cyan/15 blur-3xl" />
                  <div className="absolute inset-0 grid place-items-center p-10">
                    <ServiceVisual id={s.id} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== ILUSTRAÇÕES DOS SERVIÇOS ===== */

function Card({ children, className = '' }) {
  return <div className={`glass w-full max-w-sm rounded-2xl border border-white/10 p-5 ${className}`}>{children}</div>
}

function ServiceVisual({ id }) {
  if (id === 'contabilidade') {
    const regimes = [
      { name: 'Simples Nacional', v: 62 },
      { name: 'Lucro Presumido', v: 88 },
      { name: 'Lucro Real', v: 100 },
    ]
    return (
      <Card className="animate-float">
        <p className="font-mono text-label uppercase text-muted">Carga tributária por regime</p>
        <div className="mt-5 space-y-4">
          {regimes.map((r, n) => (
            <div key={r.name}>
              <div className="flex justify-between text-sm">
                <span className="text-soft">{r.name}</span>
                {n === 0 && <span className="font-mono text-xs text-emerald-400">melhor opção</span>}
              </div>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/5">
                <div className={`h-full rounded-full ${n === 0 ? 'bg-cyan' : 'bg-white/20'}`} style={{ width: `${r.v}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted">
          Escolha feita <span className="font-bold text-white">com os seus números</span>, não no achismo.
        </p>
      </Card>
    )
  }
  if (id === 'bpo') {
    const rows = [
      { name: 'Fornecedor · boleto', v: 'R$ 4.280,00', s: 'Pago' },
      { name: 'Cliente · PIX', v: 'R$ 12.950,00', s: 'Recebido' },
      { name: 'Aluguel · débito', v: 'R$ 6.100,00', s: 'Conciliado' },
      { name: 'NFS-e 0412', v: 'R$ 3.700,00', s: 'Emitida' },
    ]
    return (
      <Card className="animate-float">
        <div className="flex items-center justify-between">
          <p className="font-mono text-label uppercase text-muted">Caixa de hoje</p>
          <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400" /> em dia
          </span>
        </div>
        <div className="mt-4 divide-y divide-white/5">
          {rows.map((r) => (
            <div key={r.name} className="flex items-center justify-between py-2.5 text-sm">
              <span className="text-soft">{r.name}</span>
              <span className="text-right">
                <span className="tabular block font-mono text-white">{r.v}</span>
                <span className="font-mono text-[0.68rem] uppercase tracking-wider text-cyan">{r.s}</span>
              </span>
            </div>
          ))}
        </div>
      </Card>
    )
  }
  if (id === 'bi') {
    return (
      <Card className="animate-float">
        <p className="font-mono text-label uppercase text-muted">Margem por mês</p>
        <div className="mt-4 flex items-center gap-6">
          <svg viewBox="0 0 120 120" className="size-28 -rotate-90" aria-hidden="true">
            <circle cx="60" cy="60" r="48" fill="none" stroke="rgb(255 255 255 / 0.06)" strokeWidth="14" />
            <circle cx="60" cy="60" r="48" fill="none" stroke="#22d3ee" strokeWidth="14" strokeLinecap="round" strokeDasharray="302" strokeDashoffset="96" />
          </svg>
          <div>
            <p className="text-4xl font-extrabold tracking-tight text-white">68%</p>
            <p className="text-sm text-muted">da meta do trimestre</p>
          </div>
        </div>
        <svg viewBox="0 0 280 60" className="mt-5 h-14 w-full" aria-hidden="true">
          <path d="M0 50 L35 42 L70 46 L105 30 L140 34 L175 20 L210 24 L245 10 L280 14" fill="none" stroke="#a5f3fc" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </Card>
    )
  }
  if (id === 'controladoria') {
    const months = [
      ['Jul', 70, 64],
      ['Ago', 74, 78],
      ['Set', 80, 76],
      ['Out', 86, 91],
    ]
    return (
      <Card className="animate-float">
        <div className="flex items-center justify-between">
          <p className="font-mono text-label uppercase text-muted">Orçado × realizado</p>
          <span className="flex gap-3 font-mono text-[0.65rem] uppercase text-muted">
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-sm bg-white/25" />
              orçado
            </span>
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-sm bg-cyan" />
              real
            </span>
          </span>
        </div>
        <div className="mt-5 flex h-36 items-end justify-around gap-4">
          {months.map(([m, o, r]) => (
            <div key={m} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="flex h-full w-full items-end justify-center gap-1">
                <div className="w-3 rounded-t bg-white/25" style={{ height: `${o}%` }} />
                <div className="w-3 rounded-t bg-cyan" style={{ height: `${r}%` }} />
              </div>
              <span className="font-mono text-xs text-muted">{m}</span>
            </div>
          ))}
        </div>
      </Card>
    )
  }
  return (
    <Card className="animate-float p-0">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-cyan" />
        <span className="ml-3 font-mono text-xs text-muted">automacao.js</span>
      </div>
      <pre className="overflow-hidden px-5 py-4 font-mono text-[0.78rem] leading-6 text-soft">
        <span className="text-cyan">const</span> notas = <span className="text-cyan">await</span> sieg.<span className="text-white">baixar</span>()
        {'\n'}
        <span className="text-cyan">for</span> (<span className="text-cyan">const</span> nf <span className="text-cyan">of</span> notas) {'{'}
        {'\n'}
        {'  '}erp.<span className="text-white">lancar</span>(nf)
        {'\n'}
        {'}'}
        {'\n'}
        <span className="text-muted">{'// 0 digitação manual ✓'}</span>
      </pre>
    </Card>
  )
}
