"use client";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [exp, setExp] = useState({ y: 1, m: 10 });

  useEffect(() => {
    const j = new Date(2024, 3, 1), n = new Date();
    let y = n.getFullYear() - j.getFullYear();
    let m = n.getMonth() - j.getMonth();
    if (m < 0) { y--; m += 12; }
    setExp({ y, m });
  }, []);

  const expLabel = exp.y > 0 ? `${exp.y}y ${exp.m}m` : `${exp.m}m`;

  return (
    <section id="hero" className={styles.hero}>
      {/* Floating orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      <div className={styles.inner}>
        {/* Left content */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for opportunities
          </div>

          <h1 className={styles.name}>
            <span className={styles.nameFirst}>Varun</span>
            <span className={styles.nameLast}>Kumar.</span>
          </h1>

          <div className={styles.roles}>
            <span className={styles.roleChip}>⚡ Full-Stack Developer</span>
            <span className={styles.roleChip}>🖥️ Electron Developer</span>
            <span className={styles.roleChip}>🚀 MERN Stack</span>
          </div>

          <p className={styles.bio}>
            I build <strong>production-ready web & desktop applications</strong> —
            end-to-end, from UI to backend to deployment. Specialising in
            <strong> MERN stack</strong>, <strong>Electron</strong>, and scalable
            infrastructure. Currently a Software Engineer at{" "}
            <strong>Eice Technology Pvt. Ltd.</strong>
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.btnPrimary}>
              View Projects <span>↓</span>
            </a>
            <a href="#contact" className={styles.btnGlass}>
              Hire Me <span>→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/varun-kumar-7b48332aa/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnIcon}
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="mailto:varunkumar953685@gmail.com"
              className={styles.btnIcon}
              title="Email"
            >
              ✉
            </a>
          </div>
        </div>

        {/* Right glass card */}
        <div className={styles.card}>
          <div className={styles.cardGlow} />
          <div className={styles.cardTitle}>// developer.info</div>

          {[
            { label: "Status", value: "Available", type: "live" },
            { label: "Experience", value: expLabel, type: "accent" },
            { label: "Current Role", value: "Software Engineer", type: "normal" },
            { label: "Company", value: "Eice Technology", type: "normal" },
            { label: "Stack", value: "MERN + Electron", type: "accent" },
            { label: "Location", value: "India 🇮🇳", type: "normal" },
            { label: "Projects", value: "5+ Shipped", type: "normal" },
            { label: "Open to", value: "Remote / Onsite", type: "normal" },
          ].map((item) => (
            <div key={item.label} className={styles.stat}>
              <span className={styles.statLabel}>{item.label}</span>
              <span className={`${styles.statVal} ${item.type === "live" ? styles.live : item.type === "accent" ? styles.accent : ""}`}>
                {item.type === "live" && <span className={styles.liveDot} />}
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scroll}>
        <div className={styles.scrollLine}>
          <div className={styles.scrollThumb} />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
