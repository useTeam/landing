import { clsx } from 'clsx'

export function Container({ className, children }) {
  return (
    <div className={clsx(className, 'px-4 lg:px-8 flex flex-col justify-center items-center')}>
      <div className="w-full  lg:max-w-7xl ">{children}</div>
    </div>
  )
}
