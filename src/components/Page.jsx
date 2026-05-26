export default function Page({ children, className = '' }) {
  return (
    <div
      className={`mx-auto max-w-[920px] px-6 pb-20 pt-[100px] md:pb-[120px] md:pt-[140px] ${className}`}
    >
      {children}
    </div>
  )
}
