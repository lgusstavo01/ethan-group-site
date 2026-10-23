import { whatsappLink } from '../config/site.js'
import { CountUp } from '../components/CountUp.jsx'
import { CtaBanner } from '../components/CtaBanner.jsx'
import { Faq } from '../components/Faq.jsx'
import { Icon } from '../components/Icon.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { useReveals } from '../hooks/useReveals.js'
import { useSpotlight } from '../hooks/useSpotlight.js'

/* ===== PÁGINA: CONTABILIDADE =====
   Conteúdo de ethangroup.com.br/contabilidade (out/2026). */

const SOLUTIONS = [
  { icon: 'chart', title: 'Planejamento Tributário', text: 'Estratégias para reduzir legalmente a carga tributária e maximizar o lucro.' },
  { icon: 'handshake', title: 'Departamento Pessoal', text: 'Gestão completa de folha de pagamento, eSocial e benefícios.' },
  { icon: 'shield', title: 'Departamento Fiscal', text: 'Apuração rigorosa de impostos e conformidade com todas as obrigações.' },
  { icon: 'rocket', title: 'Abertura de CNPJ', text: 'Legalize seu negócio com rapidez e suporte na escolha do melhor regime.' },
  { icon: 'bi', title: 'Consultoria Contábil', text: 'Análise de balancetes e indicadores para guiar suas decisões empresariais.' },
  { icon: 'file', title: 'Alteração Contratual', text: 'Atualização de contratos, sócios ou atividades com total agilidade.' },
  { icon: 'target', title: 'Auditoria', text: 'Revisão detalhada de processos para garantir segurança e transparência.' },
  { icon: 'wallet', title: 'Terceirização (BPO)', text: 'Assumimos seu financeiro e contábil para você focar no que é essencial.' },
]

const REGIMES = [
  { tag: 'Início', name: 'MEI', text: 'Formalização, emissão de notas e acompanhamento do limite de faturamento, com orientação na hora de migrar.' },
  { tag: 'Mais comum', name: 'Simples Nacional', text: 'Apuração do DAS, enquadramento correto nos anexos e análise do Fator R para pagar a menor alíquota possível.', featured: true },
  { tag: 'Crescimento', name: 'Lucro Presumido', text: 'Ideal para empresas com boa margem. Calculamos se ele é mais vantajoso que o Simples para o seu caso.' },
  { tag: 'Grande porte', name: 'Lucro Real', text: 'Controle contábil detalhado, aproveitamento de créditos e apuração precisa de IRPJ, CSLL, PIS e COFINS.' },
]

const MONTHLY = [
  'Guias de impostos calculadas e enviadas antes do vencimento',
  'Folha de pagamento, pró-labore e encargos',
  'Obrigações acessórias entregues no prazo (eSocial, DCTFWeb, SPED)',
  'Balancete e relatórios contábeis',
  'Atendimento com especialista para tirar dúvidas',
  'Documentos organizados na Área do Cliente',
]

const FAQ = [
  {
    q: 'Qual é o melhor regime tributário para minha empresa?',
    a: 'Depende do faturamento, da margem de lucro, da atividade e da folha de pagamento. No diagnóstico gratuito simulamos os regimes possíveis e mostramos, com números, qual gera a menor carga tributária dentro da lei.',
  },
  {
    q: 'Estou perto do limite do MEI. O que fazer?',
    a: 'O ideal é planejar a migração antes de ultrapassar o limite, para evitar cobranças retroativas. Avaliamos o momento certo e fazemos o desenquadramento e a migração para o regime mais adequado.',
  },
  {
    q: 'Vocês cuidam da folha de pagamento?',
    a: 'Sim. O Departamento Pessoal cuida de admissões, demissões, férias, 13º, pró-labore, encargos e envio das informações ao eSocial.',
  },
  {
    q: 'Minha empresa tem pendências fiscais. Vocês podem ajudar?',
    a: 'Sim. Fazemos um levantamento da situação junto aos órgãos, identificamos as pendências e indicamos o melhor caminho para regularizar, incluindo parcelamentos quando disponíveis.',
  },
]

