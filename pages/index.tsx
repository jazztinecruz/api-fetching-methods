import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import PostCard from '../components/section/post-card'
import SkeletonPostCard from '../components/section/skeletons/post-card'
import Post from '../helper/types/posts'

const Home = () => {
  const [posts, setPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPosts(data)
    }
    console.log(posts)
    setTimeout(fetchPost, 1000)
  }, [])

  if (!posts) {
    return (
      <Layout>
        <div className="grid gap-3">
          {Array.from({ length: 20 }, (_, index) => (
            <SkeletonPostCard key={index} />
          ))}
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="grid gap-3">
        {posts!.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export default Home
