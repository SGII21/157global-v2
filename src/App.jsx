
import { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

import Home from './pages/Home'
import Individuals from './pages/Individuals'
import Counsel from './pages/Counsel'
import Philosophy from './pages/Philosophy'
import Work from './pages/Work'
import About from './pages/About'
import Founder from './pages/Founder'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import CookiePolicy from './pages/CookiePolicy'
import LegalNotice from './pages/LegalNotice'

const SITE_URL = 'https://157global.com'
const SITE_NAME = '157Global'
const SOCIAL_IMAGE = `${SITE_URL}/LinkedIn_Banner.webp`

const pageMetadata = {
  '/': {
    title: '157Global | Specialized Advisory',
    description:
      'Experienced Judgment for Matters of Consequence. 157Global provides specialized advisory to individuals, institutions, and legal counsel.',
  },
  '/who-we-serve/individuals-and-institutions': {
    title: 'Individuals & Institutions | 157Global',
    description:
      '157Global works with individuals, business owners, and institutions facing consequential decisions, complex situations, and opportunities.',
  },
  '/who-we-serve/counsel': {
    title: 'Legal Counsel | 157Global',
    description:
      '157Global supports legal counsel through operational experience, fact development, strategic judgment, and execution in consequential matters.',
  },
  '/philosophy': {
    title: 'Our Philosophy | 157Global',
    description:
      'The philosophy behind 157Global: experienced judgment, disciplined execution, and a commitment to strengthening the client’s position.',
  },
  '/work': {
    title: 'Representative Work | 157Global',
    description:
      'Representative work reflecting decades of operational responsibility, complex assignments, and trusted execution for major organizations.',
  },
  '/about': {
    title: 'About 157Global | Specialized Advisory',
    description:
      'Learn about 157Global, a specialized advisory firm built on decades of experience working directly with principals and organizations.',
  },
  '/about/founder': {
    title: 'Founder | 157Global',
    description:
      'Learn about the founder of 157Global and more than three decades of experience advising and operating businesses across the United States and Europe.',
  },
  '/contact': {
    title: 'Contact 157Global | Specialized Advisory',
    description:
      'Contact 157Global to discuss a consequential business matter, an emerging concern, or an opportunity requiring experienced judgment.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | 157Global',
    description:
      'Read the 157Global Privacy Policy concerning personal information, website analytics, and data protection.',
  },
  '/terms-of-use': {
    title: 'Terms of Use | 157Global',
    description:
      'Read the terms governing use of the 157Global website, including professional disclaimers and limitations.',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | 157Global',
    description:
      'Read the 157Global Cookie Policy, including information about analytics, tracking technologies, and visitor preferences.',
  },
  '/legal-notice': {
    title: 'Legal Notice | 157Global',
    description:
      'Legal information, company contact details, and professional disclosures for 157Global, LLC.',
  },
}

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(
    `meta[${attribute}="${key}"]`
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function SEOManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalizedPath =
      pathname === '/' ? '/' : pathname.replace(/\/+$/, '')

    const effectivePath =
      normalizedPath === '/situations' ? '/' : normalizedPath

    const metadata = pageMetadata[effectivePath]

    if (!metadata) {
      return
    }

    const canonicalURL = `${SITE_URL}${
      effectivePath === '/' ? '/' : effectivePath
    }`

    document.title = metadata.title

    setMeta('name', 'description', metadata.description)

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    )

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }

    canonical.setAttribute('href', canonicalURL)

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', metadata.title)
    setMeta('property', 'og:description', metadata.description)
    setMeta('property', 'og:url', canonicalURL)
    setMeta('property', 'og:image', SOCIAL_IMAGE)
    setMeta(
      'property',
      'og:image:alt',
      '157Global | Experienced Judgment for Matters of Consequence'
    )

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', metadata.title)
    setMeta('name', 'twitter:description', metadata.description)
    setMeta('name', 'twitter:image', SOCIAL_IMAGE)
  }, [pathname])

  return null
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <SEOManager />
      <ScrollToTop />

      <div className="bg-linen-texture min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/situations"
              element={<Navigate to="/" replace />}
            />
            <Route
              path="/who-we-serve/individuals-and-institutions"
              element={<Individuals />}
            />
            <Route
              path="/who-we-serve/counsel"
              element={<Counsel />}
            />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/terms-of-use"
              element={<TermsOfUse />}
            />
            <Route
              path="/cookie-policy"
              element={<CookiePolicy />}
            />
            <Route
              path="/legal-notice"
              element={<LegalNotice />}
            />
          </Routes>
        </main>

        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}
