


import Head from "next/head";
import styles from "./home.module.css";

export default function Home() {
    const joiningDate = new Date(2024, 3, 1); // 1 April 2024
    const today = new Date();

    let years = today.getFullYear() - joiningDate.getFullYear();
    let months = today.getMonth() - joiningDate.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    

    const skillsByDomain = [
        {
            title: "Programming Languages",
            description:
                "Strong foundation in core programming and object-oriented concepts, used for building efficient and scalable systems.",
            items: ["C", "C++" , "Java", "JavaScript", "TypeScript"],
        },
        {
            title: "Frontend Libraries & Frameworks",
            description:
                "Experienced in building responsive, SEO-friendly, and high-performance user interfaces.",
            items: ["HTML", "CSS", "React.js", "Next.js", "React Native"],
        },
        {
            title: "Backend & Server-Side",
            description:
                "Hands-on experience designing scalable APIs, authentication systems, and backend architectures.",
            items: ["Node.js", "Express.js", "Nest.js", "PHP", "Spring Boot"],
        },
        {
            title: "Databases",
            description:
                "Experience with relational and NoSQL databases, focusing on performance and data integrity.",
            items: ["MySQL", "MongoDB"],
        },
        {
            title: "Desktop & Enterprise Applications",
            description:
                "Building secure, cross-platform desktop applications for enterprise and government use.",
            items: ["Electron.js"],
        },
    ];


    return (
        <>
            {/* ✅ HEAD ONLY FOR SEO */}
            <Head>
                <title>Varun Kumar | Full-Stack MERN Developer & Software Engineer</title>

                <meta
                    name="description"
                    content="Varun Kumar is a Full-Stack MERN Developer and Software Engineer experienced in React, Next.js, Node.js, Electron, MongoDB, MySQL, and scalable production systems."
                />
            </Head>

            {/* ✅ MAIN CONTENT */}
            <main className={styles.pageWrapper}>
                {/* HEADER / HERO */}
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        Varun Kumar
                    </h1>
                    <p className={styles.subtitle}>Full-Stack Developer (MERN) • Software Engineer at Eice Technology PVT. LTD</p>

                    {/* <p className={styles.subtitle}>
                        Software Engineer at Eice Technology Pvt. Ltd.
                    </p> */}

                    <p className={styles.tagline}>
                        {years} year{years !== 1 ? "s" : ""} {months} month
                        {months !== 1 ? "s" : ""} experience · India
                    </p>
                </header>

                {/* ABOUT */}
                <section className={styles.section} id="about">
                    <h2 className={styles.sectionTitle}>About Me</h2>

                    <p className={styles.text}>
                        I am Varun Kumar, a Full-Stack MERN Developer with strong foundations
                        in core programming (C, C++, DSA) and hands-on experience with
                        JavaScript, TypeScript, and modern web technologies.
                    </p>

                    <p className={styles.text}>
                        I build scalable web and desktop applications using React, Next.js,
                        Node.js, Express, MongoDB, MySQL, PHP, and Electron. My work includes
                        backend architecture, frontend performance optimization, secure
                        authentication, and production deployment.
                    </p>

                    <p className={styles.text}>
                        I have delivered real-world systems for hotels, restaurants, retail
                        shops, parking solutions, and enterprise environments. I focus on
                        clean code, maintainable architecture, and reliable production
                        systems.
                    </p>
                </section>

                {/* SKILLS */}
                {/* <section className={styles.section} id="skills">
                    <h2 className={styles.sectionTitle}>Technical Skills</h2>

                    <p className={styles.text}>
                        My technical expertise covers frontend development, backend systems,
                        databases, and desktop applications.
                    </p>

                    <ul className={styles.skillsGrid}>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </section> */}



                {/* SKILLS */}
                <section className={styles.section} id="skills">
                    <h2 className={styles.sectionTitle}>Technical Skills</h2>

                    <p className={styles.text}>
                        A structured overview of my technical expertise across different domains
                        of software development.
                    </p>

                    <div className={styles.skillsWrapper}>
                        {skillsByDomain.map((domain, index) => (
                            <div key={index} className={styles.skillCard}>
                                <h3 className={styles.skillHeading}>{domain.title}</h3>

                                <p className={styles.skillDescription}>
                                    {domain.description}
                                </p>

                                <ul className={styles.skillsGrid}>
                                    {domain.items.map((skill, idx) => (
                                        <li key={idx} >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>


                {/* PROJECTS */}
                <section className={styles.section} id="projects">
                    <h2 className={styles.sectionTitle}>Projects</h2>

                    <ul className={styles.projectList}>
                        <li>
                            <strong>Isync Drive (React, Node.js)</strong> – Designed and
                            developed a cloud-style file management system with secure
                            authentication, optimized UI rendering, and smooth large-file
                            handling.
                        </li>

                        <li>
                            <strong>Govdrive (Electron)</strong> – Built a secure,
                            government-grade desktop application with offline access,
                            sandboxed execution, encrypted local storage, and cross-platform
                            packaging.
                        </li>

                        <li>
                            <strong>Durgabari (PHP, MySQL)</strong> – Developed a complete
                            booking and management system including online reservations,
                            automated emails, admin dashboard, and payment records.
                        </li>

                        <li>
                            <strong>NIC Govdrive (Electron)</strong> – Enhanced security-focused
                            desktop solution with restricted access, audit logs, protected
                            storage, and system-level integrations.
                        </li>

                        <li>
                            <strong>Company Website (React)</strong> – Built a fully responsive,
                            SEO-optimized corporate website with custom components, performance
                            tuning, and API-driven dynamic sections.
                        </li>
                    </ul>
                </section>

                {/* EXPERIENCE */}
                <section className={styles.section} id="experience">
                    <h2 className={styles.sectionTitle}>Experience</h2>

                    <p className={styles.text}>
                        <strong>Software Engineer – Eice Technology Pvt. Ltd.</strong>
                        <br />
                        April 2024 – Present
                    </p>

                    <p className={styles.text}>
                        Working on React, Electron, PHP, backend systems, CI/CD automation,
                        client-facing applications, and production deployments.
                    </p>
                </section>

                {/* CONTACT */}
                <section className={styles.sectionCenter} id="contact">
                    <h2 className={styles.sectionTitle}>Contact</h2>

                    <p>
                        <a href="mailto:varunkumar953685@gmail.com">
                            varunkumar953685@gmail.com
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://wa.me/919536855214"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WhatsApp: +91-9536855214
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://www.linkedin.com/in/varun-kumar-7b48332aa/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn Profile
                        </a>
                    </p>
                </section>

                {/* FOOTER */}
                <footer className={styles.footer}>
                    © {new Date().getFullYear()} Varun Kumar. All rights reserved.
                </footer>
            </main>
        </>
    );
}
