import Image from 'next/image'
import styles from '../styles/Homepage.module.css'
import {Picture1} from "../public/assets/Picture1.jpg"
import "../public/assets/homepageimg.webp"

export default function Home() {
  return (
    <div classname={styles.homepage}>
      <Image src="/../public/assets/homepageimg.webp" height={100} width={100} alt="homepage image" />
      <h1>Welcome!</h1>
      <h4>Take the stress out of solo travelling</h4>
      <button className="btn">Start Here</button>
    </div>
  )
}
