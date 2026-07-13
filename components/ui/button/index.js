import styles from "./styles.module.css";

export default function Button({
  href,
  children,
  variant = "primary",
  ...props
}) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} {...props}>
      {children}
    </button>
  );
}
