
export interface Depoimento  {
    id: string;
    nome: string;
    curso: string;
    turma: string;
    texto: string;
    avatarLetra: string;
}
export interface FaqItem  {
    id: string;
    pergunta: string;
    resposta: string;
}
export interface Modalidade {
    id: string;
    indice: string;          // "·01"
    destaqueTag?: string;    // "mais escolhido" (opcional, só o card featured tem)
    tituloPrefixo: string;   // "Graduação"
    tituloEnfase: string;    // "EAD 100% online"
    descricao: string;
    detalhes: { label: string; valor: string }[];
    ctaTexto: string;
    ctaHref: string;
    featured?: boolean;
}
export type ModalidadeCurso = "online" | "semi";
export interface Curso {
  id: string;
  titulo: string;
  modalidade: ModalidadeCurso;
  duracao: string;
  link: string;
  /** Ícone do curso (public/cursos/*.png) — usado como imagem de fundo do card */
  imagem: string;
  /** Cor da marca do curso (hex) */
  cor: string;
}
export interface AreaPosGraduacao {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  courses: string;
  description: string;
  whatsappUrl: string;
}
export interface Gallery {
    id: string
    imageUrl: string
}
export interface Faq {
  id: string;
  pergunta: string;
  resposta: string;
  aberto?: boolean;
}
export interface Diff {
  id: number;
  numero: string;
  titulo: string;
  descricao: string;
}

/** Um semestre (etapa) da matriz curricular do guia de percurso */
export interface SemestreGuia {
  etapa: number;
  disciplinas: string[];
}

/** Resumo do Guia de Percurso 2027 de um curso (usado no modal do curso) */
export interface GuiaCurso {
  /** Texto curto de apresentação do curso */
  resumo: string;
  /** Áreas / lugares de atuação (tags curtas) */
  atuacao: string[];
  semestres: SemestreGuia[];
  totalSemestres: number;
  totalDisciplinas: number;
  /** Horas de projetos de extensão (0 = não consta) */
  extensaoHoras: number;
  /** Horas de estágio supervisionado obrigatório (0 = não consta) */
  estagioHoras: number;
  /** Horas de atividades complementares (ACO) */
  acoHoras: number;
  tcc: boolean;
  /** O guia prevê encontros síncronos (ao vivo) mediados */
  sincrono: boolean;
  /** O guia cita a opção EaD+ (1 encontro presencial por semana no polo) */
  eadPlus: boolean;
}
