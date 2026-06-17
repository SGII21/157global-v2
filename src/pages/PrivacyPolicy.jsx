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
        Last updated: June 10, 2026.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Owner and Data Controller
      </p>
      <p className={`${bodyClass} mt-6`}>
        157Global, LLC
      </p>
      <p className={`${bodyClass} mt-6`}>
        201 N. Franklin Street, Tampa, Florida 33602, USA
      </p>
      <p className={`${bodyClass} mt-6`}>
        Email: inquiries@157global.com
      </p>
      <p className={`${bodyClass} mt-6`}>
        Data We Collect
      </p>
      <p className={`${bodyClass} mt-6`}>
        We automatically collect usage data when you visit this site, including session statistics and number of users, processed through Google Analytics 4 operated by Google Ireland Limited.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Purpose of Processing
      </p>
      <p className={`${bodyClass} mt-6`}>
        Data is collected solely for analytics, to understand site traffic and improve the site. It is not used for marketing, profiling, or sale to third parties.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Legal Basis
      </p>
      <p className={`${bodyClass} mt-6`}>
        For users in the European Union and United Kingdom, processing is based on consent. You may withdraw consent at any time through the cookie preferences panel.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Data Retention
      </p>
      <p className={`${bodyClass} mt-6`}>
        Personal data is retained only as long as required for the purposes collected, or as required by applicable law.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Your Rights
      </p>
      <p className={`${bodyClass} mt-6`}>
        Under GDPR and UK GDPR you have the right to access, correct, delete, restrict, or port your data, and to withdraw consent at any time. To exercise any right, contact inquiries@157global.com. Requests are answered within one month at no charge.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Third Party Processors
      </p>
      <p className={`${bodyClass} mt-6`}>
        Google Ireland Limited operates Google Analytics 4. Data is processed in Ireland. For details see Google's privacy policy.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Changes to This Policy
      </p>
      <p className={`${bodyClass} mt-6`}>
        We reserve the right to update this policy. The current version is always available at this address.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Cookie Policy
      </p>
      <p className={`${bodyClass} mt-6`}>
        This site uses cookies. For full details see our Cookie Policy at 157global.com/cookie-policy.
      </p>
    </PageLayout>
  )
}
