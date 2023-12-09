import styles from './page.module.css';

console.log(typeof window === 'undefined');

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>test</div>
		</main>
	);
}
