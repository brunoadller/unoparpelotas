import { INGRESSO, whatsappLink } from "../../data/cursos";
import { WhatsappIcon } from "../Icons/icons";

const Cta = () => {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-20 text-center text-paper sm:px-8 sm:py-[120px]">
      {/* Brilhos de fundo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-52 -left-52 h-[520px] w-[520px] rounded-full bg-accent opacity-35 blur-[80px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 -bottom-52 h-[520px] w-[520px] rounded-full bg-plum opacity-70 blur-[80px]"
      />

      {/* Selo giratório (some no celular para não cobrir o texto) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="absolute top-10 right-10 hidden h-[130px] w-[130px] animate-spin opacity-50 [animation-duration:18s] md:block"
      >
        <defs>
          <path id="cir" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
        </defs>
        <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="14" letterSpacing="4">
          <textPath href="#cir">
            MATRÍCULA · GRÁTIS · POLO · PELOTAS · {INGRESSO} ·
          </textPath>
        </text>
        <circle cx="100" cy="100" r="6" fill="#ffb800" />
      </svg>

      <div className="relative mx-auto max-w-3xl">
        <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.28em] text-sun">
          Última chamada · Ingresso {INGRESSO}
        </span>

        <h2 className="mb-5 font-display text-[clamp(2.2rem,7vw,5rem)] leading-[0.96] tracking-[-0.035em]">
          Sua próxima virada de vida{" "}
          <em className="italic text-sun">começa numa mensagem</em>.
        </h2>

        <p className="mx-auto mb-9 max-w-[520px] text-base leading-relaxed text-paper/75 sm:text-[17px]">
          Fale agora com um consultor do polo Unopar Pelotas. Em menos de 5
          minutos você sai com curso escolhido, matrícula grátis e data de
          início.
        </p>

        <a
          href={whatsappLink("Quero começar agora na Unopar Pelotas")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-7 py-5 text-base font-semibold text-ink transition hover:-translate-y-0.5"
        >
          <WhatsappIcon />
          Falar com consultor agora
        </a>
      </div>
    </section>
  );
};

export default Cta;
