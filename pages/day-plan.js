import styles from '../styles/dayplan.module.css'

export default function GetStarted() {
	return (
		<div className={styles.dayplan_container}>
			<div className={styles.dayplan}>
				<div className={styles.dayplancard}>
					<h1 className={styles.text}>Your perfect dayplan looks like this:</h1>
				</div>
			</div>
		</div>
	)
}
