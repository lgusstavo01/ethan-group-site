import { site } from '../config/site.js'
import { useReveals } from '../hooks/useReveals.js'
import { Eyebrow } from './Eyebrow.jsx'
import { Icon } from './Icon.jsx'
import { Logo } from './Logo.jsx'

/* ===== ÁREA DO CLIENTE =====
   Portal (Acessórias) mostrado num celular ilustrativo que flutua, com os
   recursos ao lado. */

const FEATURES = [
  { icon: 'calendar', title: 'Guias e impostos', text: 'Guias prontas para pagamento, com vencimentos organizados.' },
  { icon: 'file', title: 'Documentos e relatórios', text: 'Folha, balancetes e relatórios disponíveis quando você precisar.' },
  { icon: 'upload', title: 'Envio de documentos', text: 'Mande notas, extratos e comprovantes sem precisar de e-mail.' },
  { icon: 'check', title: 'Obrigações em dia', text: 'Acompanhe o que já foi entregue e o que está por vir.' },
  { icon: 'chat', title: 'Comunicação centralizada', text: 'Solicitações e avisos registrados em um só lugar.' },
]

const GUIAS = [
  { name: 'DAS', due: 'vence 20/11', v: 'R$ 1.842,17' },
  { name: 'FGTS Digital', due: 'vence 20/11', v: 'R$ 968,40' },
  { name: 'DARF · INSS', due: 'vence 20/11', v: 'R$ 2.315,92' },
]

export function ClientArea() {
  const reveal = useReveals()

  return (
    <section ref={reveal} className="relative px-4 py-24 sm:px-6 lg:py-32">
      <div className="relative mx-auto max-w-screen-xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-2/60">
        <div aria-hidden="true" className="grid-lines absolute inset-0" />
        <div aria-hidden="true" className="absolute -left-32 top-1/2 size-[30rem] -translate-y-1/2 rounded-full bg-cyan/15 blur-[110px]" />

        <div className="relative grid items-center gap-14 p-7 sm:p-12 lg:grid-cols-12 lg:p-16">
          {/* ===== CELULAR ===== */}
          <div data-reveal className="flex justify-center lg:col-span-5">
            <div className="animate-float">
              <div className="relative w-[17rem] rounded-[2.6rem] border border-white/15 bg-ink p-3 shadow-[0_40px_120px_-30px_rgb(34_211_238/0.45)] sm:w-[19rem]">
                <div className="absolute left-1/2 top-5 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
                <div className="overflow-hidden rounded-[2rem] bg-ink-2 px-4 pb-6 pt-12">
                  <div className="flex items-center justify-between">
                    <Logo className="text-lg" />
                    <span className="grid size-8 place-items-center rounded-full bg-cyan/15 font-mono text-xs font-medium text-cyan">AB</span>
                  </div>
                  <p className="mt-5 text-xs text-muted">Olá, sua empresa está</p>
                  <p className="text-xl font-bold text-white">
                    100% <span className="text-cyan">em dia</span>
                  </p>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-cyan-deep to-cyan" />
                  </div>
                  <p className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">Guias do mês</p>
                  <div className="mt-2 space-y-2">
                    {GUIAS.map((g) => (
                      <div key={g.name} className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2.5">
                        <span>
                          <span className="block text-sm font-semibold text-white">{g.name}</span>
                          <span className="block text-[0.7rem] text-muted">{g.due}</span>
                        </span>
                        <span className="tabular font-mono text-xs text-soft">{g.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-cyan py-2.5 text-sm font-semibold text-ink">
                    <Icon name="upload" className="size-4" /> Enviar documentos
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== TEXTO ===== */}
          <div className="lg:col-span-7">
            <div data-reveal>
              <Eyebrow>Área do cliente</Eyebrow>
              <h2 className="mt-6 text-display font-extrabold text-white">
                Sua empresa inteira, <span className="text-shine">a um clique.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lead text-muted">
                Clientes Ethan têm acesso a um portal exclusivo, disponível 24 horas, para acompanhar tudo o que fazemos pela empresa, sem depender de troca de
                e-mails.
              </p>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {FEATURES.map((f, n) => (
                <li key={f.title} data-reveal style={{ '--d': `${n * 70}ms` }} className={`flex gap-4 rounded-2xl border border-white/5 bg-ink/50 p-4 ${n === FEATURES.length - 1 ? 'sm:col-span-2' : ''}`}>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
                    <Icon name={f.icon} />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{f.title}</span>
                    <span className="mt-0.5 block text-sm text-muted">{f.text}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a
              data-reveal
              href={site.clientArea}
              target="_blank"
              rel="noreferrer"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgb(34_211_238/0.6)]"
            >
              <Icon name="lock" className="size-4" />
              Acessar a Área do Cliente
              <Icon name="arrowUp" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
