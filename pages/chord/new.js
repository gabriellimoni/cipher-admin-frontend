import Head from "next/head";
import Link from "next/link";
import styles from "./Chord.module.css";

import Footer from "../../components/Footer";
import UpsertChordForm from "../../components/UpsertChordForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cipher - Add Chord</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Add Chord</h1>

        <div className={styles.formContainer}>
          <UpsertChordForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
