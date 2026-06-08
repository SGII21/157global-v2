import { useEffect } from 'react';
import Page from '../components/Page'

const bullets = [
  'Pressure changes decision-making.',
  'Early decisions often shape later outcomes.',
  'Information loses its truth under pressure.',
  'Delay compounds consequence.',
  'Legal environments are often shaped by broader operational, reputational, financial, and personal realities.',
  'Facts and stability create time, options and leverage.',
]

export default function Home() {
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'Home');
    return () => document.body.removeAttribute('data-page-title');
  }, []);

  return (
    <Page className="!pb-0 md:!pb-0">
      <section style={{ paddingTop: '20px', paddingBottom: 0, marginTop: 0 }}>
        <div style={{ marginBottom: '48px' }}>
          <p style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '28px',
            fontWeight: '400',
            color: '#232320',
            letterSpacing: '0.04em',
            marginBottom: '0px',
          }}>
            Private Advisory
          </p>
          <p style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: '18px',
            fontWeight: '400',
            color: '#7A7670',
            letterSpacing: '0.02em',
          }}>
            Before and Through Difficulty.
          </p>
        </div>
        <h1
          className="text-[36px] md:text-[52px]"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 400,
            color: '#232320',
            maxWidth: '680px',
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Outcome depends on who you call.
        </h1>
        <p
          style={{
            marginTop: '32px',
            maxWidth: '640px',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '18px',
            color: '#232320',
            lineHeight: 1.75,
          }}
        >
          Experience and judgment can create leverage. Leverage can create time. Time can create operational stability. Operational stability can create optionality. We help companies and individuals before and through their most difficult moments.
        </p>
      </section>

      <section style={{ marginTop: '32px' }}>
        <h2
          className="text-[26px] md:text-[32px]"
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontWeight: 400,
            color: '#232320',
            maxWidth: '640px',
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          Difficult situations rarely begin when they become visible.
        </h2>
        <p
          style={{
            marginTop: '24px',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '18px',
            color: '#232320',
          }}
        >
          Experience tells us:
        </p>
        <ul style={{ marginTop: '20px', listStyle: 'none', padding: 0 }}>
          {bullets.map((item) => (
            <li
              key={item}
              style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '12px',
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
      </section>

      <section style={{ paddingBottom: '80px' }}>
        <p
          style={{
            marginTop: '24px',
            maxWidth: '640px',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '18px',
            color: '#232320',
            lineHeight: 1.75,
          }}
        >
          Financial issues, litigation, regulatory exposure, and reputational damage are not the problem. They are the symptoms. The problem is what caused the symptoms: decisions, actions, lack of action, and even perception.
        </p>
        <p
          style={{
            marginTop: '20px',
            maxWidth: '640px',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '18px',
            color: '#232320',
            lineHeight: 1.75,
          }}
        >
          Addressing the symptom without understanding and resolving the underlying cause is a shortsighted fix. That is where most engagements fail.
        </p>
        <p
          style={{
            marginTop: '20px',
            maxWidth: '640px',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '18px',
            color: '#232320',
            lineHeight: 1.75,
          }}
        >
          When a situation requires additional capabilities, we listen, assess, engage the right people, and manage the full effort on behalf of the client.
        </p>
        <p
          style={{
            marginTop: '20px',
            maxWidth: '640px',
            fontFamily: 'Inter, Arial, sans-serif',
            fontSize: '18px',
            color: '#232320',
            lineHeight: 1.75,
          }}
        >
          We establish clarity, stabilize, and move forward, one point of accountability. No gaps.
        </p>
      </section>
    </Page>
  )
}
