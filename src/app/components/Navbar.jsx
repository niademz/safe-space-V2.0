import Link from 'next/link'
import Image from 'next/image'
import Navimage from './safe-waving.png' // imports the image you wanna use can call it anything

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
      <Link href="/">Dashboard</Link>
      <Link href="/">Account</Link>
      <Link href="/chat room">Chat</Link>
      <Link href="/chat room">Resources</Link>
      <Link href="/weekly challenges">Challenges</Link>


      </nav>

  )
}