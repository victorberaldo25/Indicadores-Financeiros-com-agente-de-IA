/**
 * AgroTech Bioenergia S.A. | VB Systems - RPA & Analytics
 * Mock Data Realista: P2P, Política de Pagamentos (>30 dias) e Indicadores TOTVS Protheus
 */
window.DEMO_MODE = true;

window.MOCK_P2P_DATA = {
  empresa: "AgroTech Bioenergia S.A.",
  unidades: [
    { id: "01", nome: "Unidade Polo Litoral - ES", pedidos: 42, volume_brl: 4850000.00, sla_cumprido: 94.2 },
    { id: "02", nome: "Unidade Polo Interior - SP", pedidos: 58, volume_brl: 7120000.00, sla_cumprido: 91.8 },
    { id: "03", nome: "Unidade Corporativa - São Paulo - SP", pedidos: 24, volume_brl: 2340000.00, sla_cumprido: 97.5 }
  ],
  kpis: {
    total_pago_mes: 14310000.00,
    dentro_politica_pct: 93.4,
    fora_politica_pct: 6.6,
    prazo_medio_dias: 38.4,
    pedidos_auditados: 124,
    saving_negociado_brl: 890450.00
  },
  fornecedores: [
    { cnpj: "01.234.567/0001-89", razao: "AgroQuímica do Brasil S.A.", categoria: "Insumos Agrícolas", prazo_padrao: 45, dentro_politica: true, valor_acumulado: 3450000.00 },
    { cnpj: "12.345.678/0001-90", razao: "Metalúrgica Vale Verde Ltda", categoria: "Peças Industriais", prazo_padrao: 35, dentro_politica: true, valor_acumulado: 1890000.00 },
    { cnpj: "23.456.789/0001-01", razao: "Tratores & Máquinas AgroTech", categoria: "Manutenção Florestal", prazo_padrao: 42, dentro_politica: true, valor_acumulado: 2780000.00 },
    { cnpj: "34.567.890/0001-00", razao: "Distribuidora Industrial Alfa S.A.", categoria: "Óleos & Lubrificantes", prazo_padrao: 28, dentro_politica: false, valor_acumulado: 410000.00 },
    { cnpj: "45.678.901/0001-23", razao: "TechSolutions Sistemas & TI Ltda", categoria: "Tecnologia / Hardware", prazo_padrao: 30, dentro_politica: true, valor_acumulado: 620000.00 },
    { cnpj: "56.789.012/0001-34", razao: "Equipamentos de Proteção Delta Ltda", categoria: "Segurança / EPIs", prazo_padrao: 35, dentro_politica: true, valor_acumulado: 310000.00 }
  ],
  pedidos_recentes: [
    { numero_pc: "049102", filial: "Polo Litoral - ES", fornecedor: "AgroQuímica do Brasil S.A.", valor: 145000.00, cond_pagto: "45 DDL", status: "Liberado", lead_time_dias: 14, aprovador: "Gerência Industrial" },
    { numero_pc: "049103", filial: "Polo Interior - SP", fornecedor: "Metalúrgica Vale Verde Ltda", valor: 89400.00, cond_pagto: "35 DDL", status: "Em Cotação", lead_time_dias: 6, aprovador: "Supervisão Compras" },
    { numero_pc: "049104", filial: "Polo Interior - SP", fornecedor: "Tratores & Máquinas AgroTech", valor: 312000.00, cond_pagto: "42 DDL", status: "Em Aprovação", lead_time_dias: 18, aprovador: "Diretoria Operacional" },
    { numero_pc: "049105", filial: "Polo Litoral - ES", fornecedor: "Distribuidora Industrial Alfa S.A.", valor: 28500.00, cond_pagto: "28 DDL", status: "Exceção Política", lead_time_dias: 4, aprovador: "CFO / Controladoria" },
    { numero_pc: "049106", filial: "São Paulo - SP", fornecedor: "TechSolutions Sistemas & TI Ltda", valor: 74200.00, cond_pagto: "30 DDL", status: "Atendido", lead_time_dias: 9, aprovador: "Gerência TI" }
  ],
  fluxo_caixa_semanal: [
    { semana: "Semana 1", entradas: 3800000, saidas: 2950000, saldo: 850000 },
    { semana: "Semana 2", entradas: 4200000, saidas: 3400000, saldo: 800000 },
    { semana: "Semana 3", entradas: 3900000, saidas: 3100000, saldo: 800000 },
    { semana: "Semana 4", entradas: 4500000, saidas: 3650000, saldo: 850000 }
  ]
};
