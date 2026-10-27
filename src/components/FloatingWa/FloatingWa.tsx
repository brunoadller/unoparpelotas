import { whatsappLink } from "../../data/cursos";
import { WhatsappIcon } from "../Icons/icons";

const FloatingWa = () => {
  return (
    <a
      href={whatsappLink("Quero matricular-me na Unopar Pelotas")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar agora pelo WhatsApp"
      className="fixed right-4 bottom-4 z-[70] flex items-center gap-3 rounded-full bg-[#0aa653] py-2.5 pr-4 pl-2.5 font-semibold text-white shadow-[0_20px_40px_-10px_rgba(10,166,83,0.5)] transition-transform hover:-translate-y-0.5 hover:scale-[1.02] sm:right-6 sm:bottom-6 sm:py-3 sm:pr-[18px] sm:pl-3"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0aa653]">
        <WhatsappIcon />
      </span>
      Falar agora
      <span className="ml-1 hidden rounded-full bg-white px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.18em] text-[#0aa653] min-[400px]:inline">
        online
      </span>
    </a>
  );
};

export default FloatingWa;
