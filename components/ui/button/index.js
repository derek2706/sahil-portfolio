import styles from "./styles.module.css";

export default function Button({
  children,
  variant = "primary",
  type = "button",
  ...props
}) {
  const class_name = `
        ${styles.button}
        ${styles[variant]}
    `;

  return (
    <button type={type} className={class_name} {...props}>
      {children}
    </button>
  );
}
