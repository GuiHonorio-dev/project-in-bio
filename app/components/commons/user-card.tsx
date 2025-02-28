import { Facebook, Github, Instagram, Linkedin, Twitter, Plus } from 'lucide-react'
import { Button } from '../ui/button'

export function UserCard() {
  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-zinc-600 bg-[#121212] rounded-3xl text-white ">
      <div className="size-48">
        <img 
          src="https://github.com/GuiHonorio-dev.png" 
          alt="" 
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">Guilherme Leandro</h3>
        </div>
        <p className="opacity-40 ">
          Programador web
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          <button className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]'>
            <Github />
          </button>
          <button className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]'>
            <Instagram />
          </button>
          <button className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]'>
            <Linkedin />
          </button>
          <button className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]'>
            <Twitter />
          </button>
          <button className='p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]'>
            <Plus />
          </button>
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