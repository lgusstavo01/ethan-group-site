import { useState } from 'react'
import { site, whatsappLink } from '../config/site.js'
import { useReveals } from '../hooks/useReveals.js'
import { Eyebrow } from './Eyebrow.jsx'
import { Icon, WhatsAppIcon } from './Icon.jsx'

/* ===== CONTATO =====
   O formulário monta a mensagem e abre o WhatsApp da Ethan já preenchido
   (sem servidor). Para envio direto por e-mail, ligar uma plataforma depois. */

const SUBJECTS = ['Contabilidade', 'BPO Financeiro', 'Business Intelligence', 'Controladoria', 'Desenvolvimento Web', 'Troca de contador', 'Abertura de empresa', 'Outro assunto']

const CHANNELS = [
  { icon: 'whats', label: 'WhatsApp', value: site.whatsappLabel, href: whatsappLink(), external: true },
  { icon: 'mail', label: 'E-mail', value: site.email, href: `mailto:${site.email}` },
  { icon: 'pin', label: 'Endereço', value: `${site.address}. ${site.city}`, href: site.mapsUrl, external: true },
]

const field =
  'w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3.5 text-white placeholder:text-muted/70 transition focus:border-cyan focus:bg-ink focus:outline-none focus:ring-4 focus:ring-cyan/15'

/** Formulário que vira mensagem de WhatsApp. */
export function ContactForm({
  title = 'Envie uma mensagem',
  text = 'Entraremos em contato o mais breve possível.',
  subject = SUBJECTS[0],
  messagePlaceholder = 'Conte um pouco sobre a sua empresa e o que você precisa',
  submitLabel = 'Enviar pelo WhatsApp',
  className = '',
}) {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', assunto: subject, mensagem: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const msg = [
      'Olá! Vim pelo site da Ethan Group.',
      `*Nome:* ${form.nome}`,
      `*Telefone:* ${form.telefone}`,
      form.email && `*E-mail:* ${form.email}`,
      `*Assunto:* ${form.assunto}`,
      form.mensagem && `*Mensagem:* ${form.mensagem}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappLink(msg), '_blank', 'noopener')
  }

  return (
    <form data-reveal onSubmit={onSubmit} className={`glass beam relative rounded-[2rem] border border-white/10 p-6 sm:p-10 ${className}`}>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-1 text-muted">{text}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-soft">Nome completo</span>
          <input required autoComplete="name" value={form.nome} onChange={set('nome')} className={field} placeholder="Seu nome" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-soft">WhatsApp ou telefone</span>
          <input required type="tel" autoComplete="tel" value={form.telefone} onChange={set('telefone')} className={field} placeholder="(71) 90000-0000" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-soft">E-mail corporativo</span>
          <input type="email" autoComplete="email" value={form.email} onChange={set('email')} className={field} placeholder="voce@empresa.com.br" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-soft">Assunto</span>
          <select value={form.assunto} onChange={set('assunto')} className={`${field} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322d3ee' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}>
            {SUBJECTS.map((s) => (
              <option key={s} className="bg-ink-2">
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-soft">Mensagem</span>
          <textarea rows={4} value={form.mensagem} onChange={set('mensagem')} className={`${field} resize-none`} placeholder={messagePlaceholder} />
        </label>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan px-7 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgb(34_211_238/0.6)] sm:w-auto"
      >
        <WhatsAppIcon className="size-5" />
        {submitLabel}
        <Icon name="arrow" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </form>
  )
}

/** WhatsApp, e-mail e endereço em cartões clicáveis. */
export function ContactChannels() {
  return (
    <ul className="space-y-3">
      {CHANNELS.map((c, n) => (
        <li key={c.label} data-reveal style={{ '--d': `${n * 80}ms` }}>
          <a
            href={c.href}
            {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-2/40 p-4 transition-all duration-300 hover:border-cyan/40 hover:bg-cyan/[0.04]"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan transition-all duration-300 group-hover:bg-cyan group-hover:text-ink">
              {c.icon === 'whats' ? <WhatsAppIcon /> : <Icon name={c.icon} />}
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-label uppercase text-muted">{c.label}</span>
              <span className="mt-1 block font-semibold text-white">{c.value}</span>
            </span>
            <Icon name="arrowUp" className="ml-auto size-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
          </a>
        </li>
      ))}
    </ul>
  )
}

/** Seção de contato da página inicial. */
export function Contact() {
  const reveal = useReveals()

  return (
    <section ref={reveal} id="contato" className="relative scroll-mt-24 px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-screen-xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div data-reveal>
            <Eyebrow>Contato</Eyebrow>
            <h2 className="mt-6 text-display font-extrabold text-white">
              Vamos conversar sobre a <span className="text-shine">sua empresa?</span>
            </h2>
            <p className="mt-6 text-lead text-muted">Conte o que você precisa. O diagnóstico é gratuito e sem compromisso.</p>
          </div>
          <div className="mt-10">
            <ContactChannels />
          </div>
        </div>
        <ContactForm className="lg:col-span-7" />
      </div>
    </section>
  )
}
