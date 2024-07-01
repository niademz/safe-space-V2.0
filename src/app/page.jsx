// homepage
import Link from 'next/link'
import Image from 'next/image'
import UserGreetText from '@/components/UserGreetText'

export default function Home() {
  return (
    <main>
      <UserGreetText />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-8 ">
        
        {/* chat room */}
        <Link href="/chatroom">
          <div className="image-container">         
            <Image
              src="/images/chatRoomPic.png"
              alt="Chat Room Picture"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center mt-2">Chat Room</p>
          </div>
        </Link>

        {/* affirmation nation */}
        <Link href="/affirmationNation">
          <div>
            <Image
              src="/images/Add_a_heading_-_1.png"
              alt="Affirmation Nation"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center mt-2">Affirmation Nation</p>
          </div>
        </Link>

        {/* Resources */}
        <Link href="/resources">
          <div>
            <Image
              src="/images/Untitled_Artwork (2).png"
              alt="Resources"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center mt-2">Resources</p>
          </div>
        </Link>

        {/* Community Challenges */}
        <Link href="/page3">
          <div>
            <Image
              src="/images/Trying_your_best_-as.png"
              alt="Weekly Challenges"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center mt-2">Weekly Challenges</p>
          </div>
        </Link>

        {/* Music! */}
        <Link href="/music">
          <div>
            <Image
              src="/images/safe_dancing (3).png"
              alt="Safe Dancing"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center mt-2">Music</p>
          </div>
        </Link>

        {/* Have an issue? */}
        <Link href="/haveIssue">
          <div>
            <Image
              src="/images/Untitled_Artwork (3).png"
              alt="Have an Issue"
              width={500}
              height={300}
              className="rounded-lg"
            />
            <p className="text-center bold mt-2">Have an Issue?</p>
          </div>
        </Link>
        
      </div>

      
    </main>
  )
}
