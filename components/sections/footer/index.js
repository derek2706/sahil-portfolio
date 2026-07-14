import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";

import Container from "@/components/ui/container";

import styles from "./styles.module.css";
import { FOOTER } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} Sahil Mazumder. All rights reserved.
          </p>

          <div className={styles.social_links}>
            <Link href={FOOTER.github} target="_blank">
              <FaGithub size={18} />
            </Link>

            <Link href={FOOTER.linkedin} target="_blank">
              <FaLinkedin size={18} />
            </Link>

            <a
              href="https://mailto:sahilmazumder.nts@gmail.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <p className={styles.built_with}>
          Built with Next.js, React and lots of ☕
        </p>
      </Container>
    </footer>
  );
}
