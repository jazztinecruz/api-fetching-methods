import Button from '../components/elements/button'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <div className="grid justify-center items-center">
        <div className="flex flex-col gap-6 text-center items-center">
          <h1 className="text-2xl lg:text-3xl font-black tracking-wider">
            Data Fetching Overview
          </h1>
          <p className="text-sm text-gray-500 trackig-wide leading-relaxed">
            {`Data fetching in Next.js allows you to render your content in
            different ways, depending on your application's use case. These
            include pre-rendering with Server-side Rendering or Static
            Generation, and updating or creating content at runtime with
            Incremental Static Regeneration`}
          </p>

          <div className="mt-4">
            <Button
              name="Get Started with Client Side Rendering"
              link="/client-side-rendering"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
