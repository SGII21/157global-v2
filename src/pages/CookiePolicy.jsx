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
        Last updated: January 1, 2025
      </p>
      <p className={`${bodyClass} mt-6`}>
        This Cookie Policy explains how 157Global LLC uses cookies on www.157global.com.
      </p>
      <p className={`${bodyClass} mt-6`}>
        What Are Cookies
      </p>
      <p className={`${bodyClass} mt-6`}>
        Cookies are small text files stored on your device when you visit a website. They help us understand how visitors use our site.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Cookies We Use
      </p>
      <p className={`${bodyClass} mt-6`}>
        We use Google Analytics cookies to collect anonymous data about site traffic and usage. These cookies do not identify you personally.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Your Choices
      </p>
      <p className={`${bodyClass} mt-6`}>
        When you first visit the site, you will be asked to accept or decline cookies. If you decline, analytics cookies will not be set. You can change your preference at any time by clearing your browser cookies and revisiting the site.
      </p>
      <p className={`${bodyClass} mt-6`}>
        Contact
      </p>
      <p className={`${bodyClass} mt-6`}>
        For questions about our cookie use, contact inquiries@157global.com.
      </p>
    </PageLayout>
  )
}
