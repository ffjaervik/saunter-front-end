import React from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import styles from '../../styles/User.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FiMapPin } from 'react-icons/fi'
import { IconContext } from 'react-icons'

const Members = () => {
	const [savedDayplans, setSavedDayplans] = useState([])
	const [savedActivities, setSavedActivities] = useState([])

	// useEffect(() => {
	// 	const getData = async () => {
	// 		const response = await axios.get(
	// 			`https://saunter-db.herokuapp.com/dayplans`
	// 		)
	// 		let dayplans = response.data.data
	// 		console.log("dayplan: ", dayplans)
	// 		setSavedDayplans(dayplans[0].name)
	//     console.log("savedDayplans: ", savedDayplans)
	// 	}
	//   getData()
	// }, [])

	//FETCH ALL SAVED ACTIVITIES FROM DB without axios
	// useEffect(() => {
	//   const getData = async () => {
	//     const response = await res.json()
	//     let data = response.data.data
	//     console.log("dayplan: ", data)
	//     setLikedActivities(data)
	//   }
	//   getData()
	// } , [])

	useEffect(() => {
		const getData = async () => {
			const response = await axios.get('https://saunter-db.herokuapp.com/saved')
			let data = response.data.data
			setSavedActivities(data)
			console.log('savedActivities:', data)
		}
		getData()
	}, [])

	const LikedCard = ({ name, type, description, image }) => {
		return (
			<div className={styles.liked_container}>
				<div className={styles.image_container}>
					<img src={image} alt={name} />
				</div>
				<h2>{name}</h2>
				{/* On hover should display description */}
				{/* <div className={styles.hover}>
					<h5>{type}</h5>
					<p>{description}</p>
					<div>
						<div>
							<IconContext.Provider value={{ color: 'black', size: '2rem' }}>
								<FiMapPin />
							</IconContext.Provider>
						</div>
					</div>
				</div> */}
				<h2>{name}</h2>
			</div>
		)
	}

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
				<h1>Your liked activities: </h1>
			</div>
			<div className={styles.liked_container_main}>
				{/* Map though liked activities here */}

				{savedActivities.map((activity, index) => (
					<LikedCard
						key={index}
						name={activity.name}
						type={activity.type}
						description={activity.description}
						image={activity.image}
					/>
				))}

				{/* Mapping ends here */}
			</div>
		</div>
	)
}

export default Members

export const getServerSideProps = withPageAuthRequired()
