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
        style={{ backgroundImage: 'url("/LinkedIn_Banner.png")' }}
      >
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
          <img
            src="/157Global-Stacked-Black-web.png"
            alt="157Global"
            className="mx-auto mb-8 w-[180px]"
            style={{ filter: 'invert(1)' }}
          />
          <h1 className="font-serif text-[34px] font-bold leading-[1.1] text-white md:text-[52px]">
            Experience That Counts, Support Before and Through Difficulty.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-sans text-[17px] leading-[1.75] text-ink">
          Leverage is the power, resource, or ability to influence an outcome, a decision, or another person. Our job is to help individuals and companies establish leverage to successfully navigate high-stakes matters.
        </p>

        <div className="mt-8">
          <h3 className="font-serif text-[20px] font-semibold italic text-ink">
            Proactively
          </h3>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            We step into deals, transactions, and strategic initiatives to ensure the structure and management of them create the leverage required for our client's success.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-[20px] font-semibold italic text-ink">
            Reactively
          </h3>
          <p className="mt-3 font-sans text-[17px] leading-[1.75] text-ink">
            We are called when leverage is required in existing financial distress, legal exposure, or a reputational crisis to stop the bleeding, establish the narrative, extend the lifeline, and protect our clients' options.
          </p>
        </div>
      </section>

      <section className="bg-[rgba(30,30,28,0.06)] px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-[22px] font-semibold leading-[1.25] text-ink md:text-[28px]">
            The Reality
          </h2>
          <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
            Difficult situations start long before they become a visible issue. They begin as decisions, pressures, disagreements, or concerns. By the time a situation has a name, the options are already narrowing.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              'Pressure changes decision-making.',
              'Early decisions shape later outcomes.',
              'Information loses its truth under pressure.',
              'Delay compounds consequence.',
              'Facts, stability, and experience create time, options, and leverage.',
            ].map((item) => (
              <li key={item} className="border-l border-accent pl-4 font-sans text-[17px] text-ink">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="font-serif text-[22px] font-semibold leading-[1.25] text-ink md:text-[28px]">
          What We Do
        </h2>
        <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
          We bring order to chaos and experienced execution to strategy. We cut through the noise across financial, legal, and reputational fronts to build the path forward.
        </p>
        <p className="mt-6 font-sans text-[17px] leading-[1.75] text-ink">
          We do not learn on the job. We apply over three decades of direct operational and advisory experience to build leverage and protect our clients.
        </p>
        <p className="mt-6 font-serif text-[22px] italic text-ink">
          Experience and judgment create leverage.
        </p>
      </section>
    </>
  )
}
