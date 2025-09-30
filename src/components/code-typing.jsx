'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CodeTyping() {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const codeSnippets = [
    "import { innovation } from 'useTeam';",
    "import { collaboration } from 'useTeam';",
    "import { teamwork } from 'useTeam';",
    "import { productivity } from 'useTeam';",
    "import { success } from 'useTeam';",
  ]

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % codeSnippets.length
      const fullText = codeSnippets[currentIndex]

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      )

      // Controlar la velocidad de escritura
      if (!isDeleting && text === fullText) {
        // Texto completo, esperar 3 segundos antes de empezar a borrar
        setTimeout(() => setIsDeleting(true), 3000)
        setTypingSpeed(100) // Velocidad de borrado
      } else if (isDeleting && text === '') {
        // Texto borrado, pasar al siguiente snippet
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(150) // Velocidad de escritura
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, codeSnippets])

  // Colorizar el código según el patrón completo, pero mostrar solo la parte visible
  const colorizeCode = (code) => {
    if (!code) return null

    // Obtenemos el patrón completo del snippet actual para saber cómo colorear
    const currentIndex = loopNum % codeSnippets.length
    const fullPattern = codeSnippets[currentIndex]

    // Creamos un array con cada carácter ya coloreado según corresponde en el patrón completo
    return Array.from(code).map((char, index) => {
      // Determinamos el color basado en la posición en el patrón completo
      let color = ''

      // Keywords: import, from
      if (
        (index >= 0 &&
          index <= 5 &&
          fullPattern.substring(0, 6).charAt(index) === char) || // import
        (fullPattern.indexOf('from') !== -1 &&
          index >= fullPattern.indexOf('from') &&
          index < fullPattern.indexOf('from') + 4) // from
      ) {
        color = 'text-yellow-400'
      }
      // Símbolos: {, }, ;
      else if (char === '{' || char === '}' || char === ';') {
        color = 'text-yellow-400'
      }
      // Variable entre llaves
      else if (
        fullPattern.indexOf('{') !== -1 &&
        fullPattern.indexOf('}') !== -1 &&
        index > fullPattern.indexOf('{') &&
        index < fullPattern.indexOf('}') &&
        char !== ' '
      ) {
        color = 'text-pink-400'
      }
      // Módulo (useTeam) y comillas
      else if (
        char === "'" ||
        (fullPattern.indexOf("'") !== -1 &&
          index > fullPattern.indexOf("'") &&
          index < fullPattern.lastIndexOf("'"))
      ) {
        color = 'text-orange-400'
      }

      // Devolvemos el carácter con su color correspondiente
      return (
        <span key={index} className={color}>
          {char}
        </span>
      )
    })
  }

  return (
    <motion.div
      className="h-full w-full overflow-hidden rounded-lg border border-gray-700 bg-gray-900/90 p-6 px-7 shadow-2xl md:p-6 md:px-8"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="mb-3 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
        <span className="ml-2 text-xs text-gray-400">script.js</span>
        <div className="ml-auto text-xs text-gray-400 opacity-70">
          useTeam IDE
        </div>
      </div>
      <div className="flex h-[calc(100%_-_32px)] items-center justify-center">
        <pre className="w-full font-mono text-sm sm:text-base md:text-lg lg:text-xl">
          <code>
            {colorizeCode(text)}
            <span className="animate-pulse text-orange-400">|</span>
          </code>
        </pre>
      </div>
    </motion.div>
  )
}
