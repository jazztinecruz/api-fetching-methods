interface Props {
  name: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}
const Reaction = ({ name, Icon }: Props) => {
  return (
    <div className='flex items-center gap-2 group'>
      <Icon className={`${name === 'Dislike' ? 'w-4 h-4 group-hover:text-blue-700 -rotate-180 transition-all duration-300' : 'w-4 h-4 group-hover:text-blue-500 transition-all duration-300'}`}/>
      <span className='text-xs font-semibold opacity-40 group-hover:text-indigo-900 transition-all duration-300'>{name}</span>
    </div>
  )
}

export default Reaction
