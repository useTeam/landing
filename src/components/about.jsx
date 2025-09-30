import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/translations'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { AnimatedHeading } from './text'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const { language } = useLanguage()
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    })

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    })
  })

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mt-36 mb-14 flex flex-col items-center gap-5">
        <p className="text-sm uppercase md:text-[10px]">Our work</p>

        <AnimatedHeading as="h2" className="text-center">
          {getTranslation('feature.title', language)}
        </AnimatedHeading>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="images/hero-1.jpg"
            alt="Background"
            className="min- absolute top-0 left-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default About
