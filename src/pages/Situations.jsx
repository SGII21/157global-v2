import Page from '../components/Page'

const riskItems = [
  'Leadership and stakeholder conflict',
  'Operational or reputational issues',
  'Legal disputes and external pressure',
  'Contract or performance breakdown',
  'Cross-border transition and complexity',
]

const navigateItems = [
  'Leadership and stakeholder conflict',
  'Operational or reputational breakdown',
  'Legal disputes and external pressure',
  'Contract or performance failure',
  'Cross-border transition and complexity',
  'Data becoming sanitized instead of operationally truthful',
]

const involvementItems = [
  'When instability appears',
  'When pressure begins affecting decisions',
  'When leadership becomes isolated from operational reality',
  'When movement is paralyzed',
  'When operational decisions begin affecting legal realities',
  'When legal realities begin affecting operational ability',
  'When reputation affects outcomes',
  'When businesses are failing operationally while strategy is still being debated',
  'When time has not yet run out',
]

const narrowItems = [
  'When the first signs of instability appear',
  'When facts become unclear',
  'When pressure begins affecting decisions',
  'When movement slows',
  'When survivability becomes uncertain',
  'When reputation becomes vulnerable',
  'When legal realities begin affecting operational stability',
  'When time has not yet run out',
]

function DashList({ items }) {
  return (
    <ul style={{ marginTop: '28px', listStyle: 'none', padding: 0 }}>
      {items.map((item) => (
        <li
          key={item}
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '14px',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '17px',
            color: '#232320',
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: '#8C7355' }}>—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function H2({ children }) {
  return (
    <h2
      className="text-[24px] md:text-[28px]"
      style={{
        marginTop: '80px',
        fontFamily: '"Playfair Display", Georgia, serif',
        fontWeight: 400,
        color: '#232320',
        lineHeight: 1.3,
      }}
    >
      {children}
    </h2>
  )
}

export default function Situations() {
  return (
    <Page>
      <h1
        className="text-[34px] md:text-[48px]"
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          maxWidth: '680px',
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        Difficult situations rarely begin all at once.
      </h1>
      <p style={{ marginTop: '40px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        We are brought in when finances, reputation, or survival are threatened.
      </p>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '64px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          maxWidth: '640px',
          lineHeight: 1.3,
        }}
      >
        We are brought in when stability, reputation, continuity, or survivability are at risk.
      </h2>
      <DashList items={riskItems} />

      <H2>The situations we navigate.</H2>
      <DashList items={navigateItems} />

      <H2>When our involvement matters most.</H2>
      <DashList items={involvementItems} />

      <H2>Involvement matters most before options narrow.</H2>
      <DashList items={narrowItems} />
    </Page>
  )
}
