
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
const h2Class = 'mt-12 font-serif text-[22px] font-semibold leading-[1.25] text-ink md:text-[28px]'

function Rule() {
  return <div className="my-10 h-px w-full bg-[rgba(30,30,28,0.15)]" />
}

function LabeledList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li
          key={item.label}
          className="border-l border-accent pl-4 font-sans text-[17px] text-ink"
        >
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
        Individuals &amp; Organizations
      </h1>

      <h2 className={h2Class}>We Are Advisors Who Are Operators</h2>

      <p className={`${bodyClass} mt-6`}>
        157Global is not made of theorists, deck-builders, or black-and-white thinkers. We understand the facts, complexities, and competing interests that stand between our clients and the outcomes they need, and we have the experience to drive execution.
      </p>

      <Rule />

      <h2 className={h2Class}>Our Clients</h2>

      <LabeledList
        items={[
          {
            label: 'Founders & Owners',
            text: "Important business decisions, pursuing growth or acquisitions, resolving operating problems, managing difficult relationships, or protecting what they've built.",
          },
          {
            label: 'Family Offices & High Net Worth Individuals',
            text: 'Evaluating investments and business interests, navigating complex disputes, managing sensitive matters, or protecting family interests and reputation.',
          },
          {
            label: 'Executives & Boards',
            text: 'Important strategic and operational decisions, governance concerns, regulatory scrutiny, leadership problems, or situations where performance and reputation are at stake.',
          },
          {
            label: 'Companies & Investors',
            text: 'Evaluating acquisitions and investments, establishing or improving operations, addressing governance problems, or intervening when actual results fall short of expectations.',
          },
        ]}
      />

      <Rule />

      <h2 className={h2Class}>How We Work</h2>

      <p className={`${bodyClass} mt-6`}>
        We engage when needed. That may be early, when something doesn't
        make sense or an important decision is being considered, or later,
        when a problem already exists. We become involved when our role
        brings value based on what the client needs and what the situation
        requires.
      </p>

      <p className={`${bodyClass} mt-6`}>
        That may mean advising, taking direct action, working with existing
        advisors and resources, bringing in specialized expertise, or
        overseeing execution.
      </p>

      <p className={`${bodyClass} mt-6`}>
        We don't just analyze. We establish facts, protect options, and
        build the leverage needed for the situation.
      </p>

      <a
        href="mailto:inquiries@157global.com?subject=157Global%20Inquiry"
        className="font-sans text-sm font-medium text-ink underline hover:opacity-60 transition-opacity mt-6 inline-block"
      >
        Contact
      </a>
    </PageLayout>
  )
}
