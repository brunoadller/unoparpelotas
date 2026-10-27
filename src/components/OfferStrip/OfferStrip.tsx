import { useEffect, useState } from "react";
import { tick } from "../../helpers/timer";

type Timer = {
    id: number;
    value: string;
    label: string;
}
const OfferStrip = () => {
  const [time, setTime] = useState<Timer[]>(tick)
  useEffect(() => {
  const interval = setInterval(() => {
    setTime(tick());
  }, 1000);

  return () => clearInterval(interval);
  }, []);
  return (
    <section className="border-y border-ink bg-accent px-5 py-7 sm:px-8">

  <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-8">

    {/* Texto */}
    <h4 className="font-display text-[clamp(26px,4vw,52px)] font-normal leading-[0.95] tracking-[-0.03em] text-ink">

      Matrícula <em className="italic">grátis</em> — primeiro pagamento só no
      próximo mês.

    </h4>

    {/* Contador */}
    <div
      className="flex items-center gap-2 sm:gap-4"
      aria-label="Contagem regressiva"
    >

     {time.map((item) => (

        <div
          key={item.id}
          className="flex min-w-[58px] flex-col items-center rounded-xl border border-ink bg-ink px-2 py-2 sm:min-w-[78px] sm:px-4 sm:py-3"
        >
          <b
            className="font-display text-2xl leading-none text-paper sm:text-3xl"
          >
            {item.value}
          </b>
          
            <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-paper sm:text-[10px] sm:tracking-[0.2em]">
              {item.label}
            </span>
          

        </div>

      ))}

    </div>

    {/* Botão */}
    <a
      href="https://wa.me/555330283591?text=Quero%20garantir%20matr%C3%ADcula%20gr%C3%A1tis"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center rounded-full
        bg-ink px-6 py-4
        font-semibold text-paper
        transition hover:-translate-y-0.5
      "
    >
      Garantir minha vaga →
    </a>

  </div>

</section>
  )
}

export default OfferStrip
