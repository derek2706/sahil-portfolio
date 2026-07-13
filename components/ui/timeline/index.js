import styles from "./styles.module.css";

export default function Timeline({ items = [] }) {
  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <div key={item.title} className={styles.timeline_item}>
          <div className={styles.timeline_marker} />

          <div className={styles.timeline_content}>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
