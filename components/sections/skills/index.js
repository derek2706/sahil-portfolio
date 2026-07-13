import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section_heading";
import SkillCard from "@/components/ui/skill_card";

import { SKILL_GROUPS } from "@/constants/skills";

import styles from "./styles.module.css";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          overline="Skills"
          title="Technologies I work with"
          description="Over the past four years, I've worked across the frontend and backend to build scalable web applications."
        />

        <div className={styles.grid}>
          {SKILL_GROUPS.map((group) => (
            <SkillCard
              key={group.title}
              title={group.title}
              description={group.description}
              skills={group.skills}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
