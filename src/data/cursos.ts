import type { Curso } from "../types";

// Ano/semestre de ingresso — altere aqui para atualizar o site inteiro.
export const INGRESSO = "2027.1";
export const INGRESSO_BARRA = "2027/1";

export const WHATSAPP_NUMERO = "555330283591";

export const whatsappLink = (mensagem: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

const linkCurso = (curso: string) =>
  whatsappLink(`Olá! Quero informações sobre o curso de ${curso} no polo Unopar Pelotas.`);

type CursoBase = Omit<Curso, "link">;

// Lista oficial de graduação — Unopar Pelotas (matrículas 2027.1).
// "imagem" é o ícone do curso (public/cursos) e "cor" é a cor da marca do card.
const base: CursoBase[] = [
  { id: "administracao", titulo: "Administração", modalidade: "online", duracao: "4 anos", imagem: "/cursos/administracao.png", cor: "#116fd5" },
  { id: "agronomia", titulo: "Agronomia", modalidade: "semi", duracao: "5 anos", imagem: "/cursos/agronomia.png", cor: "#268f3b" },
  { id: "analise-e-desenvolvimento-de-sistemas", titulo: "Análise e Desenvolvimento de Sistemas", modalidade: "online", duracao: "2,5 anos", imagem: "/cursos/analise-e-desenvolvimento-de-sistemas.png", cor: "#014bb8" },
  { id: "banco-de-dados", titulo: "Banco de Dados", modalidade: "online", duracao: "3 anos", imagem: "/cursos/banco-de-dados.png", cor: "#0161dd" },
  { id: "biomedicina", titulo: "Biomedicina", modalidade: "semi", duracao: "4 anos", imagem: "/cursos/biomedicina.png", cor: "#027a84" },
  { id: "ciencias-contabeis", titulo: "Ciências Contábeis", modalidade: "online", duracao: "4 anos", imagem: "/cursos/ciencias-contabeis.png", cor: "#023e91" },
  { id: "ciencias-economicas", titulo: "Ciências Econômicas", modalidade: "online", duracao: "4 anos", imagem: "/cursos/ciencias-economicas.png", cor: "#e86e02" },
  { id: "ciencia-da-computacao", titulo: "Ciência da Computação", modalidade: "online", duracao: "4 anos", imagem: "/cursos/arquitetura-dados-png.png", cor: "#0149aa" },
  { id: "comercio-exterior", titulo: "Comércio Exterior", modalidade: "online", duracao: "2 anos", imagem: "/cursos/comercio-exterior.png", cor: "#1b7de5" },
  { id: "devops", titulo: "DevOps", modalidade: "online", duracao: "2 anos", imagem: "/cursos/devops.png", cor: "#0147a3" },

  { id: "desenvolvimento-mobile", titulo: "Desenvolvimento Mobile", modalidade: "online", duracao: "2 anos", imagem: "/cursos/desenvolvimento-mobile.png", cor: "#018396" },
  { id: "engenharia-de-software", titulo: "Engenharia de Software", modalidade: "online", duracao: "4 anos", imagem: "/cursos/engenharia-de-software.png", cor: "#0d3c80" },
  { id: "educacao-fisica-bacharelado", titulo: "Educação Física — Bacharelado", modalidade: "semi", duracao: "4 anos", imagem: "/cursos/educacao-fisica-bacharelado.png", cor: "#108461" },
  { id: "educacao-fisica-licenciatura", titulo: "Educação Física — Licenciatura", modalidade: "semi", duracao: "4 anos", imagem: "/cursos/educacao-fisica-licenciatura.png", cor: "#028ead" },
  { id: "fisioterapia", titulo: "Fisioterapia", modalidade: "semi", duracao: "5 anos", imagem: "/cursos/fisioterapia.png", cor: "#02998e" },
  { id: "fonoaudiologia", titulo: "Fonoaudiologia", modalidade: "semi", duracao: "4 anos", imagem: "/cursos/fonoaudiologia.png", cor: "#ee3f90" },
  { id: "gestao-comercial", titulo: "Gestão Comercial", modalidade: "online", duracao: "2 anos", imagem: "/cursos/gestao-comercial.png", cor: "#0173c6" },
  { id: "gestao-da-tecnologia-da-informacao", titulo: "Gestão da Tecnologia da Informação", modalidade: "online", duracao: "2 anos e meio", imagem: "/cursos/gestao-da-tecnologia-da-informacao.png", cor: "#023e8e" },
  { id: "gestao-de-cooperativas", titulo: "Gestão de Cooperativas", modalidade: "online", duracao: "2 anos", imagem: "/cursos/gestao-de-cooperativas.png", cor: "#278838" },
  { id: "gestao-de-produto", titulo: "Gestão de Produto", modalidade: "online", duracao: "2 anos", imagem: "/cursos/gestao-de-produto.png", cor: "#6a2dcb" },
  { id: "gestao-de-recursos-humanos", titulo: "Gestão de Recursos Humanos", modalidade: "online", duracao: "2 anos", imagem: "/cursos/gestao-de-recursos-humanos.png", cor: "#015dd8" },
  { id: "gestao-financeira", titulo: "Gestão Financeira", modalidade: "online", duracao: "2 anos", imagem: "/cursos/gestao-financeira.png", cor: "#eb6b05" },
  { id: "gestao-portuaria", titulo: "Gestão Portuária", modalidade: "online", duracao: "3 anos", imagem: "/cursos/gestao-portuaria.png", cor: "#02879b" },
  { id: "gestao-publica", titulo: "Gestão Pública", modalidade: "online", duracao: "2 anos", imagem: "/cursos/gestao-publica.png", cor: "#014aac" },
  { id: "inteligencia-artificial-e-ciencia-de-dados-bacharelado", titulo: "Inteligência Artificial e Ciência de Dados — Bacharelado", modalidade: "online", duracao: "4 anos", imagem: "/cursos/inteligencia-artificial-e-ciencia-de-dados-bacharelado.png", cor: "#7022b7" },
  { id: "jogos-digitais", titulo: "Jogos Digitais", modalidade: "online", duracao: "2 anos e meio", imagem: "/cursos/jogos-digitais.png", cor: "#682cc6" },
  { id: "jornalismo", titulo: "Jornalismo", modalidade: "online", duracao: "4 anos", imagem: "/cursos/jornalismo.png", cor: "#e23339" },
  { id: "logistica", titulo: "Logística", modalidade: "online", duracao: "2 anos", imagem: "/cursos/logistica.png", cor: "#106cd4" },
  { id: "marketing", titulo: "Marketing", modalidade: "online", duracao: "2 anos", imagem: "/cursos/marketing.png", cor: "#e73e85" },
  { id: "negocios-imobiliarios", titulo: "Negócios Imobiliários", modalidade: "online", duracao: "2 anos", imagem: "/cursos/negocios-imobiliarios.png", cor: "#e96a06" },
  { id: "nutricao", titulo: "Nutrição", modalidade: "semi", duracao: "4 anos", imagem: "/cursos/nutricao.png", cor: "#258c39" },
  { id: "pedagogia", titulo: "Pedagogia", modalidade: "semi", duracao: "4 anos", imagem: "/cursos/pedagogia.png", cor: "#db4494" },
  { id: "processos-gerenciais", titulo: "Processos Gerenciais", modalidade: "online", duracao: "2 anos", imagem: "/cursos/processos-gerenciais.png", cor: "#015fdc" },
  { id: "publicidade-e-propaganda", titulo: "Publicidade e Propaganda", modalidade: "online", duracao: "4 anos", imagem: "/cursos/publicidade-e-propaganda.png", cor: "#652eb8" },
  { id: "relacoes-internacionais", titulo: "Relações Internacionais", modalidade: "online", duracao: "4 anos", imagem: "/cursos/relacoes-internacionais.png", cor: "#02899d" },
  { id: "sistemas-para-internet", titulo: "Sistemas para Internet", modalidade: "online", duracao: "2 anos e meio", imagem: "/cursos/sistemas-para-internet.png", cor: "#0149aa" },
  { id: "sistemas-da-informação", titulo: "Sistemas da Informação", modalidade: "online", duracao: "4 anos", imagem: "/cursos/sistemas-para-internet.png", cor: "#0149aa" },
  { id: "seguranca-privada", titulo: "Segurança Privada", modalidade: "online", duracao: "2 anos", imagem: "/cursos/seguranca-privada.png", cor: "#063d89" },
  { id: "seguranca-publica", titulo: "Segurança Pública", modalidade: "online", duracao: "2 anos", imagem: "/cursos/seguranca-publica.png", cor: "#268439" },
  { id: "secretariado", titulo: "Secretariado", modalidade: "online", duracao: "2 anos", imagem: "/cursos/secretariado.png", cor: "#6327c1" },
  { id: "servico-social", titulo: "Serviço Social", modalidade: "semi", duracao: "4 anos", imagem: "/cursos/servico-social.png", cor: "#eb4579" },
  { id: "servicos-juridicos-cartorarios-e-notariais", titulo: "Serviços Jurídicos, Cartorários e Notariais", modalidade: "online", duracao: "2 anos", imagem: "/cursos/servicos-juridicos-cartorarios-e-notariais.png", cor: "#0e63c9" },
  { id: "teologia", titulo: "Teologia", modalidade: "online", duracao: "4 anos", imagem: "/cursos/teologia.png", cor: "#442d81" },
  { id: "terapia-ocupacional", titulo: "Terapia Ocupacional", modalidade: "semi", duracao: "4 anos", imagem: "/cursos/terapia-ocupacional.png", cor: "#02949a" },
];

export const cursos: Curso[] = base.map((curso) => ({
  ...curso,
  link: linkCurso(curso.titulo),
}));
//{ id: "farmacia", titulo: "Farmácia", modalidade: "semi", duracao: "5 anos", imagem: "/cursos/farmacia.png", cor: "#672fbb" },
//  { id: "desenvolvimento-back-end", titulo: "Desenvolvimento Back-End", modalidade: "online", duracao: "2 anos", imagem: "/cursos/desenvolvimento-back-end.png", cor: "#5c2ac0" },