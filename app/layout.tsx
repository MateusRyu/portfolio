import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import MainNavbar from '@/components/navbar/MainNavbar'
import MainFooter from '@/components/footer/MainFooter'

export const metadata: Metadata = {
  title: 'Portfólio do Ryu',
  description: 'Ryu é um desenvolvedor Full-Stack ansioso para solucionar problemas!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-theme="synthwave">
      <body className='flex flex-col'>
        <MainNavbar/>
        {children}
        <MainFooter/>
      </body>
    </html>
  )
}
