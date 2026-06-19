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

function NumberedList({ items }) {
  return (
    <ol className="mt-5 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="border-l border-accent pl-4 font-sans text-[17px] text-ink">
          {index + 1}. {item}
        </li>
      ))}
    </ol>
  )
}

export default function Situations() {
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
        Situations
      </h1>
      <p className={`${bodyClass} mt-8`}>
        Most critical situations do not start as emergencies.
      </p>
      <p className={`${bodyClass} mt-6`}>
        They begin as standard decisions, shifting pressures, or quiet disagreements. By the time a problem is obvious, timelines are compressed, choices are limited, and leverage is weakening.
      </p>
      <p className={`${bodyClass} mt-6`}>
        People engage 157Global when the stakes require professionals who have navigated these exact scenarios before.
      </p>

      <Rule />

      <h2 className={h2Class}>Building Leverage Early</h2>
      <p className={`${bodyClass} mt-4`}>
        We work with clients during major transitions to insulate them from future risk and establish early leverage. Common matters include:
      </p>
      <LabeledList
        items={[
          {
            label: 'High-Stakes Transactions',
            text: 'Major investments, cross-border deals, or strategic initiatives where structure and execution dictate future leverage.',
          },
          {
            label: 'Misaligned Leadership',
            text: 'Boards, advisors, or leadership teams are fragmented on objectives, slowing vital momentum.',
          },
          {
            label: 'High-Value Transitions',
            text: 'Corporate restructuring or leadership successions threaten organizational stability and market perception.',
          },
        ]}
      />

      <Rule />

      <h2 className={h2Class}>Regaining Leverage Under Pressure</h2>
      <p className={`${bodyClass} mt-4`}>
        We step in to stabilize operations, re-establish control, and defend reputation when a situation begins to slip. Common matters include:
      </p>
      <LabeledList
        items={[
          {
            label: 'Compounding Vulnerabilities',
            text: 'Financial distress, legal exposure, and reputational concerns begin to overlap and multiply.',
          },
          {
            label: 'Broken Dynamics',
            text: 'Vital partnerships, relationships, or underperforming acquisitions begin to fracture.',
          },
          {
            label: 'Shifted Power',
            text: 'An outside party or regulatory body has gained leverage, altering the power dynamic against our client.',
          },
        ]}
      />

      <Rule />

      <h2 className={h2Class}>The Objective</h2>
      <p className={`${bodyClass} mt-6`}>
        Whether we build leverage early or restore it late, our objective does not change:
      </p>
      <NumberedList
        items={[
          'Establish facts over assumptions.',
          'Isolate priorities immediately.',
          <>
            Build the leverage to protect what matters most and execute a <span className="whitespace-nowrap">clear path forward.</span>
          </>,
        ]}
      />
    </PageLayout>
  )
}
