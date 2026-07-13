import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section_heading";
import ExperienceCard from "@/components/ui/experience_card";

import { EXPERIENCE } from "@/constants/experience";

import styles from "./styles.module.css";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHeading
          overline={EXPERIENCE.overline}
          title={EXPERIENCE.title}
          description={EXPERIENCE.description}
        />

        <div className={styles.experiences}>
          {EXPERIENCE.experiences.map((experience) => (
            <ExperienceCard
              key={`${experience.company}-${experience.role}`}
              experience={experience}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
