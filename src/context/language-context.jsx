'use client'

import { createContext, useContext, useEffect, useState } from 'react'

// Creamos el contexto de idioma
const LanguageContext = createContext()

// Hook personalizado para usar el contexto de idioma
export function useLanguage() {
  return useContext(LanguageContext)
}

// Proveedor del contexto de idioma
export function LanguageProvider({ children }) {
  // Estado para almacenar el idioma actual (por defecto, español)
  const [language, setLanguage] = useState('es')
  const [isClient, setIsClient] = useState(false)

  // Efecto para detectar si estamos en el cliente
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Efecto para cargar el idioma guardado en localStorage al iniciar
  useEffect(() => {
    if (isClient) {
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage) {
        setLanguage(savedLanguage)
      }
    }
  }, [isClient])

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es'
    setLanguage(newLanguage)
    if (isClient) {
      localStorage.setItem('language', newLanguage)
    }
  }

  // Valor que se proporcionará a través del contexto
  const value = {
    language,
    toggleLanguage,
    isSpanish: language === 'es',
    isEnglish: language === 'en',
    isClient,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
