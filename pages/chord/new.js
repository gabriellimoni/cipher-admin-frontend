import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Chord.module.css";

import Footer from "../../components/Footer";
import UpsertChordForm from "../../components/UpsertChordForm";

import { createChord } from "../../services/index";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleOnCancel = () => {
    router.back();
  };

  const handleOnSubmit = (data) => {
    setLoading(true);
    createChord(data)
      .then(() => router.push("/chord"))
      .catch((error) => {
        const message =
          error &&
          error.response &&
          error.response.data &&
          error.response.data.message;
        if (message) {
          // [TODO] show toast with message received
          console.log(message);
        }
        // [TODO] show toast with default message
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cipher - Add Chord</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Add Chord</h1>

        <div className={styles.formContainer}>
          <UpsertChordForm
            onCancel={handleOnCancel}
            onSubmit={handleOnSubmit}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
