import { useEffect } from 'react';
import Page from '../components/Page'

export default function IndividualsInstitutions() {
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'Individuals & Institutions');
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
        Individuals & Institutions
      </h1>
      <div style={{ marginTop: '40px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Some situations do not begin with a legal issue, a financial issue, or an operational issue.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          But they all begin with a decision.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          A business opportunity. A partnership. An acquisition. A significant investment. A concern that something is not quite right.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Many owners and decision-makers already have attorneys, accountants, financial advisors, bankers, and other professionals they trust.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          What is often missing is an experienced, independent perspective focused on the entire picture.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          157Global works directly with business owners, investors, family enterprises, and institutions to help evaluate opportunities, identify risks, coordinate advisors when necessary, and support informed decision-making.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          We are not a replacement for legal, accounting, financial, or other specialized professionals.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          We help clients determine when those resources are needed, ensure the right questions are being asked, and maintain alignment across the people involved.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Decisions create opportunities and risks. 157Global's experience helps distinguish between the two.
        </p>
      </div>
    </Page>
  )
}
