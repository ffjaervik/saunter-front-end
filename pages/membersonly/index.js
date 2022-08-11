import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import styles from '../../styles/User.module.css'

const members = () => {
	return (
		<div className={styles.main}>
			<div className={styles.dayplan_title}>
				<h1>Your saved dayplans:</h1>
			</div>
			<div className={styles.dayplan_container_main}>
				{/* Map though saved dayplan here */}
				<div className={styles.dayplan_container}>
					{/* Mapping ends here */}
				</div>
			</div>
			<div className={styles.liked_title}>
				<h1>Your liked activities:</h1>
			</div>
			<div className={styles.liked_container_main}>
				{/* Map though liked activities here */}
				<div className={styles.liked_container}>
        {/* Mapping ends here */}
        </div>/
			</div>
		</div>
	)
}

export default members

export const getServerSideProps = withPageAuthRequired()
