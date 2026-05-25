import { about } from '../content/copy'
import { PageShell, PageH1, Body } from '../components/PageShell'

export default function About() {
  return (
    <PageShell>
      <PageH1>{about.h1}</PageH1>
      <div className="space-y-6">
        {about.paragraphs.map((paragraph) => (
          <Body key={paragraph}>{paragraph}</Body>
        ))}
      </div>
    </PageShell>
  )
}
