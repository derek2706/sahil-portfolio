import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section_heading";
import Timeline from "@/components/ui/timeline";

import { JOURNEY, CAREER_TIMELINE } from "@/constants/journey";

import styles from "./styles.module.css";

export default function Journey() {
  return (
    <Section id="journey">
      <Container>
        <SectionHeading
          overline={JOURNEY.overline}
          title={JOURNEY.title}
          description={JOURNEY.description}
        />

        <div className={styles.about}>
          <div className={styles.about_content}>
            {JOURNEY.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Timeline items={CAREER_TIMELINE} />
        </div>
      </Container>
    </Section>
  );
}
