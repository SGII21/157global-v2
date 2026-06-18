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
const h2Class = 'mt-12 font-serif text-[22px] font-semibold leading-[1.25] text-ink md:text-[28px]'

export default function CookiePolicy() {
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
        Cookie Policy
      </h1>
      <p className={`${bodyClass} mt-8`}>
        Last updated: June 10, 2026.
      </p>

      <h2 className={h2Class}>Owner and Data Controller</h2>
      <p className={`${bodyClass} mt-6`}>
        157Global, LLC
        <br />
        201 N. Franklin Street, Tampa, Florida 33602, USA
        <br />
        Email: inquiries@157global.com
      </p>

      <h2 className={h2Class}>What Are Trackers</h2>
      <p className={`${bodyClass} mt-6`}>
        This site uses cookies and similar tracking technologies. These may include cookies, unique identifiers, and embedded scripts that store or access information on your device.
      </p>

      <h2 className={h2Class}>Trackers We Use</h2>
      <p className={`${bodyClass} mt-6`}>
        Necessary trackers: Technical cookies required for the site to function.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Measurement trackers: Google Analytics 4, operated by Google Ireland Limited, used to analyze traffic and user behavior. Data processed in Ireland.
      </p>

      <h2 className={h2Class}>Managing Your Preferences</h2>
      <p className={`${bodyClass} mt-6`}>
        You may accept or decline non-essential trackers when you first visit this site. You may change your preferences at any time through the cookie preferences panel. You may also control cookies through your browser settings, though this does not allow control by category.
      </p>

      <h2 className={h2Class}>Consequences of Declining</h2>
      <p className={`${bodyClass} mt-6`}>
        Declining non-essential trackers will disable Google Analytics. The site will continue to function normally.
      </p>

      <h2 className={h2Class}>Your Rights</h2>
      <p className={`${bodyClass} mt-6`}>
        Under GDPR and UK GDPR you have the right to withdraw consent at any time. Contact inquiries@157global.com to exercise any data rights. Requests are answered within one month at no charge.
      </p>

      <h2 className={h2Class}>Changes to This Policy</h2>
      <p className={`${bodyClass} mt-6`}>
        We reserve the right to update this policy. The current version is always available at this address.
      </p>
    </PageLayout>
  )
}
