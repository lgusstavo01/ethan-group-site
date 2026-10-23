import { whatsappLink } from '../config/site.js'
import { WhatsAppIcon } from './Icon.jsx'

/* Botão flutuante do WhatsApp, com um anel pulsando. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Ethan no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl shadow-black/40 transition-transform duration-300 hover:scale-110"
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-[#25d366] [animation:ping-soft_2.4s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <WhatsAppIcon className="relative size-7" />
    </a>
  )
}
