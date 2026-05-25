import { representativeWork } from '../content/copy'
import { PageShell, PageH2, Body, SectionBlock } from '../components/PageShell'

export default function RepresentativeWork() {
  const { intro, bridge, caseTitle, caseBody, caseOutcome } = representativeWork

  return (
    <PageShell>
      <SectionBlock>
        <Body>{intro}</Body>
      </SectionBlock>
      <SectionBlock>
        <Body>{bridge}</Body>
      </SectionBlock>
      <SectionBlock>
        <PageH2>{caseTitle}</PageH2>
        <div className="space-y-6">
          <Body>{caseBody}</Body>
          <Body>{caseOutcome}</Body>
        </div>
      </SectionBlock>
    </PageShell>
  )
}
