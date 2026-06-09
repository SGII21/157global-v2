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
          Most situations that require us do not begin as emergencies.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          They begin with a decision.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          A business opportunity. A partnership. An acquisition. A significant investment. A concern that something is not quite right.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          By the time the situation has a name, the clock is already running.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          While corporations and individuals already have attorneys, accountants, financial advisors, bankers, and other professionals they trust, what is often missing is the experiential knowledge that allows an independent perspective focused on the entire picture.
        </p>
      </div>
      <h2
        style={{
          marginTop: '40px',
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: 400,
          fontSize: '28px',
          color: '#232320',
          lineHeight: 1.3,
        }}
      >
        Real experience teaches certain realities:
      </h2>
      <ul style={{ marginTop: '28px', listStyle: 'none', padding: 0, maxWidth: '640px' }}>
        {[
          'Decisions made without the full picture create consequences. Understanding the why behind the what often determines the outcome.',
          'Financial pressure changes how people communicate, decide, and behave.',
          'Situational knowledge will never match experiential knowledge.',
          'Reputation affects relationships, negotiating position, and outcomes.',
          'Leadership breakdown affects execution at every level.',
          'Timing affects what remains possible.',
          'Misunderstandings, assumptions, and perceptions become reality if left unaddressed.',
          'Sometimes success means stabilization, protection, or survival. Other times it means winning. Neither can be true without clarity and execution.',
        ].map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: '16px', marginBottom: '16px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '17px', color: '#232320', lineHeight: 1.65 }}>
            <span style={{ flexShrink: 0, color: '#7A7670' }}>—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '40px', maxWidth: '640px' }}>
        <p style={{ margin: 0, fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          157Global works directly with individuals, business owners, investors, family enterprises, principals, and institutions to evaluate situations, identify risks, and create solutions.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          When engaged, we establish facts, identify priorities, understand the full reach of the situation, and help determine the path forward. When necessary, we become directly involved in execution.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Our involvement is not limited to what we do directly. Thirty years of working inside difficult situations across multiple industries and jurisdictions has produced relationships with experienced professionals who understand what these moments actually require. We engage them based on capability and experience, not proximity or convenience.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          We are not a replacement for legal, accounting, financial, or other specialized professionals.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          We help determine when those resources are needed, ensure the right questions are being asked, and maintain alignment across the people involved.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Before situations become difficult and after they already have, we help establish facts, identify priorities, and move toward an outcome.
        </p>
        <p style={{ margin: '20px 0 0', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
          Experienced judgment. Direct involvement. Before and through.
        </p>
      </div>
    </Page>
  )
}
