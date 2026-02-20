import styles from "./Contact.module.css";

const links = [
  { icon: "✉️", type: "Email", value: "varunkumar953685@gmail.com", sub: "Best way to reach me", href: "mailto:varunkumar953685@gmail.com" },
  { icon: "💬", type: "WhatsApp", value: "+91 9536855214", sub: "Quick chat / call", href: "https://wa.me/919536855214" },
  { icon: "💼", type: "LinkedIn", value: "varun-kumar-7b48332aa", sub: "Professional network", href: "https://www.linkedin.com/in/varun-kumar-7b48332aa/" },
];

const availability = [
  { label: "Freelance Projects", available: true },
  { label: "Full-time Roles", available: true },
  { label: "Remote Work", available: true },
  { label: "Onsite (India)", available: true },
  { label: "Short-term Contracts", available: true },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.label}>
          <span className={styles.labelLine} />
          Get In Touch
        </div>

        <div className={styles.inner}>
          {/* Left */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Let&apos;s build<br />
              <span className={styles.grad}>something</span><br />
              <span className={styles.dim}>great.</span>
            </h2>
            <p className={styles.sub}>
              Open to freelance projects, full-time roles, and interesting collaborations.
              I respond within <strong>24 hours.</strong>
            </p>

            <div className={styles.avail}>
              <div className={styles.availLabel}>// Open for</div>
              {availability.map((a) => (
                <div key={a.label} className={styles.availItem}>
                  <span className={a.available ? styles.availDot : styles.availDotNo} />
                  <span className={styles.availText}>{a.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className={styles.right}>
            <div className={styles.links}>
              {links.map((l) => (
                <a
                  key={l.type}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <div className={styles.linkBar} />
                  <div className={styles.linkIcon}>{l.icon}</div>
                  <div className={styles.linkBody}>
                    <div className={styles.linkType}>{l.type}</div>
                    <div className={styles.linkVal}>{l.value}</div>
                    <div className={styles.linkSub}>{l.sub}</div>
                  </div>
                  <span className={styles.linkArrow}>↗</span>
                </a>
              ))}
            </div>

            <div className={styles.emailBox}>
              <div className={styles.emailLabel}>// or just drop a quick email</div>
              <a href="mailto:varunkumar953685@gmail.com" className={styles.emailBtn}>
                Send Email →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
