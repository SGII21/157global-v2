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

export default function Individuals() {
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
      <h1 className="font-sans text-[30px] font-bold leading-[1.15] text-ink md:text-[42px]">
        Individuals & Institutions
      </h1>

      <h2 className={h2Class}>We Are Operational Advisors</h2>
      <p className={`${bodyClass} mt-6`}>
        Traditional consultants rely on data-heavy decks, and legal counsel focuses strictly on the letter of the law. We specialize in the operational facts, financial complexities, and root-cause problem management required to successfully execute solutions.
      </p>

      <Rule />

      <h2 className={h2Class}>Our Clients</h2>
      <LabeledList
        items={[
          {
            label: 'Founders & Owners',
            text: 'Navigating operational breakdowns, toxic disputes, sudden leadership failures, personal brand or reputation damage, or bet-the-company decisions.',
          },
          {
            label: 'Family Offices & High Net Worth Individuals',
            text: 'Handling complex disputes, confidentiality threats, or sensitive situations where judgment matters more than checking boxes.',
          },
          {
            label: 'Executives & Boards',
            text: 'Managing aggressive regulatory scrutiny, heavy stakeholder pressure, organizational or C-suite reputation damage, or severe organizational instability.',
          },
          {
            label: 'Institutions & Investors',
            text: 'Intervening when an acquisition fails to perform, governance breaks down, or there is a gap between expected and actual results.',
          },
        ]}
      />

      <Rule />

      <h2 className={h2Class}>How We Work</h2>
      <p className={`${bodyClass} mt-6`}>
        Clients don't need an explosion to call us. Elite founders, family offices, and institutions engage 157Global early to pressure-test assumptions, review major transactions, and identify hidden risks before a manageable concern becomes an existential crisis.
      </p>
      <p className={`${bodyClass} mt-6`}>
        But when there is an explosion, depending on the severity of the problem, our involvement ranges from quiet, high-level advisory to absolute operational control. We are called to provide:
      </p>
      <LabeledList
        items={[
          {
            label: 'Targeted Advisory',
            text: 'Analyzing complex, overlapping risks and providing the clear, objective counsel needed to navigate them.',
          },
          {
            label: 'Direct Action',
            text: 'Stepping into the operation when the situation requires execution, not just advice.',
          },
          {
            label: 'Restoring Order',
            text: 'Restoring order across leadership, operations, relationships, and perception.',
          },
          {
            label: 'High-Stakes Management',
            text: 'Supporting clients and their legal team through intrusive legal, regulatory, governmental, or restructuring matters.',
          },
          {
            label: 'Unified Response',
            text: "Coordinating a client's existing advisors and, when necessary, engaging elite, specialized resources strictly based on capability, not convenience.",
          },
        ]}
      />

      <p className={`${bodyClass} mt-6`}>
        We don't just analyze situations. We establish facts, protect options, and build the leverage to drive the outcome.
      </p>
      <p className="font-sans text-xl font-semibold leading-snug text-ink mt-10">Then we exit.</p>
      <a href="mailto:inquiries@157global.com?subject=157Global%20Inquiry" className="font-sans text-sm font-medium text-ink underline hover:opacity-60 transition-opacity mt-6 inline-block">Contact</a>
    </PageLayout>
  )
}
