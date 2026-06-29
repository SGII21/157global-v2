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
        <p className="font-sans text-3xl font-semibold leading-snug text-ink">
          Two questions in every high-stakes difficulty:
        </p>

        <LabeledList
          items={[
            {
              label: 'Prevention',
              text: 'How do I avoid this?',
            },
            {
              label: 'Resolution',
              text: 'How do I get out of it fast and favorably?',
            },
          ]}
        />

        <p className={`${bodyClass} mt-6`}>
          The answer is the same. <strong>Leverage:</strong> The power, resource, or ability to influence an outcome, a decision, or an adversary.
        </p>
        <p className={`${bodyClass} mt-6`}>
          At 157Global we do not view leverage as a Hollywood concept. We view it as the critical difference between success and failure in high-stakes matters.
        </p>

        <div className="mt-8">
          <h3 className="font-serif text-[20px] font-semibold italic text-ink">
            Early On
          </h3>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            We engage before positions harden, options narrow, and critical momentum is lost. Whether evaluating an aggressive investment, a crucial acquisition, or a developing concern, our objective is the same: establish facts, isolate risks, and build the leverage required to protect your position.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-[20px] font-semibold italic text-ink">
            When the Pressure Hits
          </h3>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            Pressure breeds reactive decisions, fragmented information, and panic-induced remedies. When a client faces an escalating threat from civil or criminal matters, we identify the point of pressure, be it an unvarnished fact, a shift in public perception, a legal vulnerability, or another condition that improves the client's position.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-[20px] font-semibold italic text-ink">
            The Difference
          </h3>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            Whatever form it takes, leverage changes outcomes. We deploy more than three decades of raw operational and advisory experience to protect what matters and move toward realistic, favorable resolutions.
          </p>
        </div>

        <p className="font-sans text-3xl font-normal leading-snug text-ink">Experience dictates judgment. Judgment secures leverage.</p>
      </section>
    </>
  )
}
