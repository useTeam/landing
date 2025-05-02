'use client'

import { useLanguage } from '@/context/language-context'

export function LanguageSwitcher({ isCompanyOrBlog }) {
  const { language, toggleLanguage } = useLanguage()
  const buttonText = language === 'es' ? 'EN' : 'ES'

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${
        isCompanyOrBlog
          ? 'border border-gray-200 text-gray-950 hover:bg-gray-100'
          : 'border border-white/20 text-white hover:bg-white/10'
      }`}
      aria-label={`Cambiar a ${language === 'es' ? 'inglés' : 'español'}`}
    >
      {buttonText}
    </button>
  )
}
