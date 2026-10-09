# Atividade 2 — Etapa 1: design system

Implementação em `css/style.css`, compartilhada por `index.html`, `projetos.html` e `cadastro.html`. O HTML, as imagens e o JavaScript do cadastro foram preservados.

## Variáveis implementadas

- **15 cores:** `--color-text` (#17304b), `--color-background` (#f5f8fb), `--color-surface` (#ffffff), `--color-primary` (#075087), `--color-heading` (#073d6d), `--color-link` (#086c9f), `--color-accent` (#149c71), `--color-button` (#087451), `--color-button-hover` (#065b40), `--color-border` (#c7d9e5), `--color-input-border` (#8ea9b9), `--color-focus` (#8bd7ed), `--color-footer` (#102e43), `--color-hero-start` (#063e67) e `--color-hero-end` (#087451). Todas são utilizadas nas regras do CSS.
- **Cinco níveis tipográficos**, razão 1,25: `--font-size-1` (0.8rem, rodapé), `--font-size-2` (1rem, corpo e campos), `--font-size-3` (1.25rem, h3 e legendas), `--font-size-4` (1.5625rem, h2) e `--font-size-5` (1.953125rem, h1). Fonte: `--font-family`; entrelinhas: `--line-height-body` (1.6) e `--line-height-heading` (1.25).
- **Espaçamentos modulares**, base 0.25rem: `--space-1`, `--space-2`, `--space-3`, `--space-4`, `--space-5`, `--space-6`, `--space-8`, `--space-9`, `--space-12` e `--space-16`. Correspondem a 4, 8, 12, 16, 20, 24, 32, 36, 48 e 64px com raiz de 16px. Todos são aplicados a padding, margin e gap.
- **Layout:** `--grid-columns` (12), `--grid-gap` (espaçamento entre colunas), `--container-width` (65.625rem) e `--form-width` (47.5rem).
- **Cantos:** `--radius-small` (0.375rem), `--radius-medium` (0.625rem) e `--radius-large` (0.75rem).

## Grid, Flexbox e responsividade

`main.wrap` e `.cards` usam CSS Grid com 12 colunas e `minmax(0, 1fr)`. Os blocos principais ocupam as 12 colunas. Os cards ocupam 12 colunas inicialmente e 6 a partir de 600px. Flexbox organiza cabeçalho, navegação, botões, conteúdo dos cards e formulário.

Cinco breakpoints mobile-first, definidos explicitamente em pixels:

- **480px:** navegação com gap de 24px e preenchimento de seções e fieldsets de 32px.
- **600px:** cards passam de 12 para 6 colunas; destaque inicial com padding de 64px na vertical e 36px na horizontal.
- **900px:** cabeçalho sem quebra de linha e gap dos cards de 24px.
- **1200px:** gap do conteúdo principal de 32px.
- **1440px:** largura máxima do contêiner passa de 1050 para 1200px, gap principal de 36px e padding horizontal do destaque de 48px.

Os valores de espaçamento e contêiner acima consideram a fonte raiz padrão de 16px. O layout base atende às telas abaixo de 480px e as regras se acumulam conforme a largura aumenta. As condições das media queries usam valores literais, pois variáveis CSS não são suportadas nessas condições.

## Texto para o formulário acadêmico

Atualizei o CSS compartilhado das três páginas com um design system em :root: 15 variáveis de cores aplicadas à interface, cinco níveis tipográficos em escala de razão 1,25 e espaçamentos em múltiplos de 0,25rem. Implementei CSS Grid de 12 colunas no conteúdo principal e nos projetos, com cards de 12 colunas em telas pequenas e 6 a partir de 600px. Utilizei Flexbox no cabeçalho, navegação, botões, cards e formulário. Adicionei cinco breakpoints de 480, 600, 900, 1200 e 1440px, preservando o HTML e o JavaScript das páginas existentes.

## Verificação realizada

As três páginas foram carregadas no Chrome headless em 320, 375, 479, 480, 599, 600, 899, 900, 1199, 1200, 1439, 1440 e 1920px (39 combinações). Foram verificados os valores computados de espaçamento, preenchimento, largura do contêiner e quebra do cabeçalho antes e depois de cada breakpoint. Foram confirmadas 12 colunas no conteúdo principal, cards com spans 12/6 conforme a largura, carregamento das imagens, cinco tamanhos tipográficos computados e ausência de transbordamento horizontal. Também foram confirmadas as máscaras de CPF, telefone e CEP e a mensagem de sucesso do envio demonstrativo. `git diff --check` passou. Esta verificação não substitui a validação formal no W3C.
