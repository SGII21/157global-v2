import { home } from '../content/copy'
import { PageShell, PageH1, Body } from '../components/PageShell'

export default function Home() {
  return (
    <PageShell>
      <PageH1>{home.h1}</PageH1>
      <Body>{home.body}</Body>
    </PageShell>
  )
}
