import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homepage.module.css'
import homepageimg from '../public/assets/homepageimg.webp'
import Link from 'next/link'
import rectangle from '../public/assets/rectangle.svg'
import background from '../public/assets/background.png'

export default function Home() {
	return (
		<div className={styles.homepage__container}>
			<Head>
				<title>Saunter | Home</title>
			</Head>
			<div>
				<Image
					className={styles.landingimage}
					src={background}
					alt='homepage image'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
					priority
				/>
				<div className={styles.homepage}>
					<div className={styles.welcomecard}>
						<h1 className={styles.text}>Welcome!</h1>
						<h4 className={styles.text}>
							Take the stress out of solo travelling. Find the best spots to
							saunter & focus on the now.
						</h4>
						<Link href='/get-started'>
							<button className={styles.homepagebtn} height='10vh' width='10vw'>
								Start Here
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
