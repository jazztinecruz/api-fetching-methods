import NavBar from './header'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-screen grid grid-rows-[auto,1fr] gap-10">
      <header className="sticky top-0 z-50 py-4 px-6 bg-white shadow-md shadow-gray-200">
        <div>
          <NavBar />
        </div>
      </header>
      <main>
        <div className="h-full py-3 px-2 max-w-3xl mx-auto grid gap-8">{children}</div>
      </main>
    </div>
  )
}

export default Layout
