'use client'

import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/translations'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { clsx } from 'clsx'
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'

const testimonials = [
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Tina Yards',
    title: 'CTO, Protocol',
    quote:
      'useTeam has transformed our development process, helping us deliver high-quality software faster than ever before.',
  },
  {
    img: '/testimonials/conor-neville.jpg',
    name: 'Conor Neville',
    title: 'Engineering Manager, TaxPal',
    quote:
      "With useTeam, we've streamlined our development workflow and improved our team collaboration significantly.",
  },
  {
    img: '/testimonials/amy-chase.jpg',
    name: 'Amy Chase',
    title: 'Product Owner, Pocket',
    quote:
      "useTeam's project management tools have helped us deliver complex software projects on time and within budget.",
  },
  {
    img: '/testimonials/veronica-winton.jpg',
    name: 'Veronica Winton',
    title: 'Tech Lead, Planeteria',
    quote:
      "Our development team's productivity has increased by 40% since implementing useTeam in our workflow.",
  },
  {
    img: '/testimonials/dillon-lenora.jpg',
    name: 'Dillon Lenora',
    title: 'DevOps Lead, Detax',
    quote:
      'useTeam has revolutionized how we manage our software development lifecycle.',
  },
  {
    img: '/testimonials/harriet-arron.jpg',
    name: 'Harriet Arron',
    title: 'Scrum Master, Commit',
    quote:
      "Thanks to useTeam, we've been able to scale our development team while maintaining high code quality standards.",
  },
]

function TestimonialCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}) {
  const { language } = useLanguage()
  let ref = useRef(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white">
            <span aria-hidden="true" className="absolute -translate-x-full">
              "
            </span>
            {children}
            <span aria-hidden="true" className="absolute">
              "
            </span>
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">{name}</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-[linear-gradient(110deg,var(--Secondary-Color,#00C6FF)_1.38%,var(--Primary-Color,#007BFF)_23.26%,#0052A9_36.39%,var(--White,#fff)_96.19%)] bg-clip-text text-transparent">
              {typeof title === 'object' ? title[language] : title}
            </span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  )
}

function SimpleCallToAction() {
  const { language } = useLanguage()
  return (
    <div>
      <p className="max-w-sm text-sm/6 text-gray-600">
        {getTranslation('testimonials.cta.text', language)}
      </p>
      <div className="mt-2">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
        >
          {getTranslation('testimonials.cta.link', language)}
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Testimonials() {
  const { language } = useLanguage()
  let scrollRef = useRef(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  // Usa el array local como respaldo en caso de que no se encuentren traducciones
  const testimonialsList = testimonials

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth))
  })

  function scrollTo(index) {
    let gap = 32
    let width = scrollRef.current.children[0].offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="overflow-hidden py-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>
            {getTranslation('testimonials.subheading', language)}
          </Subheading>
          <Heading as="h3" className="mt-2">
            {getTranslation('testimonials.heading', language)}
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {testimonialsList.map(
          ({ img, name, title, quote }, testimonialIndex) => (
            <TestimonialCard
              key={testimonialIndex}
              name={name}
              title={title}
              img={img}
              bounds={bounds}
              scrollX={scrollX}
            >
              {typeof quote === 'object' ? quote[language] : quote}
            </TestimonialCard>
          ),
        )}
      </div>
      <Container className="mt-16">
        <SimpleCallToAction />
      </Container>
    </div>
  )
}
