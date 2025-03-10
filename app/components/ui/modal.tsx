'use client'

import { useOnClickOutside } from "@/app/hooks/onClickOutside"
import { useRef } from "react"

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Modal({ children, isOpen, setIsOpen }: ModalProps) {

  const ref = useRef<HTMLDivElement>(null)
  
  useOnClickOutside(ref, () => setIsOpen(false))

  if(!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#787878]/5 flex items-center justify-center backdrop-blur-md z-50">
      <div ref={ref} className="">{children}</div>
    </div>
  )
}