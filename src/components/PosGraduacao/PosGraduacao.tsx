import { whatsappLink } from "../../data/cursos";
import { areasPosGraduacao } from "../../data/areaPosGraduacao";
import { WhatsappIcon } from "../Icons/icons";

const PosGraduacao = () => {
  return (
    <section id="pos" className="bg-paper-2 px-5 py-16 sm:px-8 sm:py-[110px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-[60px] sm:gap-10">
          <div>
            <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              /04 · Pós-graduação EAD
            </span>
            <h2 className="max-w-[820px] font-display text-[clamp(36px,5.6vw,84px)] leading-[0.94] font-normal tracking-[-0.035em]">
              +700 especializações <br className="hidden sm:block" />
              por <em className="italic text-accent">área de interesse</em>.
            </h2>
          </div>
          <p className="max-w-[360px] text-[16px] leading-[1.55] text-ink-2">
            Todas 100% EAD, com duração de 4, 6, 10 ou 12 meses. Escolha sua
            área e receba a lista completa no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4">
          {areasPosGraduacao.map((area) => (
            <a
              key={area.id}
              href={area.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[220px] flex-col rounded-[20px] border border-ink bg-paper p-6 transition hover:-translate-y-1.5 hover:bg-ink hover:text-paper"
            >
              <div className="mb-4 text-[34px] leading-none">{area.icon}</div>
              <h4 className="font-display text-[22px] leading-[1.05] tracking-[-0.02em]">
                {area.title} <span className="italic">{area.subtitle}</span>
              </h4>
              <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent group-hover:text-sun">
                {area.courses}
              </span>
              <span className="mt-auto pt-4 text-[13px] leading-[1.5] opacity-70">
                {area.description}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-[20px] bg-ink p-6 text-paper sm:p-8">
          <div>
            <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.28em] text-sun">
              Catálogo completo
            </span>
            <p className="max-w-xl font-display text-[22px] leading-tight sm:text-[28px]">
              Quer ver todas as especializações disponíveis?
            </p>
          </div>
          <a
            href={whatsappLink("Quero o catálogo completo de pós-graduação")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-ink transition hover:-translate-y-0.5"
          >
            <WhatsappIcon />
            Pedir catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default PosGraduacao;
