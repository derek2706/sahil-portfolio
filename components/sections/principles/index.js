import Container from "@/components/ui/container";
import PrincipleCard from "@/components/ui/principle_card";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section_heading";

import { PRINCIPLES } from "@/constants/principles";

import styles from "./styles.module.css";

export default function Principles() {
  return (
    <Section id="principles">
      <Container>
        <SectionHeading
          overline={PRINCIPLES.overline}
          title={PRINCIPLES.title}
          description={PRINCIPLES.description}
        />

        <div className={styles.grid}>
          {PRINCIPLES.items.map((principle) => (
            <PrincipleCard key={principle.title} principle={principle} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
