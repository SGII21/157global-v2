import { useEffect } from 'react';
import Page from '../components/Page'

export default function About() {
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'About');
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
        }}
      >
        Thirty years working, not observing, in difficult situations.
      </h1>
      <div style={{ marginTop: '40px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          157Global is built from 30 years of global experience inside difficult operational, financial, reputational, and legal realities. Where pressure, uncertainty, and consequence required correct decisions and movement to survive, let alone succeed.
        </p>
        <p style={{ margin: '28px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Our foundation is shaped from an operator building and operating organizations throughout North America, Central and Eastern Europe, and Southern Europe while also simultaneously advising, operating, and leading inside one of the world's most demanding global conglomerates.
        </p>
        <p style={{ margin: '28px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Through these experiences, we know that success out of difficult situations depends on experienced involvement before options narrow and positions harden.
        </p>
      </div>
    </Page>
  )
}
