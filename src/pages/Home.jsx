import { Hero } from '../components/Hero.jsx'
import { Marquee } from '../components/Marquee.jsx'
import { Pillars } from '../components/Pillars.jsx'
import { About } from '../components/About.jsx'
import { Services } from '../components/Services.jsx'
import { Audience } from '../components/Audience.jsx'
import { Process } from '../components/Process.jsx'
import { ClientArea } from '../components/ClientArea.jsx'
import { Faq } from '../components/Faq.jsx'
import { Contact } from '../components/Contact.jsx'

export function Home() {
  return (
    <>
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
    </>
  )
}
