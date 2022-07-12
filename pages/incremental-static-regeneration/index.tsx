import { GetStaticProps } from 'next'
import AddPost from '../../components/elements/add-post'
import Layout from '../../components/layout'
import PostCard from '../../components/section/post-card'
import Post from '../../helper/types/posts'

interface Props {
  posts: Post[]
}

const IncrementalStaticReGeneration = ({ posts }: Props) => {
  return (
    <Layout>
      <AddPost />
      <div className="grid gap-3">
        {posts!.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export default IncrementalStaticReGeneration

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
