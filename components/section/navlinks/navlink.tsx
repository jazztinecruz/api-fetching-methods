import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  name: string
  url: string
}

const NavLink = ({ name, url }: Props) => {
  const router = useRouter()

  return (
    <Link href={url}>
      <li>
        <a
          className={`${
            router.pathname === url
              ? 'text-white bg-black py-2 px-3 rounded-md transition-all duration-500'
              : 'text-gray-500 hover:text-black'
          }  text-sm font-semibold tracking-wide cursor-pointer transition-all duration-500`}
        >
          {name}
        </a>
      </li>
    </Link>
  )
}

export default NavLink
