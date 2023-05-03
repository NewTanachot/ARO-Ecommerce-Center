import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Inter } from 'next/font/google'
import NavBar from '../component/navbar'
import SideBar from '../component/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ARO Ecommerce Center',
  description: 'ARO Ecommerce Center',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <NavBar></NavBar>
            <div className='row'>
                <div className='col-3 bg-light bg-gradient'>
                    <div className='ps-3 pe-2 py-4'>
                        <SideBar></SideBar>
                    </div>
                </div>
                <div className='col-9 p-0 bg-light bg-gradient border-start border-2 border-secondary'>
                  <div className='p-2 pe-4'>
                    {children}
                  </div>
                </div>
            </div>
        </body>
    </html>
  )
}
