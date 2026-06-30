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

function Rule() {
  return <div className="my-10 h-px w-full bg-[rgba(30,30,28,0.15)]" />
}

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
      <h1 className="font-serif text-5xl font-bold text-ink">Philosophy</h1>
      <h2 className={h2Class}>Why We Exist</h2>
      <p className={`${bodyClass} mt-8`}>
        To help clients protect their present and future through their most difficult moments.
      </p>
      <p className={`${bodyClass} mt-6`}>
        High-pressure situations affect more than balance sheets and legal briefs. They disrupt families, destroy livelihoods, and threaten survival. Our responsibility is to step in, uncover the facts, establish the leverage, and execute a workable path forward.
      </p>

      <Rule />

      <h2 className={h2Class}>Our Core Principles</h2>
      <LabeledList
        items={[
          {
            label: 'Experience Beats Theory',
            text: 'Credentials and academic theory cannot replace the instincts built by decades spent inside broken environments. We know what to do because we have done it before.',
          },
          {
            label: 'No Institutional Ego',
            text: 'We care about outcomes, not our image. The work is about solving the problem discreetly, responsibly, and effectively.',
          },
          {
            label: 'Facts Rule Outcomes',
            text: 'In pressurized environments, information gets pasteurized and sanitized as it moves upstream. Relying on bad data kills an operational or legal strategy from the start.',
          },
          {
            label: 'Perception is Reality',
            text: 'Strength and weakness are predicated on reputation and market perception. Failure to align these with strategic goals hands your leverage to the other side.',
          },
          {
            label: 'Judgment Over Checklists',
            text: 'Process maps and checklists fail when a crisis hits. Real leverage is created by seasoned judgment, knowing when to act, when to wait, and how to control a chaotic situation.',
          },
          {
            label: 'Execution Over Analysis',
            text: 'We do not deliver a deck of recommendations and walk away. We execute the strategy. Then we exit.',
          },
        ]}
      />
    </PageLayout>
  )
}
