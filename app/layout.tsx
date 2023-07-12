import './globals.css'
import { Footer ,Navbar } from '@/components'
export const metadata = {
  title: 'Car Auto Hub ',
  description: 'Discover the best cars on planet earth ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/sport-car.svg' />
      </head>
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
       </body>
    </html>
  )
}
