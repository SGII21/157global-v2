import Page from '../components/Page'

const shapeItems = [
  'Legal consequence is often the downstream expression of earlier decisions and operational failures',
  'Operational decisions often shape legal outcomes long before positions harden',
  'Pressure changes how people communicate, decide, and behave',
  'Information in performance-driven environments is often pasteurized and sanitized as it moves upward',
  'Reputation affects legal posture, negotiations, and survivability',
  'Perception shapes legal posture and negotiating conditions',
  'Timing affects what remains possible',
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

export default function OperationalLegal() {
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
        Operational reality affects legal outcome.
      </h1>
      <div style={{ marginTop: '40px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Most disputes, investigations, and legal matters do not originate legally.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          They begin operationally, financially, reputationally, or through failures in communication, leadership, execution, or judgment, long before legal realities emerge.
        </p>
      </div>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '64px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        What shapes legal outcome.
      </h2>
      <DashList items={shapeItems} />

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
        How we work alongside counsel.
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          157Global is not a law firm, investigative agency, expert witness practice, or pseudo-legal advisory operation.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          We work alongside counsel by helping organizations and individuals stabilize environments, improve grounded decision-making, reconstruct operational reality, preserve survivability, support disciplined movement, and improve execution quality under pressure.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Strong counsel is operationally reinforced.
        </p>
      </div>
    </Page>
  )
}
