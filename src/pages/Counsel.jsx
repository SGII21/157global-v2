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
        Supporting Legal Strategy through Facts and Narratives
      </h1>
      <p className={`${bodyClass} mt-8`}>
        Legal outcomes are determined by operational facts.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Strong legal counsel knows that what actually happened, why it happened, what the records reflect, and what people knew at the time are not legal questions. They are operational realities which actively help or hurt the legal strategy.
      </p>
      <p className={`${bodyClass} mt-6`}>
        157Global is not a law firm, a traditional investigative agency, or an expert witness practice. Our job is to close the gap between what the legal strategy requires and what the operational facts support, building the exact leverage legal counsel needs.
      </p>

      <Rule />

      <h3 className={h3Class}>1. Before Positions Harden (Pre-Litigation)</h3>
      <p className={`${bodyClass} mt-4`}>
        Many legal matters are born long before a lawsuit is filed. We assist legal counsel and ownership by reconstructing messy timelines, separating fact from fiction, and uncovering the ground truth before public or legal positions become fixed. We align individual or business goals with the legal strategy while actively managing reputation and perception to gain early leverage.
      </p>
      <h3 className={h3Class}>2. During Active Proceedings & Pre-Litigation</h3>
      <p className={`${bodyClass} mt-4`}>
        We support legal counsel with deep financial reviews, operational analysis, and evidence-supported narrative construction. Where necessary, we operate under Kovel engagements and other privileged structures to protect investigations involving commercial fraud, white-collar defense, regulatory exposure, and complex litigation.
      </p>
      <h3 className={h3Class}>3. When the Business Must Survive the Lawsuit</h3>
      <p className={`${bodyClass} mt-4`}>
        We understand a brilliant legal strategy is useless if the company or individual goes under before or during the trial. Legal pressure usually brings financial distress, operational chaos, and cratering confidence. We step in to build a moat. We develop and execute a strategy to protect cash flow, stabilize operations, and address reputational and perception impacts, giving legal counsel the room and time they need to win the legal fight.
      </p>
      <h3 className={h3Class}>4. Direct Operational Intervention</h3>
      <p className={`${bodyClass} mt-4`}>
        If a client's business is actively deteriorating or leadership is compromised, we move from advisory to direct intervention. We can assume interim executive authority, take operational control, and stabilize stakeholders to ensure there is still a functioning business left to defend.
      </p>
      <h3 className={h3Class}>5. After Resolution</h3>
      <p className={`${bodyClass} mt-4`}>
        Settlements and judgments carry operational and reputational fallout that lasts long after the court case is closed. We manage that transition, rebuilding credibility, restoring market confidence, and structuring the business to move forward cleanly.
      </p>

      <Rule />

      <p className="font-serif text-[20px] italic leading-[1.6] text-ink">
        Legal counsel who knows the gap between legal strategy and operational reality needs to be closed by experienced operators rely on us.
      </p>
    </PageLayout>
  )
}
