/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AqrXcaFjoVE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Resources() {
  return (
    <main className="w-full max-w-6xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">Mental Health Resources</h1>
          <p className="mt-2 text-muted-foreground md:text-xl">
            Explore our collection of Mental Health Resources to support you.
            <br></br>Reminder: Speaking to a professional can go a long way, we all want the best for you
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         
         {/* General Mental Health Resources */}
          <Link
            href="/generalRes"
            className="group relative block overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            prefetch={false}
          >
            <Image
              src="/images/generalRes.PNG"
              alt="General Mental Health Resources"
              width={600}
              height={400}
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">General Resources</h3>
              <p className="mt-2 text-muted-foreground">Visit our collection of uncategorized mental health resources</p>
            </div>
          </Link>

        {/* Anxiety Resources */}
          <Link
            href="/anxiety"
            className="group relative block overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            prefetch={false}
          >
            <Image
              src="/images/anxiety.png"
              alt="anxiety safe image"
              width={600}
              height={400}
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">Anxiety Resources</h3>
              <p className="mt-2 text-muted-foreground">
                Find Anxiety Support and Resources
              </p>
            </div>
          </Link>

        {/*ED Resources */}
          <Link
            href="/ed"
            className="group relative block overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            prefetch={false}
          >
            <Image
              src="/images/eating.png"
              alt="eating disorders safe image"
              width={600}
              height={400}
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">Eating Disorder Resources</h3>
              <p className="mt-2 text-muted-foreground">
                Find Eating Disorder Support and Resources</p>
            </div>
          </Link>

          
        {/*Depression Resources */}
        <Link
            href="/depression"
            className="group relative block overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
            prefetch={false}
          >
            <Image
              src="/images/depression.png"
              alt="depression safe image"
              width={600}
              height={400}
              className="h-48 w-full object-cover transition-all group-hover:scale-105"
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">Depression Resources</h3>
              <p className="mt-2 text-muted-foreground">
                Find Depression Support and Resources</p>
            </div>
          </Link>

        </div>

 <div className="text-center"> {/* New div with class 'text-center' */}
  <Link href="https://forms.gle/Jtj6w9Q5y6QDDqkd9"> {/* Replace "/about" with the actual path you want to link to */}
    <a className = "link-hover">Have a Resource you don&apos;t see? Click this text and send it in</a>
  </Link>
</div>


      </div>
    </main>
  )
}