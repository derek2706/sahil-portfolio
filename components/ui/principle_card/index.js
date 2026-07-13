import styles from "./styles.module.css";

export default function PrincipleCard({ principle }) {
  const { title, description } = principle;

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </article>
  );
}
