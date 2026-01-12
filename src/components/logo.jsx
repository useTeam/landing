'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logoImage from '@/assets/logo/logo.svg'
import bigLogo from '@/assets/logo/big-logo.svg'

export function Logo({ className, textClassName }) {
  return (
    <motion.div
      className={clsx('flex cursor-pointer items-center gap-2', className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <Image
          src={logoImage}
          alt="UseTeam Logo"
          width={144}
          height={144}
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  )
}

export function Mark({ className }) {
  return (
    <motion.div
      className={clsx('flex items-center gap-1', className)}
    >
      <div className="relative">
        <Image
          src={logoImage}
          alt="UseTeam Logo"
          width={112}
          height={112}
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  )
}
export function MarkWithoutText({ className }) {
  return (
    <motion.div
      className={clsx('flex cursor-pointer items-center gap-1', className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <Image
          src={bigLogo}
          alt="UseTeam Logo"
          width={32}
          height={32}
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  )
}
