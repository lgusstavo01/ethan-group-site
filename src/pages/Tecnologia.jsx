import { ContactForm } from '../components/Contact.jsx'
import { Faq } from '../components/Faq.jsx'
import { Icon } from '../components/Icon.jsx'
import { Link } from '../components/Link.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { Process } from '../components/Process.jsx'
import { SectionTitle } from '../components/SectionTitle.jsx'
import { useReveals } from '../hooks/useReveals.js'
import { useSpotlight } from '../hooks/useSpotlight.js'

/* ===== PÁGINA: TECNOLOGIA =====
   Conteúdo de ethangroup.com.br/tecnologia (out/2026). */

const CORE = [
  { icon: 'code', title: 'Sistemas Web', text: 'Sistemas robustos e escaláveis utilizando as tecnologias mais modernas do mercado.' },
  { icon: 'cpu', title: 'Automação de Processos', text: 'Integração total de sistemas para eliminar tarefas repetitivas.' },
  { icon: 'upload', title: 'Cloud Computing', text: 'Desenvolvimento e migração para infraestruturas em nuvem de alta performance.' },
]

const BUILD = [
  { icon: 'phone', title: 'Sites institucionais', text: 'Sites rápidos, responsivos e otimizados para o Google, que transmitem a credibilidade da sua marca.', wide: true },
  { icon: 'bi', title: 'Dashboards de gestão', text: 'Painéis com os indicadores da empresa atualizados automaticamente, sem montar planilhas.' },
  { icon: 'calendar', title: 'Automação de rotinas', text: 'Tarefas repetitivas, como relatórios, cobranças e envio de documentos, rodando sozinhas.' },
  { icon: 'swap', title: 'Integrações entre sistemas', text: 'Conectamos ERP, banco, e-commerce e outras ferramentas para os dados fluírem sem digitação.' },
  { icon: 'lock', title: 'Portais e sistemas internos', text: 'Ferramentas sob medida para sua equipe ou seus clientes acessarem informações com segurança.' },
  { icon: 'file', title: 'Da planilha ao sistema', text: 'Transformamos aquela planilha crítica do negócio em um sistema confiável, com controle de acesso.', wide: true },
]

const STEPS = [
  { title: 'Descoberta', text: 'Entendemos o problema, o processo atual e o resultado que a empresa espera alcançar.' },
  { title: 'Proposta', text: 'Definimos escopo, prazo e investimento, com um protótipo para validar a ideia antes de desenvolver.' },
  { title: 'Desenvolvimento', text: 'Construímos em etapas curtas, com entregas parciais para você acompanhar e opinar.' },
  { title: 'Entrega e suporte', text: 'Publicamos, treinamos sua equipe e seguimos ao seu lado com suporte e evolução.' },
]

const FAQ = [
  {
    q: 'Quanto custa desenvolver um sistema?',
    a: 'Depende do escopo: quantidade de telas, integrações e regras de negócio. Depois de entender sua necessidade, enviamos uma proposta com escopo, prazo e investimento bem definidos.',
  },
  {
    q: 'Quanto tempo leva um projeto?',
    a: 'Um site institucional costuma ser mais rápido que um sistema com integrações. O cronograma é apresentado na proposta, e trabalhamos com entregas parciais para você ver o progresso.',
  },
  { q: 'Vocês dão suporte depois da entrega?', a: 'Sim. Após a publicação, oferecemos suporte para correções, ajustes e evolução do sistema conforme a empresa cresce.' },
  {
    q: 'O sistema pode se integrar ao que eu já uso?',
    a: 'Na maioria dos casos, sim. Avaliamos as ferramentas que você já utiliza (ERP, bancos, planilhas, e-commerce) e propomos a melhor forma de integrá-las.',
  },
]

// ATENÇÃO: o site atual mostra só 4 ícones genéricos na "stack"; esta lista é a
// stack que a Ethan usa nos projetos (confirmar antes de publicar).
const STACK = ['React', 'JavaScript', 'Tailwind CSS', 'Firebase', 'SQL', 'Python', 'APIs REST', 'Vercel']

/* Linhas do "editor" do topo; cada uma é digitada em sequência (CSS steps). */
const CODE = [
  [['k', 'const '], ['f', 'EthanSolution'], ['p', ' = () => {']],
  [['c', '  // Otimizando a operação...']],
  [['p', '  '], ['k', 'return '], ['k', 'new '], ['f', 'System'], ['p', '({']],
  [['p', '    speed: '], ['s', '"100ms"'], ['p', ',']],
  [['p', '    security: '], ['s', '"ponta a ponta"'], ['p', ',']],
  [['p', '    scaling: '], ['k', 'true']],
  [['p', '  })']],
  [['p', '}']],
]
const TONE = { k: 'text-cyan', f: 'text-white', s: 'text-emerald-300', c: 'text-muted', p: 'text-soft' }

