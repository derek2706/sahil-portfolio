import Link from "next/link";

import Container from "@/components/ui/container";

import styles from "./styles.module.css";
import { NAV_LINKS } from "@/constants/navigations";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            SM
          </Link>

          <ul className={styles.nav_links}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