/* Painel ilustrativo do topo (valores fictícios, como no site atual). */
function ProfitPanel() {
  return (
    <div className="animate-float">
      <div className="glass beam rounded-3xl border border-white/10 p-6 sm:p-7">
        <p className="font-mono text-label uppercase text-muted">Lucratividade mensal</p>
        <p className="mt-3 text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold tracking-[-0.04em] text-white">
          R$ <CountUp value={184250} duration={2200} />
        </p>
        <p className="mt-1 flex items-center gap-2 text-sm">
          <span className="rounded-full bg-emerald-400/10 px-2.5 py-0.5 font-mono text-xs font-medium text-emerald-400">▲ +15,2%</span>
          <span className="text-muted">vs. mês anterior</span>
        </p>
        <svg viewBox="0 0 300 90" className="mt-6 h-24 w-full" aria-hidden="true">
          <defs>
            <linearGradient id="lucro" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#22d3ee" stopOpacity="0.45" />
              <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 78 C 40 70, 60 62, 90 64 S 150 40, 190 44 S 250 18, 300 10 L300 90 L0 90Z" fill="url(#lucro)" className="animate-rise [animation-delay:900ms]" />
          <path
            d="M0 78 C 40 70, 60 62, 90 64 S 150 40, 190 44 S 250 18, 300 10"
            fill="none"
            stroke="#a5f3fc"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeDasharray="400"
            style={{ '--len': 400, animation: 'draw 2s cubic-bezier(0.65,0,0.35,1) 600ms both' }}
          />
        </svg>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            ['Saúde tributária', 'Protegido'],
            ['Impostos', 'OK'],
            ['Folha', 'OK'],
          ].map(([k, v], n) => (
            <div key={k} className="animate-rise rounded-xl border border-white/5 bg-white/[0.03] px-3 py-3" style={{ animationDelay: `${1200 + n * 150}ms` }}>
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted">{k}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-emerald-400">
                <Icon name="check" className="size-3.5" strokeWidth={2.6} />
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Contabilidade() {
  const reveal = useReveals()
  const spot = useSpotlight()

  return (
    <>
      <PageHero
        eyebrow="Contabilidade consultiva de alta performance"
        title="Transformamos"
        highlight="números em lucro."
        text="Esqueça a contabilidade tradicional. Oferecemos uma gestão inteligente que automatiza sua burocracia e protege seu patrimônio."
        actions={
          <a
            href={whatsappLink('Olá! Quero conhecer a contabilidade da Ethan.')}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgb(34_211_238/0.6)]"
          >
            Começar agora
            <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        }
        visual={<ProfitPanel />}
      />

      <div ref={reveal}>
        {/* ===== SOLUÇÕES ===== */}
        <section className="px-4 py-24 sm:px-6 lg:py-28">
          <div ref={spot} className="mx-auto max-w-screen-xl">
            <SectionTitle
              eyebrow="Nossas soluções"
              title="Um departamento contábil completo, focado em"
              highlight="estratégia e segurança jurídica."
            />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SOLUTIONS.map((s, n) => (
                <article key={s.title} data-reveal style={{ '--d': `${(n % 4) * 80}ms` }} className="spotlight group rounded-3xl border border-white/10 bg-ink-2/50 p-6 transition-transform duration-500 hover:-translate-y-1.5">
                  <span className="grid size-11 place-items-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="mt-5 font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== REGIMES ===== */}
        <section className="px-4 py-24 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-screen-xl">
            <SectionTitle
              center
              eyebrow="Regimes tributários"
              title="O regime certo faz"
              highlight="toda a diferença."
              text="Atendemos empresas em todos os regimes e revisamos periodicamente se o seu ainda é o mais vantajoso."
            />
            <div className="relative mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div aria-hidden="true" className="absolute inset-x-8 top-1/2 hidden h-px bg-gradient-to-r from-cyan/0 via-cyan/40 to-cyan/0 lg:block" />
              {REGIMES.map((r, n) => (
                <article
                  key={r.name}
                  data-reveal
                  style={{ '--d': `${n * 110}ms` }}
                  className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-500 hover:-translate-y-2 ${r.featured ? 'beam border-cyan/40 bg-gradient-to-b from-cyan/15 to-ink-2' : 'border-white/10 bg-ink-2'}`}
                >
                  <span className={`self-start rounded-full px-3 py-1 font-mono text-[0.65rem] font-medium uppercase tracking-[0.18em] ${r.featured ? 'bg-cyan text-ink' : 'bg-white/5 text-cyan'}`}>{r.tag}</span>
                  <p className="mt-8 font-mono text-xs text-muted">{String(n + 1).padStart(2, '0')}</p>
                  <h3 className="mt-1 text-2xl font-extrabold tracking-tight text-white">{r.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ROTINA MENSAL ===== */}
        <section className="px-4 py-24 sm:px-6 lg:py-28">
          <div className="mx-auto grid max-w-screen-xl items-center gap-14 lg:grid-cols-2">
            <SectionTitle
              eyebrow="Rotina mensal"
              title="O que você recebe"
              highlight="todo mês."
              text="Uma rotina previsível e organizada, com tudo disponível na Área do Cliente. Você acompanha, nós executamos."
            />
            <ol className="relative space-y-3">
              {MONTHLY.map((m, n) => (
                <li
                  key={m}
                  data-reveal
                  style={{ '--d': `${n * 90}ms` }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-2/50 p-4 transition-all duration-300 hover:translate-x-1 hover:border-cyan/30"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cyan/10 font-mono text-sm font-medium text-cyan transition-colors duration-300 group-hover:bg-cyan group-hover:text-ink">
                    {String(n + 1).padStart(2, '0')}
                  </span>
                  <span className="text-soft">{m}</span>
                  <Icon name="check" className="ml-auto size-5 shrink-0 text-emerald-400" strokeWidth={2.4} />
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>

      <Faq items={FAQ} eyebrow="Dúvidas sobre contabilidade" title="Perguntas" highlight="frequentes" />
      <CtaBanner
        title="Pronto para levar sua gestão"
        highlight="ao próximo nível?"
        text="Agende um diagnóstico gratuito e descubra quanto a sua empresa pode economizar com o regime e o planejamento certos."
        message="Olá! Quero um diagnóstico gratuito da contabilidade da minha empresa."
      />
    </>
  )
}
