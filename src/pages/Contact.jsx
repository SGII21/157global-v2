import { contact } from '../content/copy'
import { PageShell, PageH1, Body } from '../components/PageShell'

export default function Contact() {
  return (
    <PageShell>
      <PageH1>{contact.h1}</PageH1>
      <Body className="mb-8">{contact.body}</Body>
      <p className="text-primary">Email: {contact.email}</p>
    </PageShell>
  )
}
