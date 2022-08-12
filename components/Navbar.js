import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useUser } from '@auth0/nextjs-auth0'
import PropTypes from 'prop-types'

const Navbar = () => {
	const { user, error, isLoading } = useUser()
	console.log(user)

  function userName (name){
    for(let i = 0; i < name.name.length; i++){
      console.log(name)
      if(name.name.charAt(i) == ' '){
        return name.name.slice(0, i)
      }
    }
  }

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
      {error && <div>{error.message}</div>}
      {user && (
        <div>
          <button className={styles.logindisplay}>
            {" "}
            Welcome <strong>{userName(user)}</strong>
          </button>
            {/* <div className={styles.ppcontainer}> */}
            {/* <img className={styles.pp} src={user.picture} alt='profile picture'/> */}
            {/* </div> */}
          <Link href="/api/auth/logout">Logout</Link>{" "}
        </div>
      )}
      
      {!user && <button className={styles.logindisplay}><Link href="/api/auth/login">Login</Link></button>}
       
    </nav>
  );
}

//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   if (user) {
//     return (
//       <div className="loginwelcome">
//         Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
//       </div>
//     );
//   }

//   return <a className="loginbutton" href="/api/auth/login">Login</a>;
// }

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

export default Navbar
