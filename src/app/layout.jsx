import { ClientHtml } from '@/components/client-html'
import { LanguageProvider } from '@/context/language-context'
import TranslationsProvider from '@/providers/TranslationProvider'
import '@/styles/tailwind.css'
import initTranslations from '@/app/i18n'
import { dir } from "i18next";
import { cookies } from 'next/headers'
import i18nConfig from '../../i18nConfig'
import { ScrollToTop } from '../components/scroll-to-top'

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

export default async function RootLayout({ children }) {
  const i18nNamespaces = ['Home', 'commons']
  const cookieStore = await cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value || i18nConfig.defaultLocale
  const { resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <html lang={locale} dir={dir(locale)}>
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
        <TranslationsProvider
          locale={locale}
          namespaces={i18nNamespaces}
          resources={resources}
        >
          <LanguageProvider>
            <ClientHtml>{children}</ClientHtml>
            <ScrollToTop />
          </LanguageProvider>
        </TranslationsProvider>
      </body>
    </html>
  )
}
