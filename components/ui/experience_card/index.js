import Badge from "@/components/ui/badge";

import styles from "./styles.module.css";

export default function ExperienceCard({ experience }) {
  const { role, company, duration, summary, achievements, technologies } =
    experience;

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div>
          <h3 className={styles.role}>{role}</h3>

          <p className={styles.company}>{company}</p>
        </div>

        <span className={styles.duration}>{duration}</span>
      </header>

      <p className={styles.summary}>{summary}</p>

      <div className={styles.content}>
        <div className={styles.achievements}>
          <h4>Impact</h4>

          <ul>
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className={styles.tech_stack}>
          <h4>Tech Stack</h4>

          <div className={styles.badges}>
            {technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
