import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Navbar.module.css"
import { useUser } from "@auth0/nextjs-auth0";
import PropTypes from "prop-types";

const Navbar = ({ isLoggedIn }) => {
  const { user } = useUser();


    return (
      <nav className={styles.navbar}>
        <Link href="/">
          <h2>Saunter</h2>
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/community/">
          <a>Community</a>
        </Link>
        <Link href="/contact/">
          <a>Contact</a>
        </Link>
        <button className="btn" href="/api/auth/logout">
          Logout
        </button>
      </nav>
    );
  }


  
  //{
    /* <div className="loginwelcome">
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div> */
  //}

  // return (
  //   <a className="loginbutton" href="/api/auth/login">
  //     Login
  //   </a>
  // );

  // return (
  //   <nav className={styles.navbar}>
  //     <Link href="/">
  //       <h2>Saunter</h2>
  //     </Link>
  //     <Link href="/">
  //       <a>Home</a>
  //     </Link>
  //     <Link href="/about">
  //       <a>About</a>
  //     </Link>
  //     <Link href="/community/">
  //       <a>Community</a>
  //     </Link>
  //     <Link href="/contact/">
  //       <a>Contact</a>
  //     </Link>
  //     <button className="btn" href="/api/auth/login">
  //       Login
  //     </button>
  //   </nav>
  // );

 
export default Navbar;