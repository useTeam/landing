export const Loader = ({ text = 'Cargando...' }) => {
  return (
    <div className="flex-col gap-6 w-full flex items-center justify-center min-h-screen">
      <div className="w-20 h-20 border-4 border-transparent animate-spin flex items-center justify-center border-t-[#00C6FF] rounded-full">
        <div className="w-16 h-16 border-4 border-transparent animate-spin flex items-center justify-center border-t-[#007BFF] rounded-full" />
      </div>
      {text && (
        <p className="text-base font-medium text-black tracking-wide">
          {text}
        </p>
      )}
    </div>
  )
}
