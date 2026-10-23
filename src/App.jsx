import { useEffect } from 'react'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Marquee } from './components/Marquee.jsx'
import { Pillars } from './components/Pillars.jsx'
import { About } from './components/About.jsx'
import { Services } from './components/Services.jsx'
import { Audience } from './components/Audience.jsx'
import { Process } from './components/Process.jsx'
import { ClientArea } from './components/ClientArea.jsx'
import { Faq } from './components/Faq.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { WhatsAppButton } from './components/WhatsAppButton.jsx'
import { useReducedMotion } from './hooks/useReducedMotion.js'
import { startScroll } from './lib/scroll.js'

export function App() {
  const reduced = useReducedMotion()
  useEffect(() => startScroll(reduced), [reduced])

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Pillars />
        <About />
        <Services />
        <Audience />
        <Process />
        <ClientArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
