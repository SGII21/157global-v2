
import { Link } from 'react-router-dom'
import { useState } from 'react'

const navLinkClass = 'font-sans text-[14px] font-normal text-white transition-colors duration-200 hover:text-accent'
const dropdownLinkClass = 'block px-4 py-2 font-sans text-[14px] font-normal text-white transition-colors duration-200 hover:bg-[rgba(255,255,255,0.06)] hover:text-accent'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [whoOpen, setWhoOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
    setWhoOpen(false)
    setAboutOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(255,255,255,0.10)] bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" aria-label="157Global Home" onClick={closeMenu}>
          <img
            src="/157Global-Stacked-Black-web.webp"
            alt="157Global"
            width="360"
            height="289"
            className="h-10 w-auto md:h-12"
            style={{ filter: 'invert(1)' }}
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link to="/" className={navLinkClass}>
            Home
          </Link>

          <div className="group relative">
            <button type="button" className={navLinkClass}>
              Who We Work With
            </button>
            <div className="invisible absolute left-0 top-full w-64 border border-[rgba(255,255,255,0.12)] bg-black py-2 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <Link
                to="/who-we-serve/individuals-and-institutions"
                className={dropdownLinkClass}
              >
                Individuals &amp; Organizations
              </Link>
              <Link
                to="/who-we-serve/counsel"
                className={dropdownLinkClass}
              >
                Legal Counsel
              </Link>
            </div>
          </div>

          <Link to="/work" className={navLinkClass}>
            Representative Work
          </Link>

          <div className="group relative">
            <button type="button" className={navLinkClass}>
              About
            </button>
            <div className="invisible absolute right-0 top-full w-48 border border-[rgba(255,255,255,0.12)] bg-black py-2 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <Link to="/about" className={dropdownLinkClass}>
                About 157Global
              </Link>
              <Link to="/about/founder" className={dropdownLinkClass}>
                Our Founder
              </Link>
              <Link to="/philosophy" className={dropdownLinkClass}>
                Philosophy
              </Link>
            </div>
          </div>

          <Link to="/contact" className={navLinkClass}>
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="font-sans text-[14px] font-normal text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[rgba(255,255,255,0.10)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/" className={navLinkClass} onClick={closeMenu}>
              Home
            </Link>

            <button
              type="button"
              className={`${navLinkClass} text-left`}
              onClick={() => setWhoOpen(!whoOpen)}
              aria-expanded={whoOpen}
            >
              Who We Work With
            </button>

            {whoOpen && (
              <div className="ml-4 flex flex-col gap-3">
                <Link
                  to="/who-we-serve/individuals-and-institutions"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Individuals &amp; Organizations
                </Link>
                <Link
                  to="/who-we-serve/counsel"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Legal Counsel
                </Link>
              </div>
            )}

            <Link to="/work" className={navLinkClass} onClick={closeMenu}>
              Representative Work
            </Link>

            <button
              type="button"
              className={`${navLinkClass} text-left`}
              onClick={() => setAboutOpen(!aboutOpen)}
              aria-expanded={aboutOpen}
            >
              About
            </button>

            {aboutOpen && (
              <div className="ml-4 flex flex-col gap-3">
                <Link to="/about" className={navLinkClass} onClick={closeMenu}>
                  About 157Global
                </Link>
                <Link
                  to="/about/founder"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Our Founder
                </Link>
                <Link
                  to="/philosophy"
                  className={navLinkClass}
                  onClick={closeMenu}
                >
                  Philosophy
                </Link>
              </div>
            )}

            <Link to="/contact" className={navLinkClass} onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
