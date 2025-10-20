"use client"

import type { ProjectData } from "@/app/server/get-profile-data";
import Link from "next/link";

export function ProjectCard({ project, isOwner, img }: { project: ProjectData, isOwner: boolean, img: string | undefined }) {

  const projectUrl = project.projectUrl
  const formatedUrl = projectUrl.startsWith("http") ? projectUrl : `https://${projectUrl}`

  function handleClick() {
    console.log('CLICOU')
  }

  return (
    <Link href={formatedUrl} target="_blank" onClick={handleClick}>
      <div className="w-[400px] h-[155px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-borderSecondary ">
        <div className="size-24 rounded-md overflow-hidden shrink-0">
          <img src={img} alt="Foto do projeto" className="size-full object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          {
            isOwner && (
            <span className="uppercase text-xs font-bold text-accent-green">
                {project.totalVisits || 0} Cliques
            </span>
            )
          }
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl">{project.projectName}</span>
            <span className="text-content-body text-sm">{project.projectDescription}</span>
          </div>
        </div>
      </div>
    </Link>
    
  )
}