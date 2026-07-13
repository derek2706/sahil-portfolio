import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

import styles from "./styles.module.css";
import { HERO } from "@/constants/hero";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero_content}>
          <p className={styles.hero_tag}>{HERO.tag}</p>

          <h1 className={styles.hero_title}>
            {HERO.title}
            <span>{HERO.name}</span>
          </h1>

          <h2 className={styles.hero_subtitle}>{HERO.subtitle}</h2>

          <p className={styles.hero_description}>{HERO.description}</p>

          <div className={styles.hero_actions}>
            <Button>{HERO.primary_cta.label}</Button>

            <Button variant="secondary">{HERO.secondary_cta.label}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
