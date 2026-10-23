import { currentPath, navigate } from '../lib/router.js'
import { scrollToHash } from '../lib/scroll.js'

/* ===== LINK =====
   <a> normal para tudo; links internos ("/sobre", "/#contato") trocam de
   página sem recarregar. Âncora na mesma página rola suave com o Lenis.
   Ctrl/Cmd+clique e links externos seguem o comportamento do navegador. */

export function Link({ href, onClick, children, ...props }) {
  const handle = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    if (!href?.startsWith('/') && !href?.startsWith('#')) return
    e.preventDefault()

    const [path, hash] = href.startsWith('#') ? [currentPath(), href.slice(1)] : href.split('#')
    const target = path || '/'
    if (target === currentPath()) {
      scrollToHash(hash ? `#${hash}` : '#top')
      return
    }
    navigate(hash ? `${target}#${hash}` : target)
  }

  return (
    <a href={href} onClick={handle} {...props}>
      {children}
    </a>
  )
}
