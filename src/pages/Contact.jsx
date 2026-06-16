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
      <a
        href="mailto:inquiries@157global.com"
        className="mt-6 inline-block font-sans text-[17px] text-accent transition-colors duration-200 hover:text-accent-hover hover:underline"
      >
        inquiries@157global.com
      </a>
    </PageLayout>
  )
}
