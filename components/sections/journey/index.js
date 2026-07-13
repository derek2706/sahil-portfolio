import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section_heading";
import Timeline from "@/components/ui/timeline";

import { CAREER_JOURNEY } from "@/constants/journey";

import styles from "./styles.module.css";

export default function Journey() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          overline="Journey"
          title="From NIT Silchar to building production-grade web applications."
          description="My journey as a software engineer and the experiences that have shaped the way I build software today."
        />

        <div className={styles.about}>
          <div className={styles.about_content}>
            <p>
              I graduated with a Bachelor of Technology from the National
              Institute of Technology Silchar and have spent the last four years
              building production-grade web applications used by real users and
              business teams.
            </p>

            <p>
              My work has primarily focused on frontend engineering using React,
              Next.js, JavaScript and Redux, while also contributing to backend
              systems with Ruby on Rails. I enjoy building applications that are
              scalable, maintainable and deliver a seamless user experience.
            </p>

            <p>
              What excites me most about software engineering is solving
              real-world problems through thoughtful design, clean architecture
              and continuous learning. I'm always looking for opportunities to
              improve my craft and build software that creates meaningful
              impact.
            </p>
          </div>

          <Timeline items={CAREER_JOURNEY} />
        </div>
      </Container>
    </Section>
  );
}
