'use client'

import { useEffect } from 'react'

export function ClientHtml({ children, locale }) {
  useEffect(() => {
    // Actualizar el atributo lang del documento
    if (locale) {
      document.documentElement.lang = locale
    }
  }, [locale])

  return <>{children}</>
}
