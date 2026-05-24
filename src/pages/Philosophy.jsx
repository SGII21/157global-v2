import { philosophy } from '../content/copy'
import { Page, BeliefList } from '../components/Page'

export default function Philosophy() {
  return (
    <Page>
      <BeliefList items={philosophy} />
    </Page>
  )
}
