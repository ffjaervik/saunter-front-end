// import Link from 'next/link'
// import Image from 'next/image'
// import styles from "../styles/ExperimentalNavbar.module.css"
// import { HamburgerIcon } from "@chakra-ui/icons";
// import { IconButton } from '@chakra-ui/react'
// import { useState } from "react";

// const ExperimentalNavbar = () => {
//     const [displayOpen, setDisplayOpen] = useState(false);
//   return ( 
//   <div>
//     <nav className={styles.navbar}>
//       <Link href="/"><h2>Saunter</h2></Link>
//       <div className={styles.Links}>
//       <Link href="/"><a>Home</a></Link>
//       <Link href="/about"><a>About</a></Link>
//       <Link href="/community/"><a>Community</a></Link>
//       <Link href="/contact/"><a>Contact</a></Link>
//       <button className="btn" href="/login/">Login</button>
//       </div>
//       <div className={styles.HamburgerIcon}>
//         <IconButton
//           onClick={() => setDisplayOpen(!displayOpen)}
//           colorScheme="blue"
//           aria-label="Menu"
//           icon={<HamburgerIcon  w={35} h={35} />}
          
//         />
//       </div>
//     </nav>
//     <div
//       onClick={() => setDisplayOpen(!displayOpen)}
//       className={
//         displayOpen
//           ? `${styles.MenuDim} ${styles.MenuDimOpen}`
//           : styles.MenuDim
//       }
//     ></div>
//     <div
//       className={
//         displayOpen
//           ? `${styles.MenuLinks} ${styles.MenuOpen}`
//           : styles.MenuLinks
//       }
//     >
      
//       <Link href="/"><h2>Saunter</h2></Link>
//       <div className={styles.HamburgerLinks}>
//       <Link href="/">Home</Link>
//       <Link href="/about"><a>About</a></Link>
//       <Link href="/community/"><a>Community</a></Link>
//       <Link href="/contact/"><a>Contact</a></Link>
//       </div>
//     </div>
//   </div>
  
//   );
// }
 
// export default ExperimentalNavbar;