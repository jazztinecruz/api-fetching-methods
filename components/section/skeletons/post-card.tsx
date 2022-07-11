const SkeletonPostCard = () => {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-4 px-5 py-4 border-[1px] border-gray-200 rounded-md hover:bg-slate-50 animate-pulse transition-all duration-300 cursor-pointer">
      {/* image */}
      <div className="bg-gray-200 w-10 h-10 rounded-full"></div>

      {/* post details */}
      <div className="grid grid-rows-[1fr,auto] gap-4">
        <div className="flex flex-col gap-2">
          <div className="w-full lg:w-96 h-2 bg-gray-200 rounded-full"></div>
          <p className="w-full h-2 bg-gray-200 rounded-full lg:w-[700px]"></p>
        </div>

        {/* reacts and poster */}
        <div className="grid grid-cols-[1fr,auto] items-center gap-1">
          <div className="w-32 lg:w-40 h-2 bg-gray-200 rounded-full"></div>
          <div className="w-20 lg:w-28 h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonPostCard
