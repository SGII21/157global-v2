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
        <h1 className="font-serif text-[30px] font-bold leading-[1.15] text-ink md:text-[42px]">
          Our Founder
        </h1>
        <p className="mt-8 font-serif text-[22px] italic text-ink">
          Skip Glass built <span style={{ whiteSpace: 'nowrap', display: 'inline-block', wordBreak: 'keep-all', overflowWrap: 'normal', fontVariantNumeric: 'lining-nums', fontFeatureSettings: '"lnum" 1' }}>157Global</span> from more than thirty years of working inside difficult situations, not observing them.
        </p>
        <p className={`${bodyClass} mt-6`}>
          From startups to global conglomerates, he earned his experience through operational leadership, financial pressure, reputational crises, government and regulatory matters, and legal complexity across North America, Central and Eastern Europe, and Southern Europe.
        </p>
        <p className={`${bodyClass} mt-6`}>
          His work placed him in difficult, performance-driven, and unforgiving environments. The issues were real and so were the people they affected.
        </p>
        <p className={`${bodyClass} mt-6`}>
          This foundation is why 157Global exists. The clients who need us, whether before a concern develops or in the middle of a crisis, get someone whose real-world experience is the difference between theory and execution.
        </p>
        <img
          src="/HeadshotJul272026.png"
          alt="Skip Glass"
          className="mx-auto my-10 block h-auto max-h-[450px] w-auto"
        />
        <blockquote className="my-10 border-l-[3px] border-accent pl-6 font-serif text-[20px] italic leading-[1.6] text-ink">
          <p>
            "I founded <span style={{ whiteSpace: 'nowrap', display: 'inline-block', wordBreak: 'keep-all', overflowWrap: 'normal', fontVariantNumeric: 'lining-nums', fontFeatureSettings: '"lnum" 1' }}>157Global</span> because when real problems hit, the room gets loud, the clock speeds up, and pressure affects decision making. Many times, allies and friends disappear, creating a sense of aloneness.
          </p>
          <p className="mt-6">
            The first instinct is reactionary. Almost always a call goes to someone with a narrow focus and an even narrower vision of what the situation actually requires.
          </p>
          <p className="mt-6">
            I've been there. For clients and for my own organizations. Our job is to understand the full picture, operate where others aren't capable, and stay focused on what the client actually needs. Whether preemptive, informational, reputational, or alternative leverage, we focus on delivering seasoned judgment and disciplined execution, not bravado or emotional reaction."
          </p>
        </blockquote>
      </div>
    </PageLayout>
  )
}
