import { useEffect } from 'react';
import Page from '../components/Page'

export default function Contact() {
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'Contact');
    return () => document.body.removeAttribute('data-page-title');
  }, []);

  return (
    <Page className="pb-[160px] pt-[110px] md:pt-[160px]">
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
        Direct communication preferred.
      </h1>
      <p
        style={{
          marginTop: '32px',
          maxWidth: '480px',
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: '18px',
          color: '#232320',
          lineHeight: 1.75,
        }}
      >
        Confidentiality and discretion are understood.
      </p>
      <a
        href="mailto:inquiries@157global.com"
        style={{
          display: 'inline-block',
          marginTop: '40px',
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: '18px',
          color: '#232320',
          textDecoration: 'none',
        }}
      >
        inquiries@157global.com
      </a>
    </Page>
  )
}
