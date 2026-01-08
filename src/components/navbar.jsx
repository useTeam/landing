'use client'

import { useLanguage } from '@/context/language-context'
import useLanguageChanger from '@/hooks/useLanguageChanger'
import { getTranslation } from '@/translations'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

function LanguageToggle({ useCompanyStyles }) {
  const { handleChangeLanguage, currentLocale } = useLanguageChanger()

  return (
    <button
      onClick={() => handleChangeLanguage(currentLocale === 'es' ? 'en' : 'es')}
      className={`relative inline-flex cursor-pointer items-center rounded-full p-1 transition-colors lg:ml-4 ${
        useCompanyStyles
          ? 'bg-white/10 hover:bg-white/20'
          : 'bg-white/10 hover:bg-white/20'
      }`}
      aria-label={`Cambiar a ${currentLocale === 'es' ? 'inglés' : 'español'}`}
    >
      {/* Fondo deslizante */}
      <span
        className={`absolute top-1 bottom-1 left-1 w-[2.75rem] rounded-full transition-transform duration-300 ease-in-out ${
          useCompanyStyles ? 'bg-white/20 shadow-sm' : 'bg-white/20'
        } ${currentLocale === 'en' ? 'translate-x-[2.75rem]' : 'translate-x-0'}`}
      />

      {/* Opción ES */}
      <span
        className={`relative z-10 flex w-[2.75rem] items-center justify-center py-1.5 text-sm font-semibold transition-colors ${
          currentLocale === 'es'
            ? useCompanyStyles
              ? 'text-white'
              : 'text-white'
            : useCompanyStyles
              ? 'text-white/50'
              : 'text-white/50'
        }`}
      >
        ES
      </span>

      {/* Opción EN */}
      <span
        className={`relative z-10 flex w-[2.75rem] items-center justify-center py-1.5 text-sm font-semibold transition-colors ${
          currentLocale === 'en'
            ? useCompanyStyles
              ? 'text-white'
              : 'text-white'
            : useCompanyStyles
              ? 'text-white/50'
              : 'text-white/50'
        }`}
      >
        EN
      </span>
    </button>
  )
}

function getTranslatedLinks() {
  const { t, i18n } = useTranslation(['Home'])

  // Forzar re-render cuando cambia el idioma
  const currentLanguage = i18n.language

  return [
    { href: '/contact', label: t('navbar_contact', { lng: currentLanguage }) },
    { href: '/company', label: t('navbar_company', { lng: currentLanguage }) },
    { href: '/blog', label: 'Blog' },
  ]
}

function DesktopNav({ useCompanyStyles, gridColor, isCompanyOrBlog }) {
  const translatedLinks = getTranslatedLinks()

  return (
    <nav className="relative hidden items-center lg:flex">
      {translatedLinks.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex" color={gridColor}>
          <Link
            href={href}
            className={`flex items-center px-4 py-3 text-base font-medium ${
              isCompanyOrBlog ? 'text-white' : (useCompanyStyles ? 'text-gray-950' : 'text-white')
            } bg-blend-multiply data-hover:bg-white/[2.5%]`}
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
      <LanguageToggle useCompanyStyles={useCompanyStyles} />
    </nav>
  )
}

function MobileNavButton({ useCompanyStyles }) {
  return (
    <DisclosureButton
    className={`flex size-12 items-center justify-end self-center rounded-lg lg:hidden ${
      useCompanyStyles
        ? 'text-gray-950 hover:bg-gray-100'
        : 'text-white hover:bg-white/10'
    }`}
      aria-label="Open main menu"
    >
      <Bars3BottomRightIcon className="size-8" />
    </DisclosureButton>
  )
}

function MobileNav({ useCompanyStyles, isCompanyOrBlog }) {
  const translatedLinks = getTranslatedLinks()

  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {translatedLinks.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link
              href={href}
              className={`text-base font-medium ${
                isCompanyOrBlog ? 'text-white' : (useCompanyStyles ? 'text-gray-950' : 'text-white')
              }`}
            >
              {label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{
            duration: 0.15,
            ease: 'easeInOut',
            rotateX: { duration: 0.3, delay: translatedLinks.length * 0.1 },
          }}
        >
          <LanguageToggle useCompanyStyles={useCompanyStyles} />
        </motion.div>
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 top-0 border-t border-black/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }) {
  const pathname = usePathname()
  const isCompanyOrBlog =
    pathname === '/company' ||
    pathname === '/blog' ||
    pathname?.startsWith('/blog/') ||
    pathname === '/contact'
  const { language } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Determinar el color de la grid y el estilo según el estado de scroll
  // Para company/blog/contact: sin scroll = negro, con scroll = blanco
  // Para home: siempre blanco
  const gridColor = isCompanyOrBlog
    ? isScrolled
      ? 'white'
      : 'black'
    : 'white'
  
  // Determinar si usar estilos de company/blog (negro) o home (blanco)
  // Nota: El texto siempre será blanco en contact/company/blog, useCompanyStyles solo afecta otros elementos
  const useCompanyStyles = isCompanyOrBlog && !isScrolled
  const isHome = pathname === '/'

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={`${
          isClient && isScrolled
            ? `fixed top-0 right-0 left-0 z-50 backdrop-blur-sm ${
                pathname === '/' ? 'transition-all duration-300' : ''
              } ${
                isCompanyOrBlog ? 'bg-gray-900/70' : 'bg-gray-900/70'
              }`
            : ''
        }`}
      >
        <div
          className={`${isClient && isScrolled ? 'mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 xl:px-8 2xl:px-0' : 'px-0'}`}
        >
          <Disclosure
            as="header"
            className={isClient && isScrolled ? '' : 'pt-12 sm:pt-16'}
          >
            <PlusGrid color={gridColor}>
              <PlusGridRow
                className="relative flex justify-between"
                color={gridColor}
                showBackdrop={
                  pathname === '/' 
                    ? false 
                    : isCompanyOrBlog 
                      ? !isScrolled 
                      : true
                }
                isHome={isHome}
              >
                <div className="relative flex gap-6">
                  <PlusGridItem className="py-3" color={gridColor}>
                    <Link
                      href="/"
                      title={getTranslation('navigation.home', language)}
                    >
                      <Logo
                        className="h-10"
                        textClassName={
                          isCompanyOrBlog
                            ? 'text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]'
                            : useCompanyStyles
                              ? 'text-gray-950'
                              : 'text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]'
                        }
                      />
                    </Link>
                  </PlusGridItem>
                  {banner && (
                    <div className="relative hidden items-center py-3 lg:flex">
                      {banner}
                    </div>
                  )}
                </div>
                <DesktopNav useCompanyStyles={useCompanyStyles} gridColor={gridColor} isCompanyOrBlog={isCompanyOrBlog} />
                <MobileNavButton useCompanyStyles={useCompanyStyles} />
              </PlusGridRow>
            </PlusGrid>
            <MobileNav useCompanyStyles={useCompanyStyles} isCompanyOrBlog={isCompanyOrBlog} />
          </Disclosure>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
