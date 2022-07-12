const AddPost = () => {
  return (
    <div className="grid grid-rows-[1fr,auto] gap-3">
      <div className="flex items-center gap-3 border-[1px] border-gray-200 rounded-md py-3 px-3">
        <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
        <input
          type="text"
          placeholder={`What's on your mind?`}
          className="w-full h-full placeholder:text-gray-500 text-sm outline-none"
        />
      </div>

      <div className='ml-auto'>
        <button className="text-white text-sm font-semibold tracking-wide bg-black py-2 px-6 rounded-md">
          Post
        </button>
      </div>
    </div>
  )
}

export default AddPost
