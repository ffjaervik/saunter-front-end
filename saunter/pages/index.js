import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homepage.module.css'
import "../public/assets/homepageimg.webp"
import Link from "next/link"

export default function Home() {
  return (
    <div>
    <Head>
        <title>Saunter | Home</title>
    </Head>
    <div>
    <Image className= {styles.landingimage} src="/../public/assets/homepageimg.webp" alt="homepage image" layout="fill" objectFit="cover" objectPosition="center"/> 
      <div className={styles.homepage}>
        <h1>Welcome!</h1>
      <h4>Take the stress out of solo travelling</h4>
       <Link href="/get-started">
        <a className="btn">Start Here</a>
      </Link>
    </div>
    </div>
    </div>
  );
}
