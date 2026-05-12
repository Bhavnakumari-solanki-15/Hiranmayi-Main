import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
});

export const metadata: Metadata = {
  title: 'Hiranmayi | Green Luxury Villas',
  description: 'Experience sophisticated green luxury and tranquil villa living in the heart of nature.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

import { SmoothScroll } from '@/components/smooth-scroll'
import { BadgeRemover } from '@/components/badge-remover'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        <BadgeRemover />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
