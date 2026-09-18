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

      <h2 className={h2Class}>What is going on?</h2>
      <p className={`${bodyClass} mt-4`}>
        Sometimes the first indication of a problem or an opportunity is simply a feeling. We work to establish and understand the facts, determine what is actually happening, and give our clients the insight they need.
      </p>
     
      <Rule />

      <h2 className={h2Class}>Should we do this, and how?</h2>
      <p className={`${bodyClass} mt-4`}>
        Opportunity and risk can masquerade as one another. We work to understand the facts, consequences, and available options to build the leverage needed to help our clients pursue their goals.
      </p>
      
      <h2 className={h2Class}>What do we do about it?</h2>
      <p className={`${bodyClass} mt-4`}>
        This is for the client who knows there is a problem. 157Global moves directly to uncovering facts, learning what has happened, understanding what matters and where pressure exists, and then building the leverage needed to influence the siutation in our client's favor.
      </p
      
     <Rule />
      <h2 className={h2Class}>The Objective</h2>
      <p className={`${bodyClass} mt-6`}>
       No matter why or when we engage, the objective does not change. We establish facts over assumptions, isolate what matters most, and work to strengthen our client's position.
      </p>
    </PageLayout>
  )
}
