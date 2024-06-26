// resource page
import Link from 'next/link'
import Image from 'next/image'

export default function ResourcesPage() {
  return (
    <div className="mt-8 flex flex-col items-center">

      <div className="flex items-center justify-center space-x-4">

        <h1 className="main-heading gradient-hover">
          welcome to our resources collection
        </h1>

        <div className="image-container">
          <Image
            src="/images/safeComputer.png"
            alt="safe on his computer"
            width={100} // Adjust the width as needed
            height={100} // Adjust the height as needed
          />
        </div>
      </div>
      <div className="w-full border-b-2 border-gray-300 mt-4"></div>
    </div>
  )
}

