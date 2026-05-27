export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        background: '#E3E3DF',
        borderTop: '1px solid rgba(35, 35, 32, 0.12)',
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '920px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '13px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#7A7670',
          }}
        >
          157Global
        </div>
        <a
          href="mailto:inquiries@157global.com"
          style={{
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '13px',
            color: '#7A7670',
            textDecoration: 'none',
          }}
        >
          inquiries@157global.com
        </a>
      </div>
    </footer>
  )
}
