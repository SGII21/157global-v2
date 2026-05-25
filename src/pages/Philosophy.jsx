import { philosophy } from '../content/copy'
import { PageShell, PageH1, PageH2, Body, SectionBlock } from '../components/PageShell'

export default function Philosophy() {
  return (
    <PageShell>
      <SectionBlock>
        <PageH1>{philosophy.h1}</PageH1>
        <Body>{philosophy.intro}</Body>
      </SectionBlock>
      {philosophy.sections.map(({ h2, body }) => (
        <SectionBlock key={h2}>
          <PageH2>{h2}</PageH2>
          <Body>{body}</Body>
        </SectionBlock>
      ))}
    </PageShell>
  )
}
