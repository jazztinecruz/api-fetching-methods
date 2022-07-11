import Reaction from '.'
import { HeartIcon, ThumbUpIcon } from '@heroicons/react/solid' 

const Reactions = () => {
  return (
    <div className='flex gap-3'>
      <Reaction name='Like' Icon={ThumbUpIcon}/>
      <Reaction name='Love' Icon={HeartIcon}/>
      <Reaction name='Dislike' Icon={ThumbUpIcon}/>
    </div>
  )
}

export default Reactions