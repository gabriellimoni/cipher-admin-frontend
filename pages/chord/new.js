import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./Chord.module.css";

import Footer from "../../components/Footer";
import UpsertChordForm from "../../components/UpsertChordForm";

export default function Home() {
  const router = useRouter();
  const handleOnCancel = () => {
    router.back();
  };

  const handleOnSubmit = (data) => {
    console.log(data);
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
