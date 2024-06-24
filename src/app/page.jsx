// homepage
//round lg rounds the white containers & the immages themselves
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main>

      {/* chat room */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
          <Link href="/page1">
            <div>
              <Image
                src="/images/chatRoomPic.png" //uses next/image import instead of normal way
                alt="chat room picture"
                width={500}
                height={300}
                className="rounded-lg" //rounds image
                // placeholder="blur"
              />
              <p className="text-center mt-2">Chat Room </p>
            </div>
          </Link>

{/* affirmation nation */}
          <Link href="/page2">
            <div>
              <Image
                src="/images/Add_a_heading_-_1.png"
                alt="Affirmation Nation"
                width={500}
                height={300}
                className="rounded-lg"
                // placeholder="blur"
              />
              <p className="text-center mt-2">Affirmation Nation</p>
            </div>
          </Link>

{/* Resources  */}
          <Link href="/page3">
            <div>
              <Image
                src="/images/Untitled_Artwork (2).png"
                alt="Resources"
                width={500}
                height={300}
                className="rounded-lg"
                // placeholder="blur"
              />
              <p className="text-center mt-2">Resources</p>
            </div>
          </Link>

          {/* Community Challenges */}
          <Link href="/page3">
            <div>
              <Image
                src="/images/Trying_your_best_-as.png"
                alt="Affirmation Nation"
                width={500}
                height={300}
                className="rounded-lg"
                // placeholder="blur"
              />
              <p className="text-center mt-2">Weekly challenges</p>
            </div>
          </Link>

          {/* Music!  */}
          <Link href="/page3">
            <div>
              <Image
                src="/images/safe_dancing (3).png"
                alt="safe dancing"
                width={500}
                height={300}
                className="rounded-lg"
                // placeholder="blur"
              />
              <p className="text-center mt-2">Music</p>
            </div>
          </Link>

          {/* Have an issue?  */}
          <Link href="/page3">
            <div>
              <Image
                src="/images/Untitled_Artwork (3).png"
                alt="Affirmation Nation"
                width={500}
                height={300}
                className="rounded-lg"
                // placeholder="blur"
              />
              <p className="text-center bold mt-2">Have an issue?</p>
            </div>
          </Link>

          
      </div>
    </main>
  )
}
