import { legalOperational } from '../content/copy'
import { PageShell, PageH1, PageH2, Body, SectionBlock } from '../components/PageShell'

export default function LegalOperationalRealities() {
  return (
    <PageShell>
      <SectionBlock>
        <PageH1>{legalOperational.h1}</PageH1>
      </SectionBlock>
      {legalOperational.sections.map(({ h2, body }) => (
        <SectionBlock key={h2}>
          <PageH2>{h2}</PageH2>
          <Body>{body}</Body>
        </SectionBlock>
      ))}
    </PageShell>
  )
}
