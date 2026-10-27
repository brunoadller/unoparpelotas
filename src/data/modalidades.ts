import type { Modalidade } from "../types";

export const modalidades: Modalidade[] = [
  {
    id: "ead",
    indice: "·01",
    tituloPrefixo: "Graduação",
    tituloEnfase: "EAD 100% online",
    descricao:
      "Aulas ao vivo, gravadas e material completo no app. Estude quando e onde quiser, com prova online.",
    detalhes: [
      { label: "Encontros", valor: "EAD" },
      { label: "Provas", valor: "Online" },
      { label: "Matrícula", valor: "Grátis" },
      { label: "1º pagamento", valor: "Próximo mês" },
    ],
    ctaTexto: "Ver cursos EAD →",
    ctaHref: "#cursos",
  },
  {
    id: "semipresencial",
    indice: "·02",
    destaqueTag: "mais escolhido",
    tituloPrefixo: "Graduação",
    tituloEnfase: "Semipresencial",
    descricao:
      "Um dia por semana no polo Pelotas + estudos online. O melhor do networking com a flexibilidade do digital.",
    detalhes: [
      { label: "Encontros", valor: "1 a 3x por semana" },
      { label: "Provas", valor: "Presenciais" },
      { label: "Matrícula", valor: "Grátis" },
      { label: "1º pagamento", valor: "Próximo mês" },
    ],
    ctaTexto: "Ver cursos semi →",
    ctaHref: "#cursos",
    featured: true,
  },
  {
    id: "pos-graduacao",
    indice: "·03",
    tituloPrefixo: "Pós-",
    tituloEnfase: "graduação EAD",
    descricao:
      "+700 especializações e MBAs para acelerar sua carreira. Certificação rápida, com professores do mercado.",
    detalhes: [
      { label: "Duração", valor: "4, 6, 10 ou 12 meses" },
      { label: "Formato", valor: "EAD" },
      { label: "Matrícula", valor: "Grátis" },
      { label: "1º pagamento", valor: "Próximo mês" },
    ],
    ctaTexto: "Ver especializações →",
    ctaHref: "#cursos",
  },
];