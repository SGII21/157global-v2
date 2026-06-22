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
        <p className="font-sans text-[17px] leading-[1.75] text-ink">
          <strong>Leverage:</strong> The power, resource, or ability to influence an outcome, a decision, or an adversary.
        </p>

        <div className="mt-8">
          <h3 className="font-serif text-[20px] font-semibold italic text-ink">
            Early On
          </h3>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            We engage before positions harden, options narrow, and leverage is lost. Whether evaluating an investment, acquisition, strategic initiative, or developing concern, our objective is the same: establish facts, identify opportunities and risks, and create the leverage required to improve the client's position.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-[20px] font-semibold italic text-ink">
            When the Pressure Hits
          </h3>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            Pressure causes reactive decisions, incomplete information, and remedies focused on immediate relief.
          </p>
          <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
            157Global steps in to interrupt that cycle by identifying the point of pressure, whether it's an unvarnished fact, a shift in perception, a legal vulnerability, or another condition that improves the client's position.
          </p>
          <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
            Whatever form it takes, leverage changes outcomes.
          </p>
          <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
            We apply more than three decades of operational and advisory experience to help protect what matters and move toward realistic outcomes.
          </p>
        </div>

        <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
          Experience dictates judgment. Judgment secures leverage.
        </p>
      </section>
    </>
  )
}
