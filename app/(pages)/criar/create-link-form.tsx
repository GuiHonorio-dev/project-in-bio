"use client"

import { createLink } from "@/app/actions/create-link";
import { verifyLink } from "@/app/actions/verify-link";
import { Button } from "@/app/components/ui/button";
import { TextInput } from "@/app/components/ui/text-input";
import { sanitizeLink } from "@/app/lib/utils";
import { useRouter } from "next/navigation";
import { useState, type ChangeEvent, type FormEvent } from "react";

export function CreateLinkForm() {
  const [link, setLink] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  function handleLinkChange(event: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(event.target.value))
    setError("")
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Quando o usuario nao escreve um link
    if(link.length === 0) return setError("Escolha um link primeiro :)")

    // Quando o usuario escolhe um link que ja existe
    const isLinkTaken = await verifyLink(link)

    if(isLinkTaken) return setError("Desculpe, esse link ja esta em uso :( ")
    

    // Criar um perfil

    const isLinkCreated = await createLink(link)

    if(!isLinkCreated) return setError("Erro ao criar o perfil. Tente novamente.")

    router.push(`/${link}`)

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span className="text-white">projectinbio.com</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>
      <div>
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  )
}