import { Link } from '@/components/link'
import { useLanguage } from '@/context/language-context'
import { getTranslation } from '@/translations'
import { useGSAP } from '@gsap/react'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import { Navbar } from './navbar'

import Button from './Buttoncito'
import VideoPreview from './VideoPreview'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const { language } = useLanguage()

  const [loading, setLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 4
  const nextVdRef = useRef(null)
  const currentVdRef = useRef(null)
  const bgVdRef = useRef(null)
  const loadedSet = useRef(new Set()) // Track which videos have been loaded

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`

  const handleVideoLoad = (event) => {
    const videoSrc = event.target.src

    // Avoid counting the same video multiple times
    if (!loadedSet.current.has(videoSrc)) {
      loadedSet.current.add(videoSrc)
      setLoadedVideos((prev) => {
        const newCount = prev + 1
        console.log(`Video loaded: ${newCount}/${totalVideos}`)
        return newCount
      })
    }
  }

  useEffect(() => {
    if (loadedVideos === totalVideos) {
      setLoading(false)
      console.log('All videos loaded!')
    }
  }, [loadedVideos])

  // Preload all videos
  useEffect(() => {
    const videoElements = []

    const preloadVideos = () => {
      for (let i = 1; i <= totalVideos; i++) {
        const video = document.createElement('video')
        video.src = getVideoSrc(i)
        video.preload = 'metadata'
        video.addEventListener('loadeddata', handleVideoLoad, { once: true })
        videoElements.push(video)
      }
    }

    preloadVideos()

    // Cleanup function
    return () => {
      videoElements.forEach((video) => {
        video.removeEventListener('loadeddata', handleVideoLoad)
        video.src = ''
      })
    }
  }, [])

  const handleMiniVdClick = () => {
    setHasClicked(true)

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1)
  }

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set('#next-video', { visibility: 'visible' })
        gsap.to('#next-video', {
          transformOrigin: 'center center',
          scale: 1,
          width: '100%',
          height: '100%',
          duration: 1,
          ease: 'power1.inOut',
          onStart: () => nextVdRef.current.play(),
        })
        gsap.from('#current-video', {
          transformOrigin: 'center center',
          scale: 0,
          duration: 1.5,
          ease: 'power1.inOut',
        })
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    },
  )

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0, 72% 0, 88% 90%, 0 95%)',
      borderRadius: '0% 0% 40% 10%',
    })
    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0% 0% 0% 0%',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    })
  })

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden bg-white">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <Navbar
        banner={
          <Link
            href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
            className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
          >
            {getTranslation('hero2.banner', language)}
            <ChevronRightIcon className="size-4" />
          </Link>
        }
      />
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden"
      >
        <div>
          <div className="mask-clip-path absolute top-1/2 left-1/2 z-50 size-100 translate-x-[-50%] translate-y-[-50%] cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <img
                  src={`images/hero-${(currentIndex % totalVideos) + 1}.jpg`} // o .png
                  alt="Video preview"
                  className="size-100 origin-center rounded-3xl object-contain object-center"
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="invisible absolute top-1/2 left-1/2 z-20 size-100 translate-x-[-50%] translate-y-[-50%] rounded-lg object-cover object-center"
          />
          <video
            ref={bgVdRef}
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex,
            )}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 size-full object-cover object-center"
          />
        </div>

        <h1
          className="special-font hero-heading absolute right-5 bottom-5 z-40 font-bold text-5xl text-blue-100 uppercase sm:right-10 sm:text-7xl md:text-9xl lg:text-[10rem]"
          dangerouslySetInnerHTML={{
            __html: getTranslation('hero2.software', language),
          }}
        />
        <h1
          className="special-font hero-heading absolute right-5 bottom-5 z-40 font-bold text-5xl text-blue-100 uppercase sm:right-10 sm:text-7xl md:text-9xl lg:text-[10rem]"
          dangerouslySetInnerHTML={{
            __html: getTranslation('hero2.software', language),
          }}
        />

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1
              className="special-font hero-heading font-bold text-5xl text-blue-100 uppercase sm:right-10 sm:text-7xl md:text-9xl lg:text-[10rem]"
              dangerouslySetInnerHTML={{
                __html: getTranslation('hero2.redefine', language),
              }}
            />

            <p
              className="mb-5 max-w-80 rounded-lg text-blue-100"
              dangerouslySetInnerHTML={{
                __html: getTranslation('hero2.tagline', language),
              }}
            />

            <Button
              id="watch-demo"
              title={getTranslation('hero2.watchDemo', language)}
              leftIcon={<TiLocationArrow />}
              containerClass="bg-[linear-gradient(110deg,var(--Secondary-Color,#00C6FF)_1.38%,var(--Primary-Color,#007BFF)_23.26%,#0052A9_36.39%,var(--Black,#000)_96.19%)] text-white flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1
        className="special-font hero-heading absolute right-5 bottom-5 font-bold text-5xl text-black uppercase sm:right-10 sm:text-7xl md:text-9xl lg:text-[10rem]"
        dangerouslySetInnerHTML={{
          __html: getTranslation('hero2.software', language),
        }}
      />
    </div>
  )
}

export default Hero
