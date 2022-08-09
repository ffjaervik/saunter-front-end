import styles from '../styles/dayplan.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Image from 'next/image'

export default function DayPlan() {
	const [dayPlan, setDayPlan] = useState([]);

	const router = useRouter()
	const { cart } = router.query
	console.log(`This is your cart:`, cart)

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get(
				`https://saunter-db.herokuapp.com/all-budgets`
			)
			let allActivities = response.data.data
			let filteredActivities = []
			for (let i = 0; i < cart.length; i++) {
				let activityId = cart[i]
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

	const Card = ({ name, type, description, image  }) => {
		<div className={styles.main_card}>
			<h2>{name}</h2>
			<h5>{type}</h5>
			<p>{description}</p>
			<Image src={image} alt={name} />
		</div>
	}


	return (
		
			<div className={styles.dayplan}>
				<div className={styles.dayplancard}>
					<h1 className={styles.text}>Your perfect dayplan looks like this:</h1>
				</div>
				<div className={styles.all_cards}>
				{dayPlan.map((activity, index) => (
				<Card  key={index} name={activity.name} type={activity.type} description={activity.description} image={activity.image} />
					))}
				</div>
			</div>
		)

}