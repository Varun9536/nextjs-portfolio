import { projects } from "@/lib/data";
import styles from "./Projects.module.css";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.label}>
          <span className={styles.labelLine} />
          Selected Work
        </div>
        <h2 className={styles.heading}>
          Projects that <span className={styles.grad}>deliver.</span>
        </h2>
        <p className={styles.sub}>Production systems shipped across multiple industries.</p>

        {/* Featured */}
        <div className={styles.featured}>
          {featured.map((p) => (
            <div key={p.id} className={styles.featCard}>
              <div className={styles.featCardTop} />
              <div className={styles.fcInner}>
                <div className={styles.fcLeft}>
                  <div className={styles.fcTag}>
                    <span className={styles.fcEmoji}>{p.emoji}</span>
                    {p.tag}
                  </div>
                  <h3 className={styles.fcTitle}>{p.title}</h3>
                  <p className={styles.fcSub}>{p.subtitle}</p>
                  <p className={styles.fcDesc}>{p.desc}</p>
                  <div className={styles.fcTech}>
                    {p.tech.map((t) => (
                      <span key={t} className={styles.tech}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.fcRight}>
                  <div className={styles.highlight}>{p.highlight}</div>
                  <div className={styles.fcArrow}>↗</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {rest.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardTag}>
                  {p.emoji} {p.tag}
                </span>
                <span className={styles.cardArrow}>↗</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.cardTech}>
                {p.tech.map((t) => (
                  <span key={t} className={styles.tech}>{t}</span>
                ))}
              </div>
              <div className={styles.cardHighlight}>{p.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
