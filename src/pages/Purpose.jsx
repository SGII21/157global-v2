import { purpose } from '../content/copy'
import { PageShell, PageH1, PageH2, Body, SectionBlock } from '../components/PageShell'

export default function Purpose() {
  return (
    <PageShell>
      <SectionBlock>
        <PageH1>{purpose.h1}</PageH1>
        <Body>{purpose.intro}</Body>
      </SectionBlock>
      {purpose.sections.map(({ h2, body }) => (
        <SectionBlock key={h2}>
          <PageH2>{h2}</PageH2>
          <Body>{body}</Body>
        </SectionBlock>
      ))}
    </PageShell>
  )
}
