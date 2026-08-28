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
const h3Class = 'mt-8 font-serif text-[20px] font-semibold italic text-ink'

function Rule() {
  return <div className="my-10 h-px w-full bg-[rgba(30,30,28,0.15)]" />
}

function CaseStudy({ title, challenge, action, outcome }) {
  return (
    <>
      <h3 className={h3Class}>{title}</h3>
      <p className={`${bodyClass} mt-4`}>
        <strong>The Challenge:</strong> {challenge}
      </p>
      <p className={`${bodyClass} mt-4`}>
        <strong>The Action:</strong> {action}
      </p>
      <p className={`${bodyClass} mt-4`}>
        <strong>The Outcome:</strong> {outcome}
      </p>
    </>
  )
}

export default function Work() {
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
        Representative Work
      </h1>
      <p className={`${bodyClass} mt-8`}>
        These matters represent a subset of the high-stakes environments our leadership has navigated over the past three decades.
      </p>

      <Rule />

      <CaseStudy
        title="Enterprise Support"
        challenge="Retained by the board of a Euro 50 conglomerate during a critical gateway issue involving compounding financial, labor, reputational, and quality failures under compressed timelines and intense political pressure."
        action="Created and led an initiative that included standing up an independent company with P&L responsibility, establishing rigorous operating protocols and quality processes, and negotiating new labor agreements to directly manage a union-represented workforce of over 300 employees."
        outcome="Achieved the highest-rated quality performance in North America for the group while generating annual cost savings exceeding eight figures over an eight-year tenure."
      />

      <Rule />

      <CaseStudy
        title="Institutional Operations"
        challenge="Following internal failures, a global enterprise faced continued legal, liability, reputational, and commercial exposure across multiple jurisdictions, with a mandate directly from the Chairman of the Management Board."
        action="Designed and executed an independent operational structure outside the core enterprise organization, embedding essential enterprise functions while bypassing internal political strife and neutralizing legal, reputational, and commercial risk."
        outcome="Operated successfully across the enterprise under 157Global leadership, through multiple CEO and Board transitions, for more than three decades without a single incident."
      />

      <Rule />

      <CaseStudy
        title="Operational Support for Complex Legal Matters"
        challenge="International organizations required operational facts to support complex legal strategies across preventative business structuring, pre-litigation advisory, active civil and white-collar criminal defense, and post-resolution stabilization."
        action="Worked directly alongside outside litigation counsel, transactional attorneys, and in-house general counsel to reconstruct operational data and build evidence-backed narratives."
        outcome="Aligned corporate and principal objectives with legal strategy, securing realistic outcomes and necessary legal leverage."
      />

      <Rule />

      <CaseStudy
        title="Reputation and Stakeholder Management"
        challenge="An organization facing severe reputational repercussions from public reporting and operational breakdowns required immediate intervention to protect confidence and organizational stability."
        action="Isolated and fixed the root operational failures while simultaneously controlling the narrative through integrated communications and disciplined engagement."
        outcome="Restored confidence, protected organizational stability, and preserved the entity's competitive position in the global market."
      />

      <Rule />

      <CaseStudy
        title="Post-Acquisition Integration"
        challenge="Following the cross-border acquisition of a significant stake in a ten-figure enterprise, the acquiring entity encountered deep cultural conflict, operational bottlenecks, and severe quality gaps not addressed prior to closing, compounded by active resistance from the acquiree and external government backing for the legacy owners."
        action="Managed both operations and stakeholder politics, establishing an independent operating framework that bridged competing objectives and cultures."
        outcome="Successfully protected the investor's long-term capital and strategic interests by meeting the requirements and achieving the goals set forth in the engagement."
      />

      <Rule />

      <CaseStudy
        title="Government and Regulatory Navigation"
        challenge="Engaged following systemic compliance failures involving imports, exports, regulatory violations, and substantial liability exposure for a global enterprise."
        action="Built and ran an operational structure capable of coordinating compliance, security, legal, and operational functions simultaneously, with zero margin for error or public exposure."
        outcome="Met all regulatory requirements across multiple jurisdictions while maintaining uninterrupted operational continuity for more than three decades."
      />
    </PageLayout>
  )
}
