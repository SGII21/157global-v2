import { Link } from 'react-router-dom'
import { useState } from 'react'

const navLinkClass = 'font-sans text-[14px] font-normal text-white transition-colors duration-200 hover:text-accent'
const dropdownLinkClass = 'block px-4 py-2 font-sans text-[14px] font-normal text-white transition-colors duration-200 hover:bg-[rgba(255,255,255,0.06)] hover:text-accent'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [whoOpen, setWhoOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(255,255,255,0.10)] bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" aria-label="157Global Home">
          <img
            src="/157Global-Stacked-Black-web.png"
            alt="157Global"
            className="h-10 w-auto md:h-12"
            style={{ filter: 'invert(1)' }}
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link to="/" className={navLinkClass}>Home</Link>
          <Link to="/situations" className={navLinkClass}>Situations</Link>
          <div className="group relative">
            <button type="button" className={navLinkClass}>
              Who We Serve
            </button>
            <div className="invisible absolute left-0 top-full w-56 border border-[rgba(255,255,255,0.12)] bg-black py-2 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
              <Link to="/who-we-serve/individuals-and-institutions" className={dropdownLinkClass}>
                Individuals & Institutions
              </Link>
              <Link to="/who-we-serve/counsel" className={dropdownLinkClass}>
                Legal Counsel
              </Link>
            </div>
          </div>
          <Link to="/philosophy" className={navLinkClass}>Philosophy</Link>
          <Link to="/work" className={navLinkClass}>Work</Link>
          <div className="group relative">
            <button type="button" className={navLinkClass}>
              About
            </button>
            <div className="invisible absolute left-0 top-full w-48 border border-[rgba(255,255,255,0.12)] bg-black py-2 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
              <Link to="/about" className={dropdownLinkClass}>
                About 157Global
              </Link>
              <Link to="/about/founder" className={dropdownLinkClass}>
                Our Founder
              </Link>
            </div>
          </div>
          <Link to="/contact" className={navLinkClass}>Contact</Link>
        </nav>

        <button
          type="button"
          className="font-sans text-[14px] font-normal text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          Menu
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[rgba(255,255,255,0.10)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/situations" className={navLinkClass} onClick={() => setMenuOpen(false)}>Situations</Link>
            <button
              type="button"
              className={`${navLinkClass} text-left`}
              onClick={() => setWhoOpen(!whoOpen)}
              aria-expanded={whoOpen}
            >
              Who We Serve
            </button>
            {whoOpen && (
              <div className="ml-4 flex flex-col gap-3">
                <Link to="/who-we-serve/individuals-and-institutions" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Individuals & Institutions
                </Link>
                <Link to="/who-we-serve/counsel" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Legal Counsel
                </Link>
              </div>
            )}
            <Link to="/philosophy" className={navLinkClass} onClick={() => setMenuOpen(false)}>Philosophy</Link>
            <Link to="/work" className={navLinkClass} onClick={() => setMenuOpen(false)}>Work</Link>
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
                <Link to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  About 157Global
                </Link>
                <Link to="/about/founder" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                  Our Founder
                </Link>
              </div>
            )}
            <Link to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
