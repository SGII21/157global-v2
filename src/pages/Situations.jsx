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

      <Rule />

      <h2 className={h2Class}>Building Leverage Early</h2>
      <p className={`${bodyClass} mt-4`}>
        We work with clients to establish leverage early, before risk becomes a weapon. Common matters include:
      </p>
      <LabeledList
        items={[
          {
            label: 'High-Stakes Transactions',
            text: 'Major investments, cross-border deals, or strategic initiatives where the details of structure and execution decide who holds the advantage later.',
          },
          {
            label: 'Misaligned Leadership',
            text: 'Boards, advisors, or leadership teams disagree on direction, and decisions that should take days take months.',
          },
          {
            label: 'Restructuring and Succession',
            text: 'A change in ownership, leadership, or corporate structure puts a company\'s stability and standing at risk.',
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
            text: 'Partnerships, relationships, or acquisitions that once worked start to fracture, and the cost shows up fast.',
          },
          {
            label: 'Shifted Power',
            text: 'An outside party or regulatory body has gained the upper hand, and the balance no longer favors our client.',
          },
        ]}
      />

     <Rule />
      <h2 className={h2Class}>The Objective</h2>
      <p className={`${bodyClass} mt-6`}>
       Whether we are called in early or after a situation has already turned, the objective does not change. We establish facts over assumptions, isolate what matters most, and build the position that lets our client move forward.
      </p>
    </PageLayout>
  )
}
