import type { Diff } from "../../types"

type DiffProps ={
  item: Diff
  index: number
}
const Diffs = ({item, index}: DiffProps) => {
  return (
     <div key={item.id} className={`border-b 
      border-white/20 p-6 lg:border-r lg:border-b-0  ${index % 2 === 0 ? "lg:border-r" : ""}`}>
        <span className="font-display text-[64px] font-light italic text-accent">
          {item.numero}
        </span>

        <h4 className="mt-4 mb-2.5 font-display text-[22px]">
          {item.titulo}
        </h4>

      <p className="text-[14px] leading-[1.55] text-paper/65">
        {item.descricao}
      </p>
  </div>
  )
}

export default Diffs
