'use client'

import useLanguageChanger from '@/hooks/useLanguageChanger'

export function LanguageSwitcher({ isCompanyOrBlog }) {
  const { handleChangeLanguage, currentLocale } = useLanguageChanger()
  const buttonText = currentLocale === 'es' ? 'EN' : 'ES'

  return (
    <button
      onClick={() => handleChangeLanguage(currentLocale === 'es' ? 'en' : 'es')}
      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
        isCompanyOrBlog
          ? 'border border-gray-200 text-gray-950 hover:bg-gray-100'
          : 'border border-white/20 text-white hover:bg-white/10'
      }`}
      aria-label={`Cambiar a ${currentLocale === 'es' ? 'inglés' : 'español'}`}
    >
      {buttonText}
    </button>
  )
}
