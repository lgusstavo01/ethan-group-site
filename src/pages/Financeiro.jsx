import { whatsappLink } from '../config/site.js'
import { CountUp } from '../components/CountUp.jsx'
import { CtaBanner } from '../components/CtaBanner.jsx'
import { Faq } from '../components/Faq.jsx'
import { Icon } from '../components/Icon.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { Process } from '../components/Process.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { useReveals } from '../hooks/useReveals.js'
import { useSpotlight } from '../hooks/useSpotlight.js'

/* ===== PÁGINA: BPO FINANCEIRO =====
   Conteúdo de ethangroup.com.br/financeiro (out/2026). */

const SERVICES = [
  { icon: 'swap', title: 'Contas a Pagar e Receber', text: 'Gestão completa do seu fluxo de caixa, garantindo que nenhum prazo seja perdido.' },
  { icon: 'wallet', title: 'Conciliação Bancária', text: 'Batimento diário de todas as suas entradas e saídas com precisão cirúrgica.' },
  { icon: 'bi', title: 'Relatórios de Performance', text: 'Dashboards mensais com indicadores (DRE, EBITDA) para decisões estratégicas.' },
  { icon: 'file', title: 'Faturamento Automático', text: 'Emissão de notas e boletos sem que você precise abrir portais de prefeitura.' },
]

const SIGNS = [
  'Você passa horas por semana pagando contas e conferindo extrato',
  'Já pagou juros ou multa por perder um vencimento',
  'Não sabe ao certo quanto a empresa lucrou no último mês',
  'As contas pessoais e as da empresa se misturam',
  'Decisões de investimento são tomadas sem olhar o fluxo de caixa',
]

const STEPS = [
  { title: 'Você envia', text: 'Notas, boletos e comprovantes chegam até nós pela Área do Cliente, sem papelada.' },
  { title: 'Nós organizamos', text: 'Lançamos, categorizamos e agendamos os pagamentos de acordo com os vencimentos.' },
  { title: 'Você aprova', text: 'Os pagamentos só são liberados com a sua aprovação. O dinheiro continua sob o seu controle.' },
  { title: 'Você acompanha', text: 'Todo mês, relatórios com DRE e fluxo de caixa mostram para onde o dinheiro está indo.' },
]

const FAQ = [
  {
    q: 'Vou perder o controle do dinheiro da empresa?',
    a: 'Não. Os pagamentos são preparados por nós e aprovados por você. Definimos juntos o nível de acesso às contas, e você acompanha cada movimentação pelos relatórios.',
  },
  {
    q: 'Preciso contratar a contabilidade da Ethan para ter o BPO?',
    a: 'Não é obrigatório, mas os dois serviços juntos funcionam melhor: as informações do financeiro alimentam a contabilidade automaticamente, reduzindo retrabalho e erros.',
  },
  {
    q: 'Quais relatórios eu recebo?',
    a: 'Mensalmente você recebe DRE gerencial, fluxo de caixa realizado e projetado e análise de contas a pagar e a receber, com os principais indicadores do período.',
  },
  {
    q: 'Quanto tempo leva para começar?',
    a: 'Depois do diagnóstico, mapeamos sua rotina financeira, organizamos os acessos e o cadastro de fornecedores e clientes. O prazo depende do volume e da organização atual, e você recebe um cronograma claro antes de começar.',
  },
]

/* Fluxo de caixa projetado (30 dias, valores ilustrativos). */
const ENTRADAS = [30, 42, 38, 55, 48, 62, 58, 70, 66, 78]
const SAIDAS = [26, 30, 34, 36, 40, 38, 44, 42, 46, 48]

