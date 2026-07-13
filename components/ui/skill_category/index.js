import Badge from "@/components/ui/badge";

import styles from "./styles.module.css";

export default function SkillCategory({ title, description, skills }) {
  return (
    <article className={styles.category}>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <div className={styles.skills}>
        {skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </article>
  );
}
