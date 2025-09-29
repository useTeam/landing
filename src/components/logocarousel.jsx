import { motion } from 'framer-motion'

const LogoCarousel = ({ autoSlide = true, slideInterval = 3000 }) => {
  // Array de logos
  const logoComponents = [
    {
      id: 1,
      name: 'Saverin',
      component: (
        <img
          src="/assets/saverin.png"
          alt="Saverin"
          className="h-6 w-auto object-contain grayscale filter transition-all duration-300 hover:grayscale-0 lg:h-8"
        />
      ),
    },
    {
      id: 2,
      name: 'Seedchain',
      component: (
        <img
          src="/assets/seedchain.png"
          alt="Seedchain"
          className="h-6 w-auto object-contain grayscale filter transition-all duration-300 hover:grayscale-0 lg:h-8"
        />
      ),
    },
    {
      id: 4,
      name: 'Gravitad',
      component: (
        <img
          src="/assets/gravitad.png"
          alt="Gravitad"
          className="h-6 w-auto object-contain grayscale filter transition-all duration-300 hover:grayscale-0 lg:h-8"
        />
      ),
    },
    {
      id: 5,
      name: 'Koolinart',
      component: (
        <img
          src="/assets/koolinart.png"
          alt="Koolinart"
          className="h-6 w-auto object-contain grayscale filter transition-all duration-300 hover:grayscale-0 lg:h-8"
        />
      ),
    },
    {
      id: 3,
      name: 'Creantia Studio',
      component: (
        <img
          src="/assets/creantia.png"
          alt="Creantia Studio"
          className="h-6 w-auto object-contain grayscale filter transition-all duration-300 hover:grayscale-0 lg:h-8"
        />
      ),
    },
  ]

  // Duplicar los logos para crear el efecto infinito
  const duplicatedLogos = [
    ...logoComponents,
    ...logoComponents,
    ...logoComponents,
    ...logoComponents,
  ]

  return (
    <motion.div
      className="w-full overflow-hidden bg-transparent py-6"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Carousel infinito */}
      <div className="relative overflow-hidden">
        <div className="animate-scroll flex">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="mx-8 flex h-16 min-w-[120px] flex-shrink-0 items-center justify-center lg:mx-12"
            >
              {logo.component}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LogoCarousel
