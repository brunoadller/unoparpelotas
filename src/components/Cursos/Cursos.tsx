import { useMemo, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { cursos } from "../../data/cursos";
import type { ModalidadeCurso } from "../../types";
import CourseCard from "../CourseCard/CourseCard";
import { VOCACIONAL_URL } from "../../data/links";

type Filtro = "todos" | ModalidadeCurso;

// Remove acentos e caixa para que "nutricao" encontre "Nutrição"
const normalizar = (texto: string) =>
  texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();

const filtros: { valor: Filtro; rotulo: string }[] = [
  { valor: "todos", rotulo: "Todos" },
  { valor: "online", rotulo: "100% Online" },
  { valor: "semi", rotulo: "Semipresencial" },
];

const Cursos = () => {
  const [modalidade, setModalidade] = useState<Filtro>("todos");
  const [busca, setBusca] = useState("");

  const cursosFiltrados = useMemo(() => {
    const termo = normalizar(busca);
    return cursos.filter((curso) => {
      const okModalidade = modalidade === "todos" || curso.modalidade === modalidade;
      const okBusca = termo === "" || normalizar(curso.titulo).includes(termo);
      return okModalidade && okBusca;
    });
  }, [modalidade, busca]);

  return (
    <section id="cursos" className="bg-[var(--paper-2)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Cabeçalho */}
        <div className="mb-8 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end lg:gap-8">
          <div className="max-w-3xl">
            <span className="mb-3 block font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em]">
              /03 · Todos os cursos
            </span>

            <h2 className="font-[Fraunces] text-[clamp(2.1rem,9vw,3rem)] leading-[1.02] tracking-[-0.04em] lg:text-7xl">
              +{cursos.length} graduações{" "}
              <em className="text-[var(--accent)] not-italic">
                reconhecidas pelo MEC
              </em>{" "}
              no polo Pelotas.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base leading-7 text-black/70 sm:text-lg sm:leading-8">
              Filtre por modalidade ou busque pelo nome. Clique no curso e fale
              agora com um consultor pelo WhatsApp.
            </p>
            <a
              href={VOCACIONAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] underline-offset-4 hover:underline"
            >
              Não sabe qual escolher? Faça o Teste Vocacional →
            </a>
          </div>
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por modalidade">
            {filtros.map(({ valor, rotulo }) => {
              const ativo = modalidade === valor;
              return (
                <button
                  key={valor}
                  type="button"
                  aria-pressed={ativo}
                  onClick={() => setModalidade(valor)}
                  className={`cursor-pointer rounded-full border border-[var(--ink)] px-4 py-2.5 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.18em] transition-colors ${
                    ativo
                      ? "bg-[var(--ink)] text-[var(--paper)]"
                      : "hover:bg-[var(--ink)] hover:text-[var(--paper)]"
                  }`}
                >
                  {rotulo}
                </button>
              );
            })}
          </div>

          <label className="flex w-full items-center gap-2 rounded-full border border-[var(--ink)] bg-[var(--paper)] px-4 py-3 lg:w-[340px]">
            <CiSearch className="h-5 w-5 shrink-0" aria-hidden="true" />
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar curso…"
              aria-label="Buscar curso"
              className="w-full min-w-0 bg-transparent text-base outline-none placeholder:text-[rgba(20,19,16,.45)] sm:text-sm"
            />
          </label>
        </div>

        <p className="mb-3 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.18em] opacity-60" aria-live="polite">
          {cursosFiltrados.length} {cursosFiltrados.length === 1 ? "curso" : "cursos"}
        </p>

        {cursosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 border-l border-t border-[var(--ink)] md:grid-cols-2 xl:grid-cols-3">
            {cursosFiltrados.map((curso) => (
              <CourseCard key={curso.id} curso={curso} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-[var(--ink)] p-8 text-center">
            <p className="font-[Fraunces] text-2xl">Nenhum curso encontrado.</p>
            <p className="mt-2 text-sm text-[var(--ink-2)]">
              Tente outro nome ou limpe a busca.
            </p>
            <button
              type="button"
              onClick={() => {
                setBusca("");
                setModalidade("todos");
              }}
              className="mt-4 cursor-pointer rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-semibold text-[var(--paper)]"
            >
              Ver todos os cursos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cursos;
