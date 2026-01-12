'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'

const LenisContext = createContext(null)

export function useLenis() {
  const context = useContext(LenisContext)
  // Retornar null si no está disponible en lugar de lanzar error
  // para permitir fallback en componentes
  return context
}

export function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    setLenis(lenisInstance)

    function raf(time) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenisInstance.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}
