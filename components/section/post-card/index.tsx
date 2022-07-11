import Post from '../../../helper/types/posts'
import Reactions from '../reacts/react'

interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-4 px-5 py-4 border-[1px] border-gray-200 rounded-md hover:bg-slate-50 transition-all duration-300 cursor-pointer">
      {/* image */}
      <div className="bg-gray-200 w-10 h-10 rounded-full"></div>

      <div className="grid grid-rows-[1fr,auto] gap-4">
      {/* post details */}
        <div className="flex flex-col gap-1 ">
          <h3 className="font-semibold tracking-wide">
            {post.title[0].toUpperCase() + post.title.slice(1)}
          </h3>
          <p className="text-xs leading-relaxed lg:w-[700px] opacity-60">
            {post.body}
          </p>
        </div>

        {/* reacts and poster */}
        <div className="grid grid-cols-[1fr,auto] items-center gap-1">
          <Reactions />
          <h5 className="text-xs opacity-40 mt-1 text-right">
            Posted by Lorem Ipsum
          </h5>
        </div>
      </div>
    </div>
  )
}

export default PostCard
