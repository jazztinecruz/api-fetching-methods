import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const NavLinks = ({children} : Props) => {
  return (
    <ul className='flex items-center gap-3'>{children}</ul>
  )
}

export default NavLinks