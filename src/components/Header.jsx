import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Philosophy', path: '/philosophy' },
  { label: 'Situations', path: '/situations' },
  { label: 'Operational & Legal Reality', path: '/operational-legal-reality' },
  { label: 'Representative Work', path: '/representative-work' },
  { label: 'Contact', path: '/contact' },
]

const desktopLinkStyle = ({ isActive }) => ({
  fontFamily: 'Inter, Arial, sans-serif',
  fontSize: '13px',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: isActive ? '#232320' : '#7A7670',
  textDecoration: 'none',
  transition: 'color 200ms ease',
})

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '72px',
          background: 'rgba(237, 237, 234, 0.96)',
          backdropFilter: 'blur(4px)',
          borderBottom: '1px solid rgba(35, 35, 32, 0.12)',
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '0 24px',
            height: '72px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>
            <img
              src="/157Global-Stacked-Black-web.png"
              alt="157Global"
              style={{ height: '56px', width: 'auto', display: 'block' }}
            />
          </NavLink>

          <nav className="hidden md:flex" style={{ gap: '28px' }}>
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                style={desktopLinkStyle}
                onMouseEnter={(event) => {
                  event.currentTarget.style.color = '#232320'
                }}
                onMouseLeave={(event) => {
                  if (!event.currentTarget.getAttribute('aria-current')) {
                    event.currentTarget.style.color = '#7A7670'
                  }
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="flex md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            style={{
              flexDirection: 'column',
              gap: '5px',
              background: 'transparent',
              border: 0,
              padding: 0,
            }}
          >
            <span style={{ display: 'block', width: '20px', height: '1px', background: '#232320' }} />
            <span style={{ display: 'block', width: '20px', height: '1px', background: '#232320' }} />
            <span style={{ display: 'block', width: '20px', height: '1px', background: '#232320' }} />
          </button>
        </div>
      </header>

      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#EDEDEA',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              color: '#232320',
              background: 'transparent',
              border: 0,
              fontSize: '24px',
              padding: 0,
            }}
          >
            X
          </button>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: '24px',
                  color: '#232320',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
