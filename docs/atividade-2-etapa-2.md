# Atividade 2 — Etapa 2: componentes e interatividade

## Implementação

- **Menu principal:** botão hambúrguer abaixo de 900px, `aria-controls` e `aria-expanded`, abertura/fechamento por clique ou teclado, fechamento com Escape e clique fora. A partir de 900px, links em linha. Página atual indicada por `aria-current="page"`. Link para saltar ao conteúdo.
- **Dropdown Participar:** `details`/`summary` nativos, com links para Voluntariado, Doações e Cadastro. Painel animado, posicionado abaixo do acionador no desktop. Sem JavaScript, a navegação e o dropdown continuam disponíveis.
- **Cards:** mantêm Grid de 12/6 colunas e Flexbox interno. Estados `:hover` e `:focus-within` adicionam borda e sombra. Botões Saiba mais possuem nomes acessíveis específicos para cada projeto.
- **Botões:** estados `:hover`, `:focus-visible`, `:active` e `:disabled`; altura mínima de 44px; variante secundária para fechar modais. O estado disabled foi verificado aplicando o atributo durante o teste; não existe envio remoto ou carregamento simulado.
- **Formulário:** mantém campos, restrições HTML e máscaras. O JavaScript utiliza `ValidityState`, valida no blur e após tentativa de envio, aplica `aria-invalid` e relaciona erros por `aria-describedby`. Campos tocados utilizam `:invalid` e `:valid`. A tentativa inválida apresenta resumo e leva foco ao primeiro campo incorreto. Sem JavaScript, permanece a validação nativa HTML.
- **Alertas:** erro com `role="alert"`, sucesso com `role="status"` e `aria-live="polite"`. Ambos têm botão de fechamento. Ao editar os dados, avisos anteriores são ocultados. O sucesso informa expressamente que nenhum dado foi enviado ou armazenado.
- **Modais:** dois elementos `dialog`, nomeados por `aria-labelledby`, abertos com `showModal()`. Foco inicial em Fechar, fechamento por botão ou Escape e retorno ao acionador. O navegador administra o foco e torna o restante da página inerte enquanto o modal está aberto.
- **Animações:** abertura suave de menus e modais e transições nos cards e botões; desativadas com `prefers-reduced-motion: reduce`.

## Novas variáveis

`--color-error: #a32121`, `--color-error-surface: #fff1f1`, `--color-success-surface: #eaf7ef` e `--shadow-component: 0 6px 20px #102e431f`. Somadas às 15 variáveis de cores anteriores, existem agora 18 variáveis de cores e uma de sombra. O backdrop do modal utiliza `#102e43b3`.

## Verificação

As três páginas foram testadas em 13 larguras entre 320 e 1920px (39 combinações), com menus e dropdowns abertos, sem transbordamento horizontal e mantendo 12 colunas. Foram verificados: menu móvel/desktop, Escape, dois modais por teclado e botão, foco inicial e retorno, campos inválidos/válidos, mensagens associadas, máscaras, sucesso e fechamento dos alertas, estado disabled e movimento reduzido. Navegação e dropdown foram verificados com JavaScript desativado. Não ocorreram erros JavaScript. A sintaxe dos scripts e `git diff --check` passaram. Não foi realizada certificação de acessibilidade nem validação formal W3C nesta etapa.

## Texto para o formulário acadêmico

Implementei menu responsivo com botão hambúrguer abaixo de 900px e dropdown Participar em HTML semântico. Os controles funcionam por teclado e utilizam atributos de acessibilidade. Os cards possuem feedback visual de hover e foco e botões que abrem modais informativos. Os botões apresentam estados hover, foco, ativo e desabilitado. O formulário combina restrições HTML, máscaras, mensagens por campo, aria-invalid, aria-describedby e estilos de valid/invalid após interação. Alertas contextuais apresentam erros e confirmação demonstrativa. Os modais utilizam dialog e showModal, com fechamento por Escape ou botão e retorno do foco. As animações respeitam a preferência por movimento reduzido. As funcionalidades foram verificadas nas três páginas, preservando o caráter demonstrativo do cadastro.

## Evidências visuais e badges

Os cards agora incluem etiquetas textuais Educação e Apoio comunitário. `.badge` usa inline-flex, fonte de 0.8rem, peso 700, padding modular, borda e cantos arredondados. As variantes `.badge-education` e `.badge-community` reutilizam as variáveis de azul e verde e seus fundos claros. As categorias são comunicadas por texto, além da cor. Não foi implementado toast: a evidência da atividade utiliza os modais existentes.

Capturas PNG produzidas diretamente no navegador: cards com badges, alerta de erro com mensagens por campo, alerta de confirmação demonstrativa e modal informativo aberto. O formulário foi preenchido apenas com dados fictícios para gerar a captura de sucesso.
