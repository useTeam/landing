'use client'

import { clsx } from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function Heading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl',
      )}
    />
  )
}

export function AnimatedHeading({
  className,
  as: Element = 'h2',
  dark = false,
  children,
  ...props
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      })

      titleAnimation.to(
        '.animated-word',
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
          ease: 'power2.inOut',
          stagger: 0.02,
        },
        0,
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Convert children to string if it isn't already
  const text = typeof children === 'string' ? children : String(children)

  return (
    <Element
      ref={containerRef}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl',
      )}
      {...props}
    >
      {text.split('<br />').map((line, index) => (
        <div key={index} className="flex flex-wrap gap-2 md:gap-3">
          {line.split(' ').map((word, idx) => (
            <span
              key={idx}
              className="animated-word opacity-0"
              style={{
                transform:
                  'translate3d(0, 20px, 0) rotateY(-10deg) rotateX(10deg)',
              }}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </Element>
  )
}

export function Subheading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400',
      )}
    />
  )
}

export function Lead({ className, ...props }) {
  return (
    <p
      className={clsx(className, 'text-2xl font-medium text-gray-500')}
      {...props}
    />
  )
}
