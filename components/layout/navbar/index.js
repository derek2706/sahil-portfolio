import Link from "next/link";

import Container from "@/components/ui/container";
import { NAV_LINKS } from "@/constants/navigations";
import Button from "@/components/ui/button";
import { FileText } from "lucide-react";

import styles from "./styles.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            Sahil<span>.</span>
          </Link>

          <ul className={styles.nav_links}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.nav_link}>
                  {link.label}
                </Link>
              </li>
            ))}

            <Button href="/assets/resume.pdf" variant="ghost" download>
              <FileText size={16} />
              <span>Resume</span>
            </Button>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
