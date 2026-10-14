
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
        157Global is not a law firm, an investigative agency, or an expert
        witness practice. We are experienced operators who advise and work alongside counsel in the United States and abroad on civil, criminal, regulatory, and transactional matters, including proceedings across borders and jurisdictions. We support plaintiff, defense, and transaction counsel.
      </p>

      <Rule />

      <h2 className={h2Class}>How We Support Our Legal Colleagues</h2>

      <LabeledList
        items={[
          {
            label: 'Pre-Litigation & Transactional Support',
            text: "Establishing, interpreting, and testing facts, events, transactions, and communications. Identifying risks, opportunities, and inconsistencies to help clients and counsel evaluate transactions, potential disputes, and other important decisions while options remain available.",
          },
          {
            label: 'Active Proceedings',
            text: "Working alongside counsel in civil, criminal, and regulatory matters to identify and evaluate facts, assess business and financial circumstances, understand the intent, positions and interests of the parties, and contribute to strategy and narrative development. Providing operational support and managing business or reputational concerns that may affect the client's position. Working under a Kovel arrangement when requested by counsel.",
          },
          {
            label: 'Crisis Stabilization',
            text: "Protecting business operations, financial interests, personal and professional reputations, and relationships threatened by litigation, regulatory scrutiny, or other legal exposure. Working with counsel and clients to contain damage, preserve options, and stabilize their position while legal matters proceed.",
          },
          {
            label: 'Operational Intervention',
            text: "Taking direct operational responsibility on behalf of the client, or developing and overseeing action by the client's personnel to address problems, maintain business continuity, and protect value while coordinating with counsel.",
          },
          {
            label: 'Post-Resolution Transition',
            text: "Addressing the business, financial, operational, and reputational consequences that remain after a legal matter is resolved. Working with counsel and clients to restore stability, rebuild relationships, enhance value, and position the client to move forward.",
          },
          {
            label: 'Structural & Operational Confidentiality',
            text: "Working with counsel to develop and implement business structures that protect the client. Our experience includes ring-fencing operations, establishing independent operating entities, managing confidential transactions, and allocating responsibilities and risks through contractual arrangements while preserving appropriate client oversight and control.",
          },
        ]}
      />

      <p className="mt-10 font-sans text-xl font-semibold leading-snug text-ink">
        We use facts to create leverage for counsel.
      </p>

      <p className="mt-10 font-sans text-sm font-normal leading-relaxed text-ink opacity-80">
        Please do not submit privileged or case-specific information until
        appropriate confidentiality and engagement arrangements have been
        established.
      </p>

      <a
        href="mailto:legal@157global.com?subject=Legal%20Support%20Inquiry"
        className="mt-6 inline-block font-sans text-sm font-medium text-ink underline transition-opacity hover:opacity-60"
      >
        Contact
      </a>
    </PageLayout>
  )
}
