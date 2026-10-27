import { diffs } from "../../data/diffs"
import Diffs from "../Diffs/Diffs"
import Nums from "../Nums/Nums"


const Why = () => {
  return (
     <section className="relative bg-ink px-8 py-[110px] text-paper">

  <div className="mx-auto max-w-[1280px]">

    <div className="mb-[60px] flex flex-wrap items-end justify-between gap-10">

      <div>

        <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
          /02 · Por que Unopar Pelotas
        </span>

        <h2 className="max-w-[820px] font-display text-[clamp(40px,5.6vw,84px)] font-normal leading-[0.94] tracking-[-0.035em] text-paper">

          Estudar aqui é{" "}
          <em className="italic text-sun">
            outro nível
          </em>{" "}
          de conforto e credibilidade.

        </h2>

      </div>

      <p className="max-w-[360px] text-[16px] leading-[1.55] text-paper/70">
        Um dos maiores polos do RS, no coração de Pelotas — com estrutura,
        atendimento humano e a marca Unopar por trás.
      </p>

    </div>

    
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {
        diffs.map((items, index) => {
          return(
             <Diffs item = {items} key={items.id} index ={index}/>
          )
        })
      }
    </div>
    <Nums />

  </div>

</section>

  )
}

export default Why