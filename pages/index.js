import Head from "next/head";
import EnterAnimation from "../components/EnterAnimation";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Quick Share - Yet another way to share your files</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<EnterAnimation />

			<main>
				<h1>Quick Node</h1>
			</main>
		</div>
	);
}
