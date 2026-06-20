import { Link } from 'react-router-dom'

const footerLinkClass = 'font-sans text-[13px] text-[rgba(255,255,255,0.65)] transition-colors duration-200 hover:text-white'

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="shrink-0">
            <Link to="/" aria-label="157Global Home">
              <img
                src="/157Global-Stacked-Black-web.webp"
                alt="157Global"
                className="h-9 w-auto"
                style={{ filter: 'invert(1)' }}
              />
            </Link>
            <p className="mt-4 whitespace-nowrap font-sans text-[11px] leading-relaxed text-ink-muted">
              Operational Advisory for High-Stakes Matters
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <Link to="/" className={footerLinkClass}>Home</Link>
            <Link to="/situations" className={footerLinkClass}>Situations</Link>
            <Link to="/who-we-serve/individuals-and-institutions" className={footerLinkClass}>Who We Serve</Link>
            <Link to="/philosophy" className={footerLinkClass}>Philosophy</Link>
            <Link to="/work" className={footerLinkClass}>Work</Link>
            <Link to="/about" className={footerLinkClass}>About</Link>
            <Link to="/contact" className={footerLinkClass}>Contact</Link>
          </nav>

          <nav className="flex flex-col gap-3">
            <Link to="/privacy-policy" className={footerLinkClass}>Privacy Policy</Link>
            <Link to="/terms-of-use" className={footerLinkClass}>Terms of Use</Link>
            <Link to="/cookie-policy" className={footerLinkClass}>Cookie Policy</Link>
            <Link to="/legal-notice" className={footerLinkClass}>Legal Notice</Link>
          </nav>

          <div>
            <a href="mailto:inquiries@157global.com" className={footerLinkClass}>
              inquiries@157global.com
            </a>
            <p className="mt-3 font-sans text-[12px] text-[rgba(255,255,255,0.40)]">
              157Global LLC
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[rgba(255,255,255,0.10)] pt-5 md:flex-row md:justify-between">
          <p className="font-sans text-[12px] text-[rgba(255,255,255,0.40)]">
            © 2025 157Global LLC. All rights reserved.
          </p>
          <p className="font-sans text-[12px] text-[rgba(255,255,255,0.40)]">
            157global.com
          </p>
        </div>
      </div>
    </footer>
  )
}
