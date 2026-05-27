import { useEffect } from 'react';
import Page from '../components/Page'

const beliefs = [
  'We exist to help clients through their worst moments.',
  'Difficult situations affect more than balance sheets, public narratives, or legal positions. They affect people, families, organizations, livelihoods, reputations, and survivability.',
  'Knowledge requires situational experience. Theory, credentials, and institutional language do not replace real operational experience inside difficult environments.',
  'The work is not about institutional image. It is about solving the problem responsibly and effectively.',
  'No crisis or legal matter is unavoidable. Decisions and perceptions are their catalysts.',
  'Help should not be determined solely by how much someone can spend, but by our ability to help.',
  'Stewardship, humility, responsibility, and dignity of work matter.',
]

export default function Philosophy() {
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'Philosophy');
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
          lineHeight: 1.2,
          margin: 0,
          marginBottom: '24px',
        }}
      >
        Why we exist.
      </h1>
      <ul style={{ marginTop: '0', listStyle: 'none', padding: 0 }}>
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
    </Page>
  )
}
