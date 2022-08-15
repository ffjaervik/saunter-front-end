import styles from '../styles/dayplan.module.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'
import { FiMapPin } from 'react-icons/fi'
import { IconContext } from 'react-icons'

export default function DayPlan() {
	const [dayPlan, setDayPlan] = useState([])

	const router = useRouter()
	const { query } = router.query
	console.log(`This is the query:`, query)

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get(
				`https://saunter-db.herokuapp.com/all-budgets`
			)
			let allActivities = response.data.data
			let filteredActivities = []
			const queryIDs = query.split(',')
			console.log('QueryIDs', queryIDs)
			for (let i = 1; i < queryIDs.length; i++) {
				let activityId = queryIDs[i]
				for (let i = 0; i < allActivities.length; i++) {
					if (allActivities[i].id == activityId) {
						filteredActivities.push(allActivities[i])
					}
				}
			}
			setDayPlan(filteredActivities)
			console.log(`your filtered activities:`, filteredActivities)
		}
		getData()
	}, [])

	const Card = ({ name, type, description, image }) => {
		return (
			<div className={styles.main_card}>
				<div className={styles.text_container}>
					<div className={styles.type_container}>
						<h5>{type}</h5>
					</div>
					<p>{description}</p>
					<div className={styles.iconbar}>
						<div className={styles.icon}>
							<IconContext.Provider value={{ color: 'black', size: '2rem' }}>
								<FiMapPin />
							</IconContext.Provider>
						</div>
					</div>
				</div>
				<div className={styles.img_container}>
					<img src={image} alt={name} />
					<h2>{name}</h2>
				</div>
			</div>
		)
	}
	return (
		<div className={styles.dayplan}>
			<Head>
				<title>Saunter | Saved Day Plan</title>
			</Head>
			<div className={styles.dayplancard}>
				<h1 className={styles.text}>Your saved day plan:</h1>
			</div>
			<div className={styles.all_cards}>
				{dayPlan.map((activity, index) => (
					<Card
						key={index}
						name={activity.name}
						type={activity.type}
						description={activity.description}
						image={activity.image}
					/>
				))}
			</div>
			<div className={styles.button}>
				<button
					className='btn'
					onClick={function () {
						const dayplanName = prompt('Name your day plan:')

						const body = { name: dayplanName, activities: cart.toString() }
						console.log(body)
						return postDayplan(body)
					}}
				>
					Save Day Plan
				</button>
			</div>
		</div>
	)
}
