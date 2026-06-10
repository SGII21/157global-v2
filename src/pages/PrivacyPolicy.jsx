import { useEffect } from 'react';
import Page from '../components/Page'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'Privacy Policy');
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
        Privacy Policy
      </h1>
      <div style={{ marginTop: '40px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Last updated: June 10, 2026.
        </p>
      </div>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '40px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        Owner and Data Controller
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          157Global, LLC
        </p>
        <p style={{ margin: '6px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          201 N. Franklin Street, Tampa, Florida 33602, USA
        </p>
        <p style={{ margin: '6px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Email: inquiries@157global.com
        </p>
      </div>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '40px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        Data We Collect
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          We automatically collect usage data when you visit this site, including session statistics and number of users, processed through Google Analytics 4 operated by Google Ireland Limited.
        </p>
      </div>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '40px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        Purpose of Processing
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Data is collected solely for analytics — to understand site traffic and improve the site. It is not used for marketing, profiling, or sale to third parties.
        </p>
      </div>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '40px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        Legal Basis
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          For users in the European Union and United Kingdom, processing is based on consent. You may withdraw consent at any time through the cookie preferences panel.
        </p>
      </div>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '40px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        Data Retention
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Personal data is retained only as long as required for the purposes collected, or as required by applicable law.
        </p>
      </div>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '40px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        Your Rights
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Under GDPR and UK GDPR you have the right to access, correct, delete, restrict, or port your data, and to withdraw consent at any time. To exercise any right, contact inquiries@157global.com. Requests are answered within one month at no charge.
        </p>
      </div>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '40px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        Third Party Processors
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Google Ireland Limited operates Google Analytics 4. Data is processed in Ireland. For details see Google's privacy policy.
        </p>
      </div>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '40px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        Changes to This Policy
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          We reserve the right to update this policy. The current version is always available at this address.
        </p>
      </div>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '40px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        Cookie Policy
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          This site uses cookies. For full details see our Cookie Policy at 157global.com/cookie-policy.
        </p>
      </div>
    </Page>
  )
}
