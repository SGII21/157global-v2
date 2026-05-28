import { useEffect } from 'react';
import Page from '../components/Page'

export default function RepresentativeWork() {
  useEffect(() => {
    document.body.setAttribute('data-page-title', 'Representative Work');
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
        Representative Work.
      </h1>
      <p style={{ marginTop: '40px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        Representative work of 157Global's leadership includes operational stabilization, reputational recovery, leadership transition support, labor and regulatory environments, complex dispute support, and cross-border operational restructuring.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        Details are limited to what the public domain and confidentiality permit.
      </p>

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
        Port Operations Crisis and Turnaround.
      </h2>
      <p style={{ marginTop: '28px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        Engaged by C-suite leadership during a critical operational and labor dispute impacting a Fortune 50 European automotive group's primary U.S. Mid-Atlantic gateway, under significant time and political pressure, 157Global leadership stood up and operated an independent port processing company from the ground up while restructuring local labor dynamics, restoring operational control, implementing quality and compliance systems, and having full operational and P&L responsibility.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        The operation stabilized supply-chain in Mid-Atlantic, operated a full factory quality processing environment, restored labor stability, protected enterprise reputation, and continued for eight years with the group's highest-rated quality performance in North America, zero compliance failures, and annual cost reductions exceeding eight figures.
      </p>

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
        Information Security, Liability Resolution, and Operational Control
      </h2>
      <p style={{ marginTop: '28px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        A global conglomerate's board and chairman of the board of management directed engagement of our involvement to resolve a complex matter which involved damaging information leaks affecting future financial performance, operational delays in the transport of confidential cargo, and mounting litigation exposure, matters that had already produced significant financial consequence and remained an active liability threat.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        Operating under letter authority and power of attorney from the parent, the engagement worked alongside general counsel, established a secure internal process, and stood up an independent external organization specifically built to remove the conditions producing the delays and information leaks. Direct negotiation with relevant government entities produced a protocol that addressed the liability exposure the organization had previously experienced through litigation.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        The combined internal and external solution operated for more than twenty years without further leak or litigation loss.
      </p>

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
        Discreet Operational Expansion
      </h2>
      <p style={{ marginTop: '28px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        A global organization required physical and operational expansion on a defined timetable with financial implications, with complete confidentiality of presence throughout. Public exposure, competitor awareness, premature regulatory attention and establishment of liability would have materially damaged the effort and the organization.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        The engagement managed all aspects of execution, acquisition, negotiation, budget, legal coordination with internal and external counsel, governmental and regulatory interface, zoning and entitlement, and physical and data security, while maintaining complete operational anonymity throughout. The work was delivered within protocol across every engagement, resulting in a standing designation as the provider of choice for critical activities within the specific statement of work and relevant regions.
      </p>

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
        Operational Support for Complex Legal Matters
      </h2>
      <p style={{ marginTop: '28px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        Engaged by client leadership and external legal counsel, domestic and international, across multiple complex disputes to provide the operational dimension that strong legal strategy requires. The work involved reviewing and analyzing the operational decisions and conditions that produced the dispute, documenting business evidence, stabilizing the operating environment to allow legal proceedings to advance, and providing counsel with a structured analysis of the operational landscape and its implications for legal strategy, positive or negative.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        Worked directly with general counsels and external transaction and litigation counsel to translate operational reality into meaningful evidence and strategic input. Our involvement was to resolve matters without public exposure, outside of the designated parties, and without residual reputational or financial consequence to the client.
      </p>
    </Page>
  )
}
