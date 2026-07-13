import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section_heading";
import Button from "@/components/ui/button";

import { CONTACT } from "@/constants/contact";

import styles from "./styles.module.css";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className={styles.contact}>
          <SectionHeading
            overline={CONTACT.overline}
            title={CONTACT.title}
            description={CONTACT.description}
          />

          <div className={styles.actions}>
            <Button as="a" href={CONTACT.primary_action.href}>
              {CONTACT.primary_action.label}
            </Button>

            <div className={styles.links}>
              {CONTACT.secondary_actions.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
