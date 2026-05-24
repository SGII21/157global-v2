import { contact, CONTACT_EMAIL } from '../content/copy'
import { Page, ContactLines } from '../components/Page'

export default function Contact() {
  return (
    <Page>
      <ContactLines lines={contact.lines} />
      <p className="mt-10">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-ink underline hover:text-accent"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    </Page>
  )
}
