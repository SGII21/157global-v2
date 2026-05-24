export function Page({ children, className = '' }) {
  return (
    <main className={`mx-auto w-full max-w-[60rem] px-6 py-12 md:py-16 ${className}`}>
      <article className="mx-auto max-w-[42rem]">{children}</article>
    </main>
  )
}

export function Section({ children, className = '' }) {
  return <section className={`mb-14 md:mb-16 ${className}`}>{children}</section>
}

export function Lead({ children }) {
  return (
    <p className="mb-6 font-serif text-[1.875rem] leading-snug text-ink md:text-[2.25rem] md:leading-snug">
      <em>{children}</em>
    </p>
  )
}

export function Anchor({ children }) {
  return (
    <p className="mb-6 font-serif text-[1.375rem] leading-snug text-ink md:text-[1.5rem]">
      <em>{children}</em>
    </p>
  )
}

export function BodyText({ children, className = '' }) {
  return <p className={`mb-6 text-ink ${className}`}>{children}</p>
}

export function CalmList({ items, className = '' }) {
  return (
    <ul className={`mb-6 list-none space-y-3 pl-0 text-ink ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="shrink-0 text-muted">–</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function BlockParagraphs({ paragraphs }) {
  return (
    <>
      {paragraphs.map((text) => (
        <p key={text} className="mb-8 font-serif text-[1.125rem] leading-relaxed text-ink md:text-[1.25rem]">
          <em>{text}</em>
        </p>
      ))}
    </>
  )
}

export function BeliefList({ items }) {
  return (
    <div className="space-y-6">
      {items.map((text) => (
        <p key={text} className="text-ink">
          {text}
        </p>
      ))}
    </div>
  )
}

export function ContactLines({ lines }) {
  return (
    <div className="space-y-4">
      {lines.map((line) => (
        <p key={line} className="font-serif text-[1.125rem] text-ink md:text-[1.25rem]">
          <em>{line}</em>
        </p>
      ))}
    </div>
  )
}
