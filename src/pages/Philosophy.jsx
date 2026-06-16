import { useEffect, useState } from 'react'
import PageLayout from '../components/PageLayout'

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-[rgba(30,30,28,0.15)] border-t-accent" style={{ animation: 'spin 0.7s linear infinite' }} />
    </div>
  )
}

const bodyClass = 'font-sans text-[16px] leading-[1.75] text-ink md:text-[17px]'
const h2Class = 'mt-12 font-serif text-[22px] font-semibold leading-[1.25] text-ink md:text-[28px]'
const h3Class = 'mt-8 font-serif text-[20px] font-semibold italic text-ink'

function Rule() {
  return <div className="my-10 h-px w-full bg-[rgba(30,30,28,0.15)]" />
}

export default function Philosophy() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <PageLayout>
      <h1 className="font-serif text-[30px] font-bold leading-[1.15] text-ink md:text-[42px]">
        What We Believe
      </h1>
      <h2 className={h2Class}>Why We Exist</h2>
      <p className={`${bodyClass} mt-6`}>
        We exist to help clients protect their present and future through their most difficult moments. High-pressure situations affect more than balance sheets and legal briefs. They disrupt families, destroy livelihoods, and threaten organizational survival. Our responsibility is to step in, learn the facts, find the leverage, and execute a workable path forward.
      </p>

      <Rule />

      <h2 className={h2Class}>Our Core Principles</h2>
      <h3 className={h3Class}>Experience Beats Theory</h3>
      <p className={`${bodyClass} mt-4`}>
        Institutional credentials, academic theory, and polished corporate jargon cannot replace the instinct and abilities built by decades spent inside broken environments. We know what to do because we've done it.
      </p>
      <h3 className={h3Class}>No Institutional Ego</h3>
      <p className={`${bodyClass} mt-4`}>
        We don't care about our image; we care about the outcome. The work is about solving the problem discreetly, responsibly, and effectively.
      </p>
      <h3 className={h3Class}>Facts are Facts</h3>
      <p className={`${bodyClass} mt-4`}>
        We know from experience that in pressurized, performance-driven environments, information gets pasteurized and sanitized as it moves upstream. Relying on bad information kills an operational or legal strategy from the start. We know because we've seen the billion-dollar hits caused by bad information flow.
      </p>
      <h3 className={h3Class}>Reputation and Perception Become Reality</h3>
      <p className={`${bodyClass} mt-4`}>
        In any high-stakes situation, strength and weakness are predicated on reputation and perception. Failing to manage these in lockstep with strategic goals is equivalent to handing the keys of the company over to an adversary.
      </p>
      <h3 className={h3Class}>Experienced Judgment is Non-Negotiable</h3>
      <p className={`${bodyClass} mt-4`}>
        Process maps and checklists fail when a crisis hits. Real leverage is created by seasoned judgment, knowing when to act, when to wait, and how to command a chaotic situation.
      </p>
      <h3 className={h3Class}>Execution Over Analysis</h3>
      <p className={`${bodyClass} mt-4`}>
        We do not drop off a deck of recommendations and walk away. We execute the strategy, and then we exit.
      </p>
    </PageLayout>
  )
}
