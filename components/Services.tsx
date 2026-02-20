import { services } from "@/lib/data";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.label}>
          <span className={styles.labelLine} />
          What I Offer
        </div>
        <h2 className={styles.heading}>
          Services <span className={styles.grad}>& Expertise.</span>
        </h2>
        <p className={styles.sub}>
          From idea to deployment — I handle the full stack so you don&apos;t have to.
        </p>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={s.title} className={`${styles.card} ${i === 0 ? styles.featured : ""}`}>
              <div className={styles.cardGlow} />
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <div className={styles.arrow}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
