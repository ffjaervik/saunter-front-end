import Link from 'next/link'
import Image from 'next/image'
import "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/community/"><a>Community</a></Link>
      <Link href="/contact/"><a>Contact</a></Link>
      <button className="btn" href="/login/"><a>Login</a></button>
    </nav>
  );
}
 
export default Navbar;