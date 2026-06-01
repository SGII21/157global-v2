import { useEffect } from 'react';
import Page from '../components/Page'

const navigateItems = [
  'Leadership and stakeholder conflict',
  'Operational or reputational issues',
  'Legal disputes and external pressure',
  'Contract or performance breakdown',
  'Cross-border transition and complexity',
  'Reliance on false data',
]

const involvementItems = [
  'Instability appears',
  'Pressure begins affecting decisions',
  'Leadership becomes isolated from operational reality',
  'Movement is paralyzed',
  'Operational decisions begin affecting legal realities',
  'Legal realities begin affecting operational ability',
  'Reputation affects outcomes',
  'Businesses are failing operationally while strategy is still being debated',
  'Time has not yet run out',
]

const engageItems = [
  'Instinct tells you something may be developing',
  'The stakes are high enough that the wrong first move matters',
  'You have good advisors, but no one is looking at the entire picture',
  'You want someone who has been through it, not someone who has only studied it',
  'You need experienced judgment before decisions become consequences',
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

function H2({ children, marginTop = '80px' }) {
  return (
    <h2
      className="text-[24px] md:text-[28px]"
      style={{
        marginTop,
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
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'Situations');
    return () => document.body.removeAttribute('data-page-title');
  }, []);

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
          marginBottom: '24px',
        }}
      >
        Situations
      </h1>
      <p style={{ marginTop: '28px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        Some situations are obvious. Most sneak up.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        They begin as decisions, opportunities, concerns, disagreements, unusual circumstances, or differing perceptions.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        The earlier a situation is understood and addressed, the better the options.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        Owners, investors, executives, and institutions bring us in early when they want an experienced perspective up front.
      </p>
      <H2 marginTop="40px">Engage us when:</H2>
      <DashList items={[
        'Instinct tells you something may be developing',
        'A decision that carries a lot of weight is being considered',
        'You have good advisors, but no one coordinating the entire picture',
        'You want someone who has been through it, not someone who has only studied it or talked about it',
        'You need experienced judgment before decisions create consequences',
      ]} />
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        Others engage us when operations, relationships, finances, reputation, or outcomes begin to take a hit.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        When that happens, experience matters.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        157Global helps ownership assess the situation, identify priorities, coordinate resources when necessary, and focus attention on what matters most.
      </p>
      <H2 marginTop="40px">Engage us when:</H2>
      <DashList items={[
        'Uncertainty is affecting decision-making',
        'Leadership lacks reliable information',
        'Operational realities are creating legal, financial, or reputational concerns',
        'Advisors are providing different answers',
        'Time, resources, or options are becoming limited',
        'The cost of inaction is increasing',
      ]} />
    </Page>
  )
}
