# MEMORY.md — Indicadores-Financeiros-com-agente-de-IA

## Status atual (2026-11-08)
- 2026-11-08: `RAW_DATA` (300 registros reais extraídos do ERP) substituído por base sintética; clientes/fornecedores reais (Bracell, Greenplac, Suzano, Lwart, Santander, Komatsu, John Deere, Tracbel), CNPJs, contas bancárias, pessoa física e compradores trocados por fictícios.

## Pendências / próximos passos
- Gerar `RAW_DATA` a partir de um script em vez de JSON colado no HTML.
- Separar JS do `index.html`.

## Decisões
- Identidade fictícia única para o portfólio: **AgroTech Bioenergia S.A.** / VB Systems.
- Repositório reescrito em commit único limpo para não manter dados reais no histórico.

## Pegadinhas
- A chave do Gemini é digitada pelo usuário — nunca deixar valor padrão no código.
- O README promete anonimização: qualquer dado novo precisa ser sintético.
