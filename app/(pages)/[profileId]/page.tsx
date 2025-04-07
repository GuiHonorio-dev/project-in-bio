import { ProjectCard } from "@/app/components/commons/project-card"
import { TotalVisits } from "@/app/components/commons/total-visits"
import { UserCard } from "@/app/components/commons/user-card/user-card"
import { auth } from "@/app/lib/auth"
import { getProfileData, getProfileProjects } from "@/app/server/get-profile-data"
import Link from "next/link"
import { notFound } from "next/navigation"
import { NewProject } from "./new-project"
import { getDownloadURLFromPath } from "@/app/lib/firebase"

export default async function ProfilePage({ params }: { params: Promise<{ profileId: string }> }) {
  const session = await auth()

  const { profileId } = await params
  
  const profileData = await getProfileData(profileId)
  console.log(`Profile Data: ${profileData}`)

  if (!profileData) return notFound()

  const isOwner = profileData.userId === session?.user?.id

  const projects = await getProfileProjects(profileId)
  
  console.log(`Projects: ${projects}`)
  return (
    <div className="relative h-screen flex p-20 overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
        <span>Você esta usando a versão trial.</span>
        <Link href={`/${profileId}/upgrade`}>
          <button className="text-accent-green font-bold cursor-pointer hover:opacity-90">Faça o upgrade agora!</button>
        </Link>
      </div>
      <div className="w-1/2 flex justify-center h-min">
        <UserCard isOwner={isOwner} profileData={profileData} />
      </div>
      <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
        {
          projects.map(async (project) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              isOwner={isOwner}
              img={await getDownloadURLFromPath(project.imagePath) ?? ""}
            />
          ))
        }
        { isOwner && <NewProject profileId={profileId} />}

      </div>
      <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
        <TotalVisits />
      </div>
    </div>
  )
}