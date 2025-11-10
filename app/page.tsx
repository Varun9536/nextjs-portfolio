
import styles from "./home.module.css";

export default function Home() {
    const joiningDate = new Date(2024, 3, 1); // 1 April 2024 (months are 0-indexed)
    const today = new Date();


    let years = today.getFullYear() - joiningDate.getFullYear();
    let months = today.getMonth() - joiningDate.getMonth();


    if (months < 0) {
        years -= 1;
        months += 12;
    }


    const skills = [
        // Programming Languages
        "C",
        "C++",
        "Python",
        "JavaScript",
        "TypeScript",

        // Core Web
        "HTML",
        "CSS",

        // Frontend Frameworks
        "React.js",
        "Next.js",
        "React Native",

        // Backend / Server
        "Node.js",
        "Express.js",
        "Nest.js",

        // Databases
        "MySQL",
        "MongoDB",

        // Other Tech
        "PHP",
        "Electron.js"
    ];


    return (
        <div className={styles.pageWrapper}>
            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>Varun Kumar</h1>
                <p className={styles.subtitle}>Full-Stack Developer (MERN) • Software Engineer at Eice Technology PVT. LTD</p>
                <p className={styles.tagline}>{years} year{years !== 1 ? "s" : ""} {months} month{months !== 1 ? "s" : ""} of experience · India</p>
            </header>

            {/* About Section */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <p className={styles.text}>
                    I am Varun Kumar, a full-stack developer with a strong foundation in core programming (C, C++, DSA) and
                    advanced knowledge of JavaScript, TypeScript, and modern web technologies. I build high-performance web and
                    desktop applications using React, Next.js, Node.js, Express, MongoDB, MySQL, and Electron.
                </p>
                <p className={styles.text}>
                    My expertise includes designing scalable backend systems, creating clean and responsive frontend interfaces,
                    setting up automated CI/CD pipelines, and deploying applications on VPS servers with Nginx, PM2, and Docker-style
                    workflow. I have hands-on experience building production systems for hotels, restaurants, retail shops, bars,
                    parking, and enterprise environments.
                </p>
                <p className={styles.text}>
                    I enjoy solving complex problems, optimizing performance, and working end-to-end—from UI to backend to
                    deployment. My approach is practical, fast, and focused on delivering real-world, reliable solutions.
                </p>
            </section>

            {/* Skills */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                <ul className={styles.skillsGrid}>

                    {skills.map((item, index) =>
                    (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            {/* Projects */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <ul className={styles.projectList}>
                    <li>
                        <strong>Isync Drive (React)</strong> – A modern cloud sync interface for managing files across devices. Includes
                        secure authentication, smooth file operations, responsive UI, and optimized rendering for large file lists.
                    </li>
                    <li>
                        <strong>Govdrive (Electron)</strong> – A government-grade desktop application for secure file handling. Supports
                        offline access, sandboxed environment, encrypted local storage, and cross-platform packaging.
                    </li>
                    <li>
                        <strong>Durgabari (PHP)</strong> – A complete temple and hall booking management system with online reservations,
                        automated email confirmations, admin panel, payment records, and event scheduling.
                    </li>
                    <li>
                        <strong>NIC Govdrive (Electron)</strong> – An enhanced, security-focused version of Govdrive built for official use,
                        featuring restricted access, protected storage, audit logs, and system-level integration.
                    </li>
                    <li>
                        <strong>Company Website (React)</strong> – Fully responsive corporate site with optimized performance, custom
                        components, modern animations, SEO-friendly structure, and API-driven dynamic sections.
                    </li>
                </ul>
            </section>

            {/* Experience */}
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Experience</h2>
                <p className={styles.text}>
                    <strong>Software Engineer – Eice Technology Pvt Ltd</strong> (April 2024 – Present)<br />
                    Working on React, Electron, PHP, backend systems, automation pipelines, and client applications.
                </p>
            </section>

            {/* Contact */}
            <section className={styles.sectionCenter}>
                <h2 className={styles.sectionTitle}>Contact</h2>
                <p>
                    <a href="mailto:varunkumar953685@gmail.com" style={{ color: "#4f46e5", fontWeight: 600 }}>
                        varunkumar953685@gmail.com
                    </a>
                </p>


                {/* Clickable Phone / WhatsApp */}
                <p>
                    <a
                        href="https://wa.me/919536855214"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#06b6d4", fontWeight: 600 }}
                    >
                        WhatsApp: 9536855214
                    </a>
                </p>


                {/* LinkedIn Profile */}
                <p>
                    <a
                        href="https://www.linkedin.com/in/varun-kumar-7b48332aa/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#4f46e5", fontWeight: 600 }}
                    >
                        LinkedIn Profile
                    </a>
                </p>
            </section>

            <footer className={styles.footer}>© {new Date().getFullYear()} Varun Kumar. All rights reserved.</footer>
        </div>
    );
}
