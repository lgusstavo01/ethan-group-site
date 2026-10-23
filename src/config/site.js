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
  // Mesmos caminhos do site atual (não quebra links do Google nem compartilhados).
  pages: {
    contabilidade: '/contabilidade',
    financeiro: '/financeiro',
    tecnologia: '/tecnologia',
    sobre: '/sobre',
    blog: '/blog',
    contato: '/contato',
  },
  nav: [
    { href: '/contabilidade', label: 'Contabilidade' },
    { href: '/financeiro', label: 'BPO Financeiro' },
    { href: '/tecnologia', label: 'Tecnologia' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ],
}

/* Título e descrição de cada página (SEO), copiados do site atual. */
export const meta = {
  '/': {
    title: 'Ethan Group | Contabilidade e BPO Financeiro em Salvador - BA',
    description:
      'Escritório de contabilidade em Salvador com BPO Financeiro, planejamento tributário e tecnologia. Atendimento digital e consultivo. Agende um diagnóstico gratuito.',
  },
  '/contabilidade': {
    title: 'Contabilidade em Salvador | Ethan Group',
    description: 'Contabilidade consultiva em Salvador: planejamento tributário, departamento fiscal e pessoal, abertura de CNPJ e troca de contador sem burocracia.',
  },
  '/financeiro': {
    title: 'BPO Financeiro em Salvador | Ethan Group',
    description: 'Terceirize o financeiro da sua empresa: contas a pagar e receber, conciliação bancária, emissão de notas e relatórios com DRE e fluxo de caixa.',
  },
  '/tecnologia': {
    title: 'Desenvolvimento de Sistemas e Sites | Ethan Group',
    description: 'Sites, sistemas web, dashboards e automação de processos sob medida para empresas. Solicite um orçamento para o seu projeto.',
  },
  '/sobre': {
    title: 'Sobre Nós | Ethan Group',
    description: 'Conheça a Ethan Group: contabilidade, BPO Financeiro e tecnologia unidos para simplificar a gestão de empresas em Salvador e em todo o Brasil.',
  },
  '/blog': {
    title: 'Blog de Contabilidade e Gestão | Ethan Group',
    description: 'Artigos sobre contabilidade, impostos, planejamento tributário e gestão financeira para empresários que querem decidir com mais segurança.',
  },
  '/contato': {
    title: 'Contato | Ethan Group - Contabilidade em Salvador',
    description: 'Fale com a Ethan Group pelo WhatsApp, e-mail ou formulário. Escritório no Shopping Paseo Itaigara, Salvador - BA. Agende seu diagnóstico gratuito.',
  },
  notFound: {
    title: 'Página não encontrada | Ethan Group',
    description: 'A página que você procurou não existe ou foi movida.',
  },
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
