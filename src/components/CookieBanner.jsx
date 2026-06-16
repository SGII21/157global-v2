import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true)
    }
  }, [])

  const choose = (choice) => {
    localStorage.setItem('cookie-consent', choice)
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[rgba(255,255,255,0.12)] bg-black px-6 py-4">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-sans text-[13px] leading-relaxed text-[rgba(255,255,255,0.80)]">
          We use cookies to analyze site traffic and improve your experience. By continuing, you agree to our use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="bg-accent px-5 py-2 font-sans text-[13px] text-white hover:bg-accent-hover"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose('declined')}
            className="border border-[rgba(255,255,255,0.30)] bg-transparent px-5 py-2 font-sans text-[13px] text-white hover:border-white"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
