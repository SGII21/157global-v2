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
        Experience That Counts: Case Studies in Leverage
      </h1>
      <p className={`${bodyClass} mt-8`}>
        These matters are a small subset of the environments our leadership has lived in over the last three-plus decades.
      </p>

      <Rule />

      <h3 className={h3Class}>Gateway Turnaround</h3>
      <p className={`${bodyClass} mt-4`}>
        Retained by the board of a Euro 50 conglomerate during a critical gateway crisis, 157Global leadership created a solution to resolve compounding financial, labor, reputational, and quality failures. Operating under compressed timelines and intense political pressure, we stood up and ran a completely new independent company with complete P&L responsibility. We negotiated a revised labor agreement and implemented rigorous operating protocols and quality processes, while directly managing a union-represented workforce of over 300 employees. Over an eight-year tenure, the operation achieved the highest-rated quality performance in North America for the group while generating annual cost savings exceeding eight figures.
      </p>

      <Rule />

      <h3 className={h3Class}>Institutional Operations</h3>
      <p className={`${bodyClass} mt-4`}>
        Following severe internal failures, a global enterprise faced continued legal, liability, reputational, and commercial exposure across multiple jurisdictions. The mandate came directly from the Chairman of the Management Board: design and execute a strategic solution under an aggressive timetable. We built, established, and operated an independent operational structure outside the main enterprise organization. This framework embedded essential enterprise functions while bypassing internal political strife and neutralizing risk across all fronts. The structure operated successfully for more than three decades without a single incident.
      </p>

      <Rule />

      <h3 className={h3Class}>Operational Support for Complex Legal Matters</h3>
      <p className={`${bodyClass} mt-4`}>
        We provide international organizations with the operational facts necessary to support complex legal strategies, working directly alongside outside litigation counsel, transactional attorneys, and in-house general counsel. Our engagements span preventative business structuring, pre-litigation advisory, active civil and white-collar criminal defense, and post-resolution stabilization. We reconstruct messy operational data, build evidence-supported narratives, and stabilize business functions to align corporate objectives with the legal strategy, securing realistic outcomes and legal leverage.
      </p>

      <Rule />

      <h3 className={h3Class}>Reputation and Stakeholder Management</h3>
      <p className={`${bodyClass} mt-4`}>
        An organization facing severe reputational deterioration from negative public reporting and operational breakdowns required immediate intervention to protect confidence and organizational stability. We stepped in to isolate and fix the root operational failures while simultaneously controlling the narrative. By integrating targeted communications, disciplined stakeholder engagement, and operational corrections, we restored market confidence, protected organizational stability, and re-established the entity's competitive position in the global market.
      </p>

      <Rule />

      <h3 className={h3Class}>Post-Acquisition Integration</h3>
      <p className={`${bodyClass} mt-4`}>
        Following the acquisition of a significant stake in a ten-figure enterprise, the acquiring entity encountered deep cultural conflict, operational bottlenecks, and severe quality gaps that were not recognized prior to closing. Active resistance from the acquiree, paired with external government backing for the legacy owners, created a hostile operating environment. We stepped in to manage both operations and stakeholder politics, establishing an independent operating framework that bridged competing objectives and cultures. This allowed operations to continue profitably while protecting the investor's long-term capital and strategic interests.
      </p>

      <Rule />

      <h3 className={h3Class}>Government and Regulatory Navigation</h3>
      <p className={`${bodyClass} mt-4`}>
        Engaged following systemic compliance failures involving imports, exports, regulatory violations, and substantial liability exposure for a global enterprise. The assignment required building and running an operational structure capable of coordinating compliance, security, legal, and operational functions simultaneously, with zero margin for error or public exposure. We successfully met all regulatory requirements across multiple jurisdictions while maintaining uninterrupted operational continuity for more than three decades.
      </p>
    </PageLayout>
  )
}
