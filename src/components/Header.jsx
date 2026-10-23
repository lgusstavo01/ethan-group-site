import { useEffect, useRef, useState } from 'react'
import { site } from '../config/site.js'
import { usePath } from '../lib/router.js'
import { onFrame } from '../lib/scroll.js'
import { Icon } from './Icon.jsx'
import { Link } from './Link.jsx'
import { Logo } from './Logo.jsx'

/* ===== CABEÇALHO =====
   Transparente no topo; ao rolar vira uma "pílula" de vidro. A troca é feita
   no loop de scroll (classe no DOM), sem re-render. */

export function Header() {
  const bar = useRef(null)
  const [open, setOpen] = useState(false)
  const path = usePath()
  const isActive = (href) => path === href || path.startsWith(`${href}/`)

  // Trocou de página: fecha o menu do celular.
  useEffect(() => setOpen(false), [path])

  useEffect(
    () =>
      onFrame(() => {
        bar.current?.classList.toggle('is-scrolled', window.scrollY > 24)
      }),
    [],
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        ref={bar}
        className="group mx-auto flex max-w-screen-xl items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition-all duration-500 [&.is-scrolled]:border-white/10 [&.is-scrolled]:bg-ink/70 [&.is-scrolled]:shadow-2xl [&.is-scrolled]:shadow-black/40 [&.is-scrolled]:backdrop-blur-xl sm:px-5"
      >
        <Link href="/" aria-label="Ethan Group — início" className="text-2xl">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium text-soft transition hover:bg-white/5 hover:text-white aria-[current=page]:text-white xl:px-4"
            >
              {item.label}
              {isActive(item.href) && <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.clientArea}
            target="_blank"
            rel="noreferrer"
            className="beam hidden items-center gap-2 rounded-full bg-ink-2 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-3 sm:inline-flex"
          >
            <Icon name="lock" className="size-4 text-cyan" />
            Área do Cliente
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </div>

      {/* ===== MENU MOBILE ===== */}
      <div
        id="menu-mobile"
        className={`mx-auto mt-2 max-w-screen-xl overflow-hidden rounded-2xl border border-white/10 bg-ink/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${open ? 'max-h-[34rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'}`}
      >
        <nav aria-label="Menu" className="flex flex-col p-3">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-semibold text-white transition hover:bg-white/5 aria-[current=page]:bg-cyan/10 aria-[current=page]:text-cyan"
            >
              {item.label}
              <Icon name="arrow" className="size-4 opacity-40" />
            </Link>
          ))}
          <a href={site.clientArea} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan px-4 py-3.5 font-semibold text-ink">
            <Icon name="lock" className="size-4" />
            Área do Cliente
          </a>
        </nav>
      </div>
    </header>
  )
}
