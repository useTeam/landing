'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { useTranslation } from 'react-i18next'
import Lenis from 'lenis'
import { useEffect, useState } from 'react'

// Nota: Los metadatos no funcionan en componentes 'use client'
// Se deben manejar en un layout.tsx o usando generateMetadata en un componente server

function ContactForm() {
  const { t } = useTranslation('Home')
  return (
    <form
      action="https://formspree.io/f/xeogebrj"
      method="POST"
      className="mt-8 max-w-xl"
    >
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm/6 font-medium text-gray-500"
          >
            {t('contact_form_name_label')}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder={t('contact_form_name_placeholder')}
            className="mt-1 block w-full rounded-lg border border-transparent bg-white/15 px-4 py-3 text-base text-gray-950 shadow-sm ring-1 ring-black/5 focus:border-transparent focus:ring-2 focus:ring-black/10"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-500"
          >
            {t('contact_form_email_label')}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder={t('contact_form_email_placeholder')}
            className="mt-1 block w-full rounded-lg border border-transparent bg-white/15 px-4 py-3 text-base text-gray-950 shadow-sm ring-1 ring-black/5 focus:border-transparent focus:ring-2 focus:ring-black/10"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm/6 font-medium text-gray-500"
          >
            {t('contact_form_message_label')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder={t('contact_form_message_placeholder')}
            className="mt-1 block w-full rounded-lg border border-transparent bg-white/15 px-4 py-3 text-base text-gray-950 shadow-sm ring-1 ring-black/5 focus:border-transparent focus:ring-2 focus:ring-black/10"
          />
        </div>
        <div>
          <Button type="submit" className="w-full">
            {t('contact_form_submit')}
          </Button>
        </div>
      </div>
    </form>
  )
}

function ContactInfo() {
  const { t } = useTranslation('Home')
  return (
    <div className="mt-12">
      <Subheading>{t('contact_info_title')}</Subheading>
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-500">
            {t('contact_info_email_label')}
          </h3>
          <p className="mt-1 text-sm text-gray-900">
            administracion@useteam.io
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">
            {t('contact_info_phone_label')}
          </h3>
          <p className="mt-1 text-sm text-gray-900">+34 696-888-533</p>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const { t } = useTranslation('Home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState(0)

  // Inicializar Lenis para smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
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

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Detectar cuando la navbar se vuelve fixed y obtener su altura
  useEffect(() => {
    const navbar = document.querySelector('header')
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight)
    }

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
    <main className="overflow-hidden">
      <GradientBackground />
      <div className="relative">
        {isScrolled && (
          <div style={{ height: `${navbarHeight}px` }} className="w-full"></div>
        )}
        <Container>
          <Navbar />
          <div className="mt-16 mb-32">
            <Subheading>{t('contact_subheading')}</Subheading>
            <Heading as="h1" className="mt-2">
              {t('contact_title')}
            </Heading>
            <Lead className="mt-6 max-w-3xl">
              {t('contact_subtitle')}
            </Lead>
            <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </main>
  )
}
