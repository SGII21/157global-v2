import { situations } from '../content/copy'
import { Page } from '../components/Page'

export default function Situations() {
  return (
    <Page>
      <div className="space-y-8">
        {situations.map((text) => (
          <p key={text} className="text-ink">
            {text}
          </p>
        ))}
      </div>
    </Page>
  )
}
