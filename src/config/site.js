/* ===== DADOS DA EMPRESA =====
   Contato, endereço e todo o texto institucional ficam aqui.
   Fonte: ethangroup.com.br (out/2026). */

export const site = {
  name: 'Ethan Group',
  tagline: 'Contabilidade, BPO Financeiro e tecnologia para empresas que querem crescer com segurança.',
  whatsapp: '5571981485454',
  whatsappLabel: '+55 (71) 98148-5454',
  whatsappDefaultMessage: 'Olá! Gostaria de um diagnóstico gratuito para minha empresa.',
  email: 'contato@ethan.adm.br',
  address: 'Rua Rubens Guelli, 135 · Shopping Paseo Itaigara, Loja 217',
  city: 'Salvador · BA',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Shopping+Paseo+Itaigara+Rua+Rubens+Guelli+135+Salvador',
  clientArea: 'https://vip.acessorias.com/ethansolucoes',
  // Páginas internas que continuam no site atual.
  pages: {
    contabilidade: '/contabilidade',
    financeiro: '/financeiro',
    tecnologia: '/tecnologia',
    sobre: '/sobre',
    blog: '/blog',
  },
  nav: [
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#duvidas', label: 'Dúvidas' },
    { href: '#contato', label: 'Contato' },
  ],
}

/** Link do WhatsApp; sem argumento usa a mensagem padrão. */
export function whatsappLink(message = site.whatsappDefaultMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

// ATENÇÃO: o site atual diz "10+ anos" nos números e "mais de 5 anos" no Sobre,
// e "150+ clientes". Confirmar com a Ethan antes de publicar.
export const stats = [
  { value: 10, suffix: '+', label: 'anos de experiência' },
  { value: 150, suffix: '+', label: 'clientes ativos' },
  { value: 100, suffix: '%', label: 'de satisfação' },
  { value: 9, suffix: '', label: 'especialistas' },
]
