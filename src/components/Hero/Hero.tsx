import { INGRESSO_BARRA, whatsappLink } from "../../data/cursos"
import { CheckIcon, WhatsappIcon } from "../Icons/icons"

const Hero = () => {
  //text-[clamp(1.5rem,4vw,2.3rem)]
  return (
   <section className="relative overflow-hidden px-5 pt-10 pb-10 sm:px-8 sm:pt-[60px]">
  <div className="mx-auto grid max-w-[1360px] items-center gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr]">

    {/* Left */}
    <div>

      <span className="inline-flex items-center gap-2.5 rounded-full border border-ink bg-paper-2 px-[14px] py-2 font-mono text-[11px] uppercase tracking-[0.24em]">
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent shadow-[0_0_0_4px_rgba(227,6,19,.18)]" />
        Polo Pelotas · Matrículas {INGRESSO_BARRA} abertas
      </span>

      <h1 className="mt-[26px] mb-[22px] font-display text-[clamp(40px,11.5vw,100px)] lg:text-[clamp(56px,6.2vw,104px)] leading-[0.88] font-normal tracking-[-0.045em]">

        Estude on-line.
        <br />

        <span className="italic font-normal text-transparent [-webkit-text-stroke:1.5px_var(--color-ink)]">
          Cresça
        </span>{" "}
        <em className="font-light not-italic text-accent">
          de verdade
        </em>

        <br />

        Diploma <span className="text-accent">Unopar</span>,
        <br />

        <span className="relative inline-block after:absolute after:right-0 after:bottom-[0.08em] after:left-0 after:-z-10 after:h-[0.14em] after:bg-sun">
          no seu ritmo
        </span>.
      </h1>

      <p className="mb-7 max-w-[520px] text-[19px] leading-[1.5] text-ink-2">
        Graduação 100% online, semipresencial e pós no polo Unopar
        de Pelotas. Aulas ao vivo, tutoria dedicada e diploma reconhecido pelo
        MEC — matrícula grátis e 1º pagamento só no próximo mês.
      </p>

      {/* CTA */}

      <div className="flex flex-wrap items-center gap-3">

        <a
          href={whatsappLink("Quero minha matrícula grátis na Unopar Pelotas")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-[22px] py-4 font-semibold text-[#00205B] transition hover:-translate-y-0.5"
        >
          <WhatsappIcon />
          Minha matrícula grátis
        </a>

        <a
          href="#modalidades"
          className="inline-flex items-center rounded-full border border-ink px-[22px] py-4 font-semibold transition hover:bg-ink hover:text-white"
        >
          Ver modalidades →
        </a>

      </div>

      {/* Trust */}

      <div className="mt-7 flex flex-wrap gap-6 text-[13px] text-ink-2">

        <span className="flex items-center gap-2">
          <CheckIcon />
          Nota máxima MEC
        </span>

        <span className="flex items-center gap-2">
          <CheckIcon />
          +1 milhão de alunos
        </span>

        <span className="flex items-center gap-2">
          <CheckIcon />
          Diploma reconhecido
        </span>

      </div>

    </div>

    {/* Right */}

   <div className="flex flex-col md:gap-30 gap-6">
  {/* Foto */}
  <div className="overflow-hidden rounded-3xl shadow-xl">
    <img
      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80&auto=format&fit=crop"
      alt="Alunos estudando"
      className="md:h-[620px] h-[425px] w-full object-cover lg:h-[500px]"
    />
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

  {/* Card R$0 */}
  <div className="rounded-3xl border border-ink bg-paper-2 p-6 shadow-lg">

    <div className="font-display md:text-3xl text-[clamp(3.5rem,12vw,6rem)] leading-none tracking-[-0.04em]">
      R$
      <span className="text-accent md:text-2xl">0</span>
      <sup className=" italic text-accent">
        ,00
      </sup>
    </div>

    <p className="mt-4 text-sm leading-6 text-ink-2 md:text-xl md:leading-snug">
      Matrícula grátis.
      <br />
      Primeiro pagamento somente no próximo mês.
    </p>

  </div>

  {/* Card Oferta */}
  <div className="rounded-3xl bg-accent p-6 text-white shadow-lg">

    <span className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
      Oferta Relâmpago
    </span>

    <h3 className="mt-3 md:text-[23px] font-display text-2xl sm:text-3xl italic leading-tight">
      Matrícula
      <br />
      <span className="underline">zero taxa</span>
    </h3>

    <p className="mt-4 text-sm leading-6">
      + primeiro boleto somente no próximo mês.
    </p>

  </div>

</div>
  </div>
  </div>
</section>
  )
}

export default Hero
