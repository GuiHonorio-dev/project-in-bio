import { TrendingUp } from "lucide-react";

export function TotalVisits({ totalVisits = 0 }: { totalVisits?: number }) {
  return (
    <div className="w-min whitespace-nowrap flex items-center gap-5 bg-background-secondary border border-border-primary px-7 py-3 rounded-xl shadow-lg">
      <span className="font-bold text-white">Total de visitas</span>
      <div className="flex items-center gap-2 text-accent-green">
        <span className="text-2xl font-bold">{totalVisits}</span>
        <TrendingUp />
      </div>
      {/* <div className="flex items-center gap-2">
        <button>Sair</button>
        <button>Portal</button>
      </div> */}
    </div>
  )
}