import Page from '../components/Page'

const beliefs = [
  'We exist to help clients navigate their worst moments.',
  'Knowledge requires situational experience.',
  'Stewardship, humility, responsibility, and dignity of work matter.',
  'It is not about how great we are. It is about how we can solve the problem.',
  'No crisis or legal matter is unavoidable. Decisions and perceptions are often their catalysts.',
  'Help should not be determined solely by how much someone can spend, but by our ability to help solve the problem.',
]

export default function Philosophy() {
  return (
    <Page>
      <h1
        className="text-[34px] md:text-[48px]"
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        What we believe.
      </h1>
      <ul style={{ marginTop: '40px', listStyle: 'none', padding: 0 }}>
        {beliefs.map((item) => (
          <li
            key={item}
            style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '20px',
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '18px',
              color: '#232320',
              lineHeight: 1.75,
            }}
          >
            <span style={{ color: '#8C7355' }}>—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '48px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Difficult situations affect more than balance sheets, public narratives, or legal positions. They affect people, families, organizations, livelihoods, reputations, and survivability.
        </p>
        <p style={{ margin: '24px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Knowledge requires situational experience. Theory, credentials, and institutional language do not replace lived operational experience inside difficult environments.
        </p>
        <p style={{ margin: '24px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          The work is not about institutional image. It is about solving the problem responsibly and effectively.
        </p>
        <p style={{ margin: '24px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Help should not be determined solely by how much someone can spend, but by their need and our ability to help solve the problem.
        </p>
      </div>
    </Page>
  )
}
