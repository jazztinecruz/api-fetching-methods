import Link from 'next/link'

interface Props {
  name: string
  link?: string
}

const Button = ({ name, link }: Props) => {
  return (
    <Link href={`${!link ? '#' : link}`}>
      <button className="text-white text-sm font-semibold tracking-wide bg-black py-2 px-6 rounded-md hover:-translate-y-1 transition-all duration-300">
        {name}
      </button>
    </Link>
  )
}

export default Button
