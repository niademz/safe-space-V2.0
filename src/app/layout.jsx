import './globals.css'
import { Rubik } from 'next/font/google'


// components
import Navbar from './components/Navbar'
import { Toaster } from 'sonner'

const rubik = Rubik({ 
  subsets: ['latin'], 
})

export const metadata = {
  title: 'Safe Space',
  description: 'mental health platform for teenagers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
        <Toaster position="top-center"/>
      </body>
    </html>
  )
}
