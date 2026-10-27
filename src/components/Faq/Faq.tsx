import { faqs } from "../../data/faq";

const Faq = () => {
  return (
    <section id="faq" className="px-5 py-16 sm:px-8 sm:py-[110px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-[60px] sm:gap-10">
          <div>
            <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              /07 · Dúvidas frequentes
            </span>
            <h2 className="max-w-[820px] font-display text-[clamp(36px,5.6vw,84px)] leading-[0.94] font-normal tracking-[-0.035em]">
              O que quase todo mundo{" "}
              <em className="italic text-plum">pergunta antes</em>.
            </h2>
          </div>
          <p className="max-w-[360px] text-[16px] leading-[1.55] text-ink-2">
            Se sua pergunta não está aqui, mande no WhatsApp. Respondemos em
            minutos, de segunda a sexta, das 9h às 22h.
          </p>
        </div>

        <div className="border-t border-ink">
          {faqs.map((item) => (
            <details
              key={item.id}
              open={item.aberto}
              className="group border-b border-ink py-5 sm:py-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-[clamp(19px,2.4vw,30px)] leading-tight tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                {item.pergunta}
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink transition-all duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-white"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[800px] text-[16px] leading-[1.6] text-ink-2">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
