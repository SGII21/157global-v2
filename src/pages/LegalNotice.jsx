import { useEffect } from 'react';
import Page from '../components/Page'

export default function LegalNotice() {
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'Legal Notice');
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
        Legal Notice
      </h1>
      <div style={{ marginTop: '40px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          157Global, LLC
        </p>
        <p style={{ margin: '2px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Florida Limited Liability Company
        </p>
        <p style={{ margin: '2px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          201 N. Franklin Street, Tampa, Florida 33602, USA
        </p>
        <p style={{ margin: '2px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Represented by: A.L. Skip Glass II, Managing Member
        </p>
        <p style={{ margin: '2px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Phone: +1 813.462.2580
        </p>
        <p style={{ margin: '2px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Email: inquiries@157global.com
        </p>
        <p style={{ margin: '2px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Website: 157global.com
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
        Professional Disclaimer
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          157Global, LLC is a private advisory firm. It does not provide legal representation, public accounting, tax advisory, or licensed investigative services. All services provided by 157Global are operational, strategic, and advisory in nature.
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
        Applicable Jurisdictions
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          This notice satisfies the legal disclosure requirements applicable in Germany, Austria, Italy, Spain, and the United Kingdom. For German and Austrian users, this page constitutes the required Impressum under §5 TMG and §25 MedienG respectively.
        </p>
      </div>
    </Page>
  )
}
