import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../content/copy'

const navLinkClass = ({ isActive }) =>
  [
    'text-[0.8125rem] leading-snug text-secondary hover:text-primary md:text-[0.875rem]',
    isActive ? 'text-primary' : '',
  ].join(' ')

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-40 border-b border-transparent',
          scrolled ? 'border-[var(--color-border)] bg-[rgba(15,17,16,0.92)]' : 'bg-transparent',
        ].join(' ')}
      >
        <div className="mx-auto flex h-[88px] max-w-[1180px] items-center justify-between px-6">
          <NavLink to="/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <img
              src="/157Global-Stacked-Silver-web.png"
              alt="157Global"
              className="h-[72px] w-auto"
              height={72}
            />
          </NavLink>

          <nav className="hidden items-center gap-5 xl:flex xl:gap-6" aria-label="Main">
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={navLinkClass}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="text-[0.8125rem] text-secondary xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={[
          'fixed inset-0 z-50 flex flex-col bg-bg px-6 pt-20 xl:hidden',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        style={{ transition: 'opacity 250ms ease' }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-6" aria-label="Main">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                [
                  'font-serif text-[1.375rem] text-primary',
                  isActive ? 'text-primary' : 'text-secondary',
                ].join(' ')
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="h-[88px]" aria-hidden="true" />
    </>
  )
}
