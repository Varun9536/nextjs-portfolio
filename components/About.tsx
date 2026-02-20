import styles from "./About.module.css";

const cards = [
  { icon: "📍", label: "Location", value: "India 🇮🇳" },
  { icon: "🏢", label: "Company", value: "Eice Technology Pvt. Ltd." },
  { icon: "🎯", label: "Speciality", value: "MERN + Electron Apps" },
  { icon: "⚡", label: "Focus", value: "End-to-End Development" },
  { icon: "🛡️", label: "Domain Exp.", value: "Govt. + Enterprise" },
  { icon: "📡", label: "Deployment", value: "VPS / Nginx / PM2" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.label}>
          <span className={styles.labelLine} />
          About Me
        </div>
        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              I build things<br />
              <span className={styles.grad}>that ship.</span>
            </h2>
            <div className={styles.body}>
              <p>
                I&apos;m <strong>Varun Kumar</strong>, a full-stack developer with a
                strong foundation in core programming (C, C++, DSA) and advanced
                knowledge of JavaScript, TypeScript, and modern web technologies.
              </p>
              <p>
                I build high-performance web and desktop applications using{" "}
                <strong>React, Next.js, Node.js, Express, MongoDB, MySQL, and Electron</strong>.
                My expertise spans scalable backend systems, clean frontends,
                automated CI/CD pipelines, and VPS deployments.
              </p>
              <p>
                I&apos;ve shipped production systems for <strong>hotels, restaurants,
                retail shops, bars, parking systems, and enterprise environments</strong>.
                My approach is practical, fast, and focused on real-world,
                reliable solutions.
              </p>
            </div>
            <div className={styles.status}>
              <span className={styles.statusDot} />
              <div>
                <div className={styles.statusRole}>Software Engineer</div>
                <div className={styles.statusCompany}>Eice Technology Pvt. Ltd. · April 2024 – Present</div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.cardGrid}>
              {cards.map((c) => (
                <div key={c.label} className={styles.card}>
                  <div className={styles.cardIcon}>{c.icon}</div>
                  <div className={styles.cardLabel}>{c.label}</div>
                  <div className={styles.cardValue}>{c.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
