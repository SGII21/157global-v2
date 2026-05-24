import { home } from '../content/copy'
import {
  Page,
  Section,
  Lead,
  Anchor,
  BodyText,
  CalmList,
  ContactLines,
  BeliefList,
} from '../components/Page'

export default function Home() {
  const {
    opening,
    howSituationsEvolve,
    whyInvolvement,
    situationsSnapshot,
    whenInvolvement,
    philosophy,
    contact,
  } = home

  return (
    <Page className="pb-20">
      <Section className="mb-20 md:mb-24">
        {opening.leads.map((line) => (
          <Lead key={line}>{line}</Lead>
        ))}
        <BodyText className="mb-0 max-w-[54rem]">{opening.body}</BodyText>
      </Section>

      <Section>
        <Anchor>{howSituationsEvolve.anchor}</Anchor>
        <BodyText>{howSituationsEvolve.bridge}</BodyText>
        <CalmList items={howSituationsEvolve.truths} />
        <CalmList items={howSituationsEvolve.closing} />
      </Section>

      <Section>
        {whyInvolvement.anchors.map((line) => (
          <Anchor key={line}>{line}</Anchor>
        ))}
        <CalmList items={whyInvolvement.points} />
      </Section>

      <Section>
        <BodyText>{situationsSnapshot.intro}</BodyText>
        <CalmList items={situationsSnapshot.items} />
      </Section>

      <Section>
        <BodyText>{whenInvolvement.intro}</BodyText>
        <CalmList items={whenInvolvement.items} />
      </Section>

      <Section>
        <BeliefList items={philosophy} />
      </Section>

      <Section className="mb-0">
        <ContactLines lines={contact.lines} />
      </Section>
    </Page>
  )
}
