
const Nums = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-[60px] sm:grid-cols-2 lg:grid-cols-4">
  <div className="border-l border-[rgba(241,235,221,0.18)] pl-5">
    <b className="block font-[Fraunces] font-light text-[72px] leading-none tracking-[-0.04em]">
      +1<sup className="text-[26px] text-[var(--accent)] align-top">mi</sup>
    </b>
    <span className="block mt-1.5 text-[13px] leading-[1.4] text-[rgba(241,235,221,0.65)]">
      alunos ativos em todo o Brasil
    </span>
  </div>

  <div className="border-l border-[rgba(241,235,221,0.18)] pl-5">
    <b className="block font-[Fraunces] font-light text-[72px] leading-none tracking-[-0.04em]">
      +1.500
    </b>
    <span className="block mt-1.5 text-[13px] leading-[1.4] text-[rgba(241,235,221,0.65)]">
      polos de apoio presencial no país
    </span>
  </div>

  <div className="border-l border-[rgba(241,235,221,0.18)] pl-5">
    <b className="block font-[Fraunces] font-light text-[72px] leading-none tracking-[-0.04em]">
      +50
      <sup className="text-[26px] text-[var(--accent)] align-top">
        anos
      </sup>
    </b>
    <span className="block mt-1.5 text-[13px] leading-[1.4] text-[rgba(241,235,221,0.65)]">
      de tradição em educação superior
    </span>
  </div>

  <div className="border-l border-[rgba(241,235,221,0.18)] pl-5">
    <b className="block font-[Fraunces] font-light text-[72px] leading-none tracking-[-0.04em]">
      5
      <sup className="text-[26px] text-[var(--accent)] align-top">
        ★
      </sup>
    </b>
    <span className="block mt-1.5 text-[13px] leading-[1.4] text-[rgba(241,235,221,0.65)]">
      notas máximas em cursos avaliados pelo MEC
    </span>
  </div>
</div>
  )
}

export default Nums
