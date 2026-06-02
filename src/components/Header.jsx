import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'About', path: '/about' },
  { label: 'Philosophy', path: '/philosophy' },
  { label: 'Situations', path: '/situations' },
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
  const [whoOpen, setWhoOpen] = useState(false)

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
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 24px',
            height: '72px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', marginRight: '48px', flexShrink: 0 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2006.01 1608.19"
              style={{ height: '56px', width: 'auto', display: 'block' }}
              aria-label="157Global"
            >
              <g>
                <path d="M49.56,1459.89c0,59.4,40.52,103.06,112.5,103.06,13.37,0,27.53-3.15,38.94-7.08v-105.02h47.59v134.13c-14.16,10.62-50.35,23.21-88.9,23.21-98.73,0-159.7-64.51-159.7-148.29,0-89.29,66.08-156.95,169.54-156.95,32.65,0,63.33,7.08,81.82,17.7v46.02c-20.46-10.23-50.35-19.67-79.46-19.67-77.1,0-122.33,46.42-122.33,112.89Z"/>
                <path d="M536.51,1557.44v44.45h-147.9v-295.01h48.38v250.57h99.52Z"/>
                <path d="M625.4,1455.57c0-86.54,65.69-152.62,152.23-152.62s152.23,66.08,152.23,152.62-64.9,152.62-152.23,152.62-152.23-66.48-152.23-152.62ZM881.08,1455.57c0-61.76-44.06-108.57-103.45-108.57s-103.06,46.81-103.06,108.57,43.27,107.38,103.06,107.38,103.45-46.42,103.45-107.38Z"/>
                <path d="M1293.29,1510.63c0,60.97-47.99,97.55-140.43,97.55-33.43,0-76.7-6.69-93.62-14.16v-287.15h116.83c57.82,0,90.08,29.89,90.08,73.95,0,22.42-12.59,44.45-30.29,55.07,30.29,8.65,57.43,35.4,57.43,74.74ZM1175.68,1350.93h-69.23v72.77h70.81c28.32,0,40.51-17.31,40.51-36.97s-11.8-35.79-42.09-35.79ZM1244.91,1510.24c0-25.17-17.31-46.02-53.1-46.02h-85.36v93.22c12.98,4.33,35.4,6.29,51.14,6.29,65.69,0,87.32-22.42,87.32-53.5Z"/>
                <path d="M1579.24,1540.92h-121.94l-25.57,60.97h-53.89l137.28-298.95h6.29l137.28,298.95h-53.89l-25.57-60.97ZM1518.27,1395.77l-43.66,103.45h86.93l-43.27-103.45Z"/>
                <path d="M1918.29,1557.44v44.45h-147.9v-295.01h48.38v250.57h99.52Z"/>
                <path d="M130.63,230.84c0-51.9-25.05-80.53-66.21-80.53-10.74,0-25.05,1.79-39.37,7.16l-8.95,3.58-7.16-35.79L327.47,0h17.89v937.69c0,71.58,48.32,119.9,119.9,119.9h1.79v35.79H8.94v-35.79h1.79c71.58,0,119.9-48.32,119.9-119.9V230.84Z"/>
                <path d="M515.36,837.48c55.47,107.37,153.9,157.48,248.74,157.48,136,0,264.84-96.63,264.84-264.84s-134.21-259.48-280.95-259.48c-66.21,0-134.21,17.89-193.27,55.47h-19.69L746.2,17.89h540.43l-69.79,214.74h-520.74l-96.63,230.84c66.21-21.47,123.47-32.21,198.63-30.42,649.59,5.37,529.69,678.22,51.9,678.22-177.16,0-306-103.79-366.85-259.48l32.21-14.32Z"/>
                <path d="M1895.06,232.63h-588.74l60.84-214.74h638.85c-159.26,492.11-284.53,578-322.11,1075.48h-212.95l424.11-860.74Z"/>
              </g>
            </svg>
          </a>

          <nav className="hidden md:flex" style={{ marginLeft: 'auto', gap: '48px', alignItems: 'center' }}>
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
            <div
              style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setWhoOpen(true)}
              onMouseLeave={() => setWhoOpen(false)}
            >
              <span
                style={{
                  fontFamily: 'Inter, Arial, sans-serif',
                  fontSize: '13px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#7A7670',
                  cursor: 'pointer',
                  transition: 'color 200ms ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#232320'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#7A7670'}
              >
                Who We Serve
              </span>
              {whoOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    background: 'rgba(237, 237, 234, 0.98)',
                    border: '1px solid rgba(35, 35, 32, 0.12)',
                    padding: '16px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    minWidth: '220px',
                    zIndex: 50,
                  }}
                >
                  <NavLink
                    to="/operational-legal-reality"
                    style={desktopLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#232320'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#7A7670'}
                  >
                    For Counsel
                  </NavLink>
                  <NavLink
                    to="/individuals-institutions"
                    style={desktopLinkStyle}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#232320'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#7A7670'}
                  >
                    Individuals & Institutions
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/representative-work"
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
              Work
            </NavLink>
            <NavLink
              to="/contact"
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
              Contact
            </NavLink>
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
            <span
              style={{
                fontFamily: 'Inter, Arial, sans-serif',
                fontSize: '13px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: '#7A7670',
              }}
            >
              Who We Serve
            </span>
            <NavLink
              to="/operational-legal-reality"
              onClick={() => setOpen(false)}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '24px',
                color: '#232320',
                textDecoration: 'none',
              }}
            >
              For Counsel
            </NavLink>
            <NavLink
              to="/individuals-institutions"
              onClick={() => setOpen(false)}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '24px',
                color: '#232320',
                textDecoration: 'none',
              }}
            >
              Individuals & Institutions
            </NavLink>
            <NavLink
              to="/representative-work"
              onClick={() => setOpen(false)}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '24px',
                color: '#232320',
                textDecoration: 'none',
              }}
            >
              Work
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontSize: '24px',
                color: '#232320',
                textDecoration: 'none',
              }}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </>
  )
}
