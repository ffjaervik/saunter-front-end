import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/community/"><a>Community</a></Link>
      <Link href="/contact/"><a>Contact</a></Link>
      <button href="/login/"><a>Login</a></button>
    </nav>
  );
}
 
export default Navbar;