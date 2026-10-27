import { VOCACIONAL_URL } from "../../data/links";

const Vocacional = () => {
  return (
    <section id="vocacional" className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[28px] border border-accent bg-[#E30613] p-7 sm:p-12 lg:p-14">
        {/* Detalhes decorativos */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/20 blur-2xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 right-6 select-none font-display text-[150px] font-light italic leading-none text-white/15 sm:text-[220px]"
        >
          ?
        </span>

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-paper">
              <span aria-hidden="true">🎯</span> Teste Vocacional
            </span>

            <h2 className="mt-5 font-display text-[clamp(2rem,7vw,3.75rem)] leading-[0.98] tracking-[-0.035em] text-paper">
              Ainda não sabe <em className="italic text-sun">qual curso escolher?</em>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/90 sm:text-lg">
              Faça o Teste Vocacional e descubra a carreira que combina com
              você. Depois é só falar com a gente e começar.
            </p>
          </div>

          <a
            href={VOCACIONAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-ink lg:w-auto text-center px-7 py-5 text-base font-semibold text-paper shadow-[0_14px_30px_-12px_rgba(0,32,91,.7)] transition hover:-translate-y-0.5 hover:bg-ink-2 sm:text-lg"
          >
            Fazer o Teste Vocacional
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Vocacional;
