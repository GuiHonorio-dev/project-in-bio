import { Header } from "@/app/components/landingPage/header";
import { Button } from "@/app/components/ui/button";
import { TextInput } from "@/app/components/ui/text-input";
import { Rocket } from "lucide-react";
import { CreateLinkForm } from "./create-link-form";

export default function Criar() {
  return (
    <div>
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
          <Rocket />
        </div>
        <CreateLinkForm />
      </div> 
    </div>    
  )
}