function CodeWindow() {
  let delay = 600
  return (
    <div className="animate-float">
      <div className="glass beam overflow-hidden rounded-3xl border border-white/10">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-5 py-3.5">
          <span className="size-3 rounded-full bg-white/15" />
          <span className="size-3 rounded-full bg-white/15" />
          <span className="size-3 rounded-full bg-cyan" />
          <span className="ml-3 font-mono text-xs text-muted">ethan-solution.js</span>
        </div>
        <pre className="overflow-hidden px-5 py-5 font-mono text-[0.8rem] leading-7 sm:text-sm">
          {CODE.map((line, n) => {
            const len = line.reduce((t, [, s]) => t + s.length, 0)
            const d = delay
            delay += len * 28 + 120
            return (
              <div key={n} className="flex">
                <span className="mr-4 w-4 select-none text-right text-white/20">{n + 1}</span>
                <span
                  className="inline-block overflow-hidden whitespace-pre"
                  style={{ width: `${len}ch`, animation: `type ${len * 28}ms steps(${len}) ${d}ms both` }}
                >
                  {line.map(([t, s], i) => (
                    <span key={i} className={TONE[t]}>
                      {s}
                    </span>
                  ))}
                </span>
              </div>
            )
          })}
          <div className="flex">
            <span className="mr-4 w-4 select-none text-right text-white/20">{CODE.length + 1}</span>
            <span className="inline-block h-5 w-2 translate-y-1 bg-cyan [animation:blink_1s_steps(2)_infinite]" />
          </div>
        </pre>
      </div>
    </div>
  )
}

export function Tecnologia() {
  const reveal = useReveals()
  const spot = useSpotlight()
  const spotBuild = useSpotlight()

  return (
    <>
      <PageHero
        eyebrow="Inovação & desenvolvimento"
        title="Transformamos"
        highlight="ideias em sistemas."
        text="Criamos soluções tecnológicas personalizadas que conectam sua contabilidade ao futuro digital. Performance, segurança e escalabilidade."
        actions={
          <Link
            href="#orcamento"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgb(34_211_238/0.6)]"
          >
            Iniciar projeto
            <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        }
        visual={<CodeWindow />}
      />

      <div ref={reveal}>
        {/* ===== PILARES ===== */}
        <section className="px-4 py-16 sm:px-6">
          <div ref={spot} className="mx-auto grid max-w-screen-xl gap-4 md:grid-cols-3">
            {CORE.map((c, n) => (
              <article key={c.title} data-reveal style={{ '--d': `${n * 100}ms` }} className="spotlight group flex gap-5 rounded-3xl border border-white/10 bg-ink-2/50 p-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-cyan text-ink transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon name={c.icon} className="size-6" />
                </span>
                <span>
                  <h3 className="text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
                </span>
              </article>
            ))}
          </div>
        </section>

        {/* ===== O QUE CONSTRUÍMOS ===== */}
        <section className="px-4 py-24 sm:px-6 lg:py-28">
          <div ref={spotBuild} className="mx-auto max-w-screen-xl">
            <SectionTitle
              eyebrow="O que podemos construir"
              title="Tecnologia a serviço da"
              highlight="sua operação."
              text="Unimos conhecimento de gestão e desenvolvimento para criar soluções que resolvem problemas reais do dia a dia da empresa."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {BUILD.map((b, n) => (
                <article
                  key={b.title}
                  data-reveal
                  style={{ '--d': `${(n % 3) * 90}ms` }}
                  className={`spotlight group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2/40 p-7 transition-transform duration-500 hover:-translate-y-1.5 ${b.wide ? 'lg:col-span-2' : ''}`}
                >
                  <span className="absolute right-6 top-6 font-mono text-xs text-white/20">{`<${String(n + 1).padStart(2, '0')}/>`}</span>
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/5 text-cyan transition-all duration-500 group-hover:bg-cyan group-hover:text-ink">
                    <Icon name={b.icon} className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-white">{b.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-muted">{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Process steps={STEPS} eyebrow="Como trabalhamos" title="Do briefing" highlight="à entrega." after="" />
      <Faq items={FAQ} eyebrow="Dúvidas sobre projetos" title="Perguntas" highlight="frequentes" />

      {/* ===== ORÇAMENTO ===== */}
      <Budget />

      {/* ===== STACK ===== */}
      <section aria-label="Nossa stack tecnológica" className="border-y border-white/10 bg-ink-2/60 py-12">
        <p className="text-center font-mono text-label uppercase text-muted">Nossa stack tecnológica</p>
        <div className="mt-8 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14">
            {[...STACK, ...STACK].map((s, n) => (
              <span key={n} className="whitespace-nowrap text-2xl font-bold tracking-tight text-white/35 transition-colors hover:text-cyan">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Budget() {
  const reveal = useReveals()
  return (
    <section ref={reveal} id="orcamento" className="scroll-mt-24 px-4 py-24 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-screen-xl items-start gap-12 lg:grid-cols-12">
        <SectionTitle
          className="lg:col-span-5"
          eyebrow="Orçamento"
          title="Conte-nos sobre o sistema que"
          highlight="sua empresa precisa."
          text="Respondemos com os próximos passos e, se fizer sentido, marcamos uma conversa para entender o projeto a fundo."
        />
        <ContactForm
          className="lg:col-span-7"
          title="Solicitar orçamento"
          text="Quanto mais detalhes, mais precisa a proposta."
          subject="Desenvolvimento Web"
          messagePlaceholder="Descreva o projeto: o que o sistema precisa fazer?"
          submitLabel="Enviar solicitação"
        />
      </div>
    </section>
  )
}
