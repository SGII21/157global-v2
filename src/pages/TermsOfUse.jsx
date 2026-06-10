import { useEffect } from 'react';
import Page from '../components/Page'

export default function TermsOfUse() {
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'Terms of Use');
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
        Terms of Use
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
        Nature of This Site
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          157Global LLC operates this website for informational purposes. Nothing on this site constitutes an offer of services, a consulting engagement, or a contractual relationship of any kind. No advisory or professional relationship is created by visiting this site, reading its content, or contacting us through it.
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
        No Professional Advice
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Content on this site is general in nature. It does not constitute legal, financial, operational, or other professional advice and should not be relied upon as such. Engagement of 157Global for any matter requires a separate written agreement.
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
        Intellectual Property
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          All content on this site, including text, design, and the 157Global name and mark, is the property of 157Global LLC. No content may be reproduced, distributed, or used without prior written permission.
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
        Limitation of Liability
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          To the extent permitted by applicable law, 157Global LLC accepts no liability for loss or damage arising from use of this site or reliance on its content.
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
        Third Party Links
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          This site may contain links to third party websites. 157Global LLC has no control over and accepts no responsibility for their content.
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
        Privacy and Cookies
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Use of this site is also governed by our Privacy Policy and Cookie Policy.
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
        Governing Law
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          These terms are governed by the laws of the State of Florida, United States. For users in the European Union or United Kingdom, mandatory consumer protection laws applicable in your jurisdiction apply alongside these terms.
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
        Changes
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          157Global LLC reserves the right to update these terms at any time. The current version will always be available at this address.
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
        Contact
      </h2>
      <div style={{ marginTop: '24px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          157Global LLC
        </p>
        <p style={{ margin: '6px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          201 N. Franklin Street, Tampa, Florida 33602, USA
        </p>
        <p style={{ margin: '6px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          inquiries@157global.com
        </p>
      </div>
    </Page>
  )
}
