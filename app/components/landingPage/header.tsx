import logo from '@/public/logo.svg'
import Image from 'next/image'
import { Button } from '../ui/button'
import { auth } from '@/app/lib/auth'
import { manageAuth } from '@/app/actions/manage-auth'
export async function Header() {

  const session = await auth()
  
 
  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <Image src={logo} alt='Projectinbio Logo' />
        <h3 className='text-white text-2xl font-bold'>ProjectInBio</h3>
      </div>

      <div className='flex items-center gap-4'>
        { session && <Button>Minha Página</Button>}
        
        <form action={manageAuth}>
          <Button>{ session ? "Sair" : "Login" }</Button>
        </form>
        
      </div>
    </div>
  )
}