'use client'

import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/translations"
import { useState, useEffect } from "react"
import { ArrowUpIcon } from "@heroicons/react/24/solid"

export function ScrollToTop() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    
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
      aria-label={
        getTranslation('footer.scrollToTop', language) || 'Volver arriba'
      }
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  )
}