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
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/translations'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { useEffect, useState } from 'react'

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
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
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
              <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-white sm:text-7xl/[0.8] md:text-8xl/[0.8]">
                {getTranslation('hero.title', language)}
              </h1>
              <p className="mt-8 max-w-2xl text-xl/7 font-medium text-white/75 sm:text-2xl/8">
                {getTranslation('hero.description', language)}
              </p>
              <div className="mt-8 mb-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row md:mt-12 md:mb-0">
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
        <Heading as="h2" className="max-w-3xl">
          {getTranslation('feature.title', language)}
        </Heading>
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
      <Heading as="h3" className="mt-2 max-w-7xl">
        {getTranslation('bento.heading', language)}
      </Heading>

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
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  const { language } = useLanguage()
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-500 py-32">
      <Container>
        <Subheading dark>
          {getTranslation('darkBento.outreach', language)}
        </Subheading>
        <Heading as="h3" dark className="mt-2 max-w-7xl">
          {getTranslation('darkBento.heading', language)}
        </Heading>

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
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
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
          />
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}
