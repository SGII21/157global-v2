
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
      <h1 className="font-serif text-5xl font-bold text-ink">
        Philosophy
      </h1>

      <h2 className={h2Class}>Why We Exist</h2>

      <p className={`${bodyClass} mt-8`}>
        To improve and strengthen our clients' position.
      </p>

      <p className={`${bodyClass} mt-6`}>
        Decisions affect more than balance sheets and legal briefs. They create opportunities, provide for families, or disrupt livelihoods and threaten survival. We listen, uncover the facts, understand our clients' goals, and when needed, establish leverage and execute the workable path forward.
      </p>

      <Rule />

      <h2 className={h2Class}>Our Core Principles</h2>

      <LabeledList
        items={[
          {
            label: 'Experience Beats Theory',
            text: 'Credentials and academic theory cannot replace the instincts built by decades spent inside demanding, real world environments.',
          },
          {
            label: 'No Institutional Ego',
            text: 'We care about outcomes, not our image. The work is about solving the problem discreetly, responsibly, and effectively.',
          },
          {
            label: 'Facts Rule Outcomes',
            text: 'In pressurized environments, information gets pasteurized and sanitized as it moves upstream. Relying on bad information kills strategy from the start.',
          },
          {
            label: 'Perception Constructs Reality',
            text: 'Perception of strength or weakness is the reality until proven otherwise. It has to be deliberately aligned with strategy and managed, or leverage passes to the other side.',
          },
          {
            label: 'Judgment Over Checklists',
            text: 'Leverage only exists if there is seasoned judgment to know when to act, when to wait, and how to control a chaotic situation.',
          },
          {
            label: 'Substance Over Hype',
            text: "Real power is measured, calculated and quiet. It doesn't need to be hyped.",
          },
        ]}
      />

      <Rule />

      <blockquote className="mt-12 border-l-2 border-accent pl-6">
        <p className="font-serif text-[18px] italic leading-[1.7] text-ink md:text-[20px]">
          “Let him show forethought and consideration in his orders...
          whether the task concerns God or the world, let him be
          discerning and moderate... Let him so temper everything
          that the strong have something to strive for and the weak
          have nothing to run from.”
        </p>
        <footer className="mt-5 font-sans text-[13px] leading-relaxed text-ink/70">
          — Adapted from Chapter 64, <cite>The Rule of St. Benedict</cite>
        </footer>
      </blockquote>
    </PageLayout>
  )
}
