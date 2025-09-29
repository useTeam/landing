import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Gradient({ className, ...props }) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0, duration: 0.5 }}
      className={clsx(
        className,
        'bg-[linear-gradient(325deg,var(--Secondary-Color,#00C6FF)_1.38%,var(--Primary-Color,#007BFF)_23.26%,#0052A9_36.39%,var(--Black,#000)_96.19%)]',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'bg-[linear-gradient(110deg,var(--Secondary-Color,#00C6FF)_1.38%,var(--Primary-Color,#007BFF)_23.26%,#0052A9_36.39%,var(--Black,#000)_96.19%)]',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
