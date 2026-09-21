import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.card}>
      <p className={styles.eyebrow}>You&apos;re invited</p>
      <h1>Julia Shchgolkova</h1>
      <p className={styles.lead}>Birthday party</p>
      <hr />
      <p className={styles.note}>
        A small celebration is being planned. Details will follow here.
      </p>
    </main>
  );
}
