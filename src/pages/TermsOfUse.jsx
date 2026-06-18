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

export default function TermsOfUse() {
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
        Terms of Use
      </h1>
      <p className={`${bodyClass} mt-8`}>
        Last updated: June 10, 2026.
      </p>

      <h2 className={h2Class}>Nature of This Site</h2>
      <p className={`${bodyClass} mt-6`}>
        157Global LLC operates this website for informational purposes. Nothing on this site constitutes an offer of services, a consulting engagement, or a contractual relationship of any kind. No advisory or professional relationship is created by visiting this site, reading its content, or contacting us through it.
      </p>

      <h2 className={h2Class}>No Professional Advice</h2>
      <p className={`${bodyClass} mt-6`}>
        Content on this site is general in nature. It does not constitute legal, financial, operational, or other professional advice and should not be relied upon as such. Engagement of 157Global for any matter requires a separate written agreement.
      </p>

      <h2 className={h2Class}>Intellectual Property</h2>
      <p className={`${bodyClass} mt-6`}>
        All content on this site, including text, design, and the 157Global name and mark, is the property of 157Global LLC. No content may be reproduced, distributed, or used without prior written permission.
      </p>

      <h2 className={h2Class}>Limitation of Liability</h2>
      <p className={`${bodyClass} mt-6`}>
        To the extent permitted by applicable law, 157Global LLC accepts no liability for loss or damage arising from use of this site or reliance on its content.
      </p>

      <h2 className={h2Class}>Third Party Links</h2>
      <p className={`${bodyClass} mt-6`}>
        This site may contain links to third party websites. 157Global LLC has no control over and accepts no responsibility for their content.
      </p>

      <h2 className={h2Class}>Privacy and Cookies</h2>
      <p className={`${bodyClass} mt-6`}>
        Use of this site is also governed by our Privacy Policy and Cookie Policy.
      </p>

      <h2 className={h2Class}>Governing Law</h2>
      <p className={`${bodyClass} mt-6`}>
        These terms are governed by the laws of the State of Florida, United States. For users in the European Union or United Kingdom, mandatory consumer protection laws applicable in your jurisdiction apply alongside these terms.
      </p>

      <h2 className={h2Class}>Changes</h2>
      <p className={`${bodyClass} mt-6`}>
        157Global LLC reserves the right to update these terms at any time. The current version will always be available at this address.
      </p>

      <h2 className={h2Class}>Contact</h2>
      <p className={`${bodyClass} mt-6`}>
        157Global LLC
        <br />
        201 N. Franklin Street, Tampa, Florida 33602, USA
        <br />
        inquiries@157global.com
      </p>
    </PageLayout>
  )
}
