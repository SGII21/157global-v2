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
          <strong>Leverage:</strong> The power, resource, or ability to influence an outcome, a decision, or adversary.
        </p>

        <div className="mt-8">
          <h3 className="font-serif text-[20px] font-semibold italic text-ink">
            Early on:
          </h3>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            We step into deals, transactions, and strategic initiatives early to ensure the structure and management of the matter create the leverage required for success.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-[20px] font-semibold italic text-ink">
            When the Pressure Hits
          </h3>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            High-stakes threats commonly produce a predictable response. The brain narrows focus to the immediate threat and pushes towards action to make the threat go away, a defensive email, the panicked phone call, the payment.
          </p>
          <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
            That reaction is exactly what the other side is counting on.
          </p>
          <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
            We step into our client's chaos to interrupt that cycle. This means finding the point of pressure, such as an unvarnished fact, a shift in public perception, or a legal vulnerability, that neutralizes the opponent's advantage, regardless of how much bigger or wealthier that opponent is. Our experience allows us to operationalize behavior and facts into asymmetric leverage, ending the matter faster and quieter.
          </p>
          <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
            The difference between a quiet exit and a long, drawn-out public lawsuit is almost always the ability to convert facts into leverage.
          </p>
        </div>

        <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
          We do not learn on the job. We apply over three decades of direct operational and advisory experience to build leverage and protect our clients.
        </p>
        <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
          Experience dictates judgment. Judgment secures leverage.
        </p>
      </section>
    </>
  )
}
