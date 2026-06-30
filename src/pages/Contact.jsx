import { useEffect, useState } from 'react'
import PageLayout from '../components/PageLayout'

function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-[rgba(30,30,28,0.15)] border-t-accent" style={{ animation: 'spin 0.7s linear infinite' }} />
    </div>
  )
}

export default function Contact() {
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
        Contact
      </h1>
      <p className="mt-8 font-sans text-[16px] leading-[1.75] text-ink md:text-[17px]">
        Confidentiality and discretion are understood.
      </p>
      <a href="mailto:inquiries@157global.com?subject=157Global%20Inquiry" className="font-sans text-sm font-medium text-ink underline hover:opacity-60 transition-opacity inline-block">Contact</a>
    </PageLayout>
  )
}
