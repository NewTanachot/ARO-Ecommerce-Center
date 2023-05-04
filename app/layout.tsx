import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from '../component/navbar/navbar'
import SideBar from '../component/sidebar/sidebar'
import Icon from '../public/image/favicon.ico'
import { Athiti } from 'next/font/google' // Sriracha, Itim, Kanit, Sarabun, Mali, Noto_Sans_Thai, Noto_Sans_Thai_Looped, 

const googleFont = Athiti({
    weight: '600',
    subsets: ['latin'],
  })

export const metadata = {
  title: 'ARO Ecommerce Center',
  description: 'ARO Ecommerce Center',
  icons: {
    icon: Icon.src,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
        <body className={googleFont.className}>
            <NavBar></NavBar>
            <div className='row'>
                <div className='col-3 bg-light'>
                    <div className='ps-3 pe-2 py-4'>
                        <SideBar></SideBar>
                    </div>
                </div>
                <div className='col-9 p-0 bg-light border-start border-2 border-secondary'>
                    <div className='p-2 pe-4'>
                        {children}
                    </div>
                </div>
            </div>
        </body>
    </html>
  )
}
