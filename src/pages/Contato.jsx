import { site } from '../config/site.js'
import { ContactChannels, ContactForm } from '../components/Contact.jsx'
import { Icon } from '../components/Icon.jsx'
import { PageHero } from '../components/PageHero.jsx'
import { useReveals } from '../hooks/useReveals.js'

/* ===== PÁGINA: CONTATO =====
   Formulário (abre o WhatsApp), canais e mapa do escritório. */

const MAP_EMBED = 'https://www.google.com/maps?q=Shopping+Paseo+Itaigara,+Rua+Rubens+Guelli,+135,+Salvador+-+BA&z=16&output=embed'

export function Contato() {
  const reveal = useReveals()

  return (
    <>
      <PageHero
        eyebrow="Fale conosco"
        title="Vamos conversar sobre"
        highlight="a sua empresa."
        text="Conte o que você precisa e um especialista da Ethan retorna com um diagnóstico para o seu negócio."
      />

      <section ref={reveal} className="px-4 pb-24 sm:px-6 lg:pb-32">
        <div className="mx-auto grid max-w-screen-xl gap-10 lg:grid-cols-12">
          <ContactForm className="lg:col-span-7" />

          <div className="space-y-6 lg:col-span-5">
            <div data-reveal>
              <p className="font-mono text-label uppercase text-cyan">Canais de atendimento</p>
            </div>
            <ContactChannels />

            <div data-reveal className="overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Mapa: Shopping Paseo Itaigara, Salvador"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-72 w-full [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.6)_brightness(0.9)]"
              />
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between bg-ink-2 px-5 py-4 text-sm font-semibold text-white transition hover:text-cyan"
              >
                <span className="flex items-center gap-2">
                  <Icon name="pin" className="size-4 text-cyan" />
                  Como chegar
                </span>
                <Icon name="arrowUp" className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
