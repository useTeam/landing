'use client'

import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/translations'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

function LanguageToggle({ isCompanyOrBlog }) {
  const { language, toggleLanguage } = useLanguage()
  const buttonText = language === 'es' ? 'EN' : 'ES'

  return (
    <button
      onClick={toggleLanguage}
      className={`ml-4 flex items-center rounded-md px-3 py-2 text-sm font-medium ${
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

function getTranslatedLinks(language) {
  return [
    { href: '/contact', label: getTranslation('navigation.contact', language) },
    { href: '/company', label: getTranslation('navigation.company', language) },
    { href: '/blog', label: getTranslation('navigation.blog', language) },
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

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-hover:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
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
                <MobileNavButton />
              </PlusGridRow>
            </PlusGrid>
            <MobileNav isCompanyOrBlog={isCompanyOrBlog} />
          </Disclosure>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
