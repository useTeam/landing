'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Logo({ className, textClassName }) {
  return (
    <motion.div
      className={clsx('flex cursor-pointer items-center gap-2', className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-9 w-9">
        <Image
          src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1746139449/an5bmyw9ir95tblacfgr.png"
          alt="useTeam Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className={clsx('font-bold', textClassName)}>useTeam</span>
    </motion.div>
  )
}

export function Mark({ className }) {
  return (
    <motion.div
      className={clsx('flex cursor-pointer items-center gap-1', className)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-8 w-8">
        <Image
          src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1746139449/an5bmyw9ir95tblacfgr.png"
          alt="useTeam Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="text-lg font-semibold text-white">useTeam</span>
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
      <div className="relative h-8 w-8">
        <Image
          src="https://res.cloudinary.com/dkpotpaaf/image/upload/v1746139449/an5bmyw9ir95tblacfgr.png"
          alt="useTeam Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  )
}
