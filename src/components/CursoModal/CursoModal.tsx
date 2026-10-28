import { useEffect, useId, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";
import type { Curso } from "../../types";
import { guias } from "../../data/guias";
import { INGRESSO } from "../../data/cursos";
import { WhatsappIcon } from "../Icons/icons";

type CursoModalProps = {
  curso: Curso;
  onClose: () => void;
};

const rotuloModalidade = {
  online: "100% online",
  semi: "Semipresencial",
} as const;

/* ---------- ícones (inline, sem dependências) ---------- */
const Svg = ({ children }: { children: ReactNode }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IcClose = () => (
  <Svg>
    <path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);
const IcLaptop = () => (
  <Svg>
    <rect x="4" y="5" width="16" height="11" rx="1.5" />
    <path d="M2 19h20" />
  </Svg>
);
const IcLive = () => (
  <Svg>
    <rect x="3" y="6" width="13" height="12" rx="2" />
    <path d="m16 10 5-3v10l-5-3" />
  </Svg>
);
const IcPin = () => (
  <Svg>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);
const IcPeople = () => (
  <Svg>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.5M18 20a5 5 0 0 0-2.5-4.3" />
  </Svg>
);
const IcBriefcase = () => (
  <Svg>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 13h18" />
  </Svg>
);
const IcCap = () => (
  <Svg>
    <path d="m2 9 10-5 10 5-10 5L2 9Z" />
    <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
  </Svg>
);
const IcStar = () => (
  <Svg>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
  </Svg>
);

/* ---------- blocos de layout ---------- */
const Rotulo = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-3 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-[var(--ink)]/60">
    {children}
  </h3>
);

type Passo = { icone: ReactNode; titulo: string; texto: string };

const FOCAVEIS =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const CursoModal = ({ curso, onClose }: CursoModalProps) => {
  const guia = guias[curso.id];
  const tituloId = useId();
  const painelRef = useRef<HTMLDivElement>(null);
  const fecharRef = useRef<HTMLButtonElement>(null);
  const [semestre, setSemestre] = useState(0);

  // Trava a rolagem da página, foca o modal e devolve o foco ao fechar
  useEffect(() => {
    const anterior = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    fecharRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      anterior?.focus?.();
    };
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key !== "Tab") return;
    // mantém o foco dentro do modal
    const itens = painelRef.current?.querySelectorAll<HTMLElement>(FOCAVEIS);
    if (!itens || itens.length === 0) return;
    const primeiro = itens[0];
    const ultimo = itens[itens.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) {
      e.preventDefault();
      ultimo.focus();
    } else if (!e.shiftKey && document.activeElement === ultimo) {
      e.preventDefault();
      primeiro.focus();
    }
  };

  const passos = useMemo<Passo[]>(() => {
    if (!guia) return [];
    const lista: Passo[] = [];
    if (curso.modalidade === "online") {
      lista.push({
        icone: <IcLaptop />,
        titulo: "Estude onde e quando quiser",
        texto:
          "Aulas e materiais no ambiente virtual (AVA), com apoio de mediadores e professores.",
      });
    } else {
      lista.push({
        icone: <IcLaptop />,
        titulo: "Conteúdo digital + prática no polo",
        texto:
          "Você estuda pelo AVA e realiza atividades presenciais no polo de apoio presencial.",
      });
    }
    if (guia.sincrono) {
      lista.push({
        icone: <IcLive />,
        titulo: "Encontros ao vivo",
        texto:
          "Encontros síncronos de 3 horas, práticos e interativos. Presença mínima de 75%.",
      });
    }
    if (curso.modalidade === "online") {
      lista.push({
        icone: <IcPin />,
        titulo: "Provas presenciais no polo",
        texto:
          "Você vai ao polo Pelotas em momentos estratégicos, como nas avaliações oficiais.",
      });
    }
    if (curso.modalidade === "online" && guia.eadPlus) {
      lista.push({
        icone: <IcPeople />,
        titulo: "Opção EaD+",
        texto:
          "Mesma flexibilidade do online, com 1 encontro presencial por semana no polo. Consulte a disponibilidade.",
      });
    }
    if (guia.extensaoHoras > 0) {
      lista.push({
        icone: <IcPeople />,
        titulo: `Projetos de extensão · ${guia.extensaoHoras} h`,
        texto:
          "Ações práticas voltadas à comunidade, realizadas presencialmente, com suporte de professores.",
      });
    }
    if (guia.estagioHoras > 0) {
      lista.push({
        icone: <IcBriefcase />,
        titulo: `Estágio supervisionado · ${guia.estagioHoras} h`,
        texto: "Parte obrigatória da formação, com orientação de profissional qualificado.",
      });
    }
    if (guia.tcc) {
      lista.push({
        icone: <IcCap />,
        titulo: "Trabalho de Conclusão de Curso",
        texto: "Projeto final para fechar a graduação aplicando o que você aprendeu.",
      });
    }
    if (guia.acoHoras > 0) {
      lista.push({
        icone: <IcStar />,
        titulo: `Atividades complementares · ${guia.acoHoras} h`,
        texto:
          "Palestras, cursos, monitoria e visitas técnicas — vá fazendo aos poucos, a cada semestre.",
      });
    }
    return lista;
  }, [guia, curso.modalidade]);

  const numeros = useMemo(() => {
    if (!guia) return [];
    const itens: { valor: string; rotulo: string }[] = [
      { valor: String(guia.totalDisciplinas), rotulo: "disciplinas" },
    ];
    if (guia.extensaoHoras > 0) itens.push({ valor: `${guia.extensaoHoras} h`, rotulo: "de extensão" });
    if (guia.estagioHoras > 0) itens.push({ valor: `${guia.estagioHoras} h`, rotulo: "de estágio" });
    if (guia.acoHoras > 0) itens.push({ valor: `${guia.acoHoras} h`, rotulo: "complementares" });
    return itens.slice(0, 4);
  }, [guia]);

  const vars = { "--cor": curso.cor, "--img": `url(${curso.imagem})` } as CSSProperties;
  const atual = guia?.semestres[semestre];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#00123a]/70 backdrop-blur-[3px] animate-fade-in sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={onKeyDown}
    >
      <div
        ref={painelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        style={vars}
        className="animate-modal-in relative flex max-h-[94dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[28px] bg-[var(--paper)] shadow-[0_40px_100px_-20px_rgba(0,18,58,0.7)] sm:max-h-[90dvh] sm:rounded-[28px]"
      >
        {/* Cabeçalho */}
        <header className="relative isolate shrink-0 overflow-hidden bg-[var(--ink)] px-5 pb-6 pt-7 text-[var(--paper)] sm:px-9 sm:pb-8 sm:pt-9">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-1.5 bg-[var(--cor)]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(90%_140%_at_100%_0%,color-mix(in_srgb,var(--cor)_55%,transparent),transparent_62%)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -bottom-6 -z-10 h-40 w-40 bg-[var(--paper)] opacity-[0.12] [mask-image:var(--img)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:var(--img)] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain] sm:h-52 sm:w-52"
          />

          <button
            ref={fecharRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-3 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-[var(--paper)] transition-colors hover:bg-white/25 sm:right-5 sm:top-6"
          >
            <IcClose />
          </button>

          <span className="mb-3 block font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-white/70">
            Guia do curso · {INGRESSO}
          </span>
          <h2
            id={tituloId}
            className="max-w-[88%] font-[Fraunces] text-[clamp(1.7rem,6.5vw,2.6rem)] leading-[1.04] tracking-[-0.03em]"
          >
            {curso.titulo}
          </h2>

          <div className="mt-4 flex flex-wrap gap-2 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.16em]">
            <span className="rounded-full border border-white/40 px-3 py-1.5">
              {rotuloModalidade[curso.modalidade]}
            </span>
            <span className="rounded-full border border-white/40 px-3 py-1.5">
              {curso.duracao}
            </span>
            <span className="rounded-full bg-[var(--sun)] px-3 py-1.5 text-[var(--ink)]">
              Matrícula grátis
            </span>
          </div>
        </header>

        {/* Conteúdo rolável */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-9 sm:py-8">
          {guia ? (
            <div className="space-y-8">
              <section>
                <Rotulo>Sobre o curso</Rotulo>
                <p className="font-[Fraunces] text-[20px] leading-[1.35] tracking-[-0.01em] sm:text-[24px]">
                  {guia.resumo}
                </p>
              </section>

              {numeros.length > 0 && (
                <section aria-label="O curso em números">
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {numeros.map((n) => (
                      <li
                        key={n.rotulo}
                        className="rounded-2xl border border-[var(--line)] bg-[var(--paper-2)] px-4 py-3.5"
                      >
                        <span className="block font-[Fraunces] text-[28px] leading-none tracking-[-0.03em] text-[var(--ink)]">
                          {n.valor}
                        </span>
                        <span className="mt-1.5 block font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.14em] text-[var(--ink)]/60">
                          {n.rotulo}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section>
                <Rotulo>Onde você pode atuar</Rotulo>
                <ul className="flex flex-wrap gap-2">
                  {guia.atuacao.map((a) => (
                    <li
                      key={a}
                      className="rounded-full border border-[var(--ink)] px-3.5 py-2 text-[14px] font-medium leading-none"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <Rotulo>Como funciona na prática</Rotulo>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {passos.map((p) => (
                    <li
                      key={p.titulo}
                      className="flex gap-3 rounded-2xl border border-[var(--line)] p-4"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--ink)] text-[var(--paper)]">
                        {p.icone}
                      </span>
                      <span>
                        <strong className="block text-[15px] leading-tight">{p.titulo}</strong>
                        <span className="mt-1 block text-[13.5px] leading-[1.45] text-[var(--ink-2)]">
                          {p.texto}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {guia.semestres.length > 0 && (
                <section>
                  <Rotulo>O que você vai estudar</Rotulo>
                  <div
                    role="tablist"
                    aria-label="Semestres do curso"
                    className="-mx-1 mb-4 flex gap-2 overflow-x-auto px-1 pb-2"
                  >
                    {guia.semestres.map((s, i) => {
                      const ativo = i === semestre;
                      return (
                        <button
                          key={s.etapa}
                          type="button"
                          role="tab"
                          aria-selected={ativo}
                          onClick={() => setSemestre(i)}
                          className={`shrink-0 cursor-pointer rounded-full border border-[var(--ink)] px-4 py-2 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] transition-colors ${
                            ativo
                              ? "bg-[var(--ink)] text-[var(--paper)]"
                              : "hover:bg-[var(--ink)] hover:text-[var(--paper)]"
                          }`}
                        >
                          {s.etapa}º sem.
                        </button>
                      );
                    })}
                  </div>
                  {atual && (
                    <ul role="tabpanel" className="grid gap-2">
                      {atual.disciplinas.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-3 rounded-xl bg-[var(--paper-2)] px-4 py-3 text-[14.5px] leading-snug"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[var(--cor)]"
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-3 text-[12.5px] leading-[1.5] text-[var(--ink)]/60">
                    Projetos de extensão, optativas e atividades complementares entram além das
                    disciplinas listadas. A grade pode ser atualizada pela instituição.
                  </p>
                </section>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <section>
                <Rotulo>Sobre o curso</Rotulo>
                <p className="font-[Fraunces] text-[22px] leading-[1.3] tracking-[-0.01em]">
                  O guia completo do curso de {curso.titulo} está sendo preparado.
                </p>
                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--ink-2)]">
                  Fale com um consultor para receber a grade, as formas de ingresso e tirar todas
                  as suas dúvidas sobre o curso ({rotuloModalidade[curso.modalidade].toLowerCase()},{" "}
                  {curso.duracao}).
                </p>
              </section>
            </div>
          )}
        </div>

        {/* Rodapé com CTA */}
        <footer className="shrink-0 border-t border-[var(--line)] bg-[var(--paper)] px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-9">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13.5px] leading-snug text-[var(--ink-2)] sm:max-w-[300px]">
              Gostou? Um consultor tira suas dúvidas e faz sua matrícula grátis.
            </p>
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer rounded-full border border-[var(--ink)] px-5 py-3 text-[14px] font-semibold transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
              >
                Voltar aos cursos
              </button>
              <a
                href={curso.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-full bg-[#0aa653] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_14px_30px_-10px_rgba(10,166,83,0.6)] transition-transform hover:-translate-y-0.5"
              >
                <WhatsappIcon />
                Falar com um consultor
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CursoModal;
