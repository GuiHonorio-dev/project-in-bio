'use client'

import { Modal } from "@/app/components/ui/modal";
import { Plus } from "lucide-react";
import { useState } from "react";

export function NewProject({ profileId } : { profileId: string }) {
  const [open, setIsOpen] = useState(false)
  return (
    <>
      <button 
        className="w-[340px] h-[132px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed"
        onClick={() => setIsOpen(open => !open)}  
      >
        <Plus className="size-10 text-accent-green" />
        <span>Novo projeto</span>
      </button>
      <Modal isOpen={open} setIsOpen={setIsOpen}>
        <div className="h-20 w-20 rounded-md bg-accent-pink">
          Hello World
        </div>
      </Modal>
    </>
  )
}