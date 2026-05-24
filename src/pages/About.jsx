import { about } from '../content/copy'
import { Page, BlockParagraphs } from '../components/Page'

export default function About() {
  return (
    <Page>
      <BlockParagraphs paragraphs={about} />
    </Page>
  )
}
