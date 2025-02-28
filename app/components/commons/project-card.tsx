import minhaImagem from '@/public/project-image-2.png'
import Image from 'next/image'
export function ProjectCard() {
  return (
    <div className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
      <div className="size-24 rounded-md overflow-hidden shrink-0">
        <Image src={minhaImagem} alt="Projeto" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase text-xs font-bold text-accent-green">
          10 Cliques
        </span>
        <div className="flex flex-col">
          <span className="text-white font-bold">Projeto 1</span>
          <span className="text-content-body text-sm">Descricao super detalhada do projeto</span>
        </div>
      </div>
    </div>
  )
}