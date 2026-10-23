import { useState } from 'react'
import { whatsappLink } from '../config/site.js'
import { useReveals } from '../hooks/useReveals.js'
import { Eyebrow } from './Eyebrow.jsx'
import { Icon } from './Icon.jsx'

/* ===== DÚVIDAS FREQUENTES =====
   Acordeão com altura animada (grid-rows 0fr → 1fr), um aberto por vez. */

const FAQ = [
  {
    q: 'Quanto custa a contabilidade da Ethan?',
    a: 'O valor depende do regime tributário, do faturamento, do número de funcionários e dos serviços contratados. Por isso, fazemos um diagnóstico gratuito antes e enviamos uma proposta sob medida, sem surpresas na mensalidade.',
  },
  {
    q: 'Como funciona a troca de contador?',
    a: 'É mais simples do que parece. Depois que você nos contrata, entramos em contato com o seu contador atual para receber a documentação, revisamos a situação fiscal da empresa e assumimos a rotina a partir da competência combinada, sem interromper suas obrigações.',
  },
  {
    q: 'Vocês atendem empresas fora de Salvador?',
    a: 'Sim. Nosso atendimento é digital: documentos, guias e relatórios ficam na Área do Cliente e as reuniões podem ser feitas por vídeo. Empresas de outras cidades são atendidas com o mesmo padrão.',
  },
  {
    q: 'Preciso entregar documentos em papel?',
    a: 'Não. Você envia notas, extratos e comprovantes pela Área do Cliente e recebe guias e relatórios pelo mesmo canal.',
  },
  {
    q: 'Qual a diferença entre contabilidade e BPO Financeiro?',
    a: 'A contabilidade cuida das obrigações fiscais, trabalhistas e societárias da empresa. O BPO Financeiro assume a rotina do seu financeiro: contas a pagar e receber, conciliação bancária, emissão de notas e relatórios de caixa. Os dois serviços se complementam e podem ser contratados juntos ou separados.',
  },
  {
    q: 'Vocês ajudam a abrir uma empresa?',
    a: 'Sim. Orientamos na escolha da natureza jurídica, das atividades (CNAEs) e do regime tributário mais vantajoso, e cuidamos de todo o processo de abertura do CNPJ.',
  },
]

export function Faq() {
  const reveal = useReveals()
  const [open, setOpen] = useState(0)

  return (
    <section ref={reveal} id="duvidas" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-screen-xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4" data-reveal>
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Dúvidas frequentes</Eyebrow>
            <h2 className="mt-6 text-display font-extrabold text-white">
              Ainda com <span className="text-shine">dúvidas?</span>
            </h2>
            <p className="mt-6 text-lead text-muted">Se a sua não estiver aqui, chama a gente. Respondemos rapidinho.</p>
            <a
              href={whatsappLink('Olá! Tenho uma dúvida sobre os serviços da Ethan.')}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 font-semibold text-cyan"
            >
              Perguntar no WhatsApp
              <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="space-y-3 lg:col-span-8">
          {FAQ.map((item, n) => {
            const isOpen = open === n
            return (
              <div
                key={item.q}
                data-reveal
                style={{ '--d': `${n * 60}ms` }}
                className={`rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-cyan/40 bg-cyan/[0.04]' : 'border-white/10 bg-ink-2/40 hover:border-white/20'}`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : n)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${n}`}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold text-white"
                  >
                    {item.q}
                    <span className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-500 ${isOpen ? 'rotate-45 border-cyan bg-cyan text-ink' : 'border-white/15 text-cyan'}`}>
                      <Icon name="plus" className="size-4" strokeWidth={2.2} />
                    </span>
                  </button>
                </h3>
                <div id={`faq-${n}`} className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-muted">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
