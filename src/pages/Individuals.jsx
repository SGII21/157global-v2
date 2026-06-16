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
const h3Class = 'mt-8 font-serif text-[20px] font-semibold italic text-ink'

function Rule() {
  return <div className="my-10 h-px w-full bg-[rgba(30,30,28,0.15)]" />
}

function BulletList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="border-l border-accent pl-4 font-sans text-[17px] text-ink">
          {item}
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
      <h1 className="font-serif text-[30px] font-bold leading-[1.15] text-ink md:text-[42px]">
        Who We Serve & How We Work
      </h1>
      <p className={`${bodyClass} mt-8`}>
        We step in when the gravity of the situation requires professionals who have carried that weight before.
      </p>
      <p className={`${bodyClass} mt-6`}>
        We are not an army of analysts, academics, or experts in a singular field learning as we go. We are senior operators that provide counsel by applying our experience to evaluate risks, develop options, and when necessary, step directly into the execution line to create the leverage needed.
      </p>

      <Rule />

      <h2 className={h2Class}>Who We Serve</h2>
      <h3 className={h3Class}>Founders & Owners</h3>
      <p className={`${bodyClass} mt-4`}>
        Navigating operational breakdown, toxic partnership disputes, sudden leadership failure, regulatory or government activity, personal reputation or public perception concerns, or bet-the-company decisions.
      </p>
      <h3 className={h3Class}>Family Offices & HNWIs</h3>
      <p className={`${bodyClass} mt-4`}>
        Handling complex asset disputes, severe confidentiality threats, or sensitive situations where experienced and savvy judgment matters more than checking off boxes.
      </p>
      <h3 className={h3Class}>Executives & Boards</h3>
      <p className={`${bodyClass} mt-4`}>
        Managing aggressive regulatory scrutiny, heavy stakeholder pressure, internal operating and cultural concerns, or severe organizational instability.
      </p>
      <h3 className={h3Class}>Institutions & Investors</h3>
      <p className={`${bodyClass} mt-4`}>
        Intervening when an acquisition fails to perform, governance breaks down, corporate reputation or perception restoration, or when the gap between expected and actual results threatens the fund.
      </p>

      <Rule />

      <h2 className={h2Class}>What We Do</h2>
      <p className={`${bodyClass} mt-6`}>
        Every engagement begins the same way. We ask and answer critical operational questions:
      </p>
      <BulletList
        items={[
          'What is the situation?',
          'What are we trying to accomplish?',
          'Why is this a concern?',
          'If it is already a problem, what is the root cause?',
          'What are the best- and worst-case scenarios?',
          'Can it be successfully addressed with current resources?',
        ]}
      />
      <p className={`${bodyClass} mt-6`}>
        Depending on the severity of the answers, our involvement ranges from high-level advisory to absolute operational control. That may include:
      </p>
      <BulletList
        items={[
          'Taking direct operational responsibility when the situation requires more than advice.',
          'Establishing what is actually happening and what the worst- and best-case scenarios are.',
          'Stabilizing operations, leadership, stakeholder relationships, or organizational performance.',
          'Supporting transactions, investments, acquisitions, disputes, or restructurings.',
          'Supporting our clients when there are intrusive legal, regulatory, and governmental matters.',
          'Protecting reputation and stability.',
          'Coordinating existing advisors and engaging additional resources when the situation requires them.',
          'Identifying leverage and opportunities to improve position.',
        ]}
      />

      <Rule />

      <h2 className={h2Class}>Before an Existential Crisis Forms</h2>
      <p className={`${bodyClass} mt-6`}>
        You don't have to wait for an explosion to call us. Elite founders, family offices, and institutions engage us early to pressure-test assumptions, review major transactions, and identify the risks associated with actions or policies before a manageable concern becomes an existential crisis.
      </p>

      <Rule />

      <h2 className={h2Class}>Network</h2>
      <p className={`${bodyClass} mt-6`}>
        Our involvement is not limited to what we do directly. When we determine additional resources are needed, we ensure the right questions get asked and maintain total alignment between actions and objectives. Living inside difficult situations across multiple industries and jurisdictions has produced deep relationships with experienced professionals who understand what these moments require.
      </p>
      <p className={`${bodyClass} mt-6`}>
        We are not a replacement for legal, accounting, financial, or other specialized professionals. However, we do engage them strictly based on capability and experience, not proximity or convenience.
      </p>
      <p className={`${bodyClass} mt-6`}>
        We don't just analyze situations. We establish facts, identify what is required, and build the leverage to drive the outcome.
      </p>
    </PageLayout>
  )
}
