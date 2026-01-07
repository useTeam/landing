'use client'

import { useLanguage } from '@/context/language-context'
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
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
import useLanguageChanger from '@/hooks/useLanguageChanger'
import { useTranslation } from 'react-i18next'

function LanguageToggle({ isCompanyOrBlog }) {
  const { handleChangeLanguage, currentLocale } = useLanguageChanger()

  return (
    <button
      onClick={() => handleChangeLanguage(currentLocale === 'es' ? 'en' : 'es')}
      className={`lg:ml-4 relative inline-flex items-center rounded-full p-1 transition-colors cursor-pointer ${
        isCompanyOrBlog
          ? 'bg-gray-100 hover:bg-gray-200'
          : 'bg-white/10 hover:bg-white/20'
      }`}
      aria-label={`Cambiar a ${currentLocale === 'es' ? 'inglés' : 'español'}`}
    >
      {/* Fondo deslizante */}
      <span
        className={`absolute left-1 top-1 bottom-1 w-[2.75rem] rounded-full transition-transform duration-300 ease-in-out ${
          isCompanyOrBlog ? 'bg-white shadow-sm' : 'bg-white/20'
        } ${currentLocale === 'en' ? 'translate-x-[2.75rem]' : 'translate-x-0'}`}
      />
      
      {/* Opción ES */}
      <span
        className={`relative z-10 flex items-center justify-center w-[2.75rem] py-1.5 text-sm font-semibold transition-colors ${
          currentLocale === 'es'
            ? isCompanyOrBlog
              ? 'text-gray-950'
              : 'text-white'
            : isCompanyOrBlog
              ? 'text-gray-500'
              : 'text-white/50'
        }`}
      >
        ES
      </span>
      
      {/* Opción EN */}
      <span
        className={`relative z-10 flex items-center justify-center w-[2.75rem] py-1.5 text-sm font-semibold transition-colors ${
          currentLocale === 'en'
            ? isCompanyOrBlog
              ? 'text-gray-950'
              : 'text-white'
            : isCompanyOrBlog
              ? 'text-gray-500'
              : 'text-white/50'
        }`}
      >
        EN
      </span>
    </button>
  )
}

function getTranslatedLinks() {
  const { t } = useTranslation(['Home'])
  
  return [
    { href: '/contact', label: t('navbar_contact') },
    { href: '/company', label: t('navbar_company') },
    { href: '/blog', label: "Blog" },
  ]
}

function DesktopNav({ isCompanyOrBlog }) {
  const { language } = useLanguage()
  const translatedLinks = getTranslatedLinks(language)

  return (
    <nav className="relative hidden items-center lg:flex">
      {translatedLinks.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className={`flex items-center px-4 py-3 text-base font-medium ${
              isCompanyOrBlog ? 'text-gray-950' : 'text-white'
            } bg-blend-multiply data-hover:bg-white/[2.5%]`}
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
      <LanguageToggle isCompanyOrBlog={isCompanyOrBlog} />
    </nav>
  )
}

function MobileNavButton({ isCompanyOrBlog }) {
  return (
    <DisclosureButton
      className={`flex size-12 items-center justify-center self-center rounded-lg lg:hidden ${
        isCompanyOrBlog
          ? 'text-gray-950 hover:bg-gray-100'
          : 'text-white hover:bg-white/10'
      }`}
      aria-label="Open main menu"
    >
      <Bars3BottomRightIcon className="size-8" />
    </DisclosureButton>
  )
}

function MobileNav({ isCompanyOrBlog }) {
  const { language } = useLanguage()
  const translatedLinks = getTranslatedLinks(language)

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
                isCompanyOrBlog ? 'text-gray-950' : 'text-white'
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
          <LanguageToggle isCompanyOrBlog={isCompanyOrBlog} />
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
  const gridColor = isCompanyOrBlog ? 'black' : 'white'
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

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={`${
          isClient && isScrolled
            ? `fixed top-0 right-0 left-0 z-50 backdrop-blur-sm transition-all duration-300 ${
                isCompanyOrBlog ? 'bg-white/80' : 'bg-gray-900/70'
              }`
            : ''
        }`}
      >
        <div
          className={`${isClient && isScrolled ? 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' : ''}`}
        >
          <Disclosure
            as="header"
            className={isClient && isScrolled ? '' : 'pt-12 sm:pt-16'}
          >
            <PlusGrid color={gridColor}>
              <PlusGridRow
                className="relative flex justify-between"
                color={gridColor}
              >
                <div className="relative flex gap-6">
                  <PlusGridItem className="py-3">
                    <Link
                      href="/"
                      title={getTranslation('navigation.home', language)}
                    >
                      <Logo
                        className="h-10"
                        textClassName={
                          isCompanyOrBlog
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
                <DesktopNav isCompanyOrBlog={isCompanyOrBlog} />
                <MobileNavButton isCompanyOrBlog={isCompanyOrBlog} />
              </PlusGridRow>
            </PlusGrid>
            <MobileNav isCompanyOrBlog={isCompanyOrBlog} />
          </Disclosure>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
