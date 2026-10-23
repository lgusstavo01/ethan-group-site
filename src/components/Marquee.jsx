/* ===== FAIXA ROLANTE =====
   Tudo o que a Ethan faz, passando sem parar. A lista vai duplicada para o
   loop de -50% fechar sem emenda. */

const ITEMS = [
  'Planejamento tributário',
  'BPO Financeiro',
  'Folha e eSocial',
  'Business Intelligence',
  'Controladoria',
  'Abertura de CNPJ',
  'Conciliação bancária',
  'Sites e sistemas',
  'Automação de processos',
  'Troca de contador',
]

export function Marquee() {
  return (
    <div aria-hidden="true" className="relative -rotate-1 border-y border-white/10 bg-ink-2/80 py-5">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 hover:[animation-play-state:paused]">
          {[...ITEMS, ...ITEMS].map((item, n) => (
            <span key={n} className="flex items-center gap-10 whitespace-nowrap text-xl font-bold tracking-tight text-white/80 sm:text-2xl">
              {item}
              <span className="size-2 rotate-45 bg-cyan" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
