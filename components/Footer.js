import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/safari-pinned-tab.svg" alt="Logo" className={styles.logo} />
      </footer>
    </>
  );
}
