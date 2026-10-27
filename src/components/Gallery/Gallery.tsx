import { gallery } from "../../data/gallery";
import { ENDERECO, INSTAGRAM_URL, INSTAGRAM_USER } from "../../data/links";

// Posição de cada foto na grade (a primeira é a destacada)
const layout = [
  "col-span-2 row-span-2 min-h-[260px] lg:min-h-0",
  "",
  "",
  "",
  "col-span-2 lg:col-span-1",
];

const Gallery = () => {
  return (
    <section id="polo" className="px-5 py-16 sm:px-8 sm:py-[110px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-[60px] sm:gap-10">
          <div>
            <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              /05 · Nosso polo
            </span>
            <h2 className="max-w-[820px] font-display text-[clamp(36px,5.6vw,84px)] leading-[0.94] font-normal tracking-[-0.035em]">
              Estrutura <em className="italic text-accent">de verdade</em> no
              coração de Pelotas.
            </h2>
          </div>
          <p className="max-w-[360px] text-[16px] leading-[1.55] text-ink-2">
            {ENDERECO}. Biblioteca, laboratórios, salas de aula e atendimento
            humano de segunda a sexta, das 9h às 22h.
          </p>
        </div>

        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-4">
          {gallery.map((foto, i) => (
            <div
              key={foto.id}
              role="img"
              aria-label="Foto do polo Unopar Pelotas"
              style={{ backgroundImage: `url(${foto.imageUrl})` }}
              className={`rounded-2xl border border-ink bg-cover bg-center ${layout[i] ?? ""} ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            />
          ))}
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-4 rounded-2xl border border-ink bg-paper-2 p-4 transition hover:-translate-y-0.5 sm:p-5"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-sun text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <b className="block text-[15px]">{INSTAGRAM_USER}</b>
            <span className="text-[13px] text-ink-2">
              Veja o dia a dia do polo no Instagram
            </span>
          </span>
          <span aria-hidden="true" className="text-2xl">→</span>
        </a>
      </div>
    </section>
  );
};

export default Gallery;
