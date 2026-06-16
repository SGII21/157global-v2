import { useEffect, useState } from 'react'
import PageLayout from '../components/PageLayout'

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-[rgba(30,30,28,0.15)] border-t-accent" style={{ animation: 'spin 0.7s linear infinite' }} />
    </div>
  )
}

const bodyClass = 'font-sans text-[16px] leading-[1.75] text-ink'

export default function PrivacyPolicy() {
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
        Privacy Policy
      </h1>
      <p className={`${bodyClass} mt-8`}>
        Last updated: January 1, 2025
      </p>
      <p className={`${bodyClass} mt-6`}>
        157Global LLC ("157Global," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit www.157global.com.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Information We Collect
      </p>
      <p className={`${bodyClass} mt-6`}>
        We collect non-personally identifiable information automatically through Google Analytics, including pages visited, time spent on site, browser type, and general geographic location. We do not collect names, email addresses, or personal data unless you contact us directly.
      </p>
      <p className={`${bodyClass} mt-6`}>
        How We Use Information
      </p>
      <p className={`${bodyClass} mt-6`}>
        Analytics data is used solely to understand how visitors use our site and to improve content and performance. We do not sell, rent, or share this data with third parties for marketing purposes.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Cookies
      </p>
      <p className={`${bodyClass} mt-6`}>
        We use cookies to support Google Analytics. You may decline cookies via the banner on our site. Declining cookies will disable analytics tracking but will not affect your ability to use the site.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Contact
      </p>
      <p className={`${bodyClass} mt-6`}>
        If you have questions about this policy, contact us at inquiries@157global.com.
      </p>
    </PageLayout>
  )
}
