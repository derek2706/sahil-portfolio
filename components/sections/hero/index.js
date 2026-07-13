import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero_content}>
          <p className={styles.hero_tag}>Software Engineer</p>

          <h1 className={styles.hero_title}>
            {'Hi, I'm'}
            <span> Sahil Mazumder</span>
          </h1>

          <h2 className={styles.hero_subtitle}>
            I build performant web applications with a focus on maintainability,
            scalability, and user experience.
          </h2>

          <p className={styles.hero_description}>
            I enjoy building scalable web applications with a strong focus on
            performance, maintainability, and thoughtful user experiences.
          </p>

          <div className={styles.hero_actions}>
            <Button>Download Resume</Button>

            <Button variant="secondary">{`Let's Connect`}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
