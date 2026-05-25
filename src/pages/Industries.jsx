import { industries } from '../content/copy'
import { PageShell, PageH1, PageH2, Body, SectionBlock } from '../components/PageShell'

export default function Industries() {
  return (
    <PageShell>
      <SectionBlock>
        <PageH1>{industries.h1}</PageH1>
        <Body>{industries.intro}</Body>
      </SectionBlock>
      {industries.sections.map(({ h2, body }) => (
        <SectionBlock key={h2}>
          <PageH2>{h2}</PageH2>
          <Body>{body}</Body>
        </SectionBlock>
      ))}
      <SectionBlock>
        <Body>{industries.closing}</Body>
      </SectionBlock>
    </PageShell>
  )
}
