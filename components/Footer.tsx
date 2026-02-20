import styles from "./Footer.module.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className={styles.logo}>VK.</div>
            <div className={styles.tagline}>Full-Stack Developer · India</div>
          </div>
          <nav className={styles.nav}>
            {links.map((l) => (
              <a key={l.label} href={l.href} className={styles.navLink}>{l.label}</a>
            ))}
          </nav>
          <a href="mailto:varunkumar953685@gmail.com" className={styles.cta}>
            Let&apos;s Talk ↗
          </a>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copy}>© {new Date().getFullYear()} Varun Kumar. All rights reserved.</span>
          <span className={styles.built}>Built with Next.js & ♥</span>
        </div>
      </div>
    </footer>
  );
}
