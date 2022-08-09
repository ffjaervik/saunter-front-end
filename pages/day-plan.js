import styles from '../styles/dayplan.module.css'
import {useEffect} from 'react'
import {useRouter} from "next/router"
import axios from 'axios'

export default function GetStarted() {

	  const router = useRouter()
	  const {cart} = router.query;
	  console.log (`This is your cart:`, cart)

	  useEffect(() => {
		const getData = async () => {
			const response = await axios.get(
				`https://saunter-db.herokuapp.com/all-budgets`
			)
			let allActivities = response.data.data
			let filteredActivities = []
			for (let i = 0; i < cart.length; i++){
				let activityId = cart[i]
				for (let i = 0; i < allActivities.length; i++) {
					if (allActivities[i].id == activityId) {
						filteredActivities.push(allActivities[i])
					}
				}
			}
			console.log(filteredActivities)
			}
		getData()
		},[])
	

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
