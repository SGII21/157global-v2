import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../content/copy'

const linkClass = ({ isActive }) =>
  [
    'text-[0.875rem] text-ink hover:text-accent hover:underline md:text-[0.9375rem]',
    isActive ? 'underline' : 'no-underline',
  ].join(' ')

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-ink/10 bg-paper">
      <div className="mx-auto flex max-w-[60rem] flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <NavLink
          to="/"
          className="font-serif text-[1.125rem] tracking-tight text-ink no-underline hover:underline"
          onClick={() => setOpen(false)}
        >
          157Global
        </NavLink>

        <button
          type="button"
          className="self-start text-left text-[0.875rem] text-muted md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close menu' : 'Menu'}
        </button>

        <nav
          id="site-nav"
          className={`${open ? 'flex' : 'hidden'} flex-col gap-3 md:flex md:flex-row md:flex-wrap md:items-center md:gap-x-6 md:gap-y-2`}
        >
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
