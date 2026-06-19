import type { Metadata } from 'next'
import { Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bergenbrannkonsult.no'),
  title: 'Brannprosjektering i Bergen | Bergen Brannkonsult',
  description:
    'Bergen Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Bergen og Hordaland. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
  alternates: {
    canonical: 'https://www.bergenbrannkonsult.no',
  },
  openGraph: {
    title: 'Brannprosjektering i Bergen | Bergen Brannkonsult',
    description:
      'Bergen Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Bergen og Hordaland.',
    url: 'https://www.bergenbrannkonsult.no',
    siteName: 'Bergen Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/images/hero.avif',
        width: 1200,
        height: 630,
        alt: 'Bergen Brannkonsult',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brannprosjektering i Bergen | Bergen Brannkonsult',
    description:
      'Bergen Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Bergen og Hordaland.',
  },
}

const TELEFON = '+47 484 81 914'
const GATEADRESSE = 'Haakon VII\'s gate 6'
const POSTNUMMER = '0161'
const SAME_AS_URLS: string[] = [
  // TODO: legg inn URL til Google Business Profile, Facebook, LinkedIn
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Bergen Brannkonsult AS',
  legalName: 'Bergen Brannkonsult AS',
  description: 'Sentralt godkjent brannrådgiverfirma med brannkonsept, brannprosjektering og branninspeksjon i Bergen og Hordaland.',
  foundingDate: '2013',
  telephone: TELEFON,
  email: 'post@bergenbrannkonsult.no',
  url: 'https://www.bergenbrannkonsult.no',
  openingHours: 'Mo-Fr 08:00-16:00',
  priceRange: 'Fra kr 15 000',
  address: {
    '@type': 'PostalAddress',
    streetAddress: GATEADRESSE,
    addressLocality: 'Oslo',
    postalCode: POSTNUMMER,
    addressCountry: 'NO',
  },
  areaServed: [
    { '@type': 'City', name: 'Bergen' },
    { '@type': 'AdministrativeArea', name: 'Hordaland' },
    { '@type': 'AdministrativeArea', name: 'Vestland' },
  ],
  ...(SAME_AS_URLS.length > 0 && { sameAs: SAME_AS_URLS }),
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bergen Brannkonsult',
  url: 'https://www.bergenbrannkonsult.no',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no" className={`${lato.variable} ${dancing.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={lato.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
