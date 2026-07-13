import Badge from "@/components/ui/badge";

import styles from "./styles.module.css";

export default function SkillCard({ title, description, skills }) {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>

      <p>{description}</p>

      <div className={styles.skills}>
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </article>
  );
}
