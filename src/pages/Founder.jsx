
import { useEffect, useState } from 'react'
import PageLayout from '../components/PageLayout'

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

const bodyClass = 'font-sans text-[16px] leading-[1.75] text-ink md:text-[17px]'

const brandStyle = {
  whiteSpace: 'nowrap',
  display: 'inline-block',
  wordBreak: 'keep-all',
  overflowWrap: 'normal',
  fontVariantNumeric: 'lining-nums',
  fontFeatureSettings: '"lnum" 1',
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
        <h1 className="font-serif text-[30px] font-bold leading-[1.15] text-ink md:text-[42px]">
          Our Founder
        </h1>

        <p className="mt-8 font-serif text-[22px] italic text-ink">
          Skip Glass built{' '}
          <span style={brandStyle}>157Global</span>{' '}
          from over three decades working inside difficult situations,
          not observing them.
        </p>

        <p className={`${bodyClass} mt-6`}>
          From startups to global conglomerates, his experience was earned
          through building and operating businesses, managing financial
          and operational pressures, navigating reputational crises, and
          dealing with government, regulatory, and legal matters across
          North America and Europe.
        </p>

        <p className={`${bodyClass} mt-6`}>
          His work placed him in demanding, performance-driven environments
          where decisions carried consequences. The issues were real, and
          so were the people they affected.
        </p>

        <img
          src="/HeadshotJul272026.png"
          alt="Skip Glass"
          className="mx-auto my-10 block h-auto max-h-[450px] w-auto"
        />

        <p className={`${bodyClass} mt-6 font-semibold`}>
          Skip Glass
        </p>

        <blockquote className="my-10 border-l-[3px] border-accent pl-6 font-serif text-[20px] italic leading-[1.6] text-ink">
          <p>
            "I founded <span style={brandStyle}>157Global</span> because
            I've seen what happens when real problems hit. The room gets
            loud, the clock speeds up, and pressure affects decision making.
            Sometimes allies and friends disappear, leaving people feeling
            very much alone.
          </p>

          <p className="mt-6">
            I've been there, both for clients and in my own businesses.
            I know what it's like to carry responsibility when the answers
            aren't clear, the pressure is on and the consequences are real.
          </p>

          <p className="mt-6">
            Our job is to understand what's going on, determine what the
            situation requires and put our clients in the strongest place
            we can. We advise and, when necessary, do the work. We execute
            toward our clients' goals using seasoned judgment and
            discipline, not bravado or emotional reactions."
          </p>
        </blockquote>
      </div>
    </PageLayout>
  )
}
