'use client'

import { useLanguage } from '@/context/language-context'
import { useEffect } from 'react'

export function ClientHtml({ children }) {
  const { language, isClient } = useLanguage()

  useEffect(() => {
    // Solo actualizar el atributo lang si estamos en el cliente
    if (isClient) {
      document.documentElement.lang = language
    }
  }, [language, isClient])

  return <>{children}</>
}
