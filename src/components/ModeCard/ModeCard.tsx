import type { Modalidade } from "../../types";

interface ModeCardProps {
  modalidade: Modalidade[];
}

export function ModeCard({ modalidade }: ModeCardProps) {
  return (
    <section id="modalidades" className="relative px-5 py-16 sm:px-8 sm:py-[110px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Cabeçalho */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-[60px] sm:gap-10">
          <div>
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              /01 · Modalidades
            </span>
            <h2 className="max-w-[820px] font-display text-[clamp(36px,5.6vw,84px)] font-normal leading-[0.94] tracking-[-0.035em]">
              Três jeitos de estudar.
              <em className="italic text-plum"> Um só</em> diploma reconhecido.
            </h2>
          </div>
          <p className="max-w-[360px] text-[16px] leading-[1.55] text-ink-2">
            Escolha o formato que cabe na sua rotina — no polo Pelotas, você tem
            suporte real em cada um deles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modalidade.map((item) => {
            const escuro = item.id === "semipresencial";
            return (
              <div
                key={item.id}
                className={`group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-[20px] border p-6 transition-transform duration-300 hover:-translate-y-1.5 sm:min-h-[420px] sm:p-7 ${
                  escuro
                    ? "border-ink bg-ink text-paper"
                    : "border-ink bg-paper-2 hover:bg-paper"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] tracking-[0.24em] opacity-55">
                      {item.indice}
                    </span>
                    {item.destaqueTag && (
                      <span className="rounded-full bg-sun px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
                        {item.destaqueTag}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 mb-4 font-display text-[clamp(32px,9vw,44px)] font-normal leading-[0.95] tracking-[-0.03em]">
                    {item.tituloPrefixo}
                    <em className="block text-[0.82em] italic text-accent">
                      {item.tituloEnfase}
                    </em>
                  </h3>

                  <p className={`max-w-[320px] text-[15px] leading-[1.55] ${escuro ? "text-paper-2" : "text-ink-2"}`}>
                    {item.descricao}
                  </p>

                  <ul className="mt-[22px] list-none text-[14px]">
                    {item.detalhes.map((d) => (
                      <li
                        key={d.label}
                        className="flex justify-between gap-4 border-t border-dashed border-current/25 py-2.5"
                      >
                        <span>{d.label}</span>
                        <span className="text-right">{d.valor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={item.ctaHref}
                  className={`mt-[22px] inline-flex items-center gap-2.5 self-start rounded-full border px-3.5 py-2.5 font-mono text-[12px] uppercase tracking-[0.2em] transition ${
                    escuro
                      ? "border-paper hover:bg-paper hover:text-ink"
                      : "border-ink hover:bg-ink hover:text-paper"
                  }`}
                >
                  {item.ctaTexto}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
