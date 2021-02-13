import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.css";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Cipher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Cipher!</h1>

        <p className={styles.description}>
          Get started by{" "}
          <Link href="/chord/new">
            <a>creating some chords</a>
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
