import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section_heading";

import { ABOUT_HIGHLIGHTS } from "@/constants/about";

import styles from "./styles.module.css";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <SectionHeading
          overline="About"
          title="Building software that is simple, scalable and maintainable."
          description="A quick introduction about who I am and what I enjoy building."
        />

        <div className={styles.about}>
          <div className={styles.about_content}>
            <p>
              I'm a Software Engineer with four years of experience building
              production-grade web applications using React, Next.js and Ruby on
              Rails.
            </p>

            <p>
              I enjoy solving engineering problems, building reusable
              architectures and creating user experiences that are fast,
              accessible and maintainable.
            </p>

            <p>
              Outside of work, I enjoy learning modern frontend architecture,
              exploring system design and continuously improving the way I build
              software.
            </p>
          </div>

          <div className={styles.about_highlights}>
            {ABOUT_HIGHLIGHTS.map((highlight) => (
              <div key={highlight.title} className={styles.highlight_card}>
                <span>{highlight.title}</span>

                <strong>{highlight.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
