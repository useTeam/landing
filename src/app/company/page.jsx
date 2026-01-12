'use client'

import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { useTranslation } from 'react-i18next'
import Lenis from 'lenis'
import { useEffect, useState } from 'react'

function Header() {
  const { t } = useTranslation('company')
  return (
    <Container className="mt-16">
      <Heading as="h1">{t('header_title')}</Heading>
      <Lead className="mt-6 max-w-3xl">
        {t('header_subtitle')}
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">{t('header_mission_title')}</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            {t('header_mission_paragraph1')}
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            {t('header_mission_paragraph2')}
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>{t('header_numbers_title')}</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">{t('header_numbers_raised')}</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                $<AnimatedNumber start={100} end={150} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">{t('header_numbers_companies')}</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={15} end={30} />K
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">{t('header_numbers_deals_closed')}</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0.9} end={1.5} decimals={1} />M
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">{t('header_numbers_leads_generated')}</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={150} end={200} />M
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Person({ name, description, img }) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

function Team() {
  const { t } = useTranslation('company')
  return (
    <Container className="mt-32">
      <Subheading>{t('team_subheading')}</Subheading>
      <Heading as="h3" className="mt-2">
        {t('team_title')}
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        {t('team_subtitle')}
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            {t('team_story_paragraph1')}
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            {t('team_story_paragraph2')}
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="#">
              {t('team_join_button')}
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      <Subheading as="h3" className="mt-24">
        {t('team_section_title')}
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Michael Foster"
          description="Co-Founder / CTO"
          img="/team/michael-foster.jpg"
        />
        <Person
          name="Dries Vincent"
          description="Business Relations"
          img="/team/dries-vincent.jpg"
        />
        <Person
          name="Celeste Vandermark"
          description="Front-end Developer"
          img="/team/celeste-vandermark.jpg"
        />
        <Person
          name="Courtney Henry"
          description="Designer"
          img="/team/courtney-henry.jpg"
        />
        <Person
          name="Marcus Eldridge"
          description="Director of Product"
          img="/team/marcus-eldridge.jpg"
        />
        <Person
          name="Whitney Francis"
          description="Copywriter"
          img="/team/whitney-francis.jpg"
        />
        <Person
          name="Leonard Krasner"
          description="Senior Designer"
          img="/team/leonard-krasner.jpg"
        />
        <Person
          name="Nolan Sheffield"
          description="Principal Designer"
          img="/team/nolan-sheffield.jpg"
        />
        <Person
          name="Emily Selman"
          description="VP, User Experience"
          img="/team/emily-selman.jpg"
        />
      </ul>
    </Container>
  )
}

function Investors() {
  const { t } = useTranslation('company')
  return (
    <Container className="mt-32">
      <Subheading>{t('investors_subheading')}</Subheading>
      <Heading as="h3" className="mt-2">
        {t('investors_title')}
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        {t('investors_subtitle')}
      </Lead>
      <Subheading as="h3" className="mt-24">
        {t('investors_venture_capital')}
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <img
            alt="Remington Schwartz"
            src="/investors/remington-schwartz.svg"
            className="h-14"
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            {t('investors_remington_description')}
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            {t('investors_deccel_description')}
          </p>
        </li>
      </ul>
      <Subheading as="h3" className="mt-24">
        {t('investors_individual_title')}
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Person
          name="Kristin Watson"
          description="TechNexus Ventures"
          img="/individual-investors/kristin-watson.jpg"
        />
        <Person
          name="Emma Dorsey"
          description="Innovate Capital Partners"
          img="/individual-investors/emma-dorsey.jpg"
        />
        <Person
          name="Alicia Bell"
          description="FutureWave Investments"
          img="/individual-investors/alicia-bell.jpg"
        />
        <Person
          name="Jenny Wilson"
          description="SynergyTech Equity"
          img="/individual-investors/jenny-wilson.jpg"
        />
        <Person
          name="Anna Roberts"
          description="NextGen Horizons"
          img="/individual-investors/anna-roberts.jpg"
        />
        <Person
          name="Benjamin Russel"
          description="Pioneer Digital Ventures"
          img="/individual-investors/benjamin-russel.jpg"
        />
      </ul>
    </Container>
  )
}

function Testimonial() {
  const { t } = useTranslation('company')
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
          {t('testimonial_quote')}
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              CSO, Planeteria
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function Careers() {
  const { t } = useTranslation('company')
  return (
    <Container className="my-32">
      <Subheading>{t('careers_subheading')}</Subheading>
      <Heading as="h3" className="mt-2">
        {t('careers_title')}
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        {t('careers_subtitle')}
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">{t('careers_open_positions')}</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">{t('careers_table_title')}</th>
                  <th scope="col">{t('careers_table_location')}</th>
                  <th scope="col">{t('careers_table_read_more')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-10 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      {t('careers_engineering')}
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">{t('careers_ios_developer')}</td>
                  <td className="px-0 py-4 text-gray-600">{t('careers_remote')}</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      {t('careers_view_listing')}
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">{t('careers_backend_engineer')}</td>
                  <td className="px-0 py-4 text-gray-600">{t('careers_remote')}</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      {t('careers_view_listing')}
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">{t('careers_product_engineer')}</td>
                  <td className="px-0 py-4 text-gray-600">{t('careers_remote')}</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      {t('careers_view_listing')}
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-5 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      {t('careers_design')}
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">{t('careers_principal_designer')}</td>
                  <td className="px-0 py-4 text-gray-600">{t('careers_remote')}</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      {t('careers_view_listing')}
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">{t('careers_designer')}</td>
                  <td className="px-0 py-4 text-gray-600">{t('careers_remote')}</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      {t('careers_view_listing')}
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">{t('careers_senior_designer')}</td>
                  <td className="px-0 py-4 text-gray-600">{t('careers_remote')}</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      {t('careers_view_listing')}
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
}

export default function Company() {
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
        </Container>
        <Header />
        <Team />
        <Investors />
        <Careers />
        <Footer />
      </div>
    </main>
  )
}
