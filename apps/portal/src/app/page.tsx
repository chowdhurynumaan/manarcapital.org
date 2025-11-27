import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.logoContainer}>
          <span className={styles.logo}>✦</span>
          <h1 className={styles.title}>Manar Capital</h1>
        </div>
        <p className={styles.tagline}>
          <em>Guiding Light in Finance</em>
        </p>
        <p className={styles.description}>
          Illuminating the path to financial excellence. Your trusted partner
          in navigating the complexities of modern finance with wisdom and integrity.
        </p>
        <div className={styles.cta}>
          <span className={styles.badge}>Portal Coming Soon</span>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Manar Capital. All rights reserved.</p>
      </footer>
    </main>
  );
}
