import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/PageLayout'

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-[rgba(30,30,28,0.15)] border-t-accent" style={{ animation: 'spin 0.7s linear infinite' }} />
    </div>
  )
}

const bodyClass = 'font-sans text-[16px] leading-[1.75] text-ink md:text-[17px]'

export default function About() {
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
        About
      </h1>
      <p className={`${bodyClass} mt-8`}>
        157Global is built on over three decades of direct accountability inside the world's most demanding operational, financial, and legal environments.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Our firm reflects the hands-on experience and philosophy of an operator who has built, scaled, and advised organizations across North America and Europe. This history includes years of direct operational leadership and strategic counsel within one of the world's most complex global conglomerates.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Our capabilities were not developed through academic observation or consulting frameworks. They were forged through the actual ownership of outcomes, where performance was mandatory and actions carried consequences.
      </p>
      <p className={`${bodyClass} mt-6`}>
        We know that when a crisis hits, credentials and theoretical models fail. What matters is experienced involvement, tactical execution, and the ability to establish the leverage needed to survive.
      </p>
      <Link
        to="/about/founder"
        className="mt-8 inline-block font-sans text-[15px] text-accent transition-colors duration-200 hover:text-accent-hover hover:underline"
      >
        Meet our Founder
      </Link>
    </PageLayout>
  )
}
