'use client'

import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { CodeTyping } from '@/components/code-typing'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { Link } from '@/components/link'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import LogoCarousel from '@/components/logocarousel'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { AnimatedHeading, Subheading } from '@/components/text'
import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/translations'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect, useRef, useState } from 'react'

function CoreStudioCard({
  eyebrow,
  title,
  description,
  delay = 0,
  size = 'medium',
  direction = 'up', // 'up', 'down', 'left', 'right'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const directions = {
    up: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
  }

  const sizeClasses = {
    large: 'lg:col-span-2',
    medium: 'lg:col-span-1',
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={directions[direction]}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={`group relative flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#00C6FF]/90 to-[#007BFF]/90 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#00C6FF]/20 ${sizeClasses[size]}`}
    >
      {/* Eyebrow */}
      <div className="mb-4">
        <span className="inline-block rounded-full bg-black/20 px-3 py-1 text-xs font-semibold tracking-wider text-white/90 uppercase">
          {eyebrow}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="mb-3 font-bold text-2xl text-white transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm leading-relaxed text-white/80">{description}</p>
        )}
      </div>

      {/* Arrow Icon */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-black/30">
          <ArrowUpRightIcon className="h-5 w-5 text-white" />
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 opacity-0 transition-opacity duration-300 group-hover:from-white/5 group-hover:to-white/10 group-hover:opacity-100" />
    </motion.div>
  )
}

