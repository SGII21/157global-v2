
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
            Experienced Judgment for Matters of Consequence
          </h1>

          <p className="mt-6 font-sans text-[13px] font-medium uppercase tracking-[0.16em] leading-relaxed text-white/80 md:text-[14px]">
            ACQUIRE · ASSIMILATE · UNDERSTAND · DIAGNOSE · STRATEGIZE · EXECUTE
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">

        <h2 className="font-serif text-[28px] font-semibold leading-[1.25] text-ink">
          What We Do
        </h2>

        <p className={`${bodyClass} mt-5`}>
          157Global is a boutique advisory firm. We advise and, when necessary,
          execute. Our clients come to us when dealing with important decisions,
          operational and structural problems, commercial disputes, legal or
          reputational exposure.
        </p>

        <p className={`${bodyClass} mt-5`}>
          We have more than three decades of experience in the United States
          and Europe, from standing up and operating businesses to assignments
          for senior leadership and boards of major international enterprises.
        </p>

        <h2 className="mt-12 font-serif text-[28px] font-semibold leading-[1.25] text-ink">
          What We Work On
        </h2>

        <div className="mt-8">
          <h3 className="font-serif text-[23px] font-semibold leading-[1.25] text-ink">
            Opportunities, Transactions &amp; Important Decisions
          </h3>
          <p className={`${bodyClass} mt-3`}>
            Acquisitions, investments, expansion, divestitures and transitions.
            We help clients understand what they are considering, the risks and
            opportunities, and how to proceed.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-[23px] font-semibold leading-[1.25] text-ink">
            Business Performance &amp; Operating Problems
          </h3>
          <p className={`${bodyClass} mt-3`}>
            When a business or contract isn't performing, we help determine
            what needs to change and, when necessary, do the work to change it.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-[23px] font-semibold leading-[1.25] text-ink">
            Commercial, Structural &amp; Ownership Matters
          </h3>
          <p className={`${bodyClass} mt-3`}>
            Difficult business relationships, contractual disputes, ownership
            or governance problems, and arrangements that no longer serve the
            client. We examine the facts, understand the interests involved,
            and determine which options could improve the client's position.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-serif text-[23px] font-semibold leading-[1.25] text-ink">
            Disputes, Legal &amp; Sensitive Matters
          </h3>
          <p className={`${bodyClass} mt-3`}>
            We help clients establish facts, reconstruct events, and understand
            the business and financial circumstances surrounding disputes,
            suspected wrongdoing, regulatory concerns, and other sensitive
            matters. Once we identify leverage, we advise clients on their options and execute the resolution when required. We work directly for the client or under the direction of
            counsel, depending on the circumstances and the protections required.
          </p>
        </div>

        <h2 className="mt-12 font-serif text-[28px] font-semibold leading-[1.25] text-ink">
          Why Clients Call
        </h2>

        <p className={`${bodyClass} mt-5`}>
          Sometimes something is just off. Other times there's a clear problem.
          Sometimes they need help getting through a bad situation. Sometimes
          nothing is wrong, but an important decision lies ahead.
        </p>

        <p className="mt-8 font-sans text-xl font-semibold leading-snug text-ink">
          Clients don't need an explosion to call us. Just a need.
        </p>

       
      </section>
    </>
  )
}
