'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className }) {
  return (
    <motion.div
      className={clsx(className, 'text-xl font-bold')}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      useTeam
    </motion.div>
  )
}

export function Mark({ className }) {
  return (
    <motion.div
      className={clsx(className, 'text-lg font-bold text-white')}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      useTeam
    </motion.div>
  )
}
