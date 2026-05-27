import Page from '../components/Page'

export default function RepresentativeWork() {
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
        Representative work includes operational stabilization, reputational recovery, leadership transition support, labor and regulatory environments, complex dispute support, and cross-border operational restructuring.
      </p>
      <p style={{ marginTop: '20px', maxWidth: '640px', fontFamily: 'Inter, Arial, sans-serif', fontSize: '18px', color: '#232320', lineHeight: 1.75 }}>
        The following example reflects work existing within the public domain.
      </p>

      <h2
        className="text-[24px] md:text-[28px]"
        style={{
          marginTop: '64px',
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
    </Page>
  )
}
