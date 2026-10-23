/* ===== ARTIGOS DO BLOG =====
   Texto integral do site atual (out/2026). O id é o mesmo da URL antiga
   (/blog/3), para não quebrar links. Conteúdo em blocos; **negrito** vale
   dentro de qualquer texto.
   Tipos: p, h2, ul, quote, timeline (itens {label, text}), steps (itens {title, text}). */

export const posts = [
  {
    id: '3',
    title: 'Reforma Tributária: o que muda para a sua empresa a partir de 2027',
    seoTitle: 'Reforma Tributária 2027: o que muda para sua empresa | Ethan Group',
    description:
      'CBS, IBS e o fim de PIS e Cofins em 2027: entenda o cronograma da Reforma Tributária, o impacto no Simples Nacional e como preparar sua empresa.',
    excerpt:
      'CBS, IBS, Imposto Seletivo e o fim de PIS e Cofins. Entenda o cronograma da transição, o impacto no Simples Nacional e os 5 passos para preparar sua empresa.',
    category: 'Reforma Tributária',
    date: '2026-10-05',
    readTime: 8,
    cover: '/capas/reforma.webp',
    cta: {
      title: 'Quer saber como a reforma afeta a sua empresa?',
      text: 'A Ethan faz uma simulação do impacto da Reforma Tributária com os números reais do seu negócio.',
      message: 'Olá! Quero uma simulação do impacto da Reforma Tributária na minha empresa.',
    },
    body: [
      {
        type: 'p',
        text: 'A maior mudança no sistema de impostos do Brasil em décadas já começou. Aprovada pela Emenda Constitucional 132/2023 e regulamentada pela Lei Complementar 214/2025, a Reforma Tributária vai substituir cinco tributos sobre o consumo por um novo modelo. E 2027 é o ano em que a mudança passa a pesar no caixa das empresas.',
      },
      { type: 'p', text: 'Neste artigo, explicamos de forma direta o que muda, quando muda e o que a sua empresa precisa fazer agora para não ser pega de surpresa.' },
      { type: 'h2', text: 'O que a reforma muda, em resumo' },
      {
        type: 'p',
        text: 'Hoje, sua empresa convive com PIS, Cofins, IPI, ICMS e ISS, cada um com regras, alíquotas e obrigações próprias. A reforma troca esses cinco tributos por um **IVA dual**, dividido em dois:',
      },
      {
        type: 'ul',
        items: [
          '**CBS (Contribuição sobre Bens e Serviços):** federal, substitui PIS, Cofins e IPI.',
          '**IBS (Imposto sobre Bens e Serviços):** de estados e municípios, substitui ICMS e ISS.',
          '**Imposto Seletivo:** incide sobre produtos prejudiciais à saúde ou ao meio ambiente, como cigarros e bebidas alcoólicas.',
        ],
      },
      {
        type: 'p',
        text: 'A lógica do novo modelo é a **não cumulatividade plena**: o imposto pago na compra de bens e serviços usados na atividade da empresa vira crédito para abater o imposto devido na venda. Além disso, a cobrança passa a ser feita no destino, ou seja, no local onde o produto ou serviço é consumido.',
      },
      { type: 'h2', text: 'O cronograma da transição' },
      { type: 'p', text: 'A mudança acontece aos poucos. Estas são as datas que importam:' },
      {
        type: 'timeline',
        items: [
          {
            label: '2026',
            text: 'Ano de teste. CBS (0,9%) e IBS (0,1%) passam a aparecer nas notas fiscais, com valores compensáveis com PIS e Cofins. O objetivo é adaptar sistemas e emissão de notas.',
          },
          { label: '2027', text: 'A CBS entra em vigor de verdade e PIS e Cofins deixam de existir. O IPI é zerado para a maioria dos produtos e o Imposto Seletivo começa a ser cobrado.' },
          { label: '2029 a 2032', text: 'ICMS e ISS são reduzidos gradualmente, enquanto o IBS aumenta na mesma proporção.' },
          { label: '2033', text: 'ICMS e ISS são extintos e o novo modelo passa a funcionar por completo.' },
        ],
      },
      { type: 'h2', text: 'Quem tende a sentir mais o impacto' },
      {
        type: 'p',
        text: 'O efeito da reforma não é igual para todos. Empresas que compram muitos insumos tendem a se beneficiar do crédito amplo. Já negócios com poucos insumos para gerar crédito, como boa parte dos **prestadores de serviço**, podem ver a carga aumentar, já que hoje muitos pagam ISS e PIS/Cofins em alíquotas menores do que as previstas para o novo IVA.',
      },
      {
        type: 'p',
        text: 'A lei prevê reduções para alguns setores, como redução de 60% da alíquota para saúde e educação e de 30% para profissões regulamentadas. Ainda assim, cada caso precisa ser simulado com os números reais da empresa.',
      },
      { type: 'h2', text: 'E quem está no Simples Nacional?' },
      {
        type: 'p',
        text: 'O Simples Nacional continua existindo, e a empresa pode seguir recolhendo tudo no DAS. Mas há um ponto de atenção para quem vende para outras empresas: o crédito que o cliente aproveita na compra de uma empresa do Simples é limitado ao valor recolhido dentro do regime, o que pode tornar a sua empresa menos competitiva do que um fornecedor fora dele.',
      },
      {
        type: 'p',
        text: 'Por isso, a lei permite que empresas do Simples optem por recolher IBS e CBS pelo regime regular, fora do DAS. Essa escolha pode valer a pena para algumas empresas e ser um erro caro para outras. É exatamente o tipo de decisão que deve ser tomada com uma simulação, não no escuro.',
      },
      {
        type: 'quote',
        text: 'A reforma não é só uma troca de siglas. Ela muda preços, margens e a forma de escolher fornecedores. Quem se planejar antes sai na frente.',
      },
      { type: 'h2', text: '5 passos para preparar sua empresa agora' },
      {
        type: 'steps',
        items: [
          { title: 'Revise seu sistema de emissão de notas', text: 'As notas fiscais ganharam campos para IBS e CBS. Confirme com seu fornecedor de sistema se ele já está adaptado.' },
          { title: 'Simule a carga tributária no novo modelo', text: 'Compare o que sua empresa paga hoje com o que pagará a partir de 2027, considerando os créditos que poderá aproveitar.' },
          { title: 'Reavalie o regime tributário', text: 'Simples Nacional, Lucro Presumido ou Lucro Real: o regime mais vantajoso hoje pode não ser o melhor depois da reforma.' },
          { title: 'Mapeie seus fornecedores', text: 'Com o crédito amplo, comprar de fornecedores que geram crédito passa a influenciar o custo real de cada compra.' },
          { title: 'Revise preços e contratos longos', text: 'Contratos que atravessam a transição precisam prever como os novos tributos serão tratados no preço.' },
        ],
      },
      { type: 'h2', text: 'Conclusão' },
      {
        type: 'p',
        text: 'A Reforma Tributária vai simplificar o sistema no longo prazo, mas a transição exige atenção, principalmente em 2027, quando a CBS substitui PIS e Cofins. Empresas que simularem o impacto e ajustarem regime, preços e fornecedores com antecedência vão atravessar a mudança com muito mais segurança.',
      },
    ],
  },
  {
    id: '1',
    title: 'BPO Financeiro: Como a terceirização pode salvar 20h do seu mês e aumentar seu lucro',
    seoTitle: 'BPO Financeiro: como a terceirização economiza 20h do seu mês | Ethan Group',
    description:
      'Descubra por que empreendedores estão terceirizando o financeiro para focar no crescimento do negócio e como o BPO Financeiro funciona na prática.',
    excerpt: 'Descubra por que empreendedores de sucesso estão parando de fazer o próprio financeiro para focar na escala do negócio.',
    category: 'Gestão Financeira',
    date: '2026-05-14',
    readTime: 5,
    cover: '/capas/bpo.webp',
    cta: {
      title: 'Quer tirar o financeiro das suas costas?',
      text: 'Conheça o BPO Financeiro da Ethan e receba um diagnóstico gratuito da sua rotina.',
      message: 'Olá! Quero saber mais sobre o BPO Financeiro da Ethan.',
    },
    body: [
      {
        type: 'p',
        text: 'Muitos CEOs perdem tempo precioso conciliando extratos e agendando pagamentos, tarefas que não geram receita direta para o negócio. É aqui que o BPO (Business Process Outsourcing) Financeiro entra como um divisor de águas.',
      },
      { type: 'h2', text: 'A vantagem competitiva da terceirização' },
      {
        type: 'p',
        // O original dizia "Na Ethan Tecnologia"; padronizado para a marca do site.
        text: 'Ter uma equipe de especialistas gerindo seu contas a pagar, receber e fluxo de caixa elimina erros humanos e multas por atraso. Na Ethan, utilizamos automação para que seu financeiro rode no piloto automático.',
      },
      { type: 'quote', text: 'Não é apenas pagar contas, é entender para onde cada centavo da sua empresa está indo para poder reinvestir com segurança.' },
      {
        type: 'p',
        text: 'Com relatórios mensais como DRE e EBITDA, você deixa de decidir por intuição e passa a decidir por dados reais, permitindo uma escala muito mais agressiva e segura do seu negócio.',
      },
    ],
  },
  {
    id: '2',
    title: 'Elisão Fiscal: O caminho legal para reduzir seus impostos em até 30%',
    seoTitle: 'Elisão Fiscal: como reduzir impostos legalmente | Ethan Group',
    description:
      'Entenda a diferença entre elisão e evasão fiscal e como o planejamento tributário reduz a carga de impostos da sua empresa dentro da lei.',
    excerpt: 'Entenda a diferença entre pagar impostos e jogar dinheiro fora. O planejamento tributário é o maior aliado do seu caixa.',
    category: 'Estratégia Tributária',
    date: '2026-05-12',
    readTime: 7,
    cover: '/capas/elisao.webp',
    cta: {
      title: 'Sua empresa está pagando imposto demais?',
      text: 'Fazemos uma revisão tributária gratuita e mostramos, com números, onde dá para economizar dentro da lei.',
      message: 'Olá! Quero uma revisão tributária da minha empresa.',
    },
    body: [
      {
        type: 'p',
        text: 'No Brasil, pagar impostos é uma certeza, mas pagar mais do que o necessário é uma escolha muitas vezes feita por falta de planejamento. A elisão fiscal é o conjunto de estratégias permitidas por lei para reduzir a carga tributária.',
      },
      { type: 'h2', text: 'Diferença entre Elisão e Evasão' },
      {
        type: 'p',
        text: 'Enquanto a evasão é a sonegação ilegal, a elisão utiliza o conhecimento profundo da legislação para escolher regimes (Simples, Presumido ou Real) e benefícios específicos que favorecem o caixa da empresa.',
      },
      {
        type: 'p',
        text: 'Uma revisão tributária bem executada pela Ethan Group pode recuperar créditos de impostos pagos indevidamente nos últimos 5 anos, injetando capital imediato no seu fluxo de caixa sem a necessidade de novos empréstimos.',
      },
    ],
  },
]

export const findPost = (id) => posts.find((p) => p.id === id)

/** "2026-10-05" → "05 out. 2026". */
export function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ de /g, ' ')
}
