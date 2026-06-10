import { useEffect, useState } from 'react'

const CONSENT_KEY = 'cookieConsent'
const MEASUREMENT_ID = 'G-60XBS257X8'

function initializeGoogleAnalytics() {
  if (window.gtag) {
    return
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', MEASUREMENT_ID)
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_KEY)

    if (storedConsent === 'accepted') {
      initializeGoogleAnalytics()
      return
    }

    if (storedConsent !== 'declined') {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    initializeGoogleAnalytics()
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        background: '#E3E3DF',
        borderTop: '1px solid rgba(35,35,32,0.12)',
        padding: '24px',
        fontFamily: 'Inter, Arial, sans-serif',
        color: '#232320',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '14px',
            lineHeight: 1.6,
            color: '#232320',
            maxWidth: '680px',
          }}
        >
          This site uses cookies to analyze traffic via Google Analytics. You can accept or decline non-essential cookies.
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="/cookie-policy"
            style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '12px',
              color: '#7A7670',
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.target.style.color = '#232320'}
            onMouseLeave={e => e.target.style.color = '#7A7670'}
          >
            Cookie Policy
          </a>
          <button
            type="button"
            onClick={handleDecline}
            style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '13px',
              color: '#232320',
              background: 'transparent',
              border: '1px solid rgba(35,35,32,0.24)',
              padding: '10px 16px',
              cursor: 'pointer',
            }}
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            style={{
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '13px',
              color: '#EDEDEA',
              background: '#232320',
              border: '1px solid #232320',
              padding: '10px 16px',
              cursor: 'pointer',
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
