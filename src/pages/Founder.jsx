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

function Rule() {
  return <div className="my-10 h-px w-full bg-[rgba(30,30,28,0.15)]" />
}

export default function Founder() {
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
      <div className="pt-8 md:pt-10">
        <img
          src="/skip-glass.jpg"
          alt="Skip Glass"
          className="mx-auto mb-10 block h-auto max-h-[450px] w-auto"
        />
        <h1 className="font-serif text-[30px] font-bold leading-[1.15] text-ink md:text-[42px]">
          Our Founder
        </h1>
        <p className="mt-8 font-serif text-[22px] italic text-ink">
          Skip Glass built this firm from more than 30 years of working inside difficult situations, not observing them.
        </p>
      <p className={`${bodyClass} mt-6`}>
        From startups to global conglomerates, he earned his experience through operational leadership, performance, financial pressure, reputational crises, government and regulatory matters, and legal complexity across North America, Central, Eastern, and Southern Europe.
      </p>
      <p className={`${bodyClass} mt-6`}>
        His work placed him in difficult, performance-driven, and unforgiving environments. The issues were real. The people affected were real.
      </p>
      <p className={`${bodyClass} mt-6`}>
        That foundation is why 157Global exists and why the clients who engage us, whether before a situation develops or in the middle of one, get someone who has been there.
      </p>

      <Rule />

      <blockquote className="my-10 border-l-[3px] border-accent pl-6 font-serif text-[20px] italic leading-[1.6] text-ink">
        <p>
          "I founded <span style={{ whiteSpace: 'nowrap' }}>157Global</span> because when real problems hit, the room gets loud, the clock speeds up, and pressure takes over decision-making. That is when many friendships disappear.
        </p>
        <p className="mt-6">
          I built this firm on equal parts empathy and an unyielding desire for fairness. Our job is to step in, either before trouble starts or right in the middle of the chaos, and ensure the next actions are driven by seasoned judgment and disciplined execution, not bravado or emotional reaction."
        </p>
      </blockquote>
      <p className="font-sans text-[14px] text-ink-muted">
        Skip Glass, Founder, 157Global
      </p>
      </div>
    </PageLayout>
  )
}
