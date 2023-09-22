
import MarqueeTitle from '@/components/MarqueeTitle/MarqueeTitle'
import './globals.css'
import { Inter } from 'next/font/google'
import UpperNavbar from '@/components/UpperNavbar/UpperNavbar'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sky-Mail24',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link href="https://fonts.maateen.me/solaiman-lipi/font.css" rel="stylesheet" />
      <body className={inter.className} style={{ position: "relative" }}>
        <div className="fixed bottom-0 right-0 left-0 z-50 border-y-black border-2">
          <MarqueeTitle />
        </div>
        <UpperNavbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
