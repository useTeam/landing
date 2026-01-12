'use client'

import { useTranslation } from 'react-i18next'
import { useState, useEffect } from "react"
import { ArrowUp } from 'lucide-react'
import { useLenis } from '@/providers/LenisProvider'

export function ScrollToTop() {
  const { t } = useTranslation('Home')
  const [isVisible, setIsVisible] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = (e) => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: false })
    } else {
      // Fallback si Lenis no está disponible
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    
    e.currentTarget.blur()
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 rounded-full bg-gray-900 p-3 text-white shadow-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 cursor-pointer ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-16 opacity-0'
      }`}
      aria-label={t('footer_scrollToTop')}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}