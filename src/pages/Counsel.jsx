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

export default function Counsel() {
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
        Legal Counsel
      </h1>
      <p className={`${bodyClass} mt-8`}>
        Legal outcomes are determined by operational facts.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Experienced legal counsel knows that what happened, why it happened, and what the records reflect are not legal questions. They are the reality that actively builds or destroys legal strategy.
      </p>
      <p className={`${bodyClass} mt-6`}>
        157Global is not a law firm, a traditional investigative agency, or an expert witness practice. We close the gap between what the legal strategy requires and what the facts support, establishing the leverage counsel needs to win.
      </p>

      <Rule />

      <h2 className={h2Class}>How We Support Legal Strategy</h2>
      <LabeledList
        items={[
          {
            label: 'Pre-Litigation Assessment',
            text: 'Reconstructing messy timelines, separating fact from fiction, and uncovering what actively happened before public or legal positions harden. We align business goals with legal strategy while managing early reputation and perception.',
          },
          {
            label: 'Active Proceedings',
            text: 'Supporting counsel with deep financial reviews, operational analysis, reputation and perception strategy, and evidence-backed narrative construction. We routinely operate under Kovel engagements and protected structures involving high-stakes litigation, fraud, white-collar defense, and regulatory exposure.',
          },
          {
            label: 'Crisis Stabilization',
            text: 'Protecting cash flow, stabilizing operations, and managing external perception when legal pressure brings financial distress and cratering confidence. We build the operational moat that gives counsel the time and space they need to litigate.',
          },
          {
            label: 'Operational Intervention',
            text: "Assuming interim executive authority or operational control if a client's business is actively deteriorating or leadership is compromised. We work to extend the operational lifespan before, during, and after litigation.",
          },
          {
            label: 'Post-Resolution Transition',
            text: 'Managing the operational and reputational impact that lasts long after a settlement or judgment is closed to rebuild credibility, restore market confidence, and move the client forward cleanly.',
          },
        ]}
      />

      <p className={bodyClass}>
        We turn facts into leverage.
      </p>
    </PageLayout>
  )
}
