export function PageShell({ children }) {
  return (
    <div className="mx-auto w-full max-w-[1180px] px-6 pb-[80px] pt-[80px] md:pb-[140px] md:pt-[140px] lg:pb-[180px] lg:pt-[160px]">
      <div className="max-w-[720px]">{children}</div>
    </div>
  )
}

export function PageH1({ children }) {
  return (
    <h1 className="mb-8 font-serif text-[2rem] leading-[1.2] text-primary md:mb-10 md:text-[2.5rem]">
      {children}
    </h1>
  )
}

export function PageH2({ children }) {
  return (
    <h2 className="mb-5 font-serif text-[1.375rem] leading-[1.3] text-primary md:text-[1.5rem]">
      {children}
    </h2>
  )
}

export function Body({ children, className = '' }) {
  return <p className={`text-primary ${className}`}>{children}</p>
}

export function SectionBlock({ children, className = '' }) {
  return (
    <section
      className={`mb-[80px] last:mb-0 md:mb-[140px] lg:mb-[180px] ${className}`}
    >
      {children}
    </section>
  )
}
