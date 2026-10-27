import type { CSSProperties } from "react";
import type { Curso } from "../../types";

type CourseCardProps = {
  curso: Curso;
};

const rotuloModalidade = {
  online: "100% online",
  semi: "Semipresencial",
} as const;

const CourseCard = ({ curso }: CourseCardProps) => {
  // Variáveis CSS usadas pelas camadas de fundo (cor da marca + ícone do curso)
  const vars = {
    "--cor": curso.cor,
    "--img": `url(${curso.imagem})`,
  } as CSSProperties;

  return (
    <a
      href={curso.link}
      target="_blank"
      rel="noopener noreferrer"
      style={vars}
      className="group relative isolate flex min-h-[150px] flex-col justify-between gap-6 overflow-hidden border-r border-b border-[var(--ink)] bg-[var(--paper-2)] p-5 transition-colors duration-300 hover:bg-[var(--ink)] hover:text-[var(--paper)] sm:min-h-[170px] sm:p-[22px]"
    >
      {/* Brilho suave com a cor do curso */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_100%_100%,color-mix(in_srgb,var(--cor)_16%,transparent),transparent_60%)] transition-opacity duration-300 group-hover:opacity-0"
      />

      {/* Ícone do curso como marca-d'água (imagem de fundo) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -bottom-3 -z-10 h-28 w-28 bg-[var(--cor)] opacity-[0.16] transition-all duration-500 [mask-image:var(--img)] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:var(--img)] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain] group-hover:scale-110 group-hover:bg-[var(--paper)] group-hover:opacity-[0.14] sm:h-32 sm:w-32"
      />

      {/* Faixa de cor do curso */}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 bg-[var(--cor)]"
      />

      <div className="flex items-start justify-between gap-3">
        <h3 className="max-w-[82%] font-[Fraunces] text-[20px] font-normal leading-[1.08] tracking-[-0.02em] sm:text-[22px]">
          {curso.titulo}
        </h3>

        <span className="inline-block font-[Fraunces] text-[22px] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent)]">
          ↗
        </span>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-2 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em]">
        <span className="rounded-full border border-[var(--ink)] bg-[var(--paper)]/60 px-[10px] py-1 transition-colors duration-300 group-hover:border-[var(--paper)] group-hover:bg-transparent group-hover:text-[var(--paper)]">
          {rotuloModalidade[curso.modalidade]}
        </span>

        <span className="opacity-70 transition-all duration-300 group-hover:text-[rgba(241,235,221,.9)] group-hover:opacity-100">
          {curso.duracao}
        </span>
      </div>
    </a>
  );
};

export default CourseCard;
