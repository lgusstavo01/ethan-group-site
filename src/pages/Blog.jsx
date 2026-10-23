import { CtaBanner } from '../components/CtaBanner.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { PostCard } from '../components/PostCard.jsx'
import { posts } from '../data/posts.js'
import { useReveals } from '../hooks/useReveals.js'
import { useSpotlight } from '../hooks/useSpotlight.js'

/* ===== PÁGINA: BLOG =====
   O mais recente em destaque; os outros em cards. */

export function Blog() {
  const reveal = useReveals()
  const spot = useSpotlight()
  const [first, ...rest] = [...posts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <PageHero
        eyebrow="Ethan Insights"
        title="Conhecimento que"
        highlight="impulsiona negócios."
        text="Artigos exclusivos sobre contabilidade estratégica, BPO financeiro e tecnologia para quem busca escala e segurança jurídica."
      />

      <section ref={reveal} className="px-4 pb-16 sm:px-6">
        <div ref={spot} className="mx-auto max-w-screen-xl space-y-6">
          <PostCard post={first} featured />
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p, n) => (
              <PostCard key={p.id} post={p} delay={n * 100} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Prefere que a gente olhe"
        highlight="os números da sua empresa?"
        text="Artigo ajuda, diagnóstico resolve. Fale com um especialista da Ethan, sem custo."
        message="Olá! Li o blog da Ethan e quero um diagnóstico da minha empresa."
      />
    </>
  )
}
