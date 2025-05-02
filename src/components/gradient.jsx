import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(110deg,var(--Secondary-Color,#00C6FF)_1.38%,var(--Primary-Color,#007BFF)_23.26%,#0052A9_36.39%,var(--Black,#000)_96.19%)]',
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
