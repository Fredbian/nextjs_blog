import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Providers } from '@/GlobalRedux/provider';
import ThemeProvider from '@/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider>
          <div className='container'>
            <div className='wrapper'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
