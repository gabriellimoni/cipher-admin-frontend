import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="http://api.whatsapp.com/send?phone=5514981135119"
        target="_blank"
      >
        Powered by Limoni
      </a>
    </footer>
  );
}
