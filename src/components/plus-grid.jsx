import { clsx } from 'clsx'

export function PlusGrid({ className = '', children, color = 'white' }) {
  return <div className={className}>{children}</div>
}

export function PlusGridRow({ className = '', children, color = 'white', showBackdrop = true, isHome = false }) {
  const borderColorClass = color === 'black' ? 'border-white/20' : 'border-white/20'
  const transitionClass = isHome ? 'transition-all duration-300' : ''
  const backdropClasses = showBackdrop 
    ? `backdrop-blur-sm bg-gray-900/70 ${transitionClass}`.trim()
    : ''
  
  return (
    <div
      className={clsx(
        className,
        'group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]',
      )}
    >
      <div
        aria-hidden="true"
        className={clsx(
          'absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2',
          backdropClasses
        )}
      >
        <div className={`absolute inset-x-0 top-0 border-t ${borderColorClass}`}></div>
        <div className={`absolute inset-x-0 top-2 border-t ${borderColorClass}`}></div>
        <div className={`absolute inset-x-0 bottom-0 hidden border-b ${borderColorClass} group-last/row:block`}></div>
        <div className={`absolute inset-x-0 bottom-2 hidden border-b ${borderColorClass} group-last/row:block`}></div>
      </div>
      {children}
    </div>
  )
}

export function PlusGridItem({ className = '', children, color = 'white' }) {
  return (
    <div className={clsx(className, 'group/item relative')}>
      <PlusGridIcon
        placement="top left"
        color={color}
        className="hidden group-first/item:block"
      />
      <PlusGridIcon placement="top right" color={color} />
      <PlusGridIcon
        placement="bottom left"
        color={color}
        className="hidden group-first/item:group-last/row:block"
      />
      <PlusGridIcon
        placement="bottom right"
        color={color}
        className="hidden group-last/row:block"
      />
      {children}
    </div>
  )
}

export function PlusGridIcon({ className = '', placement, color = 'white' }) {
  let [yAxis, xAxis] = placement.split(' ')

  let yClass = yAxis === 'top' ? '-top-2' : '-bottom-2'
  let xClass = xAxis === 'left' ? '-left-2' : '-right-2'
  const fillColorClass = color === 'black' ? 'fill-white/20' : 'fill-white/20'

  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden="true"
      className={clsx(
        className,
        `absolute size-[15px] ${fillColorClass}`,
        yClass,
        xClass,
      )}
    >
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
  )
}
