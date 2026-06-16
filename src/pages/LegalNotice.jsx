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
      <p className={`${bodyClass} mt-8`}>
        157Global LLC is a limited liability company organized under the laws of the State of New York.
      </p>
      <p className={`${bodyClass} mt-6`}>
        The information contained on this website is for general informational purposes only and does not constitute legal, financial, regulatory, or professional advice of any kind. No attorney-client or advisory relationship is created by use of this site or by contacting 157Global LLC through this site.
      </p>
      <p className={`${bodyClass} mt-6`}>
        157Global LLC is not a law firm and does not provide legal services.
      </p>
      <p className={`${bodyClass} mt-6`}>
        All inquiries: inquiries@157global.com
      </p>
    </PageLayout>
  )
}
