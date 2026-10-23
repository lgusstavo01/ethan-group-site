import { site } from '../config/site.js'
import { goTo } from '../lib/scroll.js'
import { Logo } from './Logo.jsx'

/* ===== RODAPÉ =====
   Fecha com o "ETHAN." gigante, recortado pela borda de baixo. */

const LINKS = [
  { label: 'Contabilidade', href: site.pages.contabilidade },
  { label: 'BPO Financeiro', href: site.pages.financeiro },
  { label: 'Tecnologia', href: site.pages.tecnologia },
  { label: 'Sobre nós', href: site.pages.sobre },
  { label: 'Blog', href: site.pages.blog },
  { label: 'Área do Cliente', href: site.clientArea, external: true },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-2/40 px-4 pt-20 sm:px-6">
      <div className="mx-auto grid max-w-screen-xl gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo className="text-3xl" />
          <p className="mt-4 max-w-sm text-muted">{site.tagline}</p>
        </div>
        <nav aria-label="Rodapé" className="md:col-span-3">
          <p className="font-mono text-label uppercase text-cyan">Navegação</p>
          <ul className="mt-5 space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})} className="text-soft transition hover:text-cyan">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="font-mono text-label uppercase text-cyan">Atendimento</p>
          <ul className="mt-5 space-y-2.5 text-soft">
            <li>{site.whatsappLabel}</li>
            <li>
              <a href={`mailto:${site.email}`} className="transition hover:text-cyan">
                {site.email}
              </a>
            </li>
            <li>
              {site.address}
              <br />
              {site.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-screen-xl flex-col gap-4 border-t border-white/10 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ethan Group. Todos os direitos reservados.</p>
        <a href="#top" onClick={goTo} className="transition hover:text-cyan">
          Voltar ao topo ↑
        </a>
      </div>

      <p aria-hidden="true" className="pointer-events-none -mb-[0.22em] select-none text-center text-[clamp(6rem,24vw,22rem)] font-extrabold leading-none tracking-[-0.06em] text-white/[0.04]">
        ETHAN<span className="text-cyan/20">.</span>
      </p>
    </footer>
  )
}
