import { formatDate } from '../data/posts.js'
import { Icon } from './Icon.jsx'
import { Link } from './Link.jsx'

/* Card de artigo (lista do blog e "continue lendo"). `featured` = grande, com a capa ao lado. */
export function PostCard({ post, featured = false, delay = 0 }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      data-reveal
      style={{ '--d': `${delay}ms` }}
      className={`spotlight group relative flex overflow-hidden rounded-[2rem] border border-white/10 bg-ink-2/50 transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan/30 ${featured ? 'flex-col lg:flex-row' : 'flex-col'}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10] lg:aspect-auto lg:w-[55%]' : 'aspect-[16/10]'}`}>
        <img
          src={post.cover}
          alt=""
          loading={featured ? 'eager' : 'lazy'}
          className="size-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-ink/70 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-cyan backdrop-blur">{post.category}</span>
      </div>
      <div className={`flex flex-1 flex-col p-7 ${featured ? 'lg:p-12' : ''}`}>
        <p className="flex items-center gap-3 font-mono text-xs text-muted">
          <span>{formatDate(post.date)}</span>
          <span className="size-1 rounded-full bg-white/20" />
          <span>{post.readTime} min de leitura</span>
        </p>
        <h3 className={`mt-4 font-extrabold tracking-tight text-white transition-colors group-hover:text-cyan-soft ${featured ? 'text-[clamp(1.6rem,2.8vw,2.6rem)] leading-[1.1]' : 'text-xl leading-snug'}`}>{post.title}</h3>
        <p className={`mt-4 leading-relaxed text-muted ${featured ? 'text-lead' : 'text-sm'}`}>{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-7 font-semibold text-cyan">
          Ler artigo completo
          <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
