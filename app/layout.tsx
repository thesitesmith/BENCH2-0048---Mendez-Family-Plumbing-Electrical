import type { Metadata } from 'next'
import { Archivo, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import Beacon from '../components/Beacon';

export const metadata = {
  title: "Mendez Family Plumbing & Electrical | Plumber in Austin, TX",
  description: "Mendez Family Plumbing & Electrical, Plumber in Austin, TX. Call (512) 813-0488.",
  openGraph: {
    title: "Mendez Family Plumbing & Electrical | Plumber in Austin, TX",
    description: "Mendez Family Plumbing & Electrical, Plumber in Austin, TX. Call (512) 813-0488.",
    type: "website",
    images: ["/images/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mendez Family Plumbing & Electrical | Plumber in Austin, TX",
    description: "Mendez Family Plumbing & Electrical, Plumber in Austin, TX. Call (512) 813-0488.",
    images: ["/images/og.jpg"],
  },
};


const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${sourceSans.variable} font-body bg-brand-background text-brand-text`}>
        <LocalBusinessSchema />
        <Beacon />
        {children}
      </body>
    </html>
  )
}
