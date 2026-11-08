# CONTEXT.md — Indicadores-Financeiros-com-agente-de-IA

## Produto
Portal de indicadores financeiros e auditoria P2P (prazo de pagamento, SLA de pré-nota/escrituração, contas a receber, fluxo de caixa) com copiloto de IA (Gemini). Tudo roda no navegador.

## Estrutura
- `index.html` — SPA monolítica (~7 mil linhas): UI, gráficos, `RAW_DATA` sintético embutido, exemplos de JSON
- `mock_data.js` — dados sintéticos complementares
- `README.md`

## Tecnologias
HTML + JS vanilla, Tailwind (CDN), Chart.js, SheetJS, API Gemini (chave informada pelo usuário na tela).
