import styles from "./Marquee.module.css";

const items = ["React.js","Next.js","Node.js","TypeScript","MongoDB","Electron.js","MySQL","Express.js","React Native","Nest.js","PHP","CI/CD","Nginx","PM2","C++","Python","Tailwind CSS","REST API","JWT","Git","Linux","Redux"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}<span className={styles.dot}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
