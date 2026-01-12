import { cookies } from 'next/headers'
import i18nConfig from '../../../i18nConfig'
import initTranslations from '@/app/i18n'

export async function generateMetadata() {
  const cookieStore = await cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value || i18nConfig.defaultLocale
  const { t } = await initTranslations(locale, ['Home'])

  return {
    title: t('contact_metadata_title'),
    description: t('contact_metadata_description'),
  }
}

export default function ContactLayout({ children }) {
  return <>{children}</>
}
