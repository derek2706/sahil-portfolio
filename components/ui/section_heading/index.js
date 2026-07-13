import styles from "./styles.module.css";

export default function SectionHeading({ overline, title, description }) {
  return (
    <div className={styles.section_heading}>
      {overline && <p className={styles.overline}>{overline}</p>}

      <h2 className={styles.title}>{title}</h2>

      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