function CashFlowPanel() {
  const pts = (arr) => arr.map((v, n) => `${(n / (arr.length - 1)) * 300},${100 - v}`).join(' ')
  return (
    <div className="animate-float">
      <div className="glass beam rounded-3xl border border-white/10 p-6 sm:p-7">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-label uppercase text-muted">Fluxo de caixa</p>
            <p className="mt-1 text-lg font-bold text-white">Projeção para os próximos 30 dias</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 font-mono text-xs text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            positivo
          </span>
        </div>
        <svg viewBox="0 0 300 100" preserveAspectRatio="none" className="mt-6 h-40 w-full overflow-visible" aria-hidden="true">
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="rgb(255 255 255 / 0.06)" />
          ))}
          <polyline points={pts(SAIDAS)} fill="none" stroke="rgb(148 163 184 / 0.6)" strokeWidth="2" strokeDasharray="420" style={{ '--len': 420, animation: 'draw 2s cubic-bezier(0.65,0,0.35,1) 700ms both' }} />
          <polyline points={pts(ENTRADAS)} fill="none" stroke="#22d3ee" strokeWidth="2.6" strokeLinejoin="round" strokeDasharray="420" style={{ '--len': 420, animation: 'draw 2s cubic-bezier(0.65,0,0.35,1) 500ms both' }} />
        </svg>
        <div className="mt-4 flex gap-5 font-mono text-xs text-muted">
          <span className="flex items-center gap-2">
            <span className="h-0.5 w-4 rounded bg-cyan" /> entradas
          </span>
          <span className="flex items-center gap-2">
            <span className="h-0.5 w-4 rounded bg-muted" /> saídas
          </span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <div className="animate-rise rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 [animation-delay:1300ms]">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">A receber</p>
            <p className="tabular mt-1 font-bold text-white">R$ 48.920</p>
          </div>
          <div className="animate-rise rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 [animation-delay:1450ms]">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">A pagar</p>
            <p className="tabular mt-1 font-bold text-white">R$ 31.470</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Financeiro() {
  const reveal = useReveals()
  const spot = useSpotlight()

  return (
    <>
      <PageHero
        eyebrow="Terceirização financeira"
        title="Seu financeiro no"
        highlight="piloto automático."
        text="Nós cuidamos da burocracia, dos pagamentos e dos relatórios enquanto você foca em escalar seu negócio com dados reais."
        actions={
          <a
            href={whatsappLink('Olá! Quero saber mais sobre o BPO Financeiro da Ethan.')}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgb(34_211_238/0.6)]"
          >
            Falar com especialista
            <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        }
        visual={<CashFlowPanel />}
      />

      <div ref={reveal}>
        {/* ===== GESTÃO 360 ===== */}
        <section className="px-4 py-24 sm:px-6 lg:py-28">
          <div ref={spot} className="mx-auto max-w-screen-xl">
            <SectionTitle
              eyebrow="Gestão financeira 360º"
              title="Uma controladoria profissional"
              highlight="sem precisar de um CFO interno."
              text="Tudo o que sua empresa precisa para ter o financeiro organizado, com processos padronizados e visão clara do caixa."
            />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s, n) => (
                <article key={s.title} data-reveal style={{ '--d': `${n * 90}ms` }} className="spotlight group rounded-3xl border border-white/10 bg-ink-2/50 p-7 transition-transform duration-500 hover:-translate-y-1.5">
                  <span className="grid size-12 place-items-center rounded-2xl bg-cyan text-ink transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PARA QUEM É ===== */}
        <section className="px-4 py-24 sm:px-6 lg:py-28">
          <div className="relative mx-auto grid max-w-screen-xl items-center gap-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-2/60 p-7 sm:p-12 lg:grid-cols-2 lg:p-16">
            <div aria-hidden="true" className="grid-lines absolute inset-0" />
            <div aria-hidden="true" className="absolute -left-24 bottom-0 size-80 rounded-full bg-cyan/15 blur-[100px]" />
            <div className="relative">
              <SectionTitle
                eyebrow="Para quem é"
                title="Sua empresa precisa de BPO"
                highlight="se..."
                text="Quando o sócio vira o financeiro da empresa, sobra pouco tempo para vender, liderar e crescer. Se você se reconhece em algum desses pontos, está na hora de terceirizar."
              />
            </div>
            <ul className="relative space-y-3">
              {SIGNS.map((s, n) => (
                <li
                  key={s}
                  data-reveal
                  style={{ '--d': `${200 + n * 160}ms` }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-ink/60 p-4 [&.is-in_.tick]:scale-100 [&.is-in_.tick]:opacity-100"
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-md border border-cyan/40">
                    <Icon name="check" className="tick size-4 scale-50 text-cyan opacity-0 transition-all delay-[var(--d)] duration-500" strokeWidth={2.8} />
                  </span>
                  <span className="text-soft">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <Process steps={STEPS} eyebrow="Como funciona" title="Uma rotina" highlight="simples" after=" para você." text="Você continua no controle das decisões. Nós cuidamos de todo o operacional." />

      {/* ===== NÚMEROS ===== */}
      <section className="px-4 sm:px-6">
        <dl className="mx-auto grid max-w-screen-xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {[
            { v: <CountUp value={20} suffix="h" />, pre: '+', label: 'poupadas por mês' },
            { v: <CountUp value={100} suffix="%" />, label: 'conformidade bancária' },
            { v: <CountUp value={0} />, pre: 'R$ ', label: 'multas por atraso' },
            { v: 'DRE', label: 'relatórios em tempo real' },
          ].map((s) => (
            <div key={s.label} className="bg-ink px-6 py-10 sm:px-9">
              <dd className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-none tracking-[-0.05em] text-white">
                {s.pre}
                {s.v}
              </dd>
              <dt className="mt-3 font-mono text-label uppercase text-cyan">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <Faq items={FAQ} eyebrow="Dúvidas sobre BPO Financeiro" title="Perguntas" highlight="frequentes" />
      <CtaBanner
        title="Pronto para escalar sua"
        highlight="gestão financeira?"
        text="Agende um diagnóstico gratuito e descubra como nosso ecossistema de BI e Controladoria pode maximizar seus lucros."
        message="Olá! Quero um diagnóstico gratuito do financeiro da minha empresa."
      />
    </>
  )
}
