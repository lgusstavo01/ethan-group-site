# Ethan Group — site novo

Releitura moderna e animada de https://www.ethangroup.com.br (out/2026) — todas as páginas,
com o mesmo conteúdo e a identidade oficial da Ethan (guia 2026-10-05: slate `#020617`,
ciano `#22D3EE`, Inter, logo em texto "ETHAN." com ponto ciano).

## Rodar

```bash
npm install
npm run dev      # http://localhost:3010
npm run build    # gera dist/
```

## Estrutura

- `src/config/site.js` — **todos** os contatos, links e números (WhatsApp, e-mail, endereço, Área do Cliente, páginas internas, estatísticas).
- `src/App.jsx` — tabela de rotas (mesmos caminhos do site atual: `/contabilidade`, `/financeiro`, `/tecnologia`, `/sobre`, `/blog`, `/blog/<id>`, `/contato`, 404) e troca de título/descrição por página.
- `src/lib/router.js` + `src/components/Link.jsx` — roteador mínimo (history API, sem biblioteca). `vercel.json` manda toda rota para o `index.html`.
- `src/pages/` — uma página por arquivo. `src/components/` — seções e blocos reaproveitáveis (`PageHero`, `SectionTitle`, `Faq`, `Process`, `ContactForm`, `CtaBanner`, `PostCard`).
- `src/data/posts.js` — artigos do blog em blocos (p, h2, ul, quote, timeline, steps; `**negrito**`). Artigo novo = objeto novo aqui + capa em `public/capas/`.
- `src/lib/scroll.js` — Lenis + um único loop de `requestAnimationFrame` (mesmo motor do projeto `txt`). As animações presas ao scroll escrevem direto no DOM, sem re-render.
- `src/hooks/` — `useReveals` (entrada com blur/fade), `useSpotlight` (holofote que segue o mouse nos cards), `useReducedMotion`.

## Animações

Hero com palavras subindo uma a uma, manchas de luz que se movem e seguem o mouse, painel
ilustrativo que inclina com o mouse; faixa rolante; contadores; foto do Sobre em parallax;
serviços em cards que empilham (só desktop); linha do tempo que acende ao rolar; FAQ com
altura animada; bordas com feixe de luz girando. Tudo desliga com `prefers-reduced-motion`.

## Decisões

- O logo antigo (azul, "Soluções empresariais") que o site atual usa no Sobre **não** entrou: é a identidade abandonada.
- O formulário de contato abre o WhatsApp já preenchido (sem servidor).
- Formulários (inicial, Tecnologia e Contato) abrem o WhatsApp já preenchido.
- Capas do blog: as mesmas fotos do Unsplash do site atual, baixadas em WebP.
- Números de painéis/guias nas ilustrações são fictícios.
