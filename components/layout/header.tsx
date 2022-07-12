import Link from "next/link"
import NavLinks from "../section/navlinks"
import NavLink from "../section/navlinks/navlink"

const NavBar = () => {
  return (
    <nav className='flex items-center gap-10'>
      <Link href='/'><h1 className='text-lg font-black tracking-wider cursor-pointer'>Archives</h1></Link>

      {/* navigation links */}
      <NavLinks>
        <NavLink name="CSR" url="/client-side-rendering"/>
        <NavLink name="SSR" url="/server-side-rendering"/>
        <NavLink name="SSG" url="/static-site-generation"/>
      </NavLinks>
    </nav>
  )
}

export default NavBar