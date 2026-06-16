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
        Last updated: January 1, 2025
      </p>
      <p className={`${bodyClass} mt-6`}>
        By accessing www.157global.com, you agree to these Terms of Use. If you do not agree, please do not use this site.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Use of the Site
      </p>
      <p className={`${bodyClass} mt-6`}>
        This site is provided for informational purposes only. Nothing on this site constitutes legal, financial, or professional advice. Use of any information on this site is at your own risk.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Intellectual Property
      </p>
      <p className={`${bodyClass} mt-6`}>
        All content on this site, including text, design, and images, is the property of 157Global LLC and may not be reproduced without written permission.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Limitation of Liability
      </p>
      <p className={`${bodyClass} mt-6`}>
        157Global LLC is not liable for any damages arising from use of or inability to use this site.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Governing Law
      </p>
      <p className={`${bodyClass} mt-6`}>
        These terms are governed by the laws of the State of New York.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Contact
      </p>
      <p className={`${bodyClass} mt-6`}>
        Questions regarding these terms may be directed to inquiries@157global.com.
      </p>
    </PageLayout>
  )
}
