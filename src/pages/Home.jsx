import { useEffect, useState } from 'react'

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        className="h-8 w-8 rounded-full border-2 border-[rgba(30,30,28,0.15)] border-t-accent"
        style={{ animation: 'spin 0.7s linear infinite' }}
      />
    </div>
  )
}

const bodyClass = 'font-sans text-[17px] leading-[1.75] text-ink'

function LabeledList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item.label} className="border-l border-accent pl-4 font-sans text-[17px] text-ink">
          <strong>{item.label}:</strong> {item.text}
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <section
        className="relative flex h-screen w-full items-center justify-center bg-cover bg-center px-6"
        style={{ backgroundImage: 'url("/LinkedIn_Banner.webp")' }}
      >
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <img
            src="/157Global-Stacked-Black-web.webp"
            alt="157Global"
            width="360"
            height="289"
            className="mx-auto mb-8 w-[180px]"
            style={{ filter: 'invert(1)' }}
          />
          <h1 className="font-serif text-[34px] font-bold leading-[1.1] text-white md:text-[52px]">
            Experienced judgment in difficult places.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-sans text-2xl font-semibold leading-snug text-ink">
          Every personal or business concern creates questions:
        </p>

        <div className="mt-4 space-y-3">
          <div className="border-l-2 border-ink pl-4">
            <p className={bodyClass}><strong>Prevention:</strong> How do I avoid this threat?</p>
          </div>
          <div className="border-l-2 border-ink pl-4">
            <p className={bodyClass}><strong>Resolution:</strong> How do I get out of it fast and favorably?</p>
          </div>
        </div>

        <p className={`${bodyClass} mt-6`}>
          The answer is the same. <strong>Leverage:</strong> To us leverage is not a Hollywood concept. It is the ability to influence an outcome, a decision, or an adversary in the client's favor.
        </p>

        <div className="mt-8">
          <h2 className="mt-12 font-serif text-[28px] font-semibold leading-[1.25] text-ink">
            Structure
          </h2>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            We proactively engage before a situation develops and options narrow. Whether it is an aggressive investment, a crucial acquisition, or a potential vulnerability, our objective is the same: establish facts, isolate risks, and build the leverage required to protect our clients.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mt-12 font-serif text-[28px] font-semibold leading-[1.25] text-ink">
            Trouble
          </h2>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            Trouble creates reactionary decisions, fragmented information, and panic-induced remedies. When a client faces an escalating threat from financial, reputational, civil, or criminal matters, we identify the exact points of pressure. Whether uncovering hidden facts, managing public perception, or supporting legal counsel, we work to build the leverage necessary for our client's safe passage.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="mt-12 font-serif text-[28px] font-semibold leading-[1.25] text-ink">
            The Difference
          </h2>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            Whatever form it takes, leverage, when successfully applied, wins. Our clients get more than three decades of raw operational and advisory experience to move them toward realistic, favorable resolutions.
          </p>
        </div>

        <p className="font-sans text-xl font-semibold leading-snug text-ink mt-10">Experience dictates judgment. Judgment secures leverage.</p>
      </section>
    </>
  )
}
