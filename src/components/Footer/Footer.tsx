import { INGRESSO, whatsappLink } from "../../data/cursos";
import {
  ENDERECO,
  HORARIO,
  INSTAGRAM_URL,
  INSTAGRAM_USER,
  MAPS_URL,
  VOCACIONAL_URL,
} from "../../data/links";

type Link = { texto: string; href: string; externo?: boolean };

const colunas: { titulo: string; links: Link[] }[] = [
  {
    titulo: "Cursos",
    links: [
      { texto: "Graduação EAD", href: "#cursos" },
      { texto: "Semipresencial", href: "#modalidades" },
      { texto: "Pós-graduação", href: "#pos" },
      { texto: "Teste Vocacional", href: VOCACIONAL_URL, externo: true },
    ],
  },
  {
    titulo: "O Polo",
    links: [
      { texto: "Nossa estrutura", href: "#polo" },
      { texto: "Como funciona", href: "#modalidades" },
      {
        texto: "Bolsas de estudo",
        href: whatsappLink("Quero saber sobre bolsas de estudo na Unopar Pelotas"),
        externo: true,
      },
      {
        texto: "Trabalhe conosco",
        href: whatsappLink("Quero saber sobre vagas para trabalhar no polo Unopar Pelotas"),
        externo: true,
      },
    ],
  },
];

const tituloColuna =
  "mb-4 block font-mono text-[11px] uppercase tracking-[0.24em] opacity-55";
const lista = "flex flex-col gap-2.5 text-[14px]";
const link = "transition-colors hover:text-accent";

const Footer = () => {
  return (
    <footer className="border-t border-ink bg-paper-2 px-6 pt-14 pb-28 sm:px-8 sm:pt-[70px] sm:pb-[30px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 min-[540px]:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Marca */}
        <div className="min-[540px]:col-span-2 lg:col-span-1">
          <img
            src="/logo-unopar.png"
            alt="Unopar"
            className="mb-[18px] block h-[72px] w-auto"
          />
          <h5 className="mb-3.5 font-display text-[clamp(32px,9vw,44px)] leading-[0.95] tracking-[-0.03em]">
            Unopar Anhanguera
            <br />
            <em className="italic text-plum">Pelotas</em>.
          </h5>
          <p className="max-w-[340px] text-[14px] leading-[1.55] text-ink-2">
            Polo de apoio presencial autorizado. Educação superior com
            credibilidade nacional e atendimento local, no ritmo da sua vida.
          </p>
        </div>

        {colunas.map((coluna) => (
          <nav key={coluna.titulo} aria-label={coluna.titulo}>
            <b className={tituloColuna}>{coluna.titulo}</b>
            <ul className={lista}>
              {coluna.links.map((item) => (
                <li key={item.texto}>
                  <a
                    href={item.href}
                    className={link}
                    {...(item.externo
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.texto}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contato */}
        <div>
          <b className={tituloColuna}>Contato</b>
          <ul className={lista}>
            <li>
              <a
                href={whatsappLink("Olá! Quero informações sobre a Unopar Pelotas")}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                {INSTAGRAM_USER}
              </a>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                {ENDERECO}
              </a>
            </li>
            <li>{HORARIO}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-line pt-6 font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] opacity-60">
        <span>
          © {new Date().getFullYear()} · Unopar Anhanguera · Polo Pelotas ·
          Ingresso {INGRESSO}
        </span>
        <span>
          Instagram{" "}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {INSTAGRAM_USER}
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
