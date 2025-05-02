import { ClientHtml } from '@/components/client-html'
import { LanguageProvider } from '@/context/language-context'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - useTeam',
    default: 'useTeam - Smart solutions',
  },
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dkpotpaaf/image/upload/v1746139449/an5bmyw9ir95tblacfgr.png',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        url: 'https://res.cloudinary.com/dkpotpaaf/image/upload/v1746139449/an5bmyw9ir95tblacfgr.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: 'https://res.cloudinary.com/dkpotpaaf/image/upload/v1746139449/an5bmyw9ir95tblacfgr.png',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'icon',
        url: 'https://res.cloudinary.com/dkpotpaaf/image/upload/v1746139449/an5bmyw9ir95tblacfgr.png',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The useTeam Blog"
          href="/blog/feed.xml"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dkpotpaaf/image/upload/v1746139449/an5bmyw9ir95tblacfgr.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dkpotpaaf/image/upload/v1746139449/an5bmyw9ir95tblacfgr.png"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/dkpotpaaf/image/upload/v1746139449/an5bmyw9ir95tblacfgr.png"
          type="image/png"
        />
      </head>
      <body className="text-gray-950 antialiased">
        <LanguageProvider>
          <ClientHtml>{children}</ClientHtml>
        </LanguageProvider>
      </body>
    </html>
  )
}
