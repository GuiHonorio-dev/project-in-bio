import { Github, Instagram, Linkedin, Twitter, Plus } from 'lucide-react'
import { Button } from '../../ui/button'
import { EditSocialLinks } from './edit-social-links'
import Link from 'next/link'
import type { ProfileData } from '@/app/server/get-profile-data'
export function UserCard({
  profileData
}: {
  profileData?: ProfileData
}) {

  return (
    <div className="w-fit flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img src="https://github.com/guihonorio-dev.png" alt="Foto de perfil" className="rounded-full object-cover size-full" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">Guilherme Leandro</h3>
        </div>
        <p className="opacity-40">Eu faço produtos para a internet</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          {
            profileData?.socialMedias?.github && (
              <Link href={profileData?.socialMedias?.github} target='_blank' className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E] '>
                <Github />
              </Link>
            )
          }
          {
            profileData?.socialMedias?.instagram && (
              <Link href={profileData?.socialMedias?.instagram} target='_blank' className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E] '>
                <Instagram />
              </Link>
            )
          }
          {
            profileData?.socialMedias?.linkeding && (
                <Link href={profileData?.socialMedias?.linkeding} target='_blank' className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E] '>
                  <Linkedin />
              </Link>
            )
          }
          {
            profileData?.socialMedias?.twitter && (
              <Link href={profileData?.socialMedias?.twitter} target='_blank' className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E] '>
                <Twitter />
              </Link>
            )
          }
          <EditSocialLinks socialMedias={profileData?.socialMedias} /> 
        </div>
      </div>
        <div className='flex flex-col gap-3 w-full h-[172px]'>
          <div className='w-full flex flex-col items-center gap-3'>
            <Button className='w-full'>Template SaaS - Compre Agora</Button>
            <button className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]'>
              <Plus />
            </button>
          </div>
        </div>
    </div>
  )
}