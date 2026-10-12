
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
        Representative Work
      </h1>

      <p className={`${bodyClass} mt-8`}>
        Over more than three decades, our principal and his companies have
        worked in the United States and Europe on matters including:
      </p>

      <Rule />

      <p className={bodyClass}>
        Established and operated an independent union-represented company
        with full P&amp;L and balance sheet responsibility at the request of
        the leadership of a European multinational conglomerate facing
        serious financial, labor, quality, and reputational problems at a
        critical North American gateway operation. Over eight years, the
        company achieved the group's highest quality rating in North America
        and generated eight-figure cost savings for the parent company.
      </p>

      <Rule />

      <p className={bodyClass}>
        Designed, established, and operated an independent group of companies
        under a direct mandate from the Chairman of the Board of Management,
        working with the client's legal team to address legal, liability,
        reputational, and commercial exposure across multiple jurisdictions
        arising from internal enterprise politics and the risks associated
        with direct ownership and control. The companies operated for more
        than three decades, through multiple CEO and Board transitions,
        fulfilling their responsibilities.
      </p>

      <Rule />

      <p className={bodyClass}>
        Worked directly alongside outside litigation counsel, transactional
        attorneys, and in-house general counsel to identify facts, interpret
        events, assess business and financial circumstances, develop options,
        execute strategy, and provide operational support. This work aligned
        corporate and principal objectives with legal strategy, established
        leverage, and supported successful outcomes.
      </p>

      <Rule />

      <p className={bodyClass}>
        Isolated and fixed operational failures for a client facing
        reputational repercussions while simultaneously controlling the
        narrative through integrated communications and disciplined
        engagement. The work restored confidence, protected organizational
        stability, and preserved the client's competitive position.
      </p>

      <Rule />

      <p className={bodyClass}>
        Established and operated an independent company to address cultural
        conflict, operational bottlenecks, and quality gaps following a
        client's cross-border acquisition, which was also marked by active
        resistance from the acquired company and external government support
        for the legacy owners. The arrangement protected the client's capital
        and strategic interests.
      </p>

      <Rule />

      <p className={bodyClass}>
        Designed and operated an independent operational structure
        coordinating compliance, security, legal, and operational functions
        simultaneously under a mandate from the senior leadership of a
        global enterprise, following systemic failures involving imports,
        exports, regulatory violations, confidentiality, and liability
        exposure. Maintained uninterrupted operational continuity across
        multiple jurisdictions for more than three decades.
      </p>
    </PageLayout>
  )
}
