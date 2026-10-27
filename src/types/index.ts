
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