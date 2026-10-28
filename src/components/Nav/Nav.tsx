
const Nav = () => {
  return (
    <header className="sticky top-0 z-[60] flex items-center justify-between border-b 
    border-line borde bg-[linear-gradient(var(--color-paper),
    var(--color-paper)_60%,rgba(241,235,221,.85))] 
    px-4 py-3 sm:px-8 sm:py-[18px] backdrop-blur-[6px]">

  {/* Logo */}
  <a
    href="#"
    aria-label="Unopar Pelotas"
    className="flex items-center gap-3"
  >
    <img
      src="/logo-unopar.png"
      alt="Unopar"
      className="h-[52px] w-auto object-contain"
    />

    <span className="flex flex-col leading-[1.05]">
      <strong className="text-[19px] font-extrabold tracking-[-0.01em]">
        UNOPAR
      </strong>

      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
        Polo Pelotas
      </span>
    </span>
  </a>

  {/* Menu */}
  <nav className="hidden min-[821px]:block">
    <ul className="flex gap-[26px] text-[14px] tracking-[0.02em]">
      {[
        ["Modalidades", "#modalidades"],
        ["Cursos", "#cursos"],
        ["Teste vocacional", "#vocacional"],
        ["Alunos", "#depoimentos"],
        ["Dúvidas", "#faq"],
      ].map(([titulo, href]) => (
        <li key={titulo}>
          <a
            href={href}
            className="
              relative
              opacity-75
              transition-opacity
              duration-200
              hover:opacity-100
              after:absolute
              after:left-0
              after:right-0
              after:-bottom-1
              after:h-px
              after:origin-right
              after:scale-x-0
              after:bg-ink
              after:transition-transform
              after:duration-300
              hover:after:origin-left
              hover:after:scale-x-100
            "
          >
            {titulo}
          </a>
        </li>
      ))}
    </ul>
  </nav>

  {/* CTA */}
  <div className="flex items-center gap-[10px]">
    <a
      href="https://wa.me/555330283591?text=Olá!%20Quero%20informações%20sobre%20a%20Unopar%20Pelotas"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-[10px]
        rounded-full
        border
        border-[#25D366]
        bg-[#25D366]
        px-[18px]
        py-3
        text-[14px]
        font-semibold
        text-[#00205B]
        transition-transform
        duration-200
        hover:-translate-y-[2px]
        max-[370px]:h-[52px]
        max-[370px]:w-[52px]
        max-[370px]:justify-center
        max-[370px]:p-0
      "
    >
      <svg
        className="h-4 w-4 max-[370px]:h-[22px] max-[370px]:w-[22px]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.3 5.2 4.6 2.6 1 3.2.8 3.7.8.6-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.5-.3M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>

      <span className="max-[370px]:hidden">
        Fale no WhatsApp
      </span>
    </a>
  </div>

</header>
  )
}

export default Nav
