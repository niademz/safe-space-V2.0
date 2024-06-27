import Link from 'next/link'
import Image from 'next/image'
import Navimage from './safe-waving.png' // imports the image you wanna use can call it anything
import LoginButton from '@/components/LoginLogoutButton'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Navimage} //source same name as the import
        alt='safe waving' //normal alt text
        width={200} //auto scales height based on width
        placeholder='blur' //shows while the image loads like colours of the image
        quality={100} //maximum quality
      />
      <h1>welcome!</h1>
      <Link href="/">Home</Link>
      <Link href="/account">Account</Link>
      <Link href="/chatroom">Chat</Link>
      <Link href="/chatroom">Resources</Link>
      <Link href="/weekly challenges">Challenges</Link>
      <LoginButton />


      </nav>

  )
}