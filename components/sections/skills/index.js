import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section_heading";
import SkillCategory from "@/components/ui/skill_category";

import { SKILL_GROUPS } from "@/constants/skills";

import styles from "./styles.module.css";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          overline="Skills"
          title="Technologies I use to build modern web applications."
          description="Over the last four years, I've worked across the frontend and backend, building scalable and maintainable products."
        />

        <div className={styles.grid}>
          {SKILL_GROUPS.map((group) => (
            <SkillCategory
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
