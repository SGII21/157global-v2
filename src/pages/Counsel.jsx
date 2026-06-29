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
        157Global is not a law firm, a traditional investigative agency, or an expert witness practice. We are experienced operators and advisors. We have navigated plaintiff, defense, and regulatory matters by closing the gap between what the legal strategy requires and what leverage the facts support.
      </p>

      <Rule />

      <h2 className={h2Class}>How We Support Our Legal Colleagues</h2>
      <LabeledList
        items={[
          {
            label: 'Pre-Litigation Assessment',
            text: 'Reconstructing messy timelines and separating fact from fiction. Uncovering what actively happened before legal positions harden. Aligning business goals with legal strategy while managing early reputation and perception.',
          },
          {
            label: 'Active Proceedings',
            text: 'Operating under Kovel engagements and tailored privacy structures. Supporting domestic and international counsel in high-stakes litigation, regulatory investigations, and white-collar defense. Providing financial reviews, operational analysis, reputation strategy, and evidence-backed narratives.',
          },
          {
            label: 'Crisis Stabilization',
            text: 'Protecting cash flow and stabilizing operations. Managing external perception when legal pressure brings financial distress and cratering confidence. Establishing the operational moat to give counsel the time and space they need to litigate.',
          },
          {
            label: 'Operational Intervention',
            text: 'Assuming interim executive authority or operational control if business leadership is compromised. Working to extend the operational lifespan before, during, and after litigation.',
          },
          {
            label: 'Post-Resolution Transition',
            text: 'Managing the operational and reputational impact that lasts long after a settlement or judgment is closed. Restoring market confidence and moving the client forward cleanly.',
          },
        ]}
      />

      <p className="font-sans text-xl font-semibold leading-snug text-ink mt-10">We use facts to create leverage for counsel.</p>
      <div className="bg-stone-300 px-6 py-4 mt-10"><p className="font-sans text-sm font-normal leading-relaxed text-ink opacity-80">While confidentiality and discretion of contact are understood, please do not disclose any confidential or privileged information before proper protocols are established.</p></div>
      <a href="mailto:legal@157global.com?subject=Legal%20Support%20Inquiry" className="font-sans text-sm font-medium text-ink underline hover:opacity-60 transition-opacity mt-6 inline-block">Contact</a>
    </PageLayout>
  )
}
