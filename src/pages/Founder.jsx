import { useEffect } from 'react';
import Page from '../components/Page'

export default function Founder() {
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'Our Founder');
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
        Our Founder
      </h1>
      <div style={{ marginTop: '40px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Skip Glass built 157Global from more than thirty years of working inside difficult situations, not observing them.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          From startups to global conglomerates, he earned his experience through operational leadership, performance, financial pressure, reputational crisis, government and regulatory matters, and legal complexity across North America, Central and Eastern Europe, and Southern Europe.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          His work placed him in difficult, performance-driven, unforgiving environments. The issues were real. The people affected were real.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          That foundation is why 157Global exists. And why the clients who engage us, whether before a situation develops or in the middle of one, get someone who has been there.
        </p>
        <img
          src="/skip-glass.jpg"
          alt="Skip Glass, Founder of 157Global"
          style={{
            width: '100%',
            maxWidth: '480px',
            height: 'auto',
            display: 'block',
            margin: '48px 0',
          }}
        />
        <p style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontStyle: 'italic',
          fontSize: '18px',
          lineHeight: '1.7',
          color: '#232320',
          maxWidth: '640px',
          marginTop: '0',
          marginBottom: '16px',
        }}>
          "I founded 157Global because my personal experiences have taught me, when problems hit, the room gets loud, the clock speeds up, and a mind under pressure is easily deceived. The natural instinct is to react instantly, but blind reaction only fuels the fire. Guidance must come before movement. Our job is to be there before the difficulty develops, or in the middle of it, and ensure the response is driven by experienced judgment, not emotional reaction."
        </p>
        <p style={{
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: '14px',
          letterSpacing: '0.04em',
          color: '#7A7670',
          marginTop: '0',
          marginBottom: '48px',
        }}>
          Skip Glass, Founder
        </p>
        <p style={{
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: '15px',
          color: '#232320',
        }}>
          <a href="mailto:inquiries@157global.com" style={{ color: '#232320' }}>
            inquiries@157global.com
          </a>
        </p>
      </div>
    </Page>
  )
}
