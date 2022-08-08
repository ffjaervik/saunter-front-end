import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homepage.module.css'
import homepageimg from '../public/assets/homepageimg.webp'
import Link from 'next/link'
import rectangle from '../public/assets/rectangle.svg'
import background from '../public/assets/background.png'
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {

	//Refactor code to fit with homepage and navbar

	const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    ); 
  }

  return <a href="/api/auth/login">Login</a>;
}

// 	return (
// 		<div className={styles.homepage__container}>
// 			<Head>
// 				<title>Saunter | Home</title>
// 			</Head>
// 			<div>
// 				<Image
// 					className={styles.landingimage}
// 					src={background}
// 					alt='homepage image'
// 					layout='fill'
// 					objectFit='cover'
// 					objectPosition='center'
// 				/>
// 				<div className={styles.homepage}>
// 					<div className={styles.welcomecard}>
// 						<h1 className={styles.text}>Welcome!</h1>
// 						<h4 className={styles.text}>
// 							Take the stress out of solo travelling. Find the best spots to
// 							saunter & focus on the now.
// 						</h4>
// 						<Link href='/get-started'>
// 							<button className={styles.homepagebtn} height='10vh' width='10vw'>
// 								Start Here
// 							</button>
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	
// 
