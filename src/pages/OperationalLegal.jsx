import { operationalLegal } from '../content/copy'
import { Page } from '../components/Page'

export default function OperationalLegal() {
  return (
    <Page>
      <div className="space-y-6">
        {operationalLegal.paragraphs.map((text) => (
          <p key={text} className="text-ink">
            {text}
          </p>
        ))}
      </div>
      <p className="mt-10 text-muted">{operationalLegal.positioning}</p>
    </Page>
  )
}
