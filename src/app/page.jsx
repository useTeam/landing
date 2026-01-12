'use client'

import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { CodeTyping } from '@/components/code-typing'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GlowingEffect } from '@/components/glowing-effect'
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
import { useTranslation } from 'react-i18next'
import { ChevronRightIcon, UserIcon } from '@heroicons/react/16/solid'
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
  const { t } = useTranslation('Home')

  return (
    <div className="relative overflow-hidden bg-black py-24 sm:py-32">
      <Container>
        <div className="relative ">
          {/* Title Section */}
          <Subheading>
            {t('feature_subheading')}
          </Subheading>

          <AnimatedHeading
            as="h2"
            className="mb-16 font-bold text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {t('feature_title')}
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
      </Container>
    </div>
  )
}

function Hero() {
  const { t } = useTranslation('Home')
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
    <div className="relative px-4 overflow-hidden">
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
              {t('hero_banner')}
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="relative pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="relative flex w-full flex-col items-center justify-center gap-8 md:items-center lg:flex-row ">
            <div className="w-full lg:w-1/2 xl:w-1/2">
              <h1 className="animacionInferiorTexto max-w-sm font-display text-5xl/[0.9] font-medium tracking-tight text-balance text-white sm:text-7xl/[0.8] md:text-8xl/[0.9] lg:text-6xl/[0.9] xl:text-8xl/[0.9]">
                {t('hero_title')}
              </h1>
              <p className="animacionSuperiorTexto mt-8 max-w-2xl text-lg/7 font-medium text-white/75 sm:text-2xl/8 lg:text-[1.2rem] xl:text-2xl/[1.5]">
                {t('hero_description')}
              </p>
              <div className="animacionSuperiorTexto mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row md:mb-0">
                <Button href="/contact">
                  {t('common_getStarted')}
                </Button>
              </div>
            </div>

            <div className="h-[200px] w-full sm:h-[250px] md:h-[280px] lg:w-1/2 xl:w-1/2">
              <CodeTyping />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  const { t } = useTranslation('Home')
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <AnimatedHeading as="h2" className="max-w-3xl">
          {t('feature_title')}
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
  const { t } = useTranslation('Home')
  return (
    <Container>
      <Subheading>{t('bento_sales')}</Subheading>
      <AnimatedHeading as="h3" className="mt-2 max-w-7xl">
        {t('bento_heading')}
      </AnimatedHeading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow={t('bento_cards_insight_eyebrow')}
          title={t('bento_cards_insight_title')}
          description={t('bento_cards_insight_description')}
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
          direction="left"
          delay={0}
        />
        <BentoCard
          eyebrow={t('bento_cards_analysis_eyebrow')}
          title={t('bento_cards_analysis_title')}
          description={t('bento_cards_analysis_description')}
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
          direction="right"
          delay={0.2}
        />
        <BentoCard
          eyebrow={t('bento_cards_speed_eyebrow')}
          title={t('bento_cards_speed_title')}
          description={t('bento_cards_speed_description')}
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
          eyebrow={t('bento_cards_source_eyebrow')}
          title={t('bento_cards_source_title')}
          description={t('bento_cards_source_description')}
          graphic={<LogoCluster />}
          className="lg:col-span-2"
          direction="up"
          delay={0.5}
        />
        <BentoCard
          eyebrow={t('bento_cards_limitless_eyebrow')}
          title={t('bento_cards_limitless_title')}
          description={t('bento_cards_limitless_description')}
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
  const { t } = useTranslation('Home')
  return (
    <div className="mt-2 bg-black py-32">
      <Container>
        <Subheading dark>
          {t('darkBento_outreach')}
        </Subheading>
        <AnimatedHeading as="h3" dark className="mt-2 max-w-7xl">
          {t('darkBento_heading')}
        </AnimatedHeading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow={t('darkBento_cards_networking_eyebrow')}
            title={t('darkBento_cards_networking_title')}
            description={t('darkBento_cards_networking_description')}
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
            eyebrow={t('darkBento_cards_integrations_eyebrow')}
            title={t('darkBento_cards_integrations_title')}
            description={t('darkBento_cards_integrations_description')}
            graphic={<LogoTimeline />}
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
            direction="right"
            delay={0.2}
          />
          <BentoCard
            dark
            eyebrow={t('darkBento_cards_meetings_eyebrow')}
            title={t('darkBento_cards_meetings_title')}
            description={t('darkBento_cards_meetings_description')}
            graphic={<LinkedAvatars />}
            className="lg:col-span-2 lg:rounded-bl-4xl"
            direction="left"
            delay={0.4}
          />
          <BentoCard
            dark
            eyebrow={t('darkBento_cards_engagement_eyebrow')}
            title={t('darkBento_cards_engagement_title')}
            description={t('darkBento_cards_engagement_description')}
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

function GridItem ({ area, icon, title, description }) {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

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

      <div className='bg-black'>
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<UserIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Do things the right way"
            description="Running out of copy so I'll write anything."
          />
    
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<UserIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="The best AI code editor ever."
            description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
          />
    
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<UserIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="You should buy Aceternity UI Pro"
            description="It's the best money you'll ever spend"
          />
    
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
            icon={<UserIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="This card is also built by Cursor"
            description="I'm not even kidding. Ask my mom if you don't believe me."
          />
    
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<UserIcon className="h-4 w-4 text-black dark:text-neutral-400" />}
            title="Coming soon on Aceternity UI"
            description="I'm writing the code as I record this, no shit."
          />
        </ul>
      </div>
      <Footer />
    </div>
  )
}
