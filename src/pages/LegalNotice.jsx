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

function ContactBlock() {
  return (
    <div className="mt-8">
      {[
        '157Global, LLC',
        'Florida Limited Liability Company',
        '201 N. Franklin Street, Tampa, Florida 33602, USA',
        'Represented by: A.L. Skip Glass II, Managing Member',
        'Phone: +1 813.462.2580',
        'Email: inquiries@157global.com',
        'Website: 157global.com',
      ].map((item) => (
        <p key={item} className={bodyClass}>
          {item}
        </p>
      ))}
    </div>
  )
}

export default function LegalNotice() {
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
        Legal Notice
      </h1>

      <ContactBlock />

      <h2 className={h2Class}>Professional Disclaimer</h2>
      <p className={`${bodyClass} mt-6`}>
        157Global, LLC is a private advisory firm. It does not provide legal representation, public accounting, tax advisory, or licensed investigative services. All services provided by 157Global are operational, strategic, and advisory in nature.
      </p>

      <h2 className={h2Class}>Applicable Jurisdictions</h2>
      <p className={`${bodyClass} mt-6`}>
        This notice satisfies the legal disclosure requirements applicable in Germany, Austria, Italy, Spain, and the United Kingdom. For German and Austrian users, this page constitutes the required Impressum under §5 TMG and §25 MedienG respectively.
      </p>
    </PageLayout>
  )
}
