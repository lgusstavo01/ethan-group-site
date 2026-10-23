import { Fragment, useEffect, useRef, useState } from 'react'
import { whatsappLink } from '../config/site.js'
import { Icon, WhatsAppIcon } from '../components/Icon.jsx'
import { Link } from '../components/Link.jsx'
import { PostCard } from '../components/PostCard.jsx'
import { formatDate, posts } from '../data/posts.js'
import { useReveals } from '../hooks/useReveals.js'
import { clamp } from '../lib/math.js'
import { onFrame } from '../lib/scroll.js'

/* ===== PÁGINA: ARTIGO =====
   Barra de progresso de leitura no topo, capa com zoom lento ao rolar,
   corpo renderizado a partir dos blocos de data/posts.js. */

/** "texto com **negrito**" → nós com <strong>. */
function rich(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, n) =>
    part.startsWith('**') ? (
      <strong key={n} className="font-semibold text-white">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={n}>{part}</Fragment>
    ),
  )
}

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="pt-8 text-[clamp(1.5rem,2.6vw,2.1rem)] font-extrabold tracking-tight text-white">{block.text}</h2>
    case 'ul':
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 size-1.5 shrink-0 rotate-45 bg-cyan" />
              <span>{rich(item)}</span>
            </li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote className="relative my-10 overflow-hidden rounded-3xl border border-cyan/20 bg-cyan/[0.05] p-8 pl-10 text-xl font-semibold leading-relaxed text-white sm:text-2xl">
          <span aria-hidden="true" className="absolute -left-1 -top-6 font-serif text-[7rem] leading-none text-cyan/25">
            “
          </span>
          <span className="relative">{block.text}</span>
        </blockquote>
      )
    case 'timeline':
      return (
        <ol className="relative space-y-4 border-l border-cyan/30 pl-8">
          {block.items.map((item) => (
            <li key={item.label} data-reveal className="relative rounded-2xl border border-white/10 bg-ink-2/60 p-5">
              <span className="absolute -left-[2.6rem] top-6 size-3 rounded-full border-2 border-ink bg-cyan shadow-[0_0_18px_rgb(34_211_238/0.8)]" />
              <p className="font-mono text-sm font-medium text-cyan">{item.label}</p>
              <p className="mt-1.5 text-base">{item.text}</p>
            </li>
          ))}
        </ol>
      )
    case 'steps':
      return (
        <ol className="space-y-3">
          {block.items.map((item, n) => (
            <li key={item.title} data-reveal style={{ '--d': `${n * 70}ms` }} className="flex gap-4 rounded-2xl border border-white/10 bg-ink-2/40 p-5">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-cyan font-mono text-sm font-medium text-ink">{n + 1}</span>
              <span>
                <strong className="block font-semibold text-white">{item.title}</strong>
                <span className="mt-1 block text-base">{item.text}</span>
              </span>
            </li>
          ))}
        </ol>
      )
    default:
      return <p>{rich(block.text)}</p>
  }
}

function ShareBar({ post }) {
  const [copied, setCopied] = useState(false)
  const url = `https://www.ethangroup.com.br/blog/${post.id}`

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* sem permissão de área de transferência: nada a fazer */
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="font-mono text-label uppercase text-muted">Compartilhar</span>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${url}`)}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-[#25d366] hover:text-[#25d366]"
      >
        <WhatsAppIcon className="size-4" /> WhatsApp
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan hover:text-cyan"
      >
        LinkedIn
      </a>
      <button type="button" onClick={copy} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan hover:text-cyan">
        <Icon name={copied ? 'check' : 'file'} className="size-4" />
        {copied ? 'Link copiado!' : 'Copiar link'}
      </button>
    </div>
  )
}

export function BlogPost({ post }) {
  const reveal = useReveals()
  const article = useRef(null)
  const bar = useRef(null)
  const cover = useRef(null)
  const related = posts.filter((p) => p.id !== post.id)

  useEffect(
    () =>
      onFrame(() => {
        const a = article.current
        if (!a) return
        const r = a.getBoundingClientRect()
        const p = clamp(-r.top / Math.max(1, r.height - window.innerHeight * 0.6))
        if (bar.current) bar.current.style.transform = `scaleX(${p})`
        if (cover.current) cover.current.style.transform = `scale(${1.05 + Math.min(1, window.scrollY / 900) * 0.12})`
      }),
    [],
  )

  return (
    <div ref={reveal}>
      {/* Barra de leitura, colada no topo da tela */}
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-white/5">
        <div ref={bar} className="h-full origin-left scale-x-0 bg-gradient-to-r from-cyan-deep via-cyan to-cyan-soft" />
      </div>

      <header className="relative isolate overflow-hidden px-4 pt-36 pb-12 sm:px-6 sm:pt-44">
        <div aria-hidden="true" className="grid-lines absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute -top-1/3 left-1/2 -z-10 size-[50vmax] -translate-x-1/2 rounded-full bg-cyan/15 blur-[120px]" />
        <div className="mx-auto max-w-4xl">
          <Link href="/blog" className="group inline-flex animate-rise items-center gap-2 font-medium text-cyan">
            <Icon name="arrow" className="size-4 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
            Todos os artigos
          </Link>
          <p className="mt-10 animate-rise font-mono text-label uppercase text-cyan [animation-delay:100ms]">{post.category}</p>
          <h1 className="mt-4 animate-rise text-[clamp(2.1rem,5vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white [animation-delay:180ms]">{post.title}</h1>
          <div className="mt-8 flex animate-rise flex-wrap items-center gap-x-6 gap-y-2 border-y border-white/10 py-5 font-mono text-xs uppercase tracking-[0.14em] text-muted [animation-delay:300ms]">
            <span className="flex items-center gap-2">
              <Icon name="calendar" className="size-4 text-cyan" /> {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="file" className="size-4 text-cyan" /> {post.readTime} min de leitura
            </span>
            <span className="flex items-center gap-2">
              <Icon name="handshake" className="size-4 text-cyan" /> Por Time Ethan Group
            </span>
          </div>
        </div>
      </header>

      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-5xl animate-rise overflow-hidden rounded-[2.5rem] border border-white/10 [animation-delay:400ms]">
          <img ref={cover} src={post.cover} alt={`Capa ilustrativa do artigo: ${post.title}`} fetchPriority="high" className="aspect-[16/8] w-full object-cover will-change-transform" />
        </div>
      </div>

      <article ref={article} className="px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-[1.075rem] leading-[1.8] text-soft">
          {post.body.map((b, n) => (
            <Block key={n} block={b} />
          ))}

          {/* Chamada do artigo */}
          <div data-reveal className="beam relative mt-14 overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-deep/40 via-ink-2 to-ink-2 p-8 text-center sm:p-10">
            <p className="text-2xl font-extrabold tracking-tight text-white">{post.cta.title}</p>
            <p className="mx-auto mt-3 max-w-lg text-base text-soft">{post.cta.text}</p>
            <a
              href={whatsappLink(post.cta.message)}
              target="_blank"
              rel="noreferrer"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3.5 text-base font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgb(34_211_238/0.6)]"
            >
              Solicitar diagnóstico gratuito
              <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <ShareBar post={post} />
          </div>
        </div>
      </article>

      {/* ===== CONTINUE LENDO ===== */}
      <section className="px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-screen-xl">
          <p data-reveal className="font-mono text-label uppercase text-cyan">
            Continue lendo
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {related.map((p, n) => (
              <PostCard key={p.id} post={p} delay={n * 100} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