function CoreStudiosSection() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 })
  const { language } = useLanguage()

  return (
    <div className="relative overflow-hidden bg-black py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Title Section */}
        <Subheading>
          {getTranslation('feature.subheading', language)}
        </Subheading>

        <AnimatedHeading
          as="h2"
          className="mb-16 font-bold text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {getTranslation('feature.title', language)}
        </AnimatedHeading>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CoreStudioCard
            eyebrow="DATA AND AI"
            title="La IA ya está transformando a muchas empresas. ¿Estás aprovechando su potencial?"
            size="large"
            direction="left"
            delay={0.1}
          />

          <CoreStudioCard
            eyebrow="BUSINESS HACKING"
            title="¿Cuál es tu próxima fuente de ingresos?"
            size="medium"
            direction="right"
            delay={0.2}
          />

          <CoreStudioCard
            eyebrow="PROCESS OPTIMIZATION"
            title="Eficiencia liderada por la tecnología."
            size="medium"
            direction="left"
            delay={0.3}
          />

          <CoreStudioCard
            eyebrow="FAST CODE"
            title="Superapps y low code: ¿Cómo transformarán el futuro?"
            size="medium"
            direction="up"
            delay={0.4}
          />

          <CoreStudioCard
            eyebrow="CONNECTED EXPERIENCES"
            title="Deleita a tus clientes para crear fans para toda la vida"
            size="medium"
            direction="right"
            delay={0.5}
          />
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const { language } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState(0)

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
    <div className="relative">
      {isScrolled && (
        <div style={{ height: `${navbarHeight}px` }} className="w-full"></div>
      )}
      <Gradient className="absolute inset-3 bottom-0 rounded-3xl ring-1 ring-black/5 ring-inset lg:inset-8 lg:rounded-4xl" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
              className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
            >
              {getTranslation('hero.banner', language)}
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="relative pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center">
            <div className="w-full md:w-[55%] lg:w-3/5">
              <h1 className="animacionInferior max-w-sm font-display text-4xl/[0.9] font-medium tracking-tight text-balance text-white sm:text-7xl/[0.8] md:text-8xl/[0.8]">
                {getTranslation('hero.title', language)}
              </h1>
              <p className="animacionSuperiorTexto mt-8 max-w-2xl text-base/7 font-medium text-white/75 sm:text-2xl/8">
                {getTranslation('hero.description', language)}
              </p>
              <div className="animacionSuperiorTexto mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row md:mb-0">
                <Button href="/contact">
                  {getTranslation('common.getStarted', language)}
                </Button>
              </div>
            </div>

            <div className="h-[200px] w-full sm:h-[250px] md:h-[280px] md:w-[45%] lg:w-2/5">
              <CodeTyping />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  const { language } = useLanguage()
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <AnimatedHeading as="h2" className="max-w-3xl">
          {getTranslation('feature.title', language)}
        </AnimatedHeading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  const { language } = useLanguage()
  return (
    <Container>
      <Subheading>{getTranslation('bento.sales', language)}</Subheading>
      <AnimatedHeading as="h3" className="mt-2 max-w-7xl">
        {getTranslation('bento.heading', language)}
      </AnimatedHeading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow={getTranslation('bento.cards.insight.eyebrow', language)}
          title={getTranslation('bento.cards.insight.title', language)}
          description={getTranslation(
            'bento.cards.insight.description',
            language,
          )}
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
          direction="left"
          delay={0}
        />
        <BentoCard
          eyebrow={getTranslation('bento.cards.analysis.eyebrow', language)}
          title={getTranslation('bento.cards.analysis.title', language)}
          description={getTranslation(
            'bento.cards.analysis.description',
            language,
          )}
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
          direction="right"
          delay={0.2}
        />
        <BentoCard
          eyebrow={getTranslation('bento.cards.speed.eyebrow', language)}
          title={getTranslation('bento.cards.speed.title', language)}
          description={getTranslation(
            'bento.cards.speed.description',
            language,
          )}
          graphic={
            <div className="flex size-full pt-10 pl-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
          direction="left"
          delay={0.4}
        />
        <BentoCard
          eyebrow={getTranslation('bento.cards.source.eyebrow', language)}
          title={getTranslation('bento.cards.source.title', language)}
          description={getTranslation(
            'bento.cards.source.description',
            language,
          )}
          graphic={<LogoCluster />}
          className="lg:col-span-2"
          direction="up"
          delay={0.5}
        />
        <BentoCard
          eyebrow={getTranslation('bento.cards.limitless.eyebrow', language)}
          title={getTranslation('bento.cards.limitless.title', language)}
          description={getTranslation(
            'bento.cards.limitless.description',
            language,
          )}
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
          direction="right"
          delay={0.6}
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  const { language } = useLanguage()
  return (
    <div className="mt-2 bg-black py-32">
      <Container>
        <Subheading dark>
          {getTranslation('darkBento.outreach', language)}
        </Subheading>
        <AnimatedHeading as="h3" dark className="mt-2 max-w-7xl">
          {getTranslation('darkBento.heading', language)}
        </AnimatedHeading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow={getTranslation(
              'darkBento.cards.networking.eyebrow',
              language,
            )}
            title={getTranslation('darkBento.cards.networking.title', language)}
            description={getTranslation(
              'darkBento.cards.networking.description',
              language,
            )}
            graphic={
              <div className="h-80 bg-[url(/screenshots/networking.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
            direction="left"
            delay={0}
          />
          <BentoCard
            dark
            eyebrow={getTranslation(
              'darkBento.cards.integrations.eyebrow',
              language,
            )}
            title={getTranslation(
              'darkBento.cards.integrations.title',
              language,
            )}
            description={getTranslation(
              'darkBento.cards.integrations.description',
              language,
            )}
            graphic={<LogoTimeline />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
            direction="right"
            delay={0.2}
          />
          <BentoCard
            dark
            eyebrow={getTranslation(
              'darkBento.cards.meetings.eyebrow',
              language,
            )}
            title={getTranslation('darkBento.cards.meetings.title', language)}
            description={getTranslation(
              'darkBento.cards.meetings.description',
              language,
            )}
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
            direction="left"
            delay={0.4}
          />
          <BentoCard
            dark
            eyebrow={getTranslation(
              'darkBento.cards.engagement.eyebrow',
              language,
            )}
            title={getTranslation('darkBento.cards.engagement.title', language)}
            description={getTranslation(
              'darkBento.cards.engagement.description',
              language,
            )}
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[size:851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
            direction="right"
            delay={0.6}
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
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

  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <LogoCarousel />
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-4 lg:py-32">
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      {/* <Testimonials /> */}
      <CoreStudiosSection />
      <Footer />
    </div>
  )
}
