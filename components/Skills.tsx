import { skills } from "@/lib/data";
import styles from "./Skills.module.css";

const categories = [
  { key: "languages" as const, label: "Languages", icon: "💻" },
  { key: "frontend" as const, label: "Frontend", icon: "🎨" },
  { key: "backend" as const, label: "Backend", icon: "⚙️" },
  { key: "databases" as const, label: "Databases", icon: "🗄️" },
  { key: "devops" as const, label: "DevOps & Infra", icon: "🚀" },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.label}>
            <span className={styles.labelLine} />
            Technical Skills
          </div>
          <h2 className={styles.heading}>
            My <span className={styles.grad}>Arsenal.</span>
          </h2>
          <p className={styles.sub}>Technologies I use to build real-world production systems.</p>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.key} className={styles.col}>
              <div className={styles.colHead}>
                <span className={styles.colIcon}>{cat.icon}</span>
                <span className={styles.colLabel}>{cat.label}</span>
              </div>
              <div className={styles.skillList}>
                {skills[cat.key].map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillTop}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPct}>{skill.level}%</span>
                    </div>
                    <div className={styles.bar}>
                      <div
                        className={styles.fill}
                        style={{ "--w": `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pills row at bottom */}
        <div className={styles.pillsSection}>
          <div className={styles.pillsLabel}>// Also familiar with</div>
          <div className={styles.pills}>
            {["DSA", "OOP", "MVC Architecture", "Microservices", "WebSockets", "Socket.io", "Cron Jobs", "Swagger API Docs", "Postman", "VS Code", "GitHub Actions", "Vercel", "Cloudflare"].map((p) => (
              <span key={p} className={styles.pill}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
