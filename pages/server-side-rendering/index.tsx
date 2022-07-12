import { GetServerSideProps } from 'next'
import AddPost from '../../components/elements/add-post'
import Layout from '../../components/layout'
import PostCard from '../../components/section/post-card'
import Post from '../../helper/types/posts'

interface Props {
  posts: Post[]
}
const ServerSideRendering = ({ posts }: Props) => {
  return (
    <Layout>
      <section className="grid gap-8">
        <AddPost />
        <div className="grid gap-3">
          {posts!.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default ServerSideRendering

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return {
    props: {
      posts,
    },
  }
}
