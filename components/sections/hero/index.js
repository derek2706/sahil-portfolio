import Image from "next/image";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

import { HERO } from "@/constants/hero";

import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.hero_wrapper}>
          <div className={styles.hero_content}>
            <p className={styles.hero_tag}>{HERO.tag}</p>

            <h1 className={styles.hero_title}>
              {HERO.title}
              <span>{HERO.name}</span>
            </h1>

            <h2 className={styles.hero_subtitle}>{HERO.subtitle}</h2>

            <p className={styles.hero_description}>{HERO.description}</p>

            <div className={styles.hero_actions}>
              <Button href={HERO.primary_cta.href} download>
                {HERO.primary_cta.label}
              </Button>

              <Button variant="secondary" href={HERO.secondary_cta.href}>
                {HERO.secondary_cta.label}
              </Button>
            </div>
          </div>

          <div className={styles.hero_image}>
            <div className={styles.image_wrapper}>
              <Image
                src="/images/profile.png"
                alt="Sahil Mazumder"
                width={480}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
