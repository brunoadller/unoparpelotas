import type { Curso } from "../../types";

type CursosProps = {
  items: Curso[];
};

const Marquee = ({ items }: CursosProps) => {
  // A lista é renderizada duas vezes: a animação anda -50% e reinicia sem "pulo".
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden bg-ink text-paper" aria-hidden="true">
      <div className="flex w-max animate-marquee whitespace-nowrap py-5 sm:py-6">
        {loop.map((item, i) => (
          <span
            key={`${item.id}-${i}`}
            className="flex items-center gap-10 pr-10 font-display text-[22px] leading-none sm:gap-20 sm:pr-20 sm:text-[30px]"
          >
            {item.titulo} <em className="italic text-sun">—</em>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
