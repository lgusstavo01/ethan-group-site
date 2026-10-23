import { useEffect } from 'react'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { WhatsAppButton } from './components/WhatsAppButton.jsx'
import { meta } from './config/site.js'
import { findPost } from './data/posts.js'
import { useReducedMotion } from './hooks/useReducedMotion.js'
import { usePath } from './lib/router.js'
import { scrollToHash, startScroll } from './lib/scroll.js'
import { Blog } from './pages/Blog.jsx'
import { BlogPost } from './pages/BlogPost.jsx'
import { Contabilidade } from './pages/Contabilidade.jsx'
import { Contato } from './pages/Contato.jsx'
import { Financeiro } from './pages/Financeiro.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Sobre } from './pages/Sobre.jsx'
import { Tecnologia } from './pages/Tecnologia.jsx'

/* ===== ROTAS ===== */

const PAGES = {
  '/': Home,
  '/contabilidade': Contabilidade,
  '/financeiro': Financeiro,
  '/tecnologia': Tecnologia,
  '/sobre': Sobre,
  '/blog': Blog,
  '/contato': Contato,
}

/** Página e SEO de um caminho. */
function resolve(path) {
  const Page = PAGES[path]
  if (Page) return { node: <Page />, seo: meta[path] }
  const post = path.match(/^\/blog\/([^/]+)$/) && findPost(path.split('/')[2])
  if (post) return { node: <BlogPost post={post} />, seo: { title: post.seoTitle, description: post.description } }
  return { node: <NotFound />, seo: meta.notFound }
}

function setMeta(name, content, attr = 'name') {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export function App() {
  const reduced = useReducedMotion()
  const path = usePath()
  const { node, seo } = resolve(path)

  useEffect(() => startScroll(reduced), [reduced])

  // A cada troca de página: título/descrição e volta ao topo (ou à âncora pedida).
  useEffect(() => {
    document.title = seo.title
    setMeta('description', seo.description)
    setMeta('og:title', seo.title, 'property')
    setMeta('og:description', seo.description, 'property')
    setMeta('og:url', `https://www.ethangroup.com.br${path === '/' ? '' : path}`, 'property')

    const hash = window.location.hash
    if (hash.length > 1) {
      const id = setTimeout(() => scrollToHash(hash, { immediate: true }), 120)
      return () => clearTimeout(id)
    }
    scrollToHash('#top', { immediate: true })
    // seo sai do path; depender só dele evita rolar ao topo em outro re-render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" key={path}>
        {node}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
