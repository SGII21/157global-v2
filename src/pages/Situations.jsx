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
        They begin as standard decisions, new opportunities, shifting pressures, or quiet disagreements. By the time a problem is obvious, timelines are compressed, choices are becoming limited, and leverage is weakening. People engage 157Global when the stakes are high enough to require professionals who have navigated these exact scenarios before.
      </p>

      <Rule />

      <h2 className={h2Class}>Why People Call Us</h2>
      <h3 className={h3Class}>Building Leverage Before a Concern Forms</h3>
      <p className={`${bodyClass} mt-4`}>
        We work with clients during major transitions to develop and execute a strategy to insulate them from future risk and establish early leverage.
      </p>
      <BulletList
        items={[
          'A significant investment, transaction, or strategic decision is on the table.',
          'Advisors are misaligned on the ultimate objective, slowing down momentum.',
          'A leadership transition or restructuring threatens organizational stability.',
          'A cross-border or cross-jurisdictional matter requires cultural and regulatory alignment.',
          'Reputation and perception are vital to future success.',
          "Questions on tactical strategy or upcoming activity don't have clear, positive outcomes.",
        ]}
      />

      <Rule />

      <h3 className={h3Class}>Regaining Leverage When Pressure Builds</h3>
      <p className={`${bodyClass} mt-4`}>
        We step in to stabilize operations, re-establish control, and win back leverage when a situation begins to slip.
      </p>
      <BulletList
        items={[
          'An acquisition is failing to deliver its expected results.',
          'The business is underperforming and the root cause needs to be addressed.',
          'Ownership groups, partnerships, or vital stakeholder relationships are deteriorating.',
          'Leadership lacks reliable information, damaging the organization from within.',
          'Financial, legal, and reputational concerns begin to compound or overlap.',
          'A legal, regulatory, or governmental matter begins to develop.',
          'Another party has gained leverage, shifting the power dynamic against our client.',
        ]}
      />

      <Rule />

      <h2 className={h2Class}>The Objective is Always the Same</h2>
      <p className={`${bodyClass} mt-6`}>
        Whether we enter a situation early to build leverage or come in late to manage a crisis, our mandate does not change:
      </p>
      <BulletList
        items={[
          'Establish facts over assumptions.',
          'Isolate priorities immediately.',
          'Build the leverage to protect what matters most and execute a workable path forward.',
        ]}
      />
    </PageLayout>
  )
}
