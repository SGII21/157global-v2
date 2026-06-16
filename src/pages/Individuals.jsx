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
          <span className="font-medium text-ink">{item.label}:</span> {item.text}
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
      <p className={`${bodyClass} mt-8`}>
        We step in when the gravity of the situation requires professionals whose experience meets the level.
      </p>
      <p className={`${bodyClass} mt-6`}>
        We are not an army of analysts, academics, or single-field "experts" learning on your time. We are senior operators who apply decades of direct experience to evaluate risks, build options, and when necessary, step directly into the line of execution.
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
        Every engagement begins by establishing truthful facts, isolating real priorities, understanding best and worst possible outcomes, and determining whether a situation can be resolved with your current resources.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Depending on the severity of the problem, our involvement ranges from quiet, high-level advisory to absolute operational control. We are called to provide:
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
            text: 'Supporting clients through intrusive legal, regulatory, governmental, or restructuring matters.',
          },
          {
            label: 'Unified Response',
            text: "Coordinating a client's existing advisors and, when necessary, engaging elite, specialized resources strictly based on capability, not convenience.",
          },
        ]}
      />

      <Rule />

      <h2 className={h2Class}>Early Intervention</h2>
      <p className={`${bodyClass} mt-6`}>
        Clients don't need an explosion to call us. Elite founders, family offices, and institutions engage 157Global early to pressure-test assumptions, review major transactions, and identify hidden risks before a manageable concern becomes an existential crisis.
      </p>
      <p className={`${bodyClass} mt-6`}>
        We don't just analyze situations. We establish facts, protect options, and build the leverage to drive the outcome.
      </p>
    </PageLayout>
  )
}
