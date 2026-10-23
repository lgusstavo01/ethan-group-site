# Ethan Group — site novo (página inicial)

Releitura moderna e animada da página inicial de https://www.ethangroup.com.br (out/2026),
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
- `src/components/` — uma seção por arquivo; `App.jsx` só empilha.
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
- As páginas internas (`/contabilidade`, `/financeiro`, `/tecnologia`, `/sobre`, `/blog`) continuam as do site atual; aqui só a inicial.
- Números de painéis/guias nas ilustrações são fictícios.
