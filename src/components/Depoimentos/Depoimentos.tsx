import { useCallback, useEffect, useRef, useState } from "react";
import { depoimentos } from "../../data/depoimentos";

const Seta = ({ lado }: { lado: "prev" | "next" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[18px] w-[18px]"
    aria-hidden="true"
  >
    <path d={lado === "prev" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
  </svg>
);

const Depoimentos = () => {
  const trilho = useRef<HTMLDivElement>(null);
  const [podeVoltar, setPodeVoltar] = useState(false);
  const [podeAvancar, setPodeAvancar] = useState(true);

  const atualizar = useCallback(() => {
    const el = trilho.current;
    if (!el) return;
    setPodeVoltar(el.scrollLeft > 0);
    setPodeAvancar(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, [atualizar]);

  const mover = (direcao: 1 | -1) => {
    const el = trilho.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const passo = (card?.getBoundingClientRect().width ?? 380) + 24;
    el.scrollBy({ left: direcao * passo, behavior: "smooth" });
  };

  const botao =
    "absolute top-[calc(50%-10px)] z-[5] hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-paper/30 bg-ink/85 text-paper shadow-[0_6px_18px_rgba(0,0,0,.25)] backdrop-blur transition hover:scale-105 hover:bg-sun hover:text-ink md:flex disabled:pointer-events-none disabled:opacity-0";

  return (
    <section id="depoimentos" className="overflow-hidden bg-ink px-5 py-16 text-paper sm:px-8 sm:py-[110px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 sm:mb-[60px]">
          <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-[0.28em] text-sun">
            /06 · Quem já mudou de vida
          </span>
          <h2 className="max-w-[820px] font-display text-[clamp(36px,5.6vw,84px)] leading-[0.94] font-normal tracking-[-0.035em]">
            Estudantes reais, <em className="italic text-sun">histórias reais</em>.
          </h2>
        </div>

        <div className="relative">
          <button type="button" aria-label="Depoimento anterior" disabled={!podeVoltar} onClick={() => mover(-1)} className={`${botao} left-3`}>
            <Seta lado="prev" />
          </button>
          <button type="button" aria-label="Próximo depoimento" disabled={!podeAvancar} onClick={() => mover(1)} className={`${botao} right-3`}>
            <Seta lado="next" />
          </button>

          <div
            ref={trilho}
            onScroll={atualizar}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden"
          >
            {depoimentos.map((d) => (
              <figure
                key={d.id}
                className="min-w-[85%] snap-start rounded-[20px] border border-paper/20 bg-paper/5 p-6 sm:min-w-[380px] sm:p-8"
              >
                <div className="mb-4 text-[14px] tracking-[2px] text-sun" aria-label="5 estrelas">
                  ★★★★★
                </div>
                <blockquote className="mb-[22px] font-display text-[19px] leading-[1.3] font-light tracking-[-0.01em] sm:text-[22px]">
                  “{d.texto}”
                </blockquote>
                <figcaption className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-sun font-display font-medium text-ink">
                    {d.avatarLetra}
                  </span>
                  <span>
                    <b className="block text-[14px] font-semibold">{d.nome}</b>
                    <span className="text-[12px] opacity-65">
                      {d.curso} · {d.turma}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
