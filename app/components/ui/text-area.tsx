import { cn } from "@/app/lib/utils";

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea {...props} className={cn(`
      w-full p-3 bg-background-secondary text-white placeholder:text-placeholder rounded-xl 
      border border-transparent hover:border-borderSecondary hover:text-content-body active:border-borderTertiary


      `, props.className)} />
  )
